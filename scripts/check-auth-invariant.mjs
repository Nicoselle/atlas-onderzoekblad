/**
 * Guard the auth invariant: the sign-in state a running dev server resolved
 * (`VITE_AUTH_ENABLED` via `/__app-env`) must match the state the next build
 * will bake in. A divergence means "works in preview, breaks when deployed"
 * (or vice-versa), so it is surfaced as a warning; an unobservable dev server
 * is reported (non-zero exit), never silently treated as agreement.
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. Its exact behavior is pinned by
 * the committed test `scripts/check-auth-invariant.test.mjs`.
 */

import process from "node:process";
import { realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { projectRoot, readShippedAppEnv } from "./with-app-env.mjs";

const APP_ENV_ROUTE = "/__app-env";
const DEFAULT_DEV_URL = "http://127.0.0.1:8080";

/** Sign-in is on unless `VITE_AUTH_ENABLED` is exactly `"false"`. */
export function authEnabledFromEnvValue(value) {
  return value !== "false";
}

/**
 * The sign-in state the next build will bake in: the shipped app-env
 * (`.grok/app-env.json`, absent on a fresh checkout) overlaid by `env`, with a
 * build-time default of "off" when neither sets the flag.
 */
export function buildAuthEnabled(root = projectRoot(), env = {}) {
  const shipped = readShippedAppEnv(root);
  const value = env.VITE_AUTH_ENABLED ?? shipped.VITE_AUTH_ENABLED ?? "false";
  return authEnabledFromEnvValue(value);
}

/**
 * Read the sign-in state a live dev server resolved, from `/__app-env`.
 * Returns `null` when the server is unreachable or does not expose the route
 * (so it is never mistaken for agreement).
 */
export async function probeDevAuthEnabled(baseUrl, fetchImpl = fetch) {
  try {
    const res = await fetchImpl(`${baseUrl}${APP_ENV_ROUTE}`);
    if (!res || !res.ok) return null;
    const text = await res.text();
    let env;
    try {
      env = JSON.parse(text);
    } catch {
      return null;
    }
    if (!env || typeof env !== "object") return null;
    return authEnabledFromEnvValue(env.VITE_AUTH_ENABLED);
  } catch {
    return null;
  }
}

/**
 * Compare the dev and build sign-in states.
 * @returns {{ status: "ok" | "diverged" | "indeterminate", message: string }}
 */
export function compareAuthInvariant({ devAuthEnabled, buildAuthEnabled }) {
  if (devAuthEnabled === null || devAuthEnabled === undefined) {
    return {
      status: "indeterminate",
      message:
        "could not read the dev server's resolved VITE_AUTH_ENABLED, so the auth invariant is indeterminate",
    };
  }
  if (devAuthEnabled === buildAuthEnabled) {
    return {
      status: "ok",
      message: "the dev server and the next build agree on sign-in state",
    };
  }
  const message = devAuthEnabled
    ? "the dev server has sign-in on but the next build has it off"
    : "the dev server has sign-in off but the next build has it on";
  return { status: "diverged", message };
}

/** The warning list the browser-smoke verdict shows — only a real divergence. */
export function authInvariantWarnings(result) {
  return result.status === "diverged" ? [result.message] : [];
}

function parseDevUrl(argv) {
  const i = argv.indexOf("--dev-url");
  if (i !== -1 && argv[i + 1]) return argv[i + 1];
  return DEFAULT_DEV_URL;
}

async function main(argv = process.argv.slice(2)) {
  const devUrl = parseDevUrl(argv);
  const devAuthEnabled = await probeDevAuthEnabled(devUrl);
  if (devAuthEnabled === null) {
    process.stderr.write(
      `check-auth-invariant: could not read the dev server's resolved VITE_AUTH_ENABLED at ${devUrl}${APP_ENV_ROUTE}\n`,
    );
    process.exit(2);
  }

  const result = compareAuthInvariant({
    devAuthEnabled,
    buildAuthEnabled: buildAuthEnabled(projectRoot(), process.env),
  });

  if (result.status === "diverged") {
    process.stderr.write(`check-auth-invariant: WARNING — ${result.message}\n`);
  } else {
    process.stdout.write(`check-auth-invariant: ${result.message}\n`);
  }
  process.exit(0);
}

function isMain() {
  try {
    return (
      Boolean(process.argv[1]) &&
      realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))
    );
  } catch {
    return false;
  }
}

if (isMain()) {
  await main();
}
