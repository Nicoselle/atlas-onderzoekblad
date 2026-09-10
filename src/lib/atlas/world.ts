export type Continent = {
  id: string;
  name: string;
  names: number;
  scored: number;
  incomplete: number;
  note: string;
};

export type Basket = {
  id: string;
  name: string;
  names: number;
  scored: number;
  incomplete?: number;
  note: string;
  tickers?: string[];
};

export const continents: Continent[] = [
  {
    id: "europa",
    name: "Europa",
    names: 25,
    scored: 19,
    incomplete: 6,
    note: "Incl. SAP. Essay via Meer.",
  },
  {
    id: "azie",
    name: "Azië",
    names: 22,
    scored: 11,
    incomplete: 11,
    note: "Japan, Taiwan, Korea, China/HK.",
  },
  {
    id: "oceanie",
    name: "Oceanië",
    names: 23,
    scored: 21,
    incomplete: 2,
    note: "ASX/NZ + under-radar. Incl. PME.",
  },
  {
    id: "afrika",
    name: "Afrika",
    names: 18,
    scored: 16,
    incomplete: 2,
    note: "Filings waar toereikend.",
  },
  {
    id: "latam",
    name: "LatAm",
    names: 14,
    scored: 12,
    incomplete: 2,
    note: "Zuid-Amerika, incl. mining-overlap.",
  },
  {
    id: "noord-amerika",
    name: "Noord-Amerika",
    names: 93,
    scored: 88,
    incomplete: 5,
    note: "NYSE/NASDAQ-kern van de Top50.",
  },
];

export const baskets: Basket[] = [
  {
    id: "mijnbouw",
    name: "Mijnbouw",
    names: 22,
    scored: 19,
    incomplete: 3,
    note: "Streaming/royalty, goud/koper, diversified, lithium/RE, equipment. Incl. NEM · BHP · RIO · AEM.",
  },
  {
    id: "software",
    name: "Software",
    names: 38,
    scored: 38,
    note: "SaaS gehouden laag. Dossiers MDB · SAP plus ZS · WDAY · ADSK.",
    tickers: ["MDB", "SAP"],
  },
  {
    id: "softwarelaag",
    name: "Softwarelaag",
    names: 20,
    scored: 20,
    note: "Wie software/data/IP houdt versus huur/uren. Incl. DLB · TSLA.",
    tickers: ["DLB", "TSLA", "MDB"],
  },
  {
    id: "landbouw",
    name: "Landbouw",
    names: 24,
    scored: 20,
    incomplete: 4,
    note: "Equipment, meststoffen, zaden, precision, irrigatie, diergezondheid, processing.",
  },
  {
    id: "energie",
    name: "Energie",
    names: 16,
    scored: 14,
    incomplete: 2,
    note: "Olie-gas / uranium / LNG — held productive layer. Tip-vrij · VOORLOPIG.",
  },
  {
    id: "crypto",
    name: "Crypto (equity)",
    names: 19,
    scored: 17,
    incomplete: 2,
    note: "Exchange, payments, brokerage, software+treasury, miners/HPC. Buiten SCREENER/LEDGER. Tip-ban.",
  },
  {
    id: "coins",
    name: "Coins / protocol",
    names: 7,
    scored: 0,
    note: "BTC · ETH · SOL · AVAX · LINK · DOT · ATOM. Protocol-leeswijze · géén AURA/S uit filings.",
  },
  {
    id: "industrieel",
    name: "Industrieel",
    names: 19,
    scored: 19,
    note: "Aerospace/aftermarket, railcar-lessors, rental, OEM. Incl. HEI · GATX · URI.",
    tickers: ["HEI", "GATX", "URI"],
  },
  {
    id: "zorg",
    name: "Zorg",
    names: 20,
    scored: 20,
    note: "Life tools, robotchirurgie, diagnostiek. Incl. PME · DHR · TECH.",
    tickers: ["PME", "DHR", "TECH"],
  },
];

export const ISSUE_DATE = "2026-09-10";
export const SCORED_TOTAL = 195;
export const INCOMPLETE_TOTAL = 27;

export function getBasket(id: string) {
  return baskets.find((b) => b.id === id);
}

export function getContinent(id: string) {
  return continents.find((c) => c.id === id);
}

export type WorldPlace =
  | { kind: "basket"; item: Basket }
  | { kind: "continent"; item: Continent };
