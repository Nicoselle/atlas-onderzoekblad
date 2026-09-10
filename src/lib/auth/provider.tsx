import type { ReactNode } from "react";

/**
 * App-wide auth context provider.
 *
 * NOTE: This file is a reconstruction of a platform-injected app-shell module
 * that was not committed to this repository. `src/routes/__root.tsx` wraps the
 * app in `<AuthProvider>`.
 *
 * The shipped template ships with `VITE_AUTH_ENABLED=false` (see
 * `src/lib/auth/client.ts`), which selects the built-in dev user and shows no
 * sign-in UI, so this reconstruction is a pass-through that simply renders its
 * children. When real auth is wired back in, this is where the Better Auth
 * session context would be provided.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
