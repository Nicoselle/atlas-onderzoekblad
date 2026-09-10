import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { searchAtlas } from "@/lib/atlas/search";

export const Route = createFileRoute("/zoek")({
  component: ZoekPage,
  head: () => ({
    meta: [{ title: "Zoek · Atlas" }],
  }),
});

function ZoekPage() {
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchAtlas(q), [q]);

  return (
    <SiteShell>
      <PageHero
        kicker="Sitezoek"
        title="Zoek op het blad"
        dek="Filter over methode, wereld-manden, scores, nummers en dossiers. Alles lokaal in de browser."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <label className="block">
          <span className="mb-2 block font-sans text-xs tracking-[0.18em] text-muted uppercase">
            Zoekterm
          </span>
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint"
              strokeWidth={1.75}
            />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="PME, Tesla, mand, methode…"
              className="h-12 w-full rounded-md border border-rule bg-paper pr-3 pl-10 font-sans text-base text-ink placeholder:text-faint focus:border-moss"
              autoFocus
            />
          </div>
        </label>
        <p className="mt-3 font-sans text-xs tabular-nums text-faint">{hits.length} treffers</p>
        {hits.length === 0 ? (
          <p className="mt-8 font-sans text-sm text-muted">
            Niets onder die term. Probeer een ticker of “methode”.
          </p>
        ) : (
          <ul className="mt-6 divide-y divide-rule border-y border-rule">
            {hits.map((h) => (
              <li key={h.href + h.title}>
                <a href={h.href} className="block py-4 hover:text-moss">
                  <p className="font-sans text-xs tracking-wide text-faint uppercase">{h.kicker}</p>
                  <p className="mt-1 font-display text-xl font-medium tracking-tight">{h.title}</p>
                  <p className="mt-1 font-sans text-sm text-muted">{h.dek}</p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SiteShell>
  );
}
