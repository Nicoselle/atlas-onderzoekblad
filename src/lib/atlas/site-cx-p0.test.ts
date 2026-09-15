import assert from "node:assert/strict";
import { test } from "node:test";
import { etalageTickers, getCompany, mandenTickers, rankedCompanies, sampleTickers } from "./companies.ts";
import {
  BRIDGE_BODY,
  BRIDGE_CTA,
  BRIDGE_KICKER,
  BUTTONDOWN_PLACEHOLDER,
  buttonDownEmbedAction,
  COVER_EDITION_SLUGS,
  COVER_FAQ,
  COVER_NUMMERS_LEDE,
  CTA_METHODE,
  CTA_SUBSCRIBE,
  ETALAGE_ABOVE,
  ETALAGE_BELOW,
  ETALAGE_HEADING,
  FORM_BUTTON,
  HERE_NOW_URL,
  HERO_LEAD,
  HERO_LENS,
  HERO_PROMISE,
  HERO_TITLE,
  HEADER_SUB,
  isButtonDownWired,
  ISSUE_DATE,
  LEESGRENS_ITEMS,
  METHODE_PRODUCT,
  OTIUM_BRIDGE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SUBSCRIBE_KICKER,
  SUBSCRIBE_LEDE,
  SUBSCRIBE_STATUS,
  SUBSCRIBE_TITLE,
  SUBSCRIBE_TRUST,
  SUBSCRIBE_UNDER,
  FOOTER_NOTE,
} from "./copy.ts";
import { formatNlDate } from "./format.ts";
import { speciales } from "./articles.ts";
import { getEdition } from "./editions.ts";
import { deskRowsForSlug, MAND_LEADS, MAND_ROSTERS } from "./mand-rows.ts";
import { baskets, CENSUS_DATE, continents, getBasket, getContinent } from "./world.ts";

const heroBundle = [HERO_TITLE, HERO_LEAD, HERO_PROMISE, HERO_LENS].join(" ");

test("Otium bridge line is exact and stays off the hero", () => {
  assert.equal(
    OTIUM_BRIDGE,
    "Vanuit het Otium-project: Atlas leest wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.",
  );
  assert.doesNotMatch(heroBundle, /Otium/);
  assert.doesNotMatch(heroBundle, /AURA\/S/);
  assert.doesNotMatch(heroBundle, /post-labour/i);
});

test("cover hero matches the accessible Elon brief", () => {
  assert.equal(HERO_TITLE, "Atlas is een onderzoekblad over bedrijven.");
  assert.match(HERO_LEAD, /jaarrekeningen/);
  assert.match(HERO_LEAD, /huur betaalt/);
  assert.equal(
    HERO_PROMISE,
    "Een vaste score (0–100, voorlopig) en dossiers die je kunt nalezen.",
  );
  assert.match(HERO_LENS, /eigenaar van wat de klant elke maand nodig heeft/);
  assert.equal(CTA_METHODE, "Hoe we scoren");
  assert.equal(CTA_SUBSCRIBE, "Blijf op de hoogte");
});

test("visitor-facing issue date matches here.now 15 september 2026", () => {
  assert.equal(ISSUE_DATE, "2026-09-15");
  assert.equal(formatNlDate(ISSUE_DATE), "15 september 2026");
  assert.equal(CENSUS_DATE, "2026-09-10");
});

test("masthead stays Dutch research, without tip-ban chrome", () => {
  assert.equal(SITE_TITLE, "Atlas — onderzoekblad over bedrijven");
  assert.match(SITE_DESCRIPTION, /onderzoekblad over bedrijven/);
  assert.doesNotMatch(SITE_DESCRIPTION, /Geen kooptips|Tip-ban/i);
  assert.equal(HEADER_SUB, "onderzoekblad");
  assert.doesNotMatch(SITE_TITLE, /Otium/);
  assert.doesNotMatch(SITE_DESCRIPTION, /AURA\/S/);
});

test("dual-run banner points at live here.now in plain Dutch", () => {
  assert.equal(BRIDGE_KICKER, "Twee sites");
  assert.equal(BRIDGE_BODY, "Nieuwe Atlas-site (test). De oude site blijft online.");
  assert.equal(BRIDGE_CTA, "Naar de huidige live Atlas");
  assert.equal(HERE_NOW_URL, "https://snowy-crest-h56g.here.now/");
});

