import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CompanyCard } from "@/components/atlas/company-card";
import { MethodeProduct } from "@/components/atlas/methode-product";
import { SiteShell } from "@/components/atlas/site-shell";
import { etalageTickers, getCompany, sampleTickers, type Company } from "@/lib/atlas/companies";
import {
  COVER_FAQ,
  CTA_METHODE,
  CTA_SUBSCRIBE,
  COVER_EDITION_SLUGS,
  COVER_NUMMERS_LEDE,
  ETALAGE_ABOVE,
  ETALAGE_BELOW,
  ETALAGE_HEADING,
  ETALAGE_STATUS,
  HERO_LEAD,
  HERO_LENS,
  HERO_PROMISE,
  GROK_BOT_COLOPHON,
  HERO_TITLE,
  ISSUE_DATE,
} from "@/lib/atlas/copy";
import { getEdition } from "@/lib/atlas/editions";
import { formatNlDate, formatScore } from "@/lib/atlas/format";

export const Route = createFileRoute("/")({ component: Home });

const etalage = etalageTickers.map((t) => getCompany(t)).filter((c): c is Company => Boolean(c));
const extraSamples = sampleTickers
  .map((t) => getCompany(t))
  .filter((c): c is Company & { specialSlug: string } => Boolean(c?.specialSlug));
const coverEditions = COVER_EDITION_SLUGS.map((slug) => getEdition(slug)).filter(
  (edition): edition is NonNullable<ReturnType<typeof getEdition>> => Boolean(edition),
);

function Home() {
  return (
    <SiteShell>
      <section className="border-b border-rule" aria-label="Voorblad">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:py-16">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-sans text-xs tracking-[0.18em] text-muted uppercase">
              <span>Onderzoekblad</span>
              <span className="h-px w-8 bg-rule" />
              <span>{formatNlDate(ISSUE_DATE)}</span>
            </div>
            <h1 className="mt-6 max-w-xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl">
              {HERO_TITLE}
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">{HERO_LEAD}</p>
            <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink">{HERO_PROMISE}</p>
            <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted">{HERO_LENS}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/methode"
                className="inline-flex min-h-11 items-center rounded-md border border-rule px-5 font-sans text-sm text-ink transition-colors duration-150 hover:border-ink"
              >
                {CTA_METHODE}
              </Link>
              <Link
                to="/inschrijven"
                className="inline-flex min-h-11 items-center rounded-md bg-ink px-5 font-sans text-sm text-paper transition-transform duration-150 active:scale-[0.96]"
              >
                {CTA_SUBSCRIBE}
              </Link>
            </div>
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
              Jaarrekeningen eerst
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-rule bg-paper-deep" aria-labelledby="methode-product-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Hoe dit blad werkt</p>
          <h2 id="methode-product-heading" className="mt-2 font-display text-3xl font-medium tracking-tight">
            Waarom Atlas, hoe we scoren, wat we nooit doen
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-sm text-muted">
            {GROK_BOT_COLOPHON satisfies "Atlas is een Grok Bot-project."}
          </p>
          <div className="mt-8">
            <MethodeProduct />
          </div>
        </div>
      </section>

      <section id="etalage" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6">
        <div className="mb-8">
          <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Etalage</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">{ETALAGE_HEADING}</h2>
          <p className="mt-2 max-w-xl font-sans text-sm text-muted">{ETALAGE_ABOVE}</p>
        </div>
        <p className="mb-4 font-sans text-xs text-faint">
          {etalage.map((c, i) => (
            <span key={c.ticker}>
              {i > 0 ? " · " : null}
              {c.ticker} {formatScore(c.s)}
            </span>
          ))}
          {" · "}
          {ETALAGE_STATUS}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {etalage.map((c) => (
            <CompanyCard key={c.ticker} company={c} featured />
          ))}
        </div>
        <p className="mt-6 font-sans text-sm text-muted">{ETALAGE_BELOW}</p>
        <p className="mt-3 font-sans text-sm text-ink-soft">
          Ook nagekeken:{" "}
          {extraSamples.map((c, i) => (
            <span key={c.ticker}>
              {i > 0 ? " · " : null}
              <Link
                to="/nummers/$slug"
                params={{ slug: c.specialSlug }}
                className="underline decoration-rule underline-offset-4"
              >
                {c.name} {formatScore(c.s)}
              </Link>
            </span>
          ))}
          .
        </p>
      </section>

      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Nummers op dit blad</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Gedateerde edities</h2>
          <p className="mt-3 max-w-2xl font-sans text-sm text-muted">
            {COVER_NUMMERS_LEDE}
          </p>
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {coverEditions.map((e) => (
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
