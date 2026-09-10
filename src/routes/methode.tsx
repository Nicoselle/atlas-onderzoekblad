import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";

export const Route = createFileRoute("/methode")({
  component: MethodePage,
  head: () => ({
    meta: [{ title: "Methode · Atlas" }],
  }),
});

const pillars = [
  {
    letter: "A",
    name: "Automatisering",
    q: "Draait de operatie op eigen processen, data en machines — of op mensen en vendors?",
    w: "digitale volwassenheid 0,35 · intelligente O&M 0,25 · R&D/capex 0,20 · digital nativity 0,20",
  },
  {
    letter: "U",
    name: "Utiliteit",
    q: "Levert de machine nut op: productiviteit, marge, vrije kas?",
    w: "productiviteit 0,35 · brutomarge 0,25 · FCF-marge 0,25 · ROIC/ROE 0,15",
  },
  {
    letter: "R",
    name: "Resilience",
    q: "Overleeft ze een schok: liquiditeit, hefboom, herstel?",
    w: "liquiditeit 0,25 · hefboom 0,20 · schokabsorptie 0,25 · herstel 0,20 · volatiliteit 0,10",
  },
  {
    letter: "A",
    name: "Aanpassingsvermogen",
    q: "Kan ze van koers veranderen zonder vast te lopen?",
    w: "slack 0,25 · ambidexteriteit 0,25 · governance-snelheid 0,25 · leren van schokken 0,25",
  },
];

function MethodePage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Methode · proprietary frame"
        title="Hoe Atlas jaarrekeningen leest"
        dek="Vaste leeswijze: hoe AURA/S telt, wanneer Trendwissel mag spreken, en welke grenzen dit onderzoek houdt. Geen signaalstroom — wel een herhaalbaar frame."
      />

      <figure className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <img
          src="/art/ledger.jpg"
          alt="Kopergravure van een open jaarrekening"
          className="w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          width={1792}
          height={1008}
        />
      </figure>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">Productframe</p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">AURA/S — vier letters, één score</h2>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-soft">
          Twee keer de letter A is bewust: eerst Automatisering, daarna Aanpassingsvermogen
          (in de telregel: A-Flex). Retentie weegt mee in basisscore B, maar verschijnt niet
          als publieke AURA-letter.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.name} className="rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-4xl font-medium text-moss">{p.letter}</p>
              <h3 className="mt-2 font-display text-xl font-medium tracking-tight">{p.name}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{p.q}</p>
              <p className="mt-3 font-sans text-xs text-faint">{p.w}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-tight">Van metric naar S</h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                n: "1",
                t: "Metric → 0–100",
                d: "Ruwe ratio via ankers L / M / H. Mid-anker M houdt “goed genoeg” op ongeveer 60, niet op 90. Voorbeelden: current ratio 1,0 / 1,5 / 2,5; FCF-marge 0% / 8% / 20%; NRR 90 / 110 / 130.",
              },
              {
                n: "2",
                t: "Pijler = gewogen subscores",
                d: "Ontbreekt een optioneel item: gewichten binnen de pijler renormaliseren. Ontbreekt een verplicht item: pijler ONBEREKENBAAR.",
              },
              {
                n: "3",
                t: "Flags vóór B",
                d: "Negatieve brutomarge → U-cap 40. Geen liquiditeit én geen hefboom → R onberekenbaar, S = INCOMPLEET. Geen hersteltest → herstel max 30. DORA-gat → R-cap 55.",
              },
              {
                n: "4",
                t: "Basisscore B",
                d: "Default-weging (som = 1,00): Automatisering 20% · Utiliteit 20% · Resilience 25% · Aanpassingsvermogen 20% · retentie in B 15%. R weegt het zwaarst omdat schokbestendigheid de bindende constraint is.",
              },
              {
                n: "5",
                t: "AI-net → S",
                d: "Plus alleen bij aantoonbaar eigenaarschap (compute, gewichten+data, silicon, geteste failover). “Ze gebruiken Copilot” is geen plus.",
              },
              {
                n: "6",
                t: "Publicatiestatus (compleetheid C)",
                d: "C = ingevulde verplichte velden / verplichte velden. C < 0,70 → geen publieke S. 0,70 ≤ C < 1 → VOORLOPIG. Geen verzonnen cijfers.",
              },
            ].map((s) => (
              <li key={s.n} className="grid gap-3 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-3xl text-moss">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">{s.t}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-medium tracking-tight">Statuswoorden</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              s: "INCOMPLEET",
              d: "Te veel verplichte velden ontbreken (C < 0,70) — of een pijler is onberekenbaar. Geen publieke S-band.",
            },
            {
              s: "VOORLOPIG",
              d: "S mag getoond, maar met asterisk: C tussen 0,70 en 1, of bedrijfsvoering-proxies. Onderzoeksrang, geen bevel.",
            },
            {
              s: "ONBEREKENBAAR",
              d: "Eén pijler mist een verplicht item — die pijler telt niet; vaak volgt S = INCOMPLEET.",
            },
          ].map((item) => (
            <article key={item.s} className="rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]">
              <StatusBadge status={item.s} />
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">{item.d}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          COMPLEET verschijnt alleen wanneer C = 1 en alle verplichte velden staan — op dit Blad
          nog zeldzaam. Scores zijn onderzoeksrang, geen bevel.
        </p>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl font-medium tracking-tight">Trendwissel — de grafiek</h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-soft">
            AURA/S kijkt jaren. Trendwissel kijkt weken tot maanden: is de bestaande markttrend
            nog intact? De korte lens triggert geen tip. Zij zegt enkel of het beeld kantelt,
            nadat AURA/S de naam al de moeite waard achtte om te volgen.
          </p>
          <blockquote className="mt-8 max-w-2xl border-l-2 border-moss pl-5 font-display text-xl leading-snug text-ink">
            Twee lenzen: de jaarrekening voor eigenaarschap, de grafiek voor een trend die
            breekt of herstelt. Onderzoek — nooit als bevel.
          </blockquote>
          <ul className="mt-8 max-w-2xl space-y-2 font-sans text-sm text-ink-soft">
            <li>Wel: structuur van hogere of lagere bodems en toppen (eerst de weekgrafiek).</li>
            <li>Wel: 20- en 50-weken gemiddelden als contextlijn, nooit als koopknop.</li>
            <li>Niet: “koopt onder X” of “verkoopt boven Y”.</li>
            <li>Niet: een modelportefeuille die de lezer moet nabootsen.</li>
          </ul>
          <p className="mt-8 font-sans text-sm">
            <Link to="/nummers/$slug" params={{ slug: "2026-09-marktkijk-1-3m" }} className="underline decoration-rule underline-offset-4">
              Casus HEICO, weekstructuur →
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
