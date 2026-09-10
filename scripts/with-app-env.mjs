/**
 * Run a command with the app's resolved environment applied.
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. `package.json` runs dev/build/
 * preview through it (`node scripts/with-app-env.mjs <cmd> ...`), and
 * `scripts/check-auth-invariant.*` import `projectRoot` from it.
 *
 * It loads the app-env layer that the platform normally injects
 * (`.grok/app-env.json`, a flat `{ KEY: "value" }` map), applies a safe default
 * for the shipped template (`VITE_AUTH_ENABLED=false`, i.e. the built-in dev
 * user, no OAuth broker/secrets required), and then execs the given command
 * with that environment. Values already present in `process.env` win, so
 * secrets and CLI overrides are never clobbered.
 */

import { spawn } from "node:child_process";
import { readFileSync, realpathSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPTS_DIR = dirname(fileURLToPath(import.meta.url));

/** Absolute path to the repository root (the parent of `scripts/`). */
export function projectRoot() {
  return resolve(SCRIPTS_DIR, "..");
}

export const APP_ENV_REL_PATH = ".grok/app-env.json";

/**
 * The app-env map the platform ships for this template. Read from
 * `.grok/app-env.json` when present (it is git-ignored, so a fresh checkout
 * usually will not have it), otherwise `{}`.
 */
export function readShippedAppEnv(root = projectRoot()) {
  try {
    const raw = readFileSync(join(root, APP_ENV_REL_PATH), "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const out = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (value == null) continue;
      out[key] = String(value);
    }
    return out;
  } catch {
    return {};
  }
}

/** Defaults for keys the shipped template relies on but may not set. */
const APP_ENV_DEFAULTS = {
  VITE_AUTH_ENABLED: "false",
};

/**
 * The effective app-env: defaults, then the shipped app-env file, then the
 * current process env (which wins). Returns a plain map suitable for `env`.
 */
export function resolveAppEnv(root = projectRoot(), baseEnv = process.env) {
  return {
    ...APP_ENV_DEFAULTS,
    ...readShippedAppEnv(root),
    ...Object.fromEntries(
      Object.entries(baseEnv).filter(([, v]) => v !== undefined),
    ),
  };
}

function main() {
  const [, , command, ...args] = process.argv;
  if (!command) {
    console.error("usage: node scripts/with-app-env.mjs <command> [args...]");
    process.exit(2);
  }

  const env = resolveAppEnv();
  const child = spawn(command, args, {
    stdio: "inherit",
    env,
    // `shell: true` lets `vite`/`tsc` resolve from node_modules/.bin the same
    // way npm scripts do, and works cross-platform.
    shell: true,
  });

  const forward = (signal) => {
    if (!child.killed) child.kill(signal);
  };
  process.on("SIGINT", () => forward("SIGINT"));
  process.on("SIGTERM", () => forward("SIGTERM"));

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });
  child.on("error", (err) => {
    console.error(`[with-app-env] failed to start "${command}":`, err.message);
    process.exit(1);
  });
}

// Run only when invoked directly (not when imported for `projectRoot`, etc.).
// Resolve symlinks on both sides so an invocation through a symlinked path
// still runs `main` rather than silently no-opping.
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
  main();
}
