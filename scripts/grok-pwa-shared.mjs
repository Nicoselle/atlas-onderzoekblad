/**
 * Shared PWA/OG chrome helpers for the Grok "app-builder" template.
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. `scripts/grok-pwa-plugin.mjs`
 * (dev/preview) imports from it, and `scripts/grok-pwa-shared.d.mts` declares
 * its full type surface. The implementations below satisfy that contract with
 * safe, dependency-free behavior:
 *   - a valid web manifest and a small set of PWA/OG head tags;
 *   - idempotent, whole-document head injection;
 *   - a PASS-THROUGH streaming injector, so streaming SSR bytes are never
 *     rewritten across chunk boundaries (the app already renders its own head
 *     via TanStack Start's <HeadContent />).
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

export const DEFAULT_APP_NAME = "App";
export const OG_SERVICE_URL_DEFAULT = "https://og.grok.com";
export const OG_SITE_REL_PATH = "src/lib/og/site.json";
export const GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/__grok/extensions.js";

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function hostString(hostHeader) {
  if (Array.isArray(hostHeader)) return hostHeader[0] ?? "";
  return typeof hostHeader === "string" ? hostHeader : "";
}

export function resolvePublicHost(hostHeader) {
  const host = hostString(hostHeader).split(",")[0]?.trim() ?? "";
  return host.toLowerCase();
}

export function publicAppHost(hostHeader) {
  return resolvePublicHost(hostHeader);
}

export function appNameFromHost(hostHeader) {
  const host = resolvePublicHost(hostHeader);
  if (!host) return DEFAULT_APP_NAME;
  const label = host.split(":")[0]?.split(".")[0] ?? "";
  if (!label || label === "localhost" || /^\d+$/.test(label)) return DEFAULT_APP_NAME;
  return label
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function queryParams(url) {
  const raw = typeof url === "string" ? url : "";
  const q = raw.indexOf("?");
  if (q === -1) return new URLSearchParams();
  const hash = raw.indexOf("#", q);
  return new URLSearchParams(raw.slice(q + 1, hash === -1 ? undefined : hash));
}

export function isInstallQuery(url) {
  return queryParams(url).get("install") === "1";
}

export function stripInstallParams(url) {
  const raw = typeof url === "string" ? url : "";
  const q = raw.indexOf("?");
  if (q === -1) return raw;
  const hash = raw.indexOf("#", q);
  const tail = hash === -1 ? "" : raw.slice(hash);
  const params = queryParams(raw);
  params.delete("install");
  const rest = params.toString();
  return `${raw.slice(0, q)}${rest ? `?${rest}` : ""}${tail}`;
}

export function isDocumentPath(pathname) {
  if (typeof pathname !== "string" || !pathname.startsWith("/")) return false;
  if (
    pathname.startsWith("/@") ||
    pathname.startsWith("/__") ||
    pathname.startsWith("/node_modules") ||
    pathname.startsWith("/src/") ||
    pathname.startsWith("/assets/")
  ) {
    return false;
  }
  const last = pathname.split("/").pop() ?? "";
  return !last.includes(".");
}

export function acceptsHtml(accept) {
  return typeof accept === "string" && accept.includes("text/html");
}

// ── OG identity ──────────────────────────────────────────────────────────────

export function readOgSite(cwd = process.cwd()) {
  try {
    const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function snapshotOgIdentity(cwd = process.cwd()) {
  return { site: readOgSite(cwd) };
}

export function siteHasCustomCard(site = {}) {
  return site?.card === "custom" || Boolean(site?.image);
}

export function customOgAssetPath() {
  return "/og.jpg";
}

export function ogCardPublicPath(cwd = process.cwd()) {
  const site = readOgSite(cwd);
  return resolveOgCardAsset(site, cwd);
}

export function ogServiceUrl() {
  return process.env.GROK_OG_SERVICE_URL || OG_SERVICE_URL_DEFAULT;
}

export function resolveOgCardAsset(site = {}, _cwd = process.cwd()) {
  if (typeof site?.image === "string" && site.image) return site.image;
  if (siteHasCustomCard(site)) return customOgAssetPath();
  return "";
}

export function titleFromDocument(html) {
  const match = typeof html === "string" ? html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) : null;
  return match ? match[1].trim() : "";
}

export function resolveOgTitle(site = {}, appName, host, documentTitle) {
  return (
    (typeof site?.title === "string" && site.title) ||
    (documentTitle && documentTitle.trim()) ||
    (appName && appName.trim()) ||
    appNameFromHost(host) ||
    DEFAULT_APP_NAME
  );
}

// ── Project / creator identity ───────────────────────────────────────────────

function readProjectFile(relPath) {
  try {
    return readFileSync(join(process.cwd(), relPath), "utf8").trim();
  } catch {
    return "";
  }
}

export function readGrokProjectId() {
  return process.env.GROK_PROJECT_ID || readProjectFile(".project_id");
}

export function readXCreator() {
  return process.env.GROK_X_CREATOR || "";
}

export function readXCreatorId() {
  return process.env.GROK_X_CREATOR_ID || "";
}

export function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
  const tags = [];
  if (creator) tags.push(`<meta name="twitter:creator" content="${escapeHtml(creator)}">`);
  if (creatorId) {
    tags.push(`<meta name="twitter:creator:id" content="${escapeHtml(creatorId)}">`);
  }
  return tags;
}

export function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
  if (!projectId) return [];
  return [
    `<script async src="${escapeHtml(GROK_EXTENSIONS_SCRIPT_SRC)}" data-project-id="${escapeHtml(projectId)}"></script>`,
  ];
}

// ── Web manifest ─────────────────────────────────────────────────────────────

export function renderWebManifest(hostHeader) {
  const name = appNameFromHost(hostHeader);
  const manifest = {
    name,
    short_name: name,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f2eee4",
    theme_color: "#f2eee4",
    icons: [
      { src: "/__grok/icon-180.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
  return JSON.stringify(manifest, null, 2);
}

// ── Head tags ────────────────────────────────────────────────────────────────

/**
 * PWA/OG head tags as `[dedupeKey, tagHtml]` pairs. `dedupeKey` is a substring
 * that, if already present in a document's head, means the tag should not be
 * injected again.
 */
