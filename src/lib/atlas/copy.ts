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
  "Een vaste score (0–100, voorlopig) en dossiers die je kunt nalezen.";

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
  "Korte stukken over bedrijven, rechtstreeks uit de jaarrekening. Eén e-mail is genoeg.";
export const SUBSCRIBE_TRUST = "Onderzoek · jaarrekeningen eerst";
export const SUBSCRIBE_STATUS = "De lijst wordt nog gekoppeld. Het formulier is al klaar.";
export const SUBSCRIBE_UNDER = "Eén mail wanneer er iets te lezen valt.";

export const ETALAGE_HEADING = "Drie nagekeken namen";
export const ETALAGE_ABOVE = "Drie bedrijven die we hebben nagekeken.";
export const ETALAGE_BELOW = "De onderbouwing staat in het dossier.";
export const ETALAGE_STATUS = "status voorlopig";

/** P0 cover nummers list — GATX + HEICO only. Other speciales stay as routes. */
export const COVER_EDITION_SLUGS = ["2026-09-gatx", "2026-09-hei"] as const;
export const COVER_NUMMERS_LEDE =
  "Twee langere voorbeelden: GATX en HEICO. Meer stukken staan op de huidige live Atlas.";

export const SITE_TITLE = "Atlas — onderzoekblad over bedrijven";
export const SITE_DESCRIPTION = "Atlas is een onderzoekblad over bedrijven. We lezen jaarrekeningen.";
export const HEADER_SUB = "onderzoekblad";

export const FOOTER_NOTE = "Scores 0–100, status voorlopig.";

export const HERE_NOW_URL = "https://snowy-crest-h56g.here.now/";
export const BRIDGE_KICKER = "Twee sites";
export const BRIDGE_BODY = "Nieuwe Atlas-site (test). De oude site blijft online.";
export const BRIDGE_CTA = "Naar de huidige live Atlas";

export const METHODE_PRODUCT = [
  {
    kicker: "Waarom Atlas",
    title: "Diepte in de jaarrekening",
    body: "We lezen jaarrekeningen voor wie bedrijven wil begrijpen. Wel een vaste rang: wie houdt wat de klant elke maand nodig heeft?",
  },
  {
    kicker: "Hoe we scoren",
    title: "Eén leeswijze, herhaalbaar",
    body: "Vier vragen — automatisering, nut, schokbestendigheid, aanpassingsvermogen — worden één score van 0 tot 100. Die methode heet AURA/S. Status blijft voorlopig tot de lezing compleet is.",
  },
  {
    kicker: "Wat we nooit doen",
    title: "Onderzoek, geen advies",
    body: "Atlas is onderzoek, geen beleggingsadvies.",
  },
] as const;

export const COVER_FAQ = [
  {
    q: "Wat is Atlas?",
    a: "Een onderzoekblad over bedrijven. We lezen jaarrekeningen.",
  },
  {
    q: "Hoe werkt de score?",
    a: "Vier vragen over het bedrijf worden één cijfer van 0 tot 100. De methode staat op de methode-pagina.",
  },
  {
    q: "Wat betekent voorlopig?",
    a: "De jaarrekening is gelezen, maar niet elk veld is hard. De score mag getoond, met voorbehoud.",
  },
] as const;

export const LEESGRENS_ITEMS = [
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
    def: "Onze score van 0 tot 100: automatisering, nut, schokbestendigheid, aanpassingsvermogen.",
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
