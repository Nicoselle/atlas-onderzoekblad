import assert from "node:assert/strict";
import { test } from "node:test";
import { getCompany, rankedCompanies } from "./companies.ts";
import {
  BUTTONDOWN_PLACEHOLDER,
  buttonDownEmbedAction,
  isButtonDownWired,
  OTIUM_BRIDGE,
} from "./copy.ts";
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

test("does not invent or change S values", () => {
  const ranked = rankedCompanies();
  assert.equal(ranked[0]?.ticker, "PME");
  assert.equal(ranked[0]?.s, 86.9);
  assert.equal(ranked.find((c) => c.ticker === "URI")?.s, 56.5);
});
