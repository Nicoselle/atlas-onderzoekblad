import { companies } from "./companies";
import { editions } from "./editions";
import { baskets, continents } from "./world";

export type SearchHit = {
  href: string;
  kicker: string;
  title: string;
  dek: string;
};

const pages: SearchHit[] = [
  {
    href: "/",
    kicker: "Blad",
    title: "Atlas onderzoekblad",
    dek: "Wie de machines bezit, blijft economisch actor. Etalage, methode, wereld.",
  },
  {
    href: "/methode",
    kicker: "Methode",
    title: "Hoe AURA/S werkt",
    dek: "Automatisering · Utiliteit · Resilience · Aanpassingsvermogen → score S.",
  },
  {
    href: "/wereld",
    kicker: "Wereld",
    title: "Continenten & manden",
    dek: "Leeskaart. Filings first. S 0–100. Geen tipfilter.",
  },
  {
    href: "/scores",
    kicker: "Frame",
    title: "AURA/S-scores",
    dek: "Onderzoeksrang 0–100, status VOORLOPIG. Geen koersdoelen.",
  },
  {
    href: "/nummers",
    kicker: "Nummers",
    title: "Editie-shelf",
    dek: "Gedateerde onderzoeksedities — tip-vrij.",
  },
  {
    href: "/inschrijven",
    kicker: "Brief",
    title: "Inschrijven",
    dek: "Onderzoekseditie per e-mail. Geen tipstroom. Geen koersdoelen.",
  },
];

export function searchAtlas(q: string): SearchHit[] {
  const needle = q.trim().toLowerCase();
  const hits: SearchHit[] = [
    ...pages,
    ...companies.map((c) => ({
      href: `/dossiers/${c.ticker.toLowerCase()}`,
      kicker: `${c.ticker} · S ${c.s.toFixed(1).replace(".", ",")}`,
      title: c.name,
      dek: `${c.heldLayer} · ${c.exchange} · ${c.sector}`,
    })),
    ...editions.map((e) => ({
      href: `/nummers/${e.slug}`,
      kicker: e.kicker,
      title: e.title,
      dek: e.dek,
    })),
    ...continents.map((c) => ({
      href: `/wereld/${c.id}`,
      kicker: "Continent",
      title: c.name,
      dek: `${c.names} namen · ${c.scored} gescoord · ${c.note}`,
    })),
    ...baskets.map((b) => ({
      href: `/wereld/${b.id}`,
      kicker: "Mand",
      title: b.name,
      dek: b.note,
    })),
  ];

  if (!needle) return hits;

  return hits.filter((h) => {
    const hay = `${h.kicker} ${h.title} ${h.dek} ${h.href}`.toLowerCase();
    return hay.includes(needle);
  });
}
