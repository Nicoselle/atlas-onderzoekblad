/** Exact Otium line — methode/glossary only, never in the cover hero. */
export const OTIUM_BRIDGE =
  "Vanuit het Otium-project: Atlas leest wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.";

/** Visitor-facing issue date (here.now cover 2026-09-15). Census of world names stays 10 september. */
export const ISSUE_DATE = "2026-09-15";

/** Cover hero — Elon brief, exact. No AURA/S, no Otium. */
export const HERO_TITLE = "Atlas is een onderzoekblad over bedrijven.";

export const HERO_LEAD =
  "We lezen jaarrekeningen om te zien wie de cruciale techniek of het product écht in handen heeft — en wie alleen huur betaalt.";

export const HERO_PROMISE =
  "Geen kooptips. Wel een vaste score (0–100, voorlopig) en dossiers die je kunt nalezen.";

export const HERO_LENS =
  "Je krijgt een leeswijze: blijft het bedrijf eigenaar van wat de klant elke maand nodig heeft, of stopt de relatie bij de kassa?";

/**
 * Elon commercial slots (cover CTA, inschrijven anatomy, etalage, dual-run,
 * methode product) with Nico's accessible labels. Do not revert to the jargon
 * paste: "Blijf bij het blad", kicker Retentie, "AURA op de filing",
 * "Geen tipstroom", "Twee lezingen", "Naar het Blad (lab)".
 */
export const CTA_METHODE = "Hoe we scoren";
export const CTA_SUBSCRIBE = "Blijf op de hoogte";
export const FORM_BUTTON = "Houd me op de hoogte";

export const SUBSCRIBE_KICKER = "Nieuwsbrief";
export const SUBSCRIBE_TITLE = "Blijf op de hoogte";
export const SUBSCRIBE_LEDE =
  "Korte stukken over bedrijven, rechtstreeks uit de jaarrekening. Geen kooptips. Eén e-mail is genoeg.";
export const SUBSCRIBE_TRUST = "Onderzoek · jaarrekeningen eerst · geen kooptips";
export const SUBSCRIBE_STATUS = "De lijst wordt nog gekoppeld. Het formulier is al klaar.";
export const SUBSCRIBE_UNDER =
  "Geen koopadvies. Geen verkoopadvies. Alleen onderzoek wanneer er een nieuw stuk klaar is.";

export const ETALAGE_ABOVE =
  "Drie bedrijven die we hebben nagekeken. De cijfers zijn onderzoek, geen advies om te kopen.";
export const ETALAGE_BELOW = "De onderbouwing staat in het dossier.";
export const ETALAGE_STATUS = "status voorlopig";

export const SITE_TITLE = "Atlas — onderzoekblad over bedrijven";
export const SITE_DESCRIPTION =
  "Atlas is een onderzoekblad over bedrijven. We lezen jaarrekeningen. Geen kooptips.";
export const HEADER_SUB = "onderzoekblad";

export const TIP_BAN_FOOTER =
  "Persoonlijk onderzoek. Eerst de jaarrekening. Geen kooptips. Geen beleggingsadvies. Scores 0–100, status voorlopig — een leeswijze, geen kooplijst.";
export const TIP_BAN_SHORT = "Geen kooptips. Geen koersdoelen. Geen koop- of verkoopsignalen.";

export const HERE_NOW_URL = "https://snowy-crest-h56g.here.now/";
export const BRIDGE_KICKER = "Twee sites";
export const BRIDGE_BODY = "Nieuwe Atlas-site (test). De oude site blijft online.";
export const BRIDGE_CTA = "Naar de huidige live Atlas";

export const METHODE_PRODUCT = [
  {
    kicker: "Waarom Atlas",
    title: "Diepte zonder kooptips",
    body: "We lezen jaarrekeningen voor wie bedrijven wil begrijpen. Geen ladder van koopsignalen. Wel een vaste rang: wie houdt wat de klant elke maand nodig heeft?",
  },
  {
    kicker: "Hoe we scoren",
    title: "Eén leeswijze, herhaalbaar",
    body: "Vier vragen — automatisering, nut, schokbestendigheid, aanpassingsvermogen — worden één score van 0 tot 100. Die methode heet AURA/S. Status blijft voorlopig tot de lezing compleet is.",
  },
  {
    kicker: "Wat we nooit doen",
    title: "Geen koopadvies",
    body: "Geen koersdoelen. Geen kooplijst. Geen “koop dit”. Namen uitlichten is onderzoek, geen bevel.",
  },
] as const;

export const COVER_FAQ = [
  {
    q: "Wat is Atlas?",
    a: "Een onderzoekblad over bedrijven. We lezen jaarrekeningen. We geven geen kooptips.",
  },
  {
    q: "Hoe werkt de score?",
    a: "Vier vragen over het bedrijf worden één cijfer van 0 tot 100. De methode staat op de methode-pagina. Het is een leeswijze, geen tip.",
  },
  {
    q: "Geeft Atlas koopadvies?",
    a: "Nee. Namen uitlichten is onderzoek, geen kooplijst. Geen koop- of verkoopsignalen.",
  },
] as const;

export const LEESGRENS_ITEMS = [
  "Geen kooptips, geen koersdoelen, geen kooplijst.",
  "Oude scores rekenen we niet om naar de nieuwe schaal.",
  "De score gaat over het bedrijf, niet over een persoon.",
  "Klantbehoud zit in de berekening, niet als extra letter op het blad.",
] as const;

export const GLOSSARY = [
  {
    term: "Productieve laag",
    def: "Wat de klant elke maand nodig heeft — software, machines, leases, verbruiksgoederen — en of het bedrijf dat zelf houdt.",
  },
  {
    term: "AURA/S",
    def: "Onze score van 0 tot 100: automatisering, nut, schokbestendigheid, aanpassingsvermogen. Geen tip.",
  },
  {
    term: "Voorlopig",
    def: "De jaarrekening is gelezen, maar niet elk veld is hard. De score mag getoond, met voorbehoud.",
  },
  {
    term: "Otium",
    def: "Tijd waarover niemand anders beslist. Het doel achter het blad, niet de score zelf.",
  },
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
