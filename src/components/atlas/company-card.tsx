import { Link } from "@tanstack/react-router";
import type { Company } from "@/lib/atlas/companies";
import { formatScore } from "@/lib/atlas/format";
import { ScoreMark } from "./score-mark";
import { StatusBadge } from "./status-badge";

export function CompanyCard({ company, featured = false }: { company: Company; featured?: boolean }) {
  return (
    <Link
      to="/dossiers/$ticker"
      params={{ ticker: company.ticker.toLowerCase() }}
      className="group flex flex-col rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[0_0_0_1px_rgba(26,23,20,0.1),0_8px_24px_-12px_rgba(26,23,20,0.18)] active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-xs tracking-[0.18em] text-faint uppercase">
            {company.ticker} · {company.exchange}
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink group-hover:text-moss">
            {company.name}
          </h3>
          <p className="mt-1 font-sans text-sm text-muted">{company.sector}</p>
        </div>
        <ScoreMark value={company.s} size={featured ? "md" : "sm"} />
      </div>
      <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-ink-soft">{company.heldLayer}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <StatusBadge status={company.status} />
        <span className="font-sans text-xs tabular-nums text-faint">S {formatScore(company.s)}</span>
      </div>
    </Link>
  );
}
