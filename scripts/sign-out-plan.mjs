/**
 * Sign-in/sign-out sequencing, extracted so it can be unit-tested without a
 * browser.
 *
 * NOTE: This file is a reconstruction of a platform-injected harness module
 * that was not committed to this repository. `src/lib/auth/client.ts` imports
 * `runPreSignInSignOut` and `runSignOut` from it. The behavior below matches
 * the contract documented in `client.ts`:
 *
 *   - In the live preview the local token clear is authoritative, so the
 *     server sign-out is best-effort and bounded — a request that never settles
 *     must not hang the flow.
 *   - When deployed, only the server can end the HttpOnly-cookie session, so
 *     the server sign-out is awaited fully and a failure is surfaced (so the
 *     caller does not report a sign-out that did not happen).
 */

/** How long the live preview waits on a best-effort server sign-out. */
const PREVIEW_SIGN_OUT_TIMEOUT_MS = 1500;

/**
 * @typedef {Object} PreSignInSignOutOptions
 * @property {boolean} livePreview
 * @property {boolean} hasBearer
 * @property {() => Promise<unknown>} requestSignOut
 * @property {() => void} clearToken
 */

/**
 * @typedef {Object} SignOutOptions
 * @property {boolean} livePreview
 * @property {boolean} hasBearer
 * @property {() => Promise<unknown>} requestSignOut
 * @property {() => void} clearToken
 * @property {() => void} redirect
 */

/**
 * @param {Promise<unknown> | unknown} promise
 * @param {number} ms
 * @returns {Promise<void>}
 */
function withTimeout(promise, ms) {
  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve(undefined);
    };
    const timer = setTimeout(done, ms);
    if (typeof timer === "object" && typeof timer.unref === "function") timer.unref();
    Promise.resolve(promise).then(done, done);
  });
}

/**
 * Clear any prior session before starting a new sign-in, so switching providers
 * actually switches identity.
 *
 * @param {PreSignInSignOutOptions} options
 * @returns {Promise<void>}
 */
export async function runPreSignInSignOut(options) {
  const { livePreview, hasBearer, requestSignOut, clearToken } = options;

  if (livePreview) {
    // Local clear is authoritative in the preview; bound the server call so a
    // hung request can't leave the already-open popup stranded.
    if (hasBearer) await withTimeout(requestSignOut(), PREVIEW_SIGN_OUT_TIMEOUT_MS);
    clearToken();
    return;
  }

  // Deployed: only the server can end the session, so wait for it. Swallow
  // errors — this is a best-effort pre-clear before a full-page OAuth redirect.
  try {
    await requestSignOut();
  } catch {
    /* proceed into sign-in regardless */
  }
  clearToken();
}

/**
 * Sign out of the local session and redirect.
 *
 * @param {SignOutOptions} options
 * @returns {Promise<void>}
 */
export async function runSignOut(options) {
  const { livePreview, requestSignOut, clearToken, redirect } = options;

  if (livePreview) {
    // Local clear is sufficient; server sign-out is best-effort.
    try {
      await withTimeout(requestSignOut(), PREVIEW_SIGN_OUT_TIMEOUT_MS);
    } catch {
      /* ignore — the local clear below is what matters in the preview */
    }
    clearToken();
    redirect();
    return;
  }

  // Deployed: the session is an HttpOnly cookie only the server can clear.
  // Let a failure reject so the caller can let the visitor retry instead of
  // reporting a sign-out that did not happen.
  await requestSignOut();
  clearToken();
  redirect();
}
