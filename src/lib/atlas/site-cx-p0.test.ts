import assert from "node:assert/strict";
import { test } from "node:test";
import { etalageTickers, getCompany, mandenTickers, rankedCompanies } from "./companies.ts";
import {
  BUTTONDOWN_PLACEHOLDER,
  buttonDownEmbedAction,
  COVER_FAQ,
  COVER_SCORE_LINE,
  COVER_TRUST,
  HEADER_SUB,
  isButtonDownWired,
  ISSUE_DATE,
  LEESGRENS_ITEMS,
  OTIUM_BRIDGE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  TIP_BAN_FOOTER,
  TIP_BAN_SHORT,
} from "./copy.ts";
import { formatNlDate } from "./format.ts";
import { baskets, CENSUS_DATE, continents, getBasket, getContinent } from "./world.ts";

test("Otium bridge line is exact", () => {
  assert.equal(
    OTIUM_BRIDGE,
    "Vanuit het Otium-project: Atlas leest wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.",
  );
});

test("visitor-facing issue date matches here.now 15 september 2026", () => {
  assert.equal(ISSUE_DATE, "2026-09-15");
  assert.equal(formatNlDate(ISSUE_DATE), "15 september 2026");
  assert.equal(CENSUS_DATE, "2026-09-10");
});

test("masthead and meta stay Dutch research, tip-banned", () => {
  assert.equal(SITE_TITLE, "Atlas — AURA/S onderzoekblad · Otium · post-labour");
  assert.match(SITE_DESCRIPTION, /VOORLOPIG/);
  assert.match(SITE_DESCRIPTION, /Geen tipstroom/);
  assert.equal(HEADER_SUB, "onderzoek · post-labour");
  assert.match(COVER_TRUST, /Filings first/);
  assert.match(COVER_TRUST, /Geen tipstroom/);
  assert.match(COVER_SCORE_LINE, /geen koersdoelen/);
});

test("tip-ban copy forbids buy/sell/price-target language as a product promise", () => {
  for (const line of [TIP_BAN_FOOTER, TIP_BAN_SHORT, ...COVER_FAQ.map((item) => item.a)]) {
    assert.match(line, /geen (tip|tipstroom|koersdoelen|koop- of verkoopsignalen|beleggingsadvies)/i);
    assert.doesNotMatch(line, /koersdoel van/i);
    assert.doesNotMatch(line, /koop dit/i);
    assert.doesNotMatch(line, /verkoop signaal/i);
  }
  const buyAdvice = COVER_FAQ.find((item) => item.q === "Geeft Atlas koopadvies?");
  assert.ok(buyAdvice);
  assert.match(buyAdvice.a, /Geen koop- of verkoopsignalen/);
  assert.equal(LEESGRENS_ITEMS.length, 4);
  assert.match(LEESGRENS_ITEMS[0] ?? "", /geen kooplijst/i);
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

test("mand tables only list dossiers already on this blad", () => {
  const software = getBasket("software");
  assert.ok(software);
  const listed = (software.tickers ?? [])
    .map((ticker) => getCompany(ticker)?.ticker)
    .filter((ticker): ticker is string => Boolean(ticker));
  assert.deepEqual(listed, ["MDB", "SAP"]);

  assert.equal((getBasket("mijnbouw")?.tickers ?? []).length, 0);
  assert.equal((getBasket("coins")?.tickers ?? []).length, 0);
});

test("cover etalage and manden use cited tickers only", () => {
  assert.deepEqual([...etalageTickers], ["PME", "DHR", "TECH"]);
  assert.deepEqual([...mandenTickers], ["SAP", "DLB"]);
  for (const ticker of [...etalageTickers, ...mandenTickers]) {
    const company = getCompany(ticker);
    assert.ok(company, ticker);
    assert.equal(company.status, "VOORLOPIG");
  }
});

test("does not invent or change S values", () => {
  const ranked = rankedCompanies();
  assert.equal(ranked.length, 10);
  assert.deepEqual(
    ranked.map((c) => [c.ticker, c.s]),
    [
      ["PME", 86.9],
      ["DHR", 86.5],
      ["TECH", 86.4],
      ["DLB", 85.7],
      ["TSLA", 84.6],
      ["MDB", 84.3],
      ["HEI", 80.0],
      ["SAP", 74.7],
      ["GATX", 72.8],
      ["URI", 56.5],
    ],
  );
  assert.equal(ranked.find((c) => c.ticker === "URI")?.s, 56.5);
});
