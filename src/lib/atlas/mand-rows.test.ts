import assert from "node:assert/strict";
import { test } from "node:test";
import { deskRowsForSlug, MAND_ROSTERS, previewTickers } from "./mand-rows.ts";

const FILLED = [
  "europa",
  "mijnbouw",
  "software",
  "softwarelaag",
  "industrieel",
  "landbouw",
  "energie",
  "azie",
  "oceanie",
  "latam",
] as const;

test("filled mand routes expose a desk table", () => {
  for (const slug of FILLED) {
    const rows = deskRowsForSlug(slug);
    assert.ok(rows.length > 0, slug);
  }
});

test("hub preview tickers come from scored desk rows", () => {
  const europa = previewTickers("europa", 8);
  assert.deepEqual(europa, ["DSY", "ATCO.A", "NVO", "SAP", "RELX", "NVS", "SAND", "ARM"]);
  const mijnbouw = previewTickers("mijnbouw", 4);
  assert.deepEqual(mijnbouw, ["FNV", "WPM", "B", "SAND"]);
});

test("coins stay without invented S", () => {
  const coins = MAND_ROSTERS.coins;
  assert.ok(coins);
  assert.equal(coins.length, 7);
  assert.ok(coins.every((row) => row.s === null));
});