test("inschrijven copy is the commercial SKU, without tip-ban chrome", () => {
  assert.equal(SUBSCRIBE_KICKER, "Nieuwsbrief");
  assert.equal(SUBSCRIBE_TITLE, "Blijf op de hoogte");
  assert.equal(
    SUBSCRIBE_LEDE,
    "Korte stukken over bedrijven, rechtstreeks uit de jaarrekening. Eén e-mail is genoeg.",
  );
  assert.equal(SUBSCRIBE_TRUST, "Onderzoek · jaarrekeningen eerst");
  assert.equal(FORM_BUTTON, "Houd me op de hoogte");
  assert.equal(SUBSCRIBE_STATUS, "De lijst wordt nog gekoppeld. Het formulier is al klaar.");
  assert.equal(SUBSCRIBE_UNDER, "Eén mail wanneer er iets te lezen valt.");
  assert.doesNotMatch([SUBSCRIBE_LEDE, SUBSCRIBE_TRUST, SUBSCRIBE_UNDER].join(" "), /kooptip|koersdoel|Tip-ban/i);
});

test("etalage copy is research, not a buy list", () => {
  assert.equal(
    ETALAGE_ABOVE,
    "Drie bedrijven die we hebben nagekeken.",
  );
  assert.equal(ETALAGE_BELOW, "De onderbouwing staat in het dossier.");
  assert.equal(ETALAGE_HEADING, "Drie nagekeken namen");
  assert.deepEqual(
    etalageTickers.map((ticker) => [ticker, getCompany(ticker)?.s]),
    [
      ["PME", 86.9],
      ["DHR", 86.5],
      ["TECH", 86.4],
    ],
  );
  assert.equal(getCompany("HEI")?.s, 80.0);
  assert.equal(getCompany("GATX")?.s, 72.8);
});

test("Elon commercial slots stay filled; jargon paste does not override accessible labels", () => {
  assert.equal(CTA_METHODE, "Hoe we scoren");
  assert.notEqual(CTA_SUBSCRIBE, "Blijf bij het blad");
  assert.notEqual(SUBSCRIBE_TITLE, "Blijf bij het blad");
  assert.notEqual(SUBSCRIBE_KICKER, "Retentie");
  assert.notEqual(FORM_BUTTON, "Inschrijven");
  assert.doesNotMatch(SUBSCRIBE_LEDE, /AURA/);
  assert.doesNotMatch(SUBSCRIBE_TRUST, /tipstroom|Filings first/i);
  assert.doesNotMatch(ETALAGE_ABOVE, /tipstroom/);
  assert.notEqual(BRIDGE_KICKER, "Twee lezingen");
  assert.notEqual(BRIDGE_CTA, "Naar het Blad (lab)");
  assert.equal(HERE_NOW_URL, "https://snowy-crest-h56g.here.now/");
  assert.equal(METHODE_PRODUCT.length, 3);
  assert.match(METHODE_PRODUCT[1]?.body ?? "", /AURA\/S/);
  assert.match(METHODE_PRODUCT[2]?.body ?? "", /geen beleggingsadvies/);
  assert.equal(isButtonDownWired(BUTTONDOWN_PLACEHOLDER), false);
});

test("methode-as-product has why / how / never", () => {
  assert.equal(METHODE_PRODUCT[0]?.kicker, "Waarom Atlas");
  assert.equal(METHODE_PRODUCT[1]?.kicker, "Hoe we scoren");
  assert.equal(METHODE_PRODUCT[2]?.kicker, "Wat we nooit doen");
  assert.equal(METHODE_PRODUCT[2]?.body, "Atlas is onderzoek, geen beleggingsadvies.");
});

