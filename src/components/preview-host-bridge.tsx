import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  collectRoutePathsFromTree,
  installPreviewHostBridge,
} from "@/lib/preview-host-bridge";

/**
 * Mounts the grok-web ↔ sandbox preview postMessage bridge.
 *
 * NOTE: This file is a reconstruction of a platform-injected app-shell module
 * that was not committed to this repository. `src/routes/__root.tsx` renders
 * `<PreviewHostBridge />` once, at the app root.
 *
 * All the behavior lives in `@/lib/preview-host-bridge`
 * (`installPreviewHostBridge`), which no-ops unless the page is framed by an
 * allowlisted Grok embedder — so top-level `npm run dev`, downloads/exports,
 * and deployed sites are unaffected. This component just wires the router in
 * (so host-driven navigation uses the SPA router) and disposes on unmount.
 */
export function PreviewHostBridge() {
  const router = useRouter();

  useEffect(() => {
    return installPreviewHostBridge({
      navigate: (path) => {
        void router.navigate({ to: path });
      },
      getRoutePaths: () => collectRoutePathsFromTree(router.routeTree),
    });
  }, [router]);

  return null;
}
