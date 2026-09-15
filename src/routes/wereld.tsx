import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { companies, getCompany } from "@/lib/atlas/companies";
import { deskRowsForSlug, previewTickers } from "@/lib/atlas/mand-rows";
import { baskets, continents, INCOMPLETE_TOTAL, SCORED_TOTAL } from "@/lib/atlas/world";

export const Route = createFileRoute("/wereld")({
  component: WereldPage,
  head: () => ({
    meta: [{ title: "Wereld-atlas · Atlas" }],
  }),
});

function WereldPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Geografie · leeskaart"
        title="Waar Atlas de manden legt"
        dek={
          <>
            Centraal: continenten en dwarsdoorsneden. Telling = unieke namen op 10 september 2026.{" "}
            <StatusBadge status="VOORLOPIG" className="ml-1 align-middle" />
          </>
        }
        aside={
          <p className="font-sans text-sm text-muted">
            <span className="block font-display text-4xl font-medium tabular-nums text-ink">{SCORED_TOTAL}</span>
            gescoord · {INCOMPLETE_TOTAL} onvolledig
          </p>
        }
      />

      <figure className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <img
          src="/art/world.jpg"
          alt="Antieke wereldkaart in kopergravure"
          className="w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          width={1792}
          height={1008}
        />
      </figure>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-medium tracking-tight">Continenten</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {continents.map((c) => {
            const deskPreview = previewTickers(c.id);
            const listed =
              deskPreview.length > 0
                ? deskPreview
                : companies.filter((co) => co.continent === c.name).map((co) => co.ticker);
            return (
              <article
                id={c.id}
                key={c.id}
                className="scroll-mt-24 rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]"
              >
                <p className="font-sans text-xs tracking-[0.18em] text-faint uppercase">
                  {c.names} namen
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">
                  <Link
                    to="/wereld/$slug"
                    params={{ slug: c.id }}
                    className="hover:text-moss"
                  >
                    {c.name}
                  </Link>
                </h3>
                <p className="mt-2 font-sans text-sm text-ink-soft">
                  {c.scored} gescoord · {c.incomplete} onvolledig. {c.note}
                </p>
                {listed.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {listed.map((ticker) => (
                      <li key={ticker}>
                        <TickerChip ticker={ticker} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-rule bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-tight">Dwars — manden</h2>
          <p className="mt-2 max-w-2xl font-sans text-sm text-muted">
            Diepe manden staan hier. Open één mand; lees S als onderzoeksrang.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {baskets.map((b) => {
              const chips = previewTickers(b.id);
              const filled = deskRowsForSlug(b.id).length > 0;
              return (
                <article
                  id={b.id}
                  key={b.id}
                  className="scroll-mt-24 rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      <Link
                        to="/wereld/$slug"
                        params={{ slug: b.id }}
                        className="hover:text-moss"
                      >
                        {b.name}
                      </Link>
                    </h3>
                    <span className="font-sans text-xs tabular-nums text-faint">
                      {b.scored}/{b.names}
                    </span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{b.note}</p>
                  {chips.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {chips.map((t) => (
                        <li key={t}>
                          <TickerChip ticker={t} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-5">
                    <Link
                      to="/wereld/$slug"
                      params={{ slug: b.id }}
                      className="inline-flex min-h-11 items-center font-sans text-sm text-ink underline decoration-rule underline-offset-4 hover:text-moss"
                    >
                      {filled ? "Open de mandtabel" : "Open één mand"}
                    </Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function TickerChip({ ticker }: { ticker: string }) {
  const dossier = getCompany(ticker);
  if (dossier) {
    return (
      <Link
        to="/dossiers/$ticker"
        params={{ ticker: dossier.ticker.toLowerCase() }}
        className="inline-flex min-h-8 items-center rounded-sm border border-rule px-2 font-sans text-xs tracking-wide text-ink hover:border-ink"
      >
        {ticker}
      </Link>
    );
  }
  return (
    <span className="inline-flex min-h-8 items-center rounded-sm border border-rule px-2 font-sans text-xs tracking-wide text-ink-soft">
      {ticker}
    </span>
  );
}
