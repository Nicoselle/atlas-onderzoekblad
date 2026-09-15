import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getCompany } from "@/lib/atlas/companies";
import { formatScore } from "@/lib/atlas/format";
import type { MandRow } from "@/lib/atlas/mand-rows";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./status-badge";

type SortKey = "ticker" | "name" | "s";

export function MandRoster({
  rows,
  empty = "Geen dossier op dit blad voor deze selectie. Geen verzonnen filings.",
}: {
  rows: MandRow[];
  empty?: string;
}) {
  const [sort, setSort] = useState<SortKey>("s");
  const [dir, setDir] = useState<"desc" | "asc">("desc");

  const sorted = useMemo(() => {
    const mul = dir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      if (sort === "name") return mul * a.name.localeCompare(b.name, "nl");
      if (sort === "ticker") return mul * a.ticker.localeCompare(b.ticker, "en");
      const as = a.s;
      const bs = b.s;
      if (as === null && bs === null) return a.ticker.localeCompare(b.ticker, "en");
      if (as === null) return 1;
      if (bs === null) return -1;
      return mul * (as - bs);
    });
  }, [rows, sort, dir]);

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

  if (sorted.length === 0) {
    return <p className="font-sans text-sm text-muted">{empty}</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-paper shadow-[var(--shadow-border)]">
      <p className="sr-only">Veeg of scroll zijwaarts voor alle kolommen.</p>
      <table className="w-full min-w-[44rem] border-collapse font-sans text-sm">
        <caption className="sr-only">Namen in deze mand met bestaande S</caption>
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
          {sorted.map((row) => {
            const dossier = getCompany(row.ticker);
            return (
              <tr key={row.ticker} className="border-b border-rule last:border-0 hover:bg-paper-deep/60">
                <td className="px-3 py-3 font-sans text-xs tracking-wide text-faint">{row.ticker}</td>
                <td className="px-3 py-3">
                  {dossier ? (
                    <Link
                      to="/dossiers/$ticker"
                      params={{ ticker: dossier.ticker.toLowerCase() }}
                      className="font-medium text-ink hover:text-moss"
                    >
                      {row.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-ink">{row.name}</span>
                  )}
                </td>
                <td className="px-3 py-3 text-ink-soft">{row.sector}</td>
                <td
                  className={cn(
                    "px-3 py-3 font-medium tabular-nums",
                    row.s === null ? "text-faint" : "text-moss",
                  )}
                >
                  {row.s === null ? "—" : formatScore(row.s)}
                </td>
                <td className="px-3 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="max-w-72 px-3 py-3 text-muted">{row.lezing}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
