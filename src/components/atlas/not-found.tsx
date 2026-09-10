import { Link } from "@tanstack/react-router";
import { SiteShell } from "./site-shell";

export function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Ontbreekt</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">Deze pagina staat niet op het blad.</h1>
        <p className="mt-4 font-sans text-ink-soft">
          Geen dossier, nummer of mand onder dit adres. Terug naar de etalage.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 font-sans text-sm text-paper transition-transform duration-150 active:scale-[0.96]"
        >
          Naar het Blad
        </Link>
      </div>
    </SiteShell>
  );
}
