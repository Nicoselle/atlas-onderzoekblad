/** Exact Otium bridge — public-face, tip-banned. */
export const OTIUM_BRIDGE =
  "Vanuit het Otium-project: Atlas leest wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.";

/** Visitor-facing issue date (here.now cover 2026-09-15). Census of world names stays 10 september. */
export const ISSUE_DATE = "2026-09-15";

export const SITE_TITLE = "Atlas — AURA/S onderzoekblad · Otium · post-labour";

export const SITE_DESCRIPTION =
  "Onafhankelijk onderzoekblad: Otium als doel, AURA/S als leeswijze voor jaarrekeningen. Scores 0–100 (VOORLOPIG). Geen tipstroom.";

export const HEADER_SUB = "onderzoek · post-labour";

export const COVER_TRUST =
  "Atlas · Onderzoekseditie · Filings first · Geen tipstroom";

export const COVER_SCORE_LINE =
  "AURA/S Scores op dit Blad: 0–100, status VOORLOPIG. Onderzoeksrang — geen koersdoelen.";

export const TIP_BAN_FOOTER =
  "Persoonlijk onderzoek. Filings first. Geen tipstroom. Geen beleggingsadvies. Scores 0–100, status VOORLOPIG — een leeswijze, geen modelportefeuille. Geen koop- of verkoopsignalen.";

export const TIP_BAN_SHORT =
  "Geen tipstroom. Geen koersdoelen. Geen koop- of verkoopsignalen.";

export const COVER_FAQ = [
  {
    q: "Wat is Atlas?",
    a: "Atlas is een onafhankelijk onderzoekblad over post-labour: wie de productieve laag (machines, platforms, leases) houdt, blijft economisch actor. Otium — tijd waarover niemand anders beslist — is het doel; AURA/S is het frame om jaarrekeningen te lezen. Scores op dit Blad zijn 0–100 en staan op VOORLOPIG. Atlas publiceert geen tipstroom en geen koersdoelen.",
  },
  {
    q: "Wat is AURA/S?",
    a: "AURA/S is het proprietary leesframe van Atlas: Automatisering · Utiliteit · Resilience · Aanpassingsvermogen → score S (0–100), status VOORLOPIG. Onderzoekskader — geen tip.",
  },
  {
    q: "Geeft Atlas koopadvies?",
    a: "Nee. Atlas is onderzoek: filings lezen, AURA/S toepassen, statuswoorden vastzetten. Interessante namen uitlichten is een onderzoeksrang, geen modelportefeuille. Geen koop- of verkoopsignalen.",
  },
] as const;

export const LEESGRENS_ITEMS = [
  "Geen tipstroom, geen koersdoelen, geen kooplijst — alleen onderzoeksrang.",
  "Geen omrekening uit een oude 3–15-poort naar S (een 14/15 is geen S=93).",
  "Geen menging met een persoons-index: S is onderneming, niet aura van een individu.",
  "Geen publieke letter K als AURA-letter — retentie zit in de basisscore B, niet als vijfde AURA-letter.",
] as const;

export const BUTTONDOWN_PLACEHOLDER = "REPLACE_ME";

export function buttonDownUsername() {
  const fromEnv = import.meta.env.VITE_BUTTONDOWN_USERNAME;
  if (typeof fromEnv === "string" && fromEnv.trim().length > 0) {
    return fromEnv.trim();
  }
  return BUTTONDOWN_PLACEHOLDER;
}

export function isButtonDownWired(username = buttonDownUsername()) {
  return username !== BUTTONDOWN_PLACEHOLDER && username.length > 0;
}

export function buttonDownEmbedAction(username = buttonDownUsername()) {
  return `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(username)}`;
}
