import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PillarBars } from "@/components/atlas/pillar-bars";
import { ScoreMark } from "@/components/atlas/score-mark";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { getCompany, neighbors } from "@/lib/atlas/companies";
import { formatScore } from "@/lib/atlas/format";

export const Route = createFileRoute("/dossiers/$ticker")({
  loader: ({ params }) => {
    const company = getCompany(params.ticker);
    if (!company) throw notFound();
    return { company, ...neighbors(company.ticker) };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.company.name ?? "Dossier"} · Atlas` }],
  }),
  component: DossierPage,
});

function DossierPage() {
  const { company, prev, next } = Route.useLoaderData();

  return (
    <SiteShell>
      <article>
        <header className="border-b border-rule">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">
                Dossier · {company.exchange} · {company.continent}
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                {company.name}
              </h1>
              <p className="mt-2 font-sans text-sm tracking-wide text-muted">
                {company.ticker} · {company.sector}
              </p>
              <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-ink-soft">
                Gehouden laag: {company.heldLayer}. {company.filing}.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <StatusBadge status={company.status} />
                <span className="font-sans text-xs text-faint">{company.run}</span>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <ScoreMark value={company.s} size="lg" />
              <p className="mt-2 font-sans text-xs tracking-wide text-muted">
                S {formatScore(company.s)} · onderzoeksrang
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight">Snapshot (FY)</h2>
            <p className="mt-2 font-sans text-sm text-muted">
              Kerncijfers uit de jaarrekening en de desk-run. Geen verzonnen cijfers.
            </p>
            <dl className="mt-6 divide-y divide-rule border-y border-rule">
              {company.snapshot.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-sans text-sm text-muted">{row.label}</dt>
                  <dd className="font-sans text-sm font-medium tabular-nums text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-12 font-display text-2xl font-medium tracking-tight">Business</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">{company.business}</p>

            <h2 className="mt-12 font-display text-2xl font-medium tracking-tight">AURA/S-lezing</h2>
            <div className="mt-6 space-y-6">
              {company.reading.map((r) => (
                <section key={r.title}>
                  <h3 className="font-display text-xl font-medium tracking-tight">{r.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{r.body}</p>
                </section>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-medium tracking-tight">Risico's (filing)</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-sans text-sm text-ink-soft">
              {company.risks.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]">
              <p className="font-sans text-xs tracking-[0.18em] text-faint uppercase">Pijlers</p>
              <p className="mt-1 mb-5 font-sans text-sm text-muted">
                Gewogen som van vijf pijlers (0–100), status voorlopig.
              </p>
              <PillarBars pillars={company.pillars} />
            </div>
            {company.specialSlug ? (
              <p className="mt-6 font-sans text-sm">
                <Link
                  to="/nummers/$slug"
                  params={{ slug: company.specialSlug }}
                  className="underline decoration-rule underline-offset-4"
                >
                  Lees de speciale als verhaal →
                </Link>
              </p>
            ) : null}
            <p className="mt-6 font-sans text-xs leading-relaxed text-faint">{company.source}</p>
          </aside>
        </div>

        <nav className="border-t border-rule">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
            {prev ? (
              <Link
                to="/dossiers/$ticker"
                params={{ ticker: prev.ticker.toLowerCase() }}
                className="inline-flex min-h-11 items-center gap-2 font-sans text-sm"
              >
                <ArrowLeft className="size-4" strokeWidth={1.75} />
                {prev.ticker}
              </Link>
            ) : (
              <span />
            )}
            <Link to="/scores" className="font-sans text-xs tracking-wide text-muted uppercase">
              Rang
            </Link>
            {next ? (
              <Link
                to="/dossiers/$ticker"
                params={{ ticker: next.ticker.toLowerCase() }}
                className="inline-flex min-h-11 items-center gap-2 font-sans text-sm"
              >
                {next.ticker}
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </article>
    </SiteShell>
  );
}
