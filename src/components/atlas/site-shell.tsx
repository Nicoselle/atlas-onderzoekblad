import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader />
      <p
        role="status"
        className="border-b border-rule bg-paper-deep px-4 py-2 text-center font-sans text-xs leading-relaxed text-muted"
      >
        Desk en dit blad lopen parallel. Geen DNS-cutover.
      </p>
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
