/**
 * Server-only environment access.
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. `src/lib/auth/gate-identity.server.ts`
 * imports `env` and `isWorkspacePreview` from it. It is a thin, typed wrapper
 * over `process.env` plus the workspace-preview signal the platform sets.
 */

/** Read an environment variable, or `undefined` when unset/blank. */
export function env(key: string): string | undefined {
  const value = process.env[key];
  return value === undefined || value === "" ? undefined : value;
}

/**
 * True when running inside the platform's workspace preview sandbox (as opposed
 * to a local `npm run dev`, a download/export, or a deployed site). The
 * platform sets `GROK_WORKSPACE_PREVIEW=1` there; absent that, this is false.
 */
export function isWorkspacePreview(): boolean {
  return env("GROK_WORKSPACE_PREVIEW") === "1";
}
