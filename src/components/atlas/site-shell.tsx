import type { ReactNode } from "react";
import { EditionBridge } from "./edition-bridge";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <div
        aria-hidden="true"
        className="h-[3px] bg-[linear-gradient(90deg,#6b3a22_0%,#c4a574_48%,#3d5c47_100%)]"
      />
      <SiteHeader />
<<<<<<< HEAD
      <p
        role="status"
        className="border-b border-rule bg-paper-deep px-4 py-2 text-center font-sans text-xs leading-relaxed text-muted"
      >
        Desk en dit blad lopen parallel. Geen DNS-cutover.
      </p>
=======
      <EditionBridge />
>>>>>>> origin/main
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
