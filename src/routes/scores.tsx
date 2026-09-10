import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { rankedCompanies } from "@/lib/atlas/companies";
import { formatScore } from "@/lib/atlas/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/scores")({
  component: ScoresPage,
  head: () => ({
    meta: [{ title: "AURA/S-scores · Atlas" }],
  }),
});

type SortKey = "s" | "name" | "automation" | "utility" | "resilience" | "flex";

function ScoresPage() {
  const [sort, setSort] = useState<SortKey>("s");
  const [dir, setDir] = useState<"desc" | "asc">("desc");

  const rows = useMemo(() => {
    const list = rankedCompanies();
    const mul = dir === "asc" ? 1 : -1;
    return [...list].sort((a, b) => {
      if (sort === "name") return mul * a.name.localeCompare(b.name, "nl");
      if (sort === "s") return mul * (a.s - b.s);
      return mul * (a.pillars[sort] - b.pillars[sort]);
    });
  }, [sort, dir]);

  function toggle(key: SortKey) {
    if (sort === key) setDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSort(key);
      setDir(key === "name" ? "asc" : "desc");
    }
  }

  const th = (key: SortKey, label: string, extra = "") => (
    <th className={cn("px-3 py-3 font-medium", extra)}>
      <button
        type="button"
        onClick={() => toggle(key)}
        className="inline-flex min-h-11 items-center gap-1 text-left"
      >
        {label}
        {sort === key ? <span className="text-moss">{dir === "desc" ? "↓" : "↑"}</span> : null}
      </button>
    </th>
  );

  return (
    <SiteShell>
      <PageHero
        kicker="Frame · S 0–100"
        title="AURA/S-scores"
        dek="Onderzoeksrang — geen koersdoelen. Filing-first. Alleen wat in de cijfers staat, telt als feit. Geen verzonnen S."
        aside={<StatusBadge status="VOORLOPIG" />}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="overflow-x-auto rounded-lg bg-paper shadow-[var(--shadow-border)]">
          <table className="w-full min-w-[40rem] border-collapse font-sans text-sm">
            <thead className="border-b border-rule text-left text-xs tracking-wide text-muted">
              <tr>
                <th className="px-3 py-3">#</th>
                {th("name", "Naam")}
                {th("s", "S")}
                {th("automation", "A")}
                {th("utility", "U")}
                {th("resilience", "R")}
                {th("flex", "A-flex")}
                <th className="px-3 py-3 font-medium">Laag</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c, i) => (
                <tr key={c.ticker} className="border-b border-rule last:border-0 hover:bg-paper-deep/60">
                  <td className="px-3 py-3 tabular-nums text-faint">{i + 1}</td>
                  <td className="px-3 py-3">
                    <Link
                      to="/dossiers/$ticker"
                      params={{ ticker: c.ticker.toLowerCase() }}
                      className="font-medium text-ink hover:text-moss"
                    >
                      {c.name}
                      <span className="ml-2 text-xs tracking-wide text-faint">{c.ticker}</span>
                    </Link>
                  </td>
                  <td className="px-3 py-3 font-medium tabular-nums text-moss">{formatScore(c.s)}</td>
                  <td className="px-3 py-3 tabular-nums text-ink-soft">{formatScore(c.pillars.automation)}</td>
                  <td className="px-3 py-3 tabular-nums text-ink-soft">{formatScore(c.pillars.utility)}</td>
                  <td className="px-3 py-3 tabular-nums text-ink-soft">{formatScore(c.pillars.resilience)}</td>
                  <td className="px-3 py-3 tabular-nums text-ink-soft">{formatScore(c.pillars.flex)}</td>
                  <td className="max-w-48 truncate px-3 py-3 text-muted">{c.heldLayer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-sans text-xs text-faint">
          Tien dossiers op dit blad. Wereldtotaal 195 gescoord · 27 onvolledig. Geen tipstroom.
        </p>
      </div>
    </SiteShell>
  );
}
