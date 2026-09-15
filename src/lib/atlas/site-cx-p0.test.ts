import assert from "node:assert/strict";
import { test } from "node:test";
import { getCompany, rankedCompanies } from "./companies.ts";
import {
  BUTTONDOWN_PLACEHOLDER,
  buttonDownEmbedAction,
  isButtonDownWired,
  OTIUM_BRIDGE,
} from "./copy.ts";
import { deskRowsForSlug, MAND_LEADS, MAND_ROSTERS } from "./mand-rows.ts";
import { baskets, continents, getBasket, getContinent } from "./world.ts";

test("Otium bridge line is exact", () => {
  assert.equal(
    OTIUM_BRIDGE,
    "Vanuit het Otium-project: Atlas leest wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.",
  );
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

test("does not invent or change S values", () => {
  const ranked = rankedCompanies();
  assert.equal(ranked[0]?.ticker, "PME");
  assert.equal(ranked[0]?.s, 86.9);
  assert.equal(ranked.find((c) => c.ticker === "URI")?.s, 56.5);
});
