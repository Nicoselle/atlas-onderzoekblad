import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Company } from "@/lib/atlas/companies";
import { formatScore } from "@/lib/atlas/format";
import { cn } from "@/lib/utils";
import { AURA_PUBLIC_KEYS, PillarBars } from "./pillar-bars";
import { StatusBadge } from "./status-badge";

type SortKey = "ticker" | "name" | "s";

export function ScoreRoster({
  companies,
  empty = "Geen dossier op dit blad voor deze selectie. Geen verzonnen filings.",
}: {
  companies: Company[];
  empty?: string;
}) {
  const [sort, setSort] = useState<SortKey>("s");
  const [dir, setDir] = useState<"desc" | "asc">("desc");
  const [openTicker, setOpenTicker] = useState<string | null>(null);

  const rows = useMemo(() => {
    const mul = dir === "asc" ? 1 : -1;
    return [...companies].sort((a, b) => {
      if (sort === "name") return mul * a.name.localeCompare(b.name, "nl");
      if (sort === "ticker") return mul * a.ticker.localeCompare(b.ticker, "en");
      return mul * (a.s - b.s);
    });
  }, [companies, sort, dir]);

  const selected = rows.find((c) => c.ticker === openTicker) ?? rows[0];

  function toggle(key: SortKey) {
    if (sort === key) setDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSort(key);
      setDir(key === "name" || key === "ticker" ? "asc" : "desc");
    }
  }

  const th = (key: SortKey, label: string) => (
    <th className="px-3 py-3 font-medium">
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

  if (rows.length === 0) {
    return <p className="font-sans text-sm text-muted">{empty}</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-lg bg-paper shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[44rem] border-collapse font-sans text-sm">
          <thead className="border-b border-rule text-left text-xs tracking-wide text-muted">
            <tr>
              {th("ticker", "Ticker")}
              {th("name", "Naam")}
              <th className="px-3 py-3 font-medium">Type</th>
              {th("s", "S")}
              <th className="px-3 py-3 font-medium">Status</th>
              <th className="px-3 py-3 font-medium">Lezing</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const active = selected?.ticker === c.ticker;
              return (
                <tr
                  key={c.ticker}
                  className={cn(
                    "border-b border-rule last:border-0 hover:bg-paper-deep/60",
                    active && "bg-paper-deep/80",
                  )}
                >
                  <td className="px-3 py-3">
                    <button
                      type="button"
                      onClick={() => setOpenTicker(c.ticker)}
                      className="px-0 font-sans text-xs tracking-wide text-faint hover:text-ink"
                    >
                      {c.ticker}
                    </button>
                  </td>
                  <td className="px-3 py-3">
                    <Link
                      to="/dossiers/$ticker"
                      params={{ ticker: c.ticker.toLowerCase() }}
                      className="font-medium text-ink hover:text-moss"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-3 py-3 text-ink-soft">{c.sector}</td>
                  <td className="px-3 py-3 font-medium tabular-nums text-moss">{formatScore(c.s)}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="max-w-72 px-3 py-3 text-muted">{c.heldLayer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selected ? (
        <section className="mt-10" aria-labelledby="score-detail-heading">
          <h2 id="score-detail-heading" className="font-display text-2xl font-medium tracking-tight">
            Pijlers · {selected.ticker}
          </h2>
          <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
            A · U · R · A-flex horen in het dossier, niet in de primaire rang. S blijft de
            onderzoeksrang. Geen koersdoel.
          </p>
          <div className="mt-6 max-w-md rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]">
            <PillarBars pillars={selected.pillars} keys={AURA_PUBLIC_KEYS} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