export function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
  return [
    ['rel="manifest"', '<link rel="manifest" href="/__grok/manifest.webmanifest">'],
    [
      'rel="apple-touch-icon"',
      '<link rel="apple-touch-icon" href="/__grok/icon-180.png">',
    ],
    ['name="apple-mobile-web-app-capable"', '<meta name="apple-mobile-web-app-capable" content="yes">'],
    [
      'name="apple-mobile-web-app-title"',
      `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`,
    ],
  ];
}

export function grokOgHeadTags(ctx = {}) {
  const { host, appName, site = {}, documentTitle, cwd } = ctx;
  const resolvedSite = site && Object.keys(site).length ? site : readOgSite(cwd);
  const title = resolveOgTitle(resolvedSite, appName, host, documentTitle);
  const description = typeof resolvedSite?.description === "string" ? resolvedSite.description : "";
  const tags = [
    ['property="og:title"', `<meta property="og:title" content="${escapeHtml(title)}">`],
    ['name="twitter:card"', '<meta name="twitter:card" content="summary_large_image">'],
  ];
  if (description) {
    tags.push([
      'property="og:description"',
      `<meta property="og:description" content="${escapeHtml(description)}">`,
    ]);
  }
  return tags.map(([, tag]) => tag);
}

export function stripShareMetaTags(html) {
  return typeof html === "string" ? html : "";
}

export function normalizeHeadContext(ctx = {}) {
  const host = typeof ctx.host === "string" ? ctx.host : "";
  const cwd = typeof ctx.cwd === "string" ? ctx.cwd : process.cwd();
  return {
    appName: ctx.appName || appNameFromHost(host),
    projectId: ctx.projectId || readGrokProjectId(),
    creator: ctx.creator || readXCreator(),
    creatorId: ctx.creatorId || readXCreatorId(),
    host,
    cwd,
    site: ctx.site || readOgSite(cwd),
  };
}

/**
 * Insert any PWA/OG tags that are not already present, immediately before the
 * closing `</head>`. Whole-document only (used by `transformIndexHtml`); the
 * streaming path uses the pass-through injector below.
 */
export function injectGrokPwaHead(html, ctx = {}) {
  if (typeof html !== "string" || !/<\/head>/i.test(html)) return html;
  const normalized = normalizeHeadContext(ctx);
  const pairs = [
    ...grokPwaHeadTags(normalized.appName),
    ...grokOgHeadTags({
      host: normalized.host,
      appName: normalized.appName,
      site: normalized.site,
      documentTitle: titleFromDocument(html),
      cwd: normalized.cwd,
    }).map((tag) => [tag, tag]),
  ];
  const missing = pairs
    .filter(([key]) => !html.includes(key))
    .map(([, tag]) => tag);
  if (missing.length === 0) return html;
  return html.replace(/<\/head>/i, `${missing.join("")}</head>`);
}

/**
 * Streaming head injector. This reconstruction is intentionally a PASS-THROUGH:
 * it forwards every chunk unchanged so streaming SSR output is never corrupted
 * across chunk boundaries. `push` returns the chunk as a single-element array
 * of `Uint8Array`; `flush` has nothing buffered.
 */
export function createHeadInjector() {
  return {
    push(chunk) {
      if (chunk == null) return [];
      if (chunk instanceof Uint8Array) return [chunk];
      return [Buffer.from(String(chunk), "utf8")];
    },
    flush() {
      return [];
    },
  };
}

// ── Install page ─────────────────────────────────────────────────────────────

export function renderInstallPageHtml(template, context = {}) {
  const host = resolvePublicHost(context.host);
  const appName = appNameFromHost(context.host);
  const canonical = stripInstallParams(context.url ?? "/");
  return String(template)
    .replaceAll("{{APP_NAME}}", escapeHtml(appName))
    .replaceAll("{{HOST}}", escapeHtml(host))
    .replaceAll("{{CANONICAL_URL}}", escapeHtml(canonical));
}