test("chrome copy does not shout the tip-ban; methode keeps one calm line", () => {
  const chrome = [
    HERO_PROMISE,
    SITE_DESCRIPTION,
    FOOTER_NOTE,
    SUBSCRIBE_LEDE,
    SUBSCRIBE_TRUST,
    ETALAGE_ABOVE,
    ...COVER_FAQ.map((item) => `${item.q} ${item.a}`),
    ...LEESGRENS_ITEMS,
    ...baskets.map((basket) => basket.note),
    ...continents.map((continent) => continent.note),
    ...Object.values(MAND_LEADS),
  ].join(" ");
  assert.doesNotMatch(chrome, /Tip-ban/i);
  assert.doesNotMatch(chrome, /Geen kooptips/i);
  assert.doesNotMatch(chrome, /Geen koersdoel/i);
  assert.doesNotMatch(chrome, /koop- of verkoopsignalen/i);
  assert.equal(METHODE_PRODUCT.filter((item) => /beleggingsadvies/i.test(item.body)).length, 1);
  for (const line of [HERO_PROMISE, SITE_DESCRIPTION, FOOTER_NOTE, ...COVER_FAQ.map((item) => item.a)]) {
    assert.doesNotMatch(line, /koersdoel van/i);
    assert.doesNotMatch(line, /koop dit/i);
    assert.doesNotMatch(line, /verkoop signaal/i);
  }
  assert.equal(LEESGRENS_ITEMS.length, 3);
});

test("Buttondown stays quiet when username is REPLACE_ME", () => {
  assert.equal(isButtonDownWired(BUTTONDOWN_PLACEHOLDER), false);
  assert.equal(isButtonDownWired("atlas-onderzoek"), true);
  assert.match(buttonDownEmbedAction("atlas-onderzoek"), /embed-subscribe\/atlas-onderzoek$/);
});

test("every mand and continent slug resolves", () => {
  for (const basket of baskets) {
    assert.equal(getBasket(basket.id)?.id, basket.id);
  }
  for (const continent of continents) {
    assert.equal(getContinent(continent.id)?.id, continent.id);
  }
  assert.equal(getBasket("bestaat-niet"), undefined);
  assert.equal(getContinent("bestaat-niet"), undefined);
});

test("priority manden have desk tables with existing S", () => {
  const filled = [
    "europa",
    "mijnbouw",
    "software",
    "softwarelaag",
    "industrieel",
    "landbouw",
    "energie",
    "azie",
  ] as const;
  for (const slug of filled) {
    const rows = deskRowsForSlug(slug);
    assert.ok(rows.length > 0, `${slug} should have desk rows`);
  }

  assert.equal(deskRowsForSlug("europa").length, 25);
  assert.equal(deskRowsForSlug("mijnbouw").length, 22);
  assert.equal(deskRowsForSlug("software").length, 38);
  assert.equal(deskRowsForSlug("softwarelaag").length, 20);

  const dsy = deskRowsForSlug("europa").find((row) => row.ticker === "DSY");
  assert.equal(dsy?.s, 80.5);
  const fnv = deskRowsForSlug("mijnbouw").find((row) => row.ticker === "FNV");
  assert.equal(fnv?.s, 84.4);
});

test("mand S matches dossiers already on this blad — never recomputed", () => {
  const pairs: Array<[string, string, number]> = [
    ["europa", "SAP", 74.7],
    ["software", "MDB", 84.3],
    ["softwarelaag", "PME", 86.9],
    ["softwarelaag", "TSLA", 84.6],
    ["industrieel", "HEI", 80.0],
    ["industrieel", "GATX", 72.8],
    ["industrieel", "URI", 56.5],
  ];
  for (const [slug, ticker, s] of pairs) {
    const row = deskRowsForSlug(slug).find((item) => item.ticker === ticker);
    assert.equal(row?.s, s, `${slug} ${ticker}`);
    assert.equal(getCompany(ticker)?.s, s, `dossier ${ticker}`);
  }
});

test("incomplete mand rows keep empty S", () => {
  const kone = deskRowsForSlug("europa").find((row) => row.ticker === "KNEBV");
  assert.equal(kone?.s, null);
  assert.equal(kone?.status, "INCOMPLEET");
  const glen = deskRowsForSlug("mijnbouw").find((row) => row.ticker === "GLEN");
  assert.equal(glen?.s, null);
});

test("tip-ban copy stays off buy language", () => {
  const hay = [
    ...Object.values(MAND_LEADS),
    ...Object.values(MAND_ROSTERS).flatMap((rows) => rows.map((row) => row.lezing)),
  ].join("\n");
  assert.doesNotMatch(hay, /koop dit|koopsignaal|kansen om te kopen/i);
  assert.doesNotMatch(hay, /(?<![Gg]een )koopadvies/);
});

