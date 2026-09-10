export type EditionBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Edition = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  date: string;
  theme: string;
  image?: string;
  imageAlt?: string;
  relatedTickers?: string[];
  body: EditionBlock[];
};

export const editions: Edition[] = [
  {
    slug: "2026-09-industrials-cluster",
    kicker: "Editie · research",
    title: "Industrials-cluster · bezit vs huur",
    dek: "HEI 80,0 · GATX 72,8 · URI 56,5 — waar blijft de productieve laag: in eigen aftermarket-ijzer, in een leasevloot, of in een rental-park?",
    date: "2026-09-10",
    theme: "Industrieel · bezit vs huur",
    image: "/art/industrials.jpg",
    imageAlt: "Kopergravure van turbine, railcar en hijskraan",
    relatedTickers: ["HEI", "GATX", "URI"],
    body: [
      {
        type: "p",
        text: "De clustervraag is niet “wie is de beste koop”, maar: waar blijft de productieve laag — in eigen aftermarket-ijzer, in een leasevloot, of in een rental-park dat elke dag opnieuw moet worden ingezet? Drie namen, drie antwoorden. Tip-vrij. Status VOORLOPIG. Geen kooplijst.",
      },
      { type: "h", text: "HEICO — de bezitter" },
      {
        type: "p",
        text: "HEICO is in deze cluster de bezitter van een productieve aftermarket-laag: Flight Support (onder meer PMA/manufacture en aftermarket/repair) en Electronic Technologies. Aftermarket plus repair is 59,6% van de mix; brutomarge 39,8%; vrije-kasstroommarge 19,2%. S = 80,0 VOORLOPIG (World-rang #27).",
      },
      { type: "h", text: "GATX — bezit plus lange lease" },
      {
        type: "p",
        text: "GATX is de lessor-pool: de onderneming bezit de railcar-vloot en verhuurt full-service. Lease-omzet ~1,49 mld van 1,74 mld; renewal success 87,3%; non-boxcar utilization 99%. S = 72,8 VOORLOPIG. De knip zit in Resilience: net debt/EBITDA ~10,7×, herstel ongetest.",
      },
      { type: "h", text: "United Rentals — korte huur" },
      {
        type: "p",
        text: "United Rentals is de korte-huurpool: eigen vloot, maar de productieve laag staat of valt met utilization en capex-cyclus, niet met een meerjarige aftermarket-claim op geïnstalleerd klantijzer. Equipment rentals 85,8% van ~16,1 mld omzet; FCF-marge ~4,1%. S = 56,5 VOORLOPIG (World-rang #163).",
      },
      { type: "h", text: "Dwars gelezen" },
      {
        type: "quote",
        text: "HEICO houdt de laag dicht bij manufacture/repair-ownership; GATX houdt de laag via eigendom van de leasevloot met hoge renewal; URI houdt de laag via schaal van een rental-park waarvan de kas na fleet-capex dunner is.",
      },
      {
        type: "p",
        text: "Verschil zit in U en R (hoog A bij alle drie: 80–91). Geen S ≥ 90. Overal status VOORLOPIG. Atlas noteert de structuur. Geen tip. Geen koersdoel.",
      },
      {
        type: "list",
        items: [
          "HEI · S 80,0 · A 80,5 · U 97,3 · R 66,3 · A-flex 72,5 · K 89,2 · AI+ 0",
          "GATX · S 72,8 · A 90,9 · U 100,0 · R 36,3 · A-flex 69,5 · K 77,6 · AI+ 0",
          "URI · S 56,5 · A 84,0 · U 30,8 · R 25,3 · A-flex 75,0 · K 81,7 · AI+ 0",
        ],
      },
    ],
  },
  {
    slug: "2026-09-tesla",
    kicker: "Speciale",
    title: "Tesla · gehouden softwarelaag",
    dek: "Issuer-lens: fabrieken plus FSD, OTA, connectivity en energy-control — ook ná verkoop of lease van het ijzer. World #9. Tip-vrij.",
    date: "2026-09-10",
    theme: "Gehouden softwarelaag",
    image: "/art/tesla.jpg",
    imageAlt: "Kopergravure van een autofabriek met softwarelaag",
    relatedTickers: ["TSLA"],
    body: [
      {
        type: "p",
        text: "Tesla is een onderneming die elektrische auto’s en energieproducten fabriceert in eigen fabrieken, en daarboven een softwarelaag houdt. Dit is research onder tip-ban, status VOORLOPIG, filing-first — geen tipstroom en geen koersdoel.",
      },
      { type: "h", text: "De productieve laag, niet het stuur" },
      {
        type: "quote",
        text: "Wie een aandeel Tesla houdt, houdt daarmee een claim op die onderneming: niet op één auto in de garage, maar op de machine die fabrieken én die gehouden stack samen runt.",
      },
      {
        type: "p",
        text: "De vraag is wat er economisch bij Tesla blijft als het ijzer de deur uit is. Het antwoord uit de filing is dat Tesla over-the-air updates, FSD Supervised, connectivity en energy-control houdt op verkocht én geleased materieel, zodat wie de auto “bezit” gebruiker blijft van Tesla’s stack.",
      },
      { type: "h", text: "Hoe het geld binnenkomt" },
      {
        type: "p",
        text: "Omzet 94,83 mld USD: automotive 65,82, energy 12,77, services 12,53. Brutomarge 18,0%. Vrije kasstroom 6,6% van de omzet. De machine levert kas, maar de conversie is dunner dan bij software-IP of consumables-franchises — dat is de U-knip (49,2).",
      },
      { type: "h", text: "Score" },
      {
        type: "p",
        text: "S = 84,6 VOORLOPIG. Pijlers: A 95,8 · U 49,2 · R 70,2 · A-flex 74,2 · K 88,0 · AI+ 10,0 (FSD-weights en fleet-data). Zonder AI-net zou S 74,6 zijn. Meetlat voor de issuer-lens: wie houdt de productieve laag wanneer de klant het ijzer “bezit”?",
      },
      { type: "h", text: "Waar het schuurt" },
      {
        type: "list",
        items: [
          "Autovolume, prijs en incentives",
          "Concurrentie",
          "FSD/robotaxi-execution",
          "Cyclische energy",
          "Regulering",
        ],
      },
      {
        type: "p",
        text: "Wat telt als feit: primair SEC Form 10-K. Geen tip. Geen koersdoel. Status VOORLOPIG.",
      },
    ],
  },
  {
    slug: "2026-09-gehouden-laag",
    kicker: "Cover",
    title: "Gehouden laag",
    dek: "Wie de productieve laag houdt, blijft economisch actor. Blad-etalage: PME · DHR · TECH — S dalend, status VOORLOPIG.",
    date: "2026-09-10",
    theme: "Gehouden productieve laag",
    image: "/art/machines.jpg",
    imageAlt: "Kopergravure van machines en een drukpers",
    relatedTickers: ["PME", "DHR", "TECH"],
    body: [
      {
        type: "p",
        text: "Atlas leest jaarrekeningen met één vraag: houdt deze onderneming de laag die haar afnemer elke maand nodig heeft — of betaal je huur aan andermans park? Otium is het doel; AURA/S is hoe we dat lezen.",
      },
      {
        type: "quote",
        text: "Cover-belofte: wie de productieve laag houdt, blijft economisch actor. Methode, wereldkaart en top-S etalage — tip-vrij, VOORLOPIG.",
      },
      { type: "h", text: "Drie namen, drie lagen" },
      {
        type: "p",
        text: "Pro Medicus houdt Visage imaging-IP (S 86,9). Danaher houdt consumables en service op het geplaatste instrumentarium (S 86,5). Bio-Techne houdt proteïne-reagens en consumables op het labpark (S 86,4). Drie verschillende industrieën, dezelfde leesvraag.",
      },
      {
        type: "p",
        text: "Hoogste S met liquid notering plus dossier eerst — dat is onderzoeksrang, geen modelportefeuille. Status blijft VOORLOPIG: we lezen de jaarrekening nog met enkele aannames.",
      },
      { type: "h", text: "Wat dit blad nooit doet" },
      {
        type: "list",
        items: [
          "Geen tipstroom",
          "Geen koersdoelen",
          "Geen kooplijst of modelportefeuille",
          "Geen omrekening uit een oude 3–15-poort naar S",
        ],
      },
    ],
  },
  {
    slug: "2026-09-marktkijk-1-3m",
    kicker: "Editie · research",
    title: "Marktkijk 1–3 maanden",
    dek: "Research lens op World-rang, gehouden laag en weekstructuur — tip-vrij, VOORLOPIG. Trendwissel spreekt alleen wanneer het beeld kantelt.",
    date: "2026-09-10",
    theme: "Korte-horizon research lens",
    image: "/art/ledger.jpg",
    imageAlt: "Kopergravure van een open jaarrekening",
    relatedTickers: ["HEI", "PME", "DHR"],
    body: [
      {
        type: "p",
        text: "AURA/S kijkt jaren: blijft de onderneming eigenaar van de productieve laag? Trendwissel kijkt weken tot maanden: is de bestaande markttrend nog intact? De korte lens triggert geen tip. Zij zegt enkel of het beeld kantelt, nadat AURA/S de naam al de moeite waard achtte om te volgen.",
      },
      { type: "h", text: "Twee lenzen" },
      {
        type: "quote",
        text: "Twee lenzen: de jaarrekening voor eigenaarschap, de grafiek voor een trend die breekt of herstelt. Onderzoek — nooit als bevel.",
      },
      {
        type: "p",
        text: "Wel: structuur van hogere of lagere bodems en toppen (eerst de weekgrafiek). Wel: eenvoudige moving averages (20- en 50-weken) als contextlijn, nooit als koopknop. Niet: “koopt onder X” of “verkoopt boven Y”. Niet: een modelportefeuille.",
      },
      { type: "h", text: "Casus: HEICO, weekstructuur" },
      {
        type: "p",
        text: "Illustratief archiefvoorbeeld, vastgezet op 4 september 2026. Bodem rond 20 april (~264), daarna hogere bodems tot een piek op 10 augustus (~375). Vier weekslots nadien lager; slot van 4 september ~325, onder het 20-weken gemiddelde. Dat is een wissel: van hogere toppen en bodems naar een reeks lagere weekslots. Atlas noteert de wissel. Geen tip. Geen koersdoel.",
      },
      {
        type: "p",
        text: "De grafiek zegt wanneer het beeld kantelt. De cijfers zeggen of de onderneming die laag überhaupt waard is om te volgen. HEICO staat op S 80,0 VOORLOPIG — aftermarket en repair.",
      },
    ],
  },
];

export const embargo = [
  { date: "2026-09-11", name: "IDEXX" },
  { date: "2026-09-14", name: "Trinity" },
  { date: "2026-09-15", name: "HEICO" },
  { date: "2026-09-16", name: "West" },
  { date: "2026-09-17", name: "STERIS" },
  { date: "2026-09-18", name: "GE Aerospace" },
  { date: "2026-09-21", name: "TransDigm" },
  { date: "2026-09-22", name: "Cadence" },
  { date: "2026-09-23", name: "Autodesk" },
  { date: "2026-09-24", name: "Adeia" },
  { date: "2026-09-25", name: "Zoom" },
  { date: "2026-09-28", name: "Disco" },
  { date: "2026-09-29", name: "Applied Materials" },
  { date: "2026-09-30", name: "Lam Research" },
  { date: "2026-10-01", name: "KLA" },
];

export function getEdition(slug: string) {
  return editions.find((e) => e.slug === slug);
}
