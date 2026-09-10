import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/atlas/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-rule bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Naar inhoud
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group flex items-baseline gap-3 no-underline">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Atlas
          </span>
          <span className="hidden font-sans text-xs tracking-wide text-muted sm:inline">
            onderzoek · post-labour
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hoofd">
          {mainNav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-3 py-2 font-sans text-sm tracking-wide text-ink-soft transition-colors duration-150 hover:text-ink",
                  active && "text-ink underline decoration-moss decoration-1 underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        inert={!open || undefined}
        aria-hidden={!open}
        className={cn(
          "border-t border-rule md:hidden",
          "grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="overflow-hidden" aria-label="Mobiel">
          <ul className="flex flex-col px-2 py-2">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-sans text-base text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