test("P0 cover nummers list is GATX and HEICO only", () => {
  assert.equal(
    COVER_NUMMERS_LEDE,
    "Twee langere voorbeelden: GATX en HEICO. Meer stukken staan op de huidige live Atlas.",
  );
  assert.deepEqual([...COVER_EDITION_SLUGS], ["2026-09-gatx", "2026-09-hei"]);
  for (const slug of COVER_EDITION_SLUGS) {
    assert.ok(getEdition(slug), slug);
  }
  for (const hidden of [
    "2026-09-tesla",
    "2026-09-isrg",
    "2026-09-asml",
    "2026-09-industrials-cluster",
    "2026-09-gehouden-laag",
    "2026-09-marktkijk-1-3m",
  ]) {
    assert.equal((COVER_EDITION_SLUGS as readonly string[]).includes(hidden), false);
    assert.ok(getEdition(hidden), hidden);
  }
});

test("cover etalage stays PME DHR TECH; samples are GATX and HEICO only", () => {
  assert.deepEqual([...etalageTickers], ["PME", "DHR", "TECH"]);
  assert.deepEqual([...sampleTickers], ["HEI", "GATX"]);
  assert.deepEqual([...mandenTickers], ["SAP", "DLB"]);
  for (const extra of ["TSLA", "ISRG", "ASML"] as const) {
    assert.equal((etalageTickers as readonly string[]).includes(extra), false);
    assert.equal((sampleTickers as readonly string[]).includes(extra), false);
  }
  for (const ticker of [...etalageTickers, ...mandenTickers, ...sampleTickers]) {
    const company = getCompany(ticker);
    assert.ok(company, ticker);
    assert.equal(company.status, "VOORLOPIG");
  }
});

test("ported speciales are full articles with mal headings and cited S", () => {
  const expected = [
    ["2026-09-gatx", "GATX", 72.8],
    ["2026-09-hei", "HEI", 80.0],
    ["2026-09-tesla", "TSLA", 84.6],
    ["2026-09-isrg", "ISRG", 81.7],
    ["2026-09-asml", "ASML", 70.7],
  ] as const;
  assert.equal(speciales.length, 5);
  for (const [slug, ticker, s] of expected) {
    const edition = getEdition(slug);
    assert.ok(edition, slug);
    const headings = edition.body.filter((b) => b.type === "h").map((b) => b.text);
    assert.ok(headings.includes("Verhaal"), slug);
    assert.ok(headings.includes("Wat houd je?"), slug);
    assert.ok(headings.includes("Hoe het geld binnenkomt"), slug);
    assert.ok(headings.includes("Waar het schuurt") || headings.includes("Waar schuurt"), slug);
    assert.ok(headings.includes("Score"), slug);
    assert.ok(headings.includes("Wat telt als feit"), slug);
    const blob = edition.body.map((b) => ("text" in b ? b.text : "")).join(" ");
    assert.doesNotMatch(blob, /koop dit/i);
    assert.doesNotMatch(edition.dek, /Geen kooptips|Tip-ban/i);
    const company = getCompany(ticker);
    assert.equal(company?.s, s);
    assert.equal(company?.specialSlug, slug);
    assert.ok((company?.depth?.length ?? 0) >= 4, ticker);
  }
});

test("PME DHR TECH deepen without changing S", () => {
  const pme = getCompany("PME");
  const dhr = getCompany("DHR");
  const tech = getCompany("TECH");
  assert.equal(pme?.s, 86.9);
  assert.equal(dhr?.s, 86.5);
  assert.equal(tech?.s, 86.4);
  assert.ok(pme?.plainLede);
  assert.ok(dhr?.plainLede);
  assert.ok(tech?.plainLede);
  assert.ok((pme?.depth?.length ?? 0) >= 3);
  assert.ok((dhr?.depth?.length ?? 0) >= 3);
  assert.ok((tech?.depth?.length ?? 0) >= 4);
});

test("does not invent or change S values", () => {
  const ranked = rankedCompanies();
  assert.equal(ranked.length, 12);
  assert.deepEqual(
    ranked.map((c) => [c.ticker, c.s]),
    [
      ["PME", 86.9],
      ["DHR", 86.5],
      ["TECH", 86.4],
      ["DLB", 85.7],
      ["TSLA", 84.6],
      ["MDB", 84.3],
      ["ISRG", 81.7],
      ["HEI", 80.0],
      ["SAP", 74.7],
      ["GATX", 72.8],
      ["ASML", 70.7],
      ["URI", 56.5],
    ],
  );
});
