import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CompanyCard } from "@/components/atlas/company-card";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { etalageTickers, getCompany, mandenTickers } from "@/lib/atlas/companies";
import {
  COVER_FAQ,
  COVER_SCORE_LINE,
  COVER_TRUST,
  ISSUE_DATE,
  OTIUM_BRIDGE,
} from "@/lib/atlas/copy";
import { editions } from "@/lib/atlas/editions";
import { formatNlDate } from "@/lib/atlas/format";

export const Route = createFileRoute("/")({ component: Home });

const etalage = etalageTickers.map((t) => getCompany(t)!);
const manden = mandenTickers.map((t) => getCompany(t)!);

function Home() {
  return (
    <SiteShell>
      <section className="border-b border-rule" aria-label="Voorblad">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:py-16">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-sans text-xs tracking-[0.18em] text-muted uppercase">
              <span>Onderzoekseditie</span>
              <span className="h-px w-8 bg-rule" />
              <span>{formatNlDate(ISSUE_DATE)}</span>
              <StatusBadge status="VOORLOPIG" />
            </div>
            <h1 className="mt-6 max-w-xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-6xl">
              Wie de machines bezit, blijft economisch actor.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
              Welkom. Ik lees jaarrekeningen met één vraag: houdt deze onderneming de laag die
              haar afnemer elke maand nodig heeft — of betaal je huur aan andermans park?
            </p>
            <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted">
              <em className="text-ink">Otium</em> is het doel; <em className="text-ink">AURA/S</em> is
              hoe ik dat lees. Geen tipstroom — wel een heldere leeswijze.
            </p>
            <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink-soft">
              {OTIUM_BRIDGE}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/methode"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-5 font-sans text-sm text-paper transition-transform duration-150 active:scale-[0.96]"
              >
                Lees de methode
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                to="/wereld"
                className="inline-flex min-h-11 items-center rounded-md border border-rule px-5 font-sans text-sm text-ink transition-colors duration-150 hover:border-ink"
              >
                Open de Wereld-atlas
              </Link>
              <Link
                to="/dossiers/$ticker"
                params={{ ticker: "pme" }}
                className="inline-flex min-h-11 items-center rounded-md border border-rule px-5 font-sans text-sm text-ink transition-colors duration-150 hover:border-ink"
              >
                Bekijk een dossier
              </Link>
              <Link
                to="/inschrijven"
                className="inline-flex min-h-11 items-center rounded-md border border-rule px-5 font-sans text-sm text-ink transition-colors duration-150 hover:border-ink"
              >
                Blijf bij het blad
              </Link>
            </div>
            <p className="mt-6 max-w-xl font-sans text-xs tracking-[0.12em] text-muted uppercase">
              {COVER_TRUST}
            </p>
            <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
              {COVER_SCORE_LINE}
            </p>
          </div>
          <figure className="overflow-hidden rounded-lg shadow-[var(--shadow-border)]">
            <img
              src="/art/globe.jpg"
              alt="Kopergravure van een bibliotheekglobe"
              className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              width={1408}
              height={1408}
            />
            <figcaption className="bg-paper-deep px-4 py-3 font-sans text-xs tracking-wide text-muted">
              Filings first · geen tipstroom · onderzoeksrang 0–100
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-rule bg-paper-deep" aria-label="Dit nummer" id="dit-nummer">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside>
            <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Dit nummer</p>
            <p className="mt-3 font-display text-4xl font-medium tracking-tight">Gehouden laag</p>
            <p className="mt-2 font-sans text-sm text-muted">september 2026 · research</p>
            <p className="mt-4 font-sans text-xs tracking-wide text-faint">
              Atlas · Dit nummer · {formatNlDate(ISSUE_DATE)}
            </p>
          </aside>
          <div>
            <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Editie · 5 doorklikken</p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Cover-belofte</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
              Wie de productieve laag houdt, blijft economisch actor. Methode, wereldkaart en
              top-S etalage (PME · DHR · TECH) — tip-vrij, VOORLOPIG.
            </p>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              <li className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                <span className="font-sans text-xs tracking-[0.16em] text-faint uppercase">Methode</span>
                <Link to="/methode" className="font-sans text-sm text-ink underline decoration-rule underline-offset-4">
                  Hoe AURA/S werkt
                </Link>
              </li>
              <li className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                <span className="font-sans text-xs tracking-[0.16em] text-faint uppercase">Wereld</span>
                <Link to="/wereld" className="font-sans text-sm text-ink underline decoration-rule underline-offset-4">
                  Continenten & manden
                </Link>
              </li>
              <li className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                <span className="font-sans text-xs tracking-[0.16em] text-faint uppercase">Etalage</span>
                <span className="font-sans text-sm">
                  {etalage.map((c, i) => (
                    <span key={c.ticker}>
                      {i > 0 ? " · " : null}
                      <Link
                        to="/dossiers/$ticker"
                        params={{ ticker: c.ticker.toLowerCase() }}
                        className="text-ink underline decoration-rule underline-offset-4"
                      >
                        {c.ticker}
                      </Link>
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                <span className="font-sans text-xs tracking-[0.16em] text-faint uppercase">Manden</span>
                <span className="font-sans text-sm">
                  {manden.map((c, i) => (
                    <span key={c.ticker}>
                      {i > 0 ? " · " : null}
                      <Link
                        to="/dossiers/$ticker"
                        params={{ ticker: c.ticker.toLowerCase() }}
                        className="text-ink underline decoration-rule underline-offset-4"
                      >
                        {c.ticker}
                      </Link>
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                <span className="font-sans text-xs tracking-[0.16em] text-faint uppercase">Frame</span>
                <Link to="/scores" className="font-sans text-sm text-ink underline decoration-rule underline-offset-4">
                  AURA/S-scores
                </Link>
              </li>
            </ul>
            <Link
              to="/nummers"
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-sans text-sm text-ink"
            >
              Editie-shelf
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      <section id="etalage" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Etalage</p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
              Feiten · Context · Status
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm text-muted">
              Hoogste S met liquid notering plus dossier eerst (onderzoeksrang). Status blijft
              VOORLOPIG.
            </p>
          </div>
          <Link to="/scores" className="font-sans text-sm text-ink underline decoration-rule underline-offset-4">
            Alle scores
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {etalage.map((c) => (
            <CompanyCard key={c.ticker} company={c} featured />
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Nummers op dit blad</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Gedateerde edities</h2>
          <p className="mt-3 max-w-2xl font-sans text-sm text-muted">
            Alleen nummers die in deze codebase staan. Geen extra speciales van de here.now-desk
            tot hun S en filing hier geciteerd zijn.
          </p>
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {editions.map((e) => (
              <li key={e.slug}>
                <Link
                  to="/nummers/$slug"
                  params={{ slug: e.slug }}
                  className="flex items-start justify-between gap-4 py-4 transition-colors hover:text-moss"
                >
                  <div>
                    <p className="font-sans text-xs tracking-wide text-faint uppercase">{e.kicker}</p>
                    <p className="mt-1 font-display text-xl font-medium tracking-tight">{e.title}</p>
                    <p className="mt-1 font-sans text-sm text-muted">{e.theme}</p>
                  </div>
                  <ArrowRight className="mt-2 size-4 shrink-0 text-faint" strokeWidth={1.75} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Kort antwoord</p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Drie vragen</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {COVER_FAQ.map((item) => (
            <article key={item.q}>
              <h3 className="font-display text-xl font-medium tracking-tight">{item.q}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
