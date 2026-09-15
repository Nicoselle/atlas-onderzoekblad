export type StatusWord = "VOORLOPIG" | "INCOMPLEET" | "ONBEREKENBAAR";

export type Pillars = {
  automation: number;
  utility: number;
  resilience: number;
  flex: number;
  customers: number;
  ai: number;
};

export type SnapshotRow = {
  label: string;
  value: string;
};

export type Reading = {
  title: string;
  body: string;
};

export type Company = {
  ticker: string;
  name: string;
  exchange: string;
  continent: string;
  sector: string;
  heldLayer: string;
  s: number;
  status: StatusWord;
  worldRank?: number;
  filing: string;
  run: string;
  specialSlug?: string;
  snapshot: SnapshotRow[];
  pillars: Pillars;
  business: string;
  /** Plain Dutch first line for the dossier hero. */
  plainLede?: string;
  /** How to read this note, without inventing numbers. */
  readGuide?: string;
  reading: Reading[];
  /** Extra filing-backed paragraphs. No new S. */
  depth?: Reading[];
  risks: string[];
  source: string;
};

export const PILLAR_META: { key: keyof Pillars; letter: string; label: string }[] = [
  { key: "automation", letter: "A", label: "Automatisering" },
  { key: "utility", letter: "U", label: "Utiliteit" },
  { key: "resilience", letter: "R", label: "Resilience" },
  { key: "flex", letter: "A", label: "Aanpassingsvermogen" },
  { key: "customers", letter: "K", label: "Klanten" },
  { key: "ai", letter: "+", label: "AI-plus" },
];

export const companies: Company[] = [
  {
    ticker: "PME",
    name: "Pro Medicus",
    exchange: "ASX",
    continent: "Oceanië",
    sector: "Imaging-software",
    heldLayer: "Visage imaging-software (IP)",
    s: 86.9,
    status: "VOORLOPIG",
    worldRank: 1,
    filing: "FY eind 30 jun 2025 · ASX 4E",
    run: "2026-09-09-sleeves-dieper",
    specialSlug: "2026-09-gehouden-laag",
    snapshot: [
      { label: "Boekjaar-einde", value: "30 jun 2025" },
      { label: "Omzet", value: "213,0 mln AUD" },
      { label: "Brutomarge", value: "99,9%" },
      { label: "EBIT (underlying)", value: "157,7 mln AUD" },
      { label: "Operationele kas", value: "111,3 mln AUD" },
      { label: "Vrije kasstroom / omzet", value: "52,1%" },
      { label: "OCF / omzet", value: "52,3%" },
      { label: "Kas + korte beleggingen", value: "210,7 mln AUD" },
      { label: "Schulden", value: "0,0 mln AUD" },
      { label: "Abonnementsmix (proxy)", value: "92%" },
    ],
    pillars: { automation: 96.0, utility: 100.0, resilience: 75.4, flex: 75.3, customers: 92.0, ai: 0 },
    business:
      "Pro Medicus levert radiologie-beeldvormingssoftware, met Visage als kernplatform. De productieve laag is software-IP en de Visage-stack die de issuer zelf houdt — geen hardwarepark als kernfranchise.",
    plainLede:
      "Pro Medicus maakt software waarmee ziekenhuizen scans bekijken. Het bedrijf houdt die software zelf.",
    readGuide:
      "Lees eerst de snapshot. De hoge rang komt uit software die Pro Medicus zelf houdt — niet uit het ziekenhuisapparaat. Status blijft voorlopig. Dit is geen koopadvies.",
    depth: [
      {
        title: "Wat de jaarrekening vastzet",
        body: "Boekjaar tot 30 juni 2025 (ASX 4E): omzet 213,0 mln AUD, brutomarge 99,9%, underlying EBIT 157,7 mln AUD. Operationele kas 111,3 mln AUD — ongeveer 52,3% van de omzet. Vrije kasstroom ongeveer 52,1% van de omzet. Kas plus korte beleggingen 210,7 mln AUD; schulden 0,0. Dat is de machine, niet een koersverhaal.",
      },
      {
        title: "Wat terugkomt elke maand",
        body: "De abonnementsmix-proxy staat op 92%. Lange hospital-contracten en implementaties zijn het steunpunt. Een klassieke NRR-sheet zagen we in deze run niet — daarom blijft de status voorlopig, niet omdat de filing ontbreekt.",
      },
      {
        title: "Waar het schuurt",
        body: "Concentratie op grote Amerikaanse health-systemen. Timing van nieuwe contracten. AUD/USD. Concurrentie in enterprise imaging. Eén kernplatform: Visage. Geen van die risico’s is een verkoopsignaal; het zijn filing-grenzen.",
      },
      {
        title: "Wat telt als feit",
        body: "ASX FY25 Appendix 4E / annual report (boekjaar tot 30 jun 2025). Desk-run 2026-09-09-sleeves-dieper. S blijft 86,9. Abonnementsmix ~92% is een proxy, geen classic NRR-sheet.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Radiology imaging-software blijft bij Pro Medicus (software-only). R&D en productroadmap zitten in eigen IP; hosting bij klanten of cloudpartners verandert die kern niet.",
      },
      {
        title: "Utiliteit",
        body: "De machine zet omzet om in kas: operationele kas ~52,3% van de omzet, vrije kasstroom ~52,1%, brutomarge ~99,9%, underlying EBIT-marge ~74%. Kasrijk en schuldvrij in FY25.",
      },
      {
        title: "Resilience",
        body: "Kas plus korte financiële activa ~210,7 mln AUD; schulden nul volgens FY25-filing. Geen aparte stresstest in de desk-inputs — herstel blijft voorzichtig genoteerd.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Zwaartepunt blijft één imaging-franchise (Visage); geografisch groeit Noord-Amerika sneller dan de thuismarkt. Koerswijziging hangt af van contractmix en productuitbreiding rond dezelfde kernstack.",
      },
      {
        title: "Klantparticipatie",
        body: "Visage SaaS/transaction-annuity-proxy ~92%. Classic NRR-sheet zagen we in deze run niet; lange hospital-contracten en implementaties zijn het steunpunt.",
      },
    ],
    risks: [
      "Concentratie op grote Amerikaanse health-systemen",
      "Implementatie- en timingrisico op nieuwe contracten",
      "Valutaschommelingen AUD/USD",
      "Concurrentie in enterprise imaging",
      "Afhankelijkheid van één kernplatformfranchise",
    ],
    source:
      "ASX FY25 Appendix 4E / annual report (boekjaar tot 30 jun 2025). Desk score run 2026-09-09-sleeves-dieper · Oceanië-mand.",
  },
  {
    ticker: "DHR",
    name: "Danaher",
    exchange: "NYSE",
    continent: "Noord-Amerika",
    sector: "Medtech / platform",
    heldLayer: "Consumables & service op instrumentarium",
    s: 86.5,
    status: "VOORLOPIG",
    worldRank: 2,
    filing: "FY eind 31 dec 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-gehouden-laag",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 dec 2025" },
      { label: "Omzet", value: "24,57 mld USD" },
      { label: "Brutomarge", value: "59,1%" },
      { label: "Bedrijfsresultaat", value: "4,69 mld USD" },
      { label: "Operationele kas", value: "6,42 mld USD" },
      { label: "Vrije kasstroom / omzet", value: "21,4%" },
      { label: "OCF / omzet", value: "26,1%" },
      { label: "Kas + korte beleggingen", value: "19,91 mld USD" },
      { label: "Schulden", value: "18,42 mld USD" },
      { label: "Current ratio", value: "1,87" },
      { label: "R&D-intensiteit", value: "6,5%" },
    ],
    pillars: { automation: 91.5, utility: 100.0, resilience: 65.8, flex: 83.8, customers: 100.0, ai: 0 },
    business:
      "Danaher is een life-sciences- en diagnostiekconcern. Instrumenten en verbruiksgoederen (reagens, kits, service) vormen een park-plus-aftermarketmodel: de gehouden laag zit in consumables en services op het geplaatste instrumentarium.",
    plainLede:
      "Danaher verkoopt lab-apparaten. Daarna houdt het de kits en de service die labs blijven bestellen.",
    readGuide:
      "Lees de mix, niet alleen de omzet. De rang hangt aan verbruiksgoederen en service op het geplaatste park. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Wat de 10-K vastzet",
        body: "Boekjaar tot 31 december 2025: omzet 24,57 mld USD, brutomarge 59,1%, bedrijfsresultaat 4,69 mld USD. Operationele kas 6,42 mld USD (ongeveer 26,1% van de omzet). Vrije kasstroom ongeveer 21,4% van de omzet. Kas plus korte beleggingen 19,91 mld USD; schulden 18,42 mld USD; current ratio 1,87. R&D 6,5% van de omzet.",
      },
      {
        title: "Park plus aftermarket",
        body: "Klanten blijven bestellen op het instrumentenpark. Terugkerende consumables, services en vergelijkbare stromen zijn ongeveer 82% van de mix — een aftermarket-indicatie uit de desk-run, geen nieuw cijfer. Dat is waarom de gehouden laag hier niet de eenmalige apparaatverkoop is.",
      },
      {
        title: "Waar het schuurt",
        body: "Life-sciences CapEx-cycli. Regulering en vergoeding in diagnostiek. Integratie na overnames. Geopolitiek en supply in instrumenten en reagents. In de jaarrekening staat geen aparte stresstest; herstel blijft voorzichtig.",
      },
      {
        title: "Wat telt als feit",
        body: "SEC CIK0000313616, 10-K accession 0000313616-26-000062. Desk-run 2026-09-07-aura-s-top100. S blijft 86,5. Aftermarket ~82% is een desk-indicatie, geen nieuw cijfer.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Danaher houdt zelf de instrumenten én de terugkerende laag: reagens, kits en service op het geplaatste park. De productieve aftermarket zit bij Danaher, niet alleen bij de eenmalige verkoop van een apparaat.",
      },
      {
        title: "Utiliteit",
        body: "Nuttig geld: vrije kasstroom ~21,4% van de omzet, operationele kas ~26,1%, brutomarge 59,1%. De machine levert stevige kas uit de park-plus-aftermarket.",
      },
      {
        title: "Resilience",
        body: "Er is veel kas (19,91 mld USD) naast schulden van 18,42 mld USD; de verhouding vlottende activa / korte schulden is 1,87. In de jaarrekening staat geen aparte stresstest; we houden dat voorzichtig.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Meerdere life-sciences- en diagnostiekfranchises plus een bekende overname-integratiemachine: meer ruimte om van koers te veranderen dan bij single-product SaaS.",
      },
      {
        title: "Klantparticipatie",
        body: "Klanten blijven bestellen op het instrumentenpark: terugkerende consumables, services en vergelijkbare stromen vormen een groot deel van de mix (~82% als aftermarket-indicatie).",
      },
    ],
    risks: [
      "Life-sciences CapEx-cycli",
      "Regulering en vergoeding in diagnostiek",
      "Integratierisico na overnames",
      "Geopolitiek en supply in instrumenten en reagents",
    ],
    source:
      "SEC companyfacts CIK0000313616; 10-K accession 0000313616-26-000062. Desk score run 2026-09-07-aura-s-top100.",
  },
  {
    ticker: "TECH",
    name: "Bio-Techne",
    exchange: "NASDAQ",
    continent: "Noord-Amerika",
    sector: "Life-sciences consumables",
    heldLayer: "Proteïne-reagens & consumables",
    s: 86.4,
    status: "VOORLOPIG",
    worldRank: 3,
    filing: "FY eind 30 jun 2026 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-gehouden-laag",
    snapshot: [
      { label: "Boekjaar-einde", value: "30 jun 2026" },
      { label: "Omzet", value: "1,22 mld USD" },
      { label: "Brutomarge", value: "65,8%" },
      { label: "Bedrijfsresultaat", value: "251,9 mln USD" },
      { label: "Operationele kas", value: "292,1 mln USD" },
      { label: "Vrije kasstroom / omzet", value: "21,7%" },
      { label: "OCF / omzet", value: "24,0%" },
      { label: "Kas + korte beleggingen", value: "264,7 mln USD" },
      { label: "Schulden", value: "358,5 mln USD" },
      { label: "Current ratio", value: "3,46" },
    ],
    pillars: { automation: 87.4, utility: 100.0, resilience: 74.9, flex: 76.0, customers: 100.0, ai: 0 },
    business:
      "Bio-Techne ontwikkelt en levert proteïne-reagens, diagnostische kits en instrumenten voor life-sciences en klinische labs. Consumables op het geplaatste park vormen de terugkerende laag.",
    plainLede:
      "Bio-Techne maakt reagens en kits voor labs. Labs blijven die bestellen op het park dat er al staat.",
    readGuide:
      "Lees de consumables-mix, niet alleen de omzet. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Verhaal",
        body: "Bio-Techne levert proteïne-reagens, diagnostische kits en instrumenten. De terugkerende laag is niet één kit in een koelkast, maar de machine die specialty-consumables blijft leveren. S 86,4, status voorlopig. Geen kooptips.",
      },
      {
        title: "Wat houd je?",
        body: "Als het instrument of de kit geleverd is, houdt Bio-Techne zelf de productie van reagens en kits. Consumables op het labpark zijn de kern naast R&D. Protein sciences en diagnostics geven enige breedte; specialty consumables blijven het zwaartepunt.",
      },
      {
        title: "Hoe het geld binnenkomt",
        body: "Boekjaar tot 30 juni 2026, Form 10-K: omzet 1,22 mld USD, brutomarge 65,8%, bedrijfsresultaat 251,9 mln, operationele kas 292,1 mln. Vrije kasstroom ongeveer 21,7% van de omzet. Kas plus korte beleggingen 264,7 mln tegenover schulden 358,5 mln; current ratio 3,46. Consumables zijn ongeveer 81% van de omzet.",
      },
      {
        title: "Waar het schuurt",
        body: "Onderzoeksbudgetten van klanten. Concurrentie in reagents. Supply van biologische materialen. Acquisitie-integratie. Geen aparte stresstest in de jaarrekening. Geen kooptips.",
      },
      {
        title: "Wat telt als feit",
        body: "SEC CIK0000842023, 10-K accession 0001104659-26-100322. Desk-run 2026-09-07-aura-s-top100. S blijft 86,4.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Bio-Techne houdt zelf de productie van proteïne-reagens en diagnostische kits. Consumables op het labpark zijn de operations-kern naast R&D.",
      },
      {
        title: "Utiliteit",
        body: "Vrije kasstroom ~21,7% van de omzet, operationele kas ~24,0%, brutomarge 65,8%. De machine zet specialty-consumables om in kas.",
      },
      {
        title: "Resilience",
        body: "Kas en korte beleggingen ~265 mln USD, schulden ~359 mln USD; vlottende activa / korte schulden 3,46. In de jaarrekening staat geen aparte stresstest; we houden dat voorzichtig.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Protein sciences en diagnostics geven enige segmentbreedte; specialty consumables blijven de kern.",
      },
      {
        title: "Klantparticipatie",
        body: "Consumables zijn ~81% van de omzet — labs blijven bestellen op het geplaatste park.",
      },
    ],
    risks: [
      "Onderzoeksbudgetten van klanten",
      "Concurrentie in reagents",
      "Supply van biologische materialen",
      "Acquisitie-integratie",
    ],
    source:
      "SEC companyfacts CIK0000842023; 10-K accession 0001104659-26-100322. Desk score run 2026-09-07-aura-s-top100.",
  },
  {
    ticker: "DLB",
    name: "Dolby Laboratories",
    exchange: "NYSE",
    continent: "Noord-Amerika",
    sector: "Audio-/imaging-IP",
    heldLayer: "Audio-/imaging-IP (licensing)",
    s: 85.7,
    status: "VOORLOPIG",
    worldRank: 5,
    filing: "FY eind 26 sep 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    snapshot: [
      { label: "Boekjaar-einde", value: "26 sep 2025" },
      { label: "Omzet", value: "1,35 mld USD" },
      { label: "Brutomarge", value: "88,1%" },
      { label: "Bedrijfsresultaat", value: "265,0 mln USD" },
      { label: "Operationele kas", value: "472,2 mln USD" },
      { label: "Vrije kasstroom / omzet", value: "32,3%" },
      { label: "OCF / omzet", value: "35,0%" },
      { label: "Kas + korte beleggingen", value: "702,6 mln USD" },
      { label: "Schulden", value: "0,0 mln USD" },
      { label: "Current ratio", value: "3,17" },
      { label: "Licensingmix", value: "93%" },
      { label: "R&D-intensiteit", value: "19,4%" },
    ],
    pillars: { automation: 88.7, utility: 100.0, resilience: 75.4, flex: 74.5, customers: 94.7, ai: 0 },
    business:
      "Dolby houdt audio- en imaging-IP en licentieert die aan makers van apparaten, content en streaming. Licensing is de kernmachine; producten en diensten vullen aan.",
    reading: [
      {
        title: "Automatisering",
        body: "Dolby houdt zelf de audio- en imaging-IP. Licensing is de productieve laag: geen hardwarepark nodig om de IP te laten draaien.",
      },
      {
        title: "Utiliteit",
        body: "Zeer hoge kasconversie: vrije kasstroom ~32,3% van de omzet, operationele kas ~35,0%, brutomarge 88,1%. Licensing levert stevig nuttig geld op.",
      },
      {
        title: "Resilience",
        body: "Kas ~703 mln USD, vrijwel geen schuld; vlottende activa / korte schulden 3,17. In de jaarrekening staat geen aparte stresstest; we houden dat voorzichtig.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "IP-licensing over devices, content en streaming geeft diepte in één specialisme; minder industriële multi-segment-spreiding.",
      },
      {
        title: "Klantparticipatie",
        body: "Licensing is ~93% van de omzet — structurele deelname van licensees via royalties.",
      },
    ],
    risks: [
      "Veroudering of omzeiling van IP",
      "Licentieheronderhandelingen",
      "Concentratie bij grote device-/streaming-licensees",
      "Patentgeschillen",
    ],
    source:
      "SEC companyfacts CIK0001308547; 10-K accession 0001308547-25-000007. Desk score run 2026-09-07-aura-s-top100.",
  },
  {
    ticker: "TSLA",
    name: "Tesla",
    exchange: "NASDAQ",
    continent: "Noord-Amerika",
    sector: "Auto / energie / software",
    heldLayer: "Fabrieken + FSD/OTA/connectivity/energy-control",
    s: 84.6,
    status: "VOORLOPIG",
    worldRank: 9,
    filing: "FY 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-tesla",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 dec 2025" },
      { label: "Omzet", value: "94,83 mld USD" },
      { label: "Automotive", value: "65,82 mld USD" },
      { label: "Energy", value: "12,77 mld USD" },
      { label: "Services", value: "12,53 mld USD" },
      { label: "Bedrijfsresultaat", value: "4,36 mld USD" },
      { label: "Brutomarge", value: "18,0%" },
      { label: "Vrije kasstroom / omzet", value: "6,6%" },
      { label: "Kas + korte beleggingen", value: "44,06 mld USD" },
      { label: "Schulden", value: "6,58 mld USD" },
    ],
    pillars: { automation: 95.8, utility: 49.2, resilience: 70.2, flex: 74.2, customers: 88.0, ai: 10.0 },
    business:
      "Tesla fabriceert elektrische auto’s en energieproducten in eigen fabrieken, en houdt daarboven een softwarelaag: over-the-air updates, FSD Supervised, connectiviteit en energiecontrole — ook ná verkoop of lease van het ijzer.",
    plainLede:
      "Tesla maakt auto’s en energieproducten. Daarna houdt het de software die op dat ijzer blijft draaien.",
    readGuide:
      "Lees wat bij Tesla blijft als de auto de deur uit is. Een aparte FSD-omzetregel staat niet in de 10-K. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Verhaal",
        body: "Eigen fabrieken plus een gehouden softwarelaag. Wie de auto “bezit”, blijft gebruiker van Tesla’s stack. S 84,6, status voorlopig. Geen kooptips.",
      },
      {
        title: "Wat houd je?",
        body: "Updates, FSD Supervised, connectiviteit en energiesturing op verkocht én geleased materieel. De leeswijze vraagt niet naar het stuur.",
      },
      {
        title: "Hoe het geld binnenkomt",
        body: "FY 2025: omzet 94,83 mld USD (automotive 65,82 · energy 12,77 · services 12,53). Brutomarge 18,0%. Vrije kasstroom 6,6% van de omzet. Kas 44,06 mld tegenover schulden 6,58 mld. FSD-abonnementen (1,1 mln in een IR-exhibit) zijn een telling, geen dollarlijn in de filing.",
      },
      {
        title: "Waar het schuurt",
        body: "Autovolume, prijs, incentives, concurrentie, FSD/robotaxi-execution, cyclische energy, regulering. Hardwarecycli blijven de hefboom.",
      },
      {
        title: "Wat telt als feit",
        body: "SEC Form 10-K CIK 0001318605, accession 0001628280-26-003952. S blijft 84,6. Zonder AI-plus zou S 74,6 zijn — researchvergelijking, geen kooplijst.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Eigen fabrieken plus een gehouden softwarestack. De issuer-lens vraagt niet naar het stuur, maar naar wat economisch bij Tesla blijft als het ijzer de deur uit is.",
      },
      {
        title: "Utiliteit",
        body: "Brutomarge 18,0% en vrije kasstroom 6,6% van de omzet: de machine levert kas, maar de conversie is dunner dan bij software-IP of consumables-franchises.",
      },
      {
        title: "Resilience",
        body: "Schaal en kasgeneratie zijn materieel; autovolume, prijs en incentives blijven de schokvector. AI-net van 10 voor FSD-weights en fleet-data — zonder AI-net zou S 74,6 zijn.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Drie stromen (auto, energy, services) plus software-uitbreiding op het bestaande park. Execution op FSD/robotaxi blijft de open vraag, geen feit.",
      },
      {
        title: "Klantparticipatie",
        body: "Wie de auto “bezit”, blijft gebruiker van Tesla’s stack: OTA, FSD Supervised, connectivity en energy-control op verkocht én geleased materieel.",
      },
    ],
    risks: [
      "Autovolume, prijs en incentives",
      "Concurrentie",
      "FSD/robotaxi-execution",
      "Cyclische energy",
      "Regulering",
    ],
    source:
      "SEC Form 10-K als primaire bron. Desk score run 2026-09-07-aura-s-top100. AI-net 10 voor FSD-weights en fleet-data.",
  },
  {
    ticker: "MDB",
    name: "MongoDB",
    exchange: "NASDAQ",
    continent: "Noord-Amerika",
    sector: "Database-platform",
    heldLayer: "Database- & Atlas-stack",
    s: 84.3,
    status: "VOORLOPIG",
    worldRank: 12,
    filing: "FY eind 31 jan 2026 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 jan 2026" },
      { label: "Omzet", value: "2,46 mld USD" },
      { label: "Brutomarge", value: "71,7%" },
      { label: "Bedrijfsresultaat", value: "−137,0 mln USD" },
      { label: "Operationele kas", value: "505,1 mln USD" },
      { label: "Vrije kasstroom / omzet", value: "20,3%" },
      { label: "OCF / omzet", value: "20,5%" },
      { label: "Kas + korte beleggingen", value: "1,08 mld USD" },
      { label: "Schulden", value: "0,0 mln USD" },
      { label: "Current ratio", value: "4,65" },
      { label: "NRR (31 jul 2026)", value: "122%" },
      { label: "Abonnementsmix", value: "95%" },
      { label: "R&D-intensiteit", value: "29,1%" },
    ],
    pillars: { automation: 91.4, utility: 100.0, resilience: 75.4, flex: 72.8, customers: 84.0, ai: 0 },
    business:
      "MongoDB levert een documentdatabase-platform (Community, Enterprise) en MongoDB Atlas — een managed multi-cloud database-service. De productieve laag is de database- en Atlas-stack die MongoDB zelf houdt; hosting loopt via publieke cloudproviders.",
    reading: [
      {
        title: "Automatisering",
        body: "MongoDB bouwt en houdt zelf het databaseplatform en Atlas. R&D is hoog (29,1% van de omzet): dat wijst op eigen software als kern. De servers staan bij cloudproviders, maar de productieve laag draait bij MongoDB.",
      },
      {
        title: "Utiliteit",
        body: "Vrije kasstroom ~20,3% van de omzet, operationele kas ~20,5%, brutomarge 71,7%. De machine zet omzet om in kas, ondanks een negatief bedrijfsresultaat op papier.",
      },
      {
        title: "Resilience",
        body: "Kaspositie is ruim (1,08 mld USD) en er staat vrijwel geen schuld. Vlottende activa dekken korte schulden ruim (4,65). Geen aparte stresstest; we houden dat voorzichtig.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Het zwaartepunt blijft één databasefranchise; geografisch is het breder. Koerswijziging hangt af van cloud-mix en productuitbreiding rond dezelfde kernstack.",
      },
      {
        title: "Klantparticipatie",
        body: "Klanten hangen vooral via Atlas- en cloudabonnementen (indicatief ~95% van de mix). NRR 122% per 31 jul 2026 (10-Q).",
      },
    ],
    risks: [
      "Concurrentie van cloud-native databases (hyperscalers)",
      "Afhankelijkheid van AWS/Azure/GCP voor Atlas",
      "Groei vs. winstgevendheid in de P&L",
      "Consumption-prijsmodellen",
    ],
    source:
      "SEC companyfacts CIK0001441816; 10-K accession 0001628280-26-016799. Score gecorrigeerd van 86,7 naar 84,3 op 9 sep 2026 (K 100,0 → 84,0).",
  },
  {
    ticker: "ISRG",
    name: "Intuitive Surgical",
    exchange: "NASDAQ",
    continent: "Noord-Amerika",
    sector: "Robotchirurgie",
    heldLayer: "Robotchirurgisch systeempark + instrumenten",
    s: 81.7,
    status: "VOORLOPIG",
    filing: "FY eind 31 dec 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-isrg",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 dec 2025" },
      { label: "Omzet", value: "10,06 mld USD" },
      { label: "Brutomarge", value: "66,0%" },
      { label: "Bedrijfsresultaat", value: "2,95 mld USD" },
      { label: "Operationele kas", value: "3,03 mld USD" },
      { label: "Vrije kasstroom / omzet", value: "24,7%" },
      { label: "OCF / omzet", value: "30,1%" },
      { label: "Kas + korte beleggingen", value: "5,93 mld USD" },
      { label: "Schulden", value: "0,0 mln USD" },
      { label: "Current ratio", value: "4,87" },
      { label: "R&D-intensiteit", value: "13,0%" },
    ],
    pillars: { automation: 94.0, utility: 100.0, resilience: 75.4, flex: 75.2, customers: 60.0, ai: 0 },
    business:
      "Intuitive bouwt robotische operatiesystemen (da Vinci, Ion) plus instrumenten, accessoires en diensten. Het geplaatste park plus instrumenten vormen de terugkerende laag.",
    plainLede:
      "Intuitive zet operatierobots in ziekenhuizen. Daarna houdt het de instrumenten die op dat park blijven terugkomen.",
    readGuide:
      "Lees park plus instrumenten, niet alleen de systeemverkoop. Classic NRR zagen we niet. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Verhaal",
        body: "da Vinci en Ion plus de instrumenten erop. S 81,7, status voorlopig. Geen kooptips.",
      },
      {
        title: "Wat houd je?",
        body: "Systemen, IP en instrumenten op het ziekenhuispark. Connected operations, geen eenmalige doos.",
      },
      {
        title: "Hoe het geld binnenkomt",
        body: "FY 2025: omzet 10,06 mld USD, brutomarge 66,0%, bedrijfsresultaat 2,95 mld, operationele kas 3,03 mld (ongeveer 30,1% van de omzet). Kas 5,93 mld, schulden nul, current ratio 4,87. R&D 13,0%. Retentie zit in parkgedrag, niet in een SaaS-NRR.",
      },
      {
        title: "Waar het schuurt",
        body: "Procedurevolume, ziekenhuis-investeringen, PMA-regulering, robotica-concurrentie, instrumentenprijzen en vergoeding.",
      },
      {
        title: "Wat telt als feit",
        body: "SEC CIK0001035267, 10-K accession 0001035267-26-000010. Desk-run 2026-09-07-aura-s-top100. S blijft 81,7.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Eigen systemen en IP. De operatie draait op het park dat Intuitive zelf houdt, plus de instrumentenlaag.",
      },
      {
        title: "Utiliteit",
        body: "Vrije kasstroom ~24,7% van de omzet, operationele kas ~30,1%, brutomarge 66,0%. De park-machine zet omzet om in kas.",
      },
      {
        title: "Resilience",
        body: "Kasrijk, schuldvrij, current ratio 4,87. Procedurevolume blijft de schokvector.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "da Vinci en Ion geven enige productbreedte; ziekenhuis-CapEx blijft de poort.",
      },
      {
        title: "Klantparticipatie",
        body: "K 60,0 omdat classic NRR ontbreekt. Parkproxy, geen verzonnen retentioncijfer.",
      },
    ],
    risks: [
      "Procedurevolume",
      "Ziekenhuis-CapEx",
      "PMA-regulering",
      "Robotica-concurrentie",
      "Instrumentenprijzen en reimbursement",
    ],
    source:
      "SEC CIK0001035267; 10-K accession 0001035267-26-000010. Desk score run 2026-09-07-aura-s-top100. S 81,7 ongewijzigd uit de bron.",
  },
  {
    ticker: "HEI",
    name: "HEICO",
    exchange: "NYSE",
    continent: "Noord-Amerika",
    sector: "Aerospace aftermarket",
    heldLayer: "PMA / manufacture & aftermarket-repair",
    s: 80.0,
    status: "VOORLOPIG",
    worldRank: 27,
    filing: "FY 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-hei",
    snapshot: [
      { label: "Omzet", value: "4,49 mld USD" },
      { label: "Aftermarket + repair", value: "59,6%" },
      { label: "Brutomarge", value: "39,8%" },
      { label: "Vrije-kasstroommarge", value: "19,2%" },
      { label: "Current ratio", value: "2,83" },
      { label: "Net debt / EBITDA", value: "1,61×" },
    ],
    pillars: { automation: 80.5, utility: 97.3, resilience: 66.3, flex: 72.5, customers: 89.2, ai: 0 },
    business:
      "HEICO is in deze cluster de bezitter van een productieve aftermarket-laag: Flight Support (PMA/manufacture en aftermarket/repair) en Electronic Technologies. De laag blijft bij manufacture/repair-ownership, niet bij de eenmalige OEM-verkoop.",
    plainLede:
      "HEICO maakt en herstelt vliegtuigonderdelen. Airlines blijven die aftermarket nodig hebben.",
    readGuide:
      "Lees aftermarket plus repair, niet de eenmalige OEM-verkoop. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Verhaal",
        body: "Flight Support (PMA, manufacture, aftermarket) en Electronic Technologies. Aftermarket plus repair is 59,6% van de mix. S 80,0, status voorlopig. Geen kooptips.",
      },
      {
        title: "Wat houd je?",
        body: "PMA-IP en repair-werk in eigen huis. Een aftermarket-claim op geïnstalleerd vliegtuigijzer, geen tip op één type.",
      },
      {
        title: "Hoe het geld binnenkomt",
        body: "Omzet 4,49 mld USD. Brutomarge 39,8%. Vrije-kasstroommarge 19,2%. Current ratio 2,83. Netto schuld / EBITDA 1,61×. Desk-run 2026-09-07-aura-s-top100.",
      },
      {
        title: "Waar het schuurt",
        body: "Luchtvaartcyclus, OEM-weerstand tegen PMA, FAA/EASA, bolt-on integratie. Geen aparte hersteltest in deze run.",
      },
      {
        title: "Wat telt als feit",
        body: "Live dossier HEI plus desk-run 2026-09-07-aura-s-top100. S blijft 80,0. World-rang 27.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Eigen PMA- en repair-capaciteit: HEICO houdt de aftermarket-IP en het werk zelf, in plaats van huur te betalen aan andermans park.",
      },
      {
        title: "Utiliteit",
        body: "Brutomarge 39,8% en vrije-kasstroommarge 19,2% op ~4,49 mld USD omzet. Aftermarket + repair ~59,6% van de mix.",
      },
      {
        title: "Resilience",
        body: "Current ratio 2,83 en net debt/EBITDA 1,61×. Geen aparte stresstest in de desk-run.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Twee franchises (Flight Support en Electronic Technologies) plus een bewezen bolt-on acquisitiemachine.",
      },
      {
        title: "Klantparticipatie",
        body: "Airlines en MRO’s blijven terugkomen op PMA-onderdelen en repair — een aftermarket-claim op geïnstalleerd vliegtuigijzer.",
      },
    ],
    risks: [
      "Luchtvaartcyclus en fleet-utilization",
      "OEM-pushback op PMA",
      "Regulering (FAA/EASA)",
      "Integratie van bolt-on overnames",
    ],
    source:
      "Desk score run 2026-09-07-aura-s-top100 · World-rang #27. Cluster: bezit vs huur.",
  },
  {
    ticker: "SAP",
    name: "SAP",
    exchange: "XETRA / NYSE",
    continent: "Europa",
    sector: "Enterprise-software",
    heldLayer: "ERP-/cloudapplicatielaag",
    s: 74.7,
    status: "VOORLOPIG",
    filing: "FY eind 31 dec 2025 · Form 20-F",
    run: "2026-09-09-aura-world",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 dec 2025" },
      { label: "Omzet", value: "36,80 mld EUR" },
      { label: "Brutomarge", value: "72,9%" },
      { label: "Bedrijfsresultaat", value: "9,62 mld EUR" },
      { label: "Operationele kas", value: "9,16 mld EUR" },
      { label: "Vrije kasstroom / omzet", value: "22,9%" },
      { label: "OCF / omzet", value: "24,9%" },
      { label: "Kas + geldmiddelen", value: "8,22 mld EUR" },
      { label: "Schulden (borrowings)", value: "6,15 mld EUR" },
      { label: "Current ratio", value: "1,16" },
      { label: "R&D-intensiteit", value: "18,0%" },
    ],
    pillars: { automation: 92.9, utility: 100.0, resilience: 42.5, flex: 82.5, customers: 60.0, ai: 0 },
    business:
      "SAP levert enterprise-software (ERP en cloudtoepassingen). De gehouden laag is het applicatieplatform en de datamodellen bij de klant — niet de onderliggende cloudhardware van hyperscalers.",
    reading: [
      {
        title: "Automatisering",
        body: "SAP bouwt en houdt zelf de ERP-/cloudapplicatielaag. R&D is materieel (~18% van de omzet in FY25): dat wijst op eigen software als kern, niet op urenverkoop.",
      },
      {
        title: "Utiliteit",
        body: "Vrije kasstroom ~22,9% van de omzet, operationele kas ~24,9%, brutomarge 72,9%. De machine levert stevige kas uit de softwarefranchise.",
      },
      {
        title: "Resilience",
        body: "Kas 8,22 mld EUR plus overige vlottende financiële activa 1,55 mld EUR; borrowings 6,15 mld EUR. Vlottende activa dekken korte schulden matig (1,16). Herstel blijft voorzichtig.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Breed productportfolio (ERP, cloud, industrie-oplossingen) en wereldwijde footprint. Cloud-transitie blijft het zwaartepunt van de koerswijziging.",
      },
      {
        title: "Klantparticipatie",
        body: "Retentie zit in B als bedrijfsvoering-proxy (K = 60 in de Europa-run). Cloud- en supportcontracten zijn het steunpunt.",
      },
    ],
    risks: [
      "Cloud-transitie en prijsdruk",
      "Concurrentie van hyperscalers en niche-ERP",
      "Grote-klantconcentratie en implementatierisico",
      "Geopolitiek/compliance in enterprise IT",
    ],
    source:
      "SEC companyfacts CIK0001000184; 20-F accession 0001104659-26-020058 (FY 2025, IFRS). Desk score run 2026-09-09-aura-world / Europa-mand.",
  },
  {
    ticker: "GATX",
    name: "GATX",
    exchange: "NYSE",
    continent: "Noord-Amerika",
    sector: "Railcar-lessor",
    heldLayer: "Eigendom van de leasevloot",
    s: 72.8,
    status: "VOORLOPIG",
    worldRank: 71,
    filing: "FY eind 31 dec 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-gatx",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 dec 2025" },
      { label: "Omzet", value: "1,74 mld USD" },
      { label: "Lease-omzet", value: "1,49 mld USD" },
      { label: "Rail North America", value: "68,2%" },
      { label: "Vloot (wholly owned)", value: "~156.000 railcars" },
      { label: "Renewal success", value: "87,3%" },
      { label: "Utilization (non-boxcar)", value: "99,0%" },
      { label: "Operationele kas", value: "648,1 mln USD" },
      { label: "OCF-marge", value: "37,2%" },
      { label: "Unrestricted cash", value: "743 mln USD" },
      { label: "Recourse debt", value: "~12,45 mld USD" },
      { label: "Net debt / EBITDA", value: "~10,7×" },
    ],
    pillars: { automation: 90.9, utility: 100.0, resilience: 36.3, flex: 69.5, customers: 77.6, ai: 0 },
    business:
      "GATX is de lessor-pool in de cluster: de onderneming bezit de railcar-vloot en verhuurt full-service. De productieve laag is eigendom van de vloot plus hoge renewal en utilization — bezit + lange lease, geen aftermarket op klantijzer.",
    plainLede:
      "GATX rijdt geen treinen. Het bezit de wagons en verhuurt ze full-service.",
    readGuide:
      "Lees vlootbezit en hefboom samen. Kas ná nieuwe wagons is negatief; de score leest de operationele kas. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Verhaal",
        body: "Een lessor, geen railroad. Lease-omzet 1,49 mld van 1,74 mld. S 72,8, status voorlopig. Geen kooptips.",
      },
      {
        title: "Wat houd je?",
        body: "Eigen vloot van ongeveer 156.000 railcars plus full-service. Renewal 87,3%, non-boxcar occupancy 99,0%. GABX sloot 1 januari 2026 — buiten deze FY25-P&L.",
      },
      {
        title: "Hoe het geld binnenkomt",
        body: "Operationele kas 648,1 mln (37,2% van de omzet). Onbeperkte kas 743 mln. Recourse-schuld ~12,45 mld. Portfolio-kas ná vlootinvesteringen is negatief; nut leest de OCF-marge, niet die vrije kas.",
      },
      {
        title: "Waar het schuurt",
        body: "Netto schuld / EBITDA-proxy 10,7× is het wringpunt. Rail North America 68,2%. Herstel ongetest in deze run.",
      },
      {
        title: "Wat telt als feit",
        body: "Form 10-K accession 0000040211-26-000018, CIK0000040211. Desk-run 2026-09-07-aura-s-top100. S blijft 72,8.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Eigen vloot, eigen leaseplatform. De laag is het ijzer dat GATX zelf houdt, niet de lading van de klant.",
      },
      {
        title: "Utiliteit",
        body: "Lease-omzet ~1,49 mld van 1,74 mld; OCF-marge ~37,2%. De machine zet vlootbezit om in terugkerende huur.",
      },
      {
        title: "Resilience",
        body: "Net debt/EBITDA ~10,7× — de bindende constraint. Herstel staat op 20 (ongetest). Hoge A, lage R: typisch voor een levered lessor.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Rail North America 68,2%; geografische en assetmix-verschuiving is mogelijk, maar de kern blijft railcars.",
      },
      {
        title: "Klantparticipatie",
        body: "Renewal success 87,3% en non-boxcar utilization 99% — klanten blijven op de vloot.",
      },
    ],
    risks: [
      "Hoge hefboom (net debt/EBITDA)",
      "Rente- en refinancingrisico",
      "Residual value van de vloot",
      "Cyclus in North American rail",
    ],
    source: "Desk score run 2026-09-07-aura-s-top100 · World-rang #71. Form 10-K accession 0000040211-26-000018.",
  },
  {
    ticker: "ASML",
    name: "ASML",
    exchange: "AEX / NASDAQ",
    continent: "Europa",
    sector: "Lithografie",
    heldLayer: "EUV-/DUV-lithografie + installed base/service",
    s: 70.7,
    status: "VOORLOPIG",
    filing: "FY eind 31 dec 2025 · Form 20-F",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-asml",
    snapshot: [
      { label: "Boekjaar-einde", value: "31 dec 2025" },
      { label: "Omzet", value: "32,67 mld EUR" },
      { label: "Brutowinst", value: "17,26 mld EUR" },
      { label: "Bedrijfsresultaat", value: "11,30 mld EUR" },
      { label: "Nettowinst", value: "9,61 mld EUR" },
      { label: "Operationele kas", value: "12,66 mld EUR" },
      { label: "R&D", value: "4,70 mld EUR" },
      { label: "RPO", value: "46,50 mld EUR" },
      { label: "Brutomarge", value: "~52,8%" },
      { label: "FCF / omzet", value: "~33,9%" },
      { label: "OCF / omzet", value: "~38,7%" },
      { label: "Aftermarket-proxy", value: "~28%" },
      { label: "Current ratio", value: "~1,53" },
      { label: "ND / EBITDA", value: "~0,50×" },
    ],
    pillars: { automation: 96.0, utility: 100.0, resilience: 60.5, flex: 75.0, customers: 9.0, ai: 0 },
    business:
      "ASML bouwt lithografiesystemen waarmee chipfabrieken circuits op wafers schrijven. De gehouden laag is EUV-/DUV plus service op de installed base — niet de chipvraag zelf.",
    plainLede:
      "ASML maakt de machines waarmee chipfabrieken patronen schrijven. Daarna houdt het de service op die machines.",
    readGuide:
      "Cijfers in euro uit de 20-F. Klanten-score 9,0 is concentratie bij weinig fabs, geen oordeel over service. Status voorlopig. Geen koopadvies.",
    depth: [
      {
        title: "Verhaal",
        body: "De schrijfmachine van de fab, plus installed base en service. S 70,7, status voorlopig. Geen kooptips.",
      },
      {
        title: "Wat houd je?",
        body: "EUV, DUV, upgrades (High-NA) en aftermarket. Geen claim op TSMC’s, Intels of Samsungs chipvolumes.",
      },
      {
        title: "Hoe het geld binnenkomt",
        body: "FY 2025, euro: omzet 32,67 mld, bedrijfsresultaat 11,30 mld, operationele kas 12,66 mld, R&D 4,70 mld, RPO 46,50 mld. Desk-run: FCF/omzet ~33,9%, aftermarket-proxy ~28%. Sommige kaslabels in de desk-snapshot staan als USD; companyfacts is euro — geen conversie, primaire cijfers blijven euro.",
      },
      {
        title: "Waar het schuurt",
        body: "Fab-investeringscyclus, exportcontrole, single-source in de EUV-keten, klantconcentratie (K 9,0). S blijft 70,7.",
      },
      {
        title: "Wat telt als feit",
        body: "Form 20-F accession 0001628280-26-011378, CIK 0000937966. Desk-run 2026-09-07-aura-s-top100. S ongemoeid 70,7.",
      },
    ],
    reading: [
      {
        title: "Automatisering",
        body: "Eigen lithografie-IP en systemen. De productieve laag is de scanner plus service, niet de foundry.",
      },
      {
        title: "Utiliteit",
        body: "Hoge kasconversie op classic FCF/OCF-lezing (U 100). Aftermarket-proxy ~28% van de mix.",
      },
      {
        title: "Resilience",
        body: "Kasrijk in absolute zin, R 60,5. Cyclus en geopolitiek blijven de schok.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "High-NA en installed-base upgrades, met lange levertijden. A-flex 75,0.",
      },
      {
        title: "Klantparticipatie",
        body: "K 9,0 door concentratie bij weinig fabs. Clusterrisico, geen verzonnen NRR.",
      },
    ],
    risks: [
      "Semicon-capexcyclus",
      "Exportcontrole en geopolitiek",
      "Single-source in de EUV-keten",
      "Klantconcentratie (TSMC, Intel, Samsung)",
    ],
    source:
      "SEC companyfacts CIK0000937966; 20-F accession 0001628280-26-011378. Desk score run 2026-09-07-aura-s-top100. S 70,7 ongewijzigd uit de bron. Primaire cijfers in EUR.",
  },
  {
    ticker: "URI",
    name: "United Rentals",
    exchange: "NYSE",
    continent: "Noord-Amerika",
    sector: "Equipment rental",
    heldLayer: "Rental-park (korte huur)",
    s: 56.5,
    status: "VOORLOPIG",
    worldRank: 163,
    filing: "FY 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-industrials-cluster",
    snapshot: [
      { label: "Omzet", value: "16,1 mld USD" },
      { label: "Equipment rentals", value: "85,8%" },
      { label: "Key accounts", value: "69%" },
      { label: "Industrial / construction", value: "~48% / ~48%" },
      { label: "Brutomarge", value: "~38,2%" },
      { label: "FCF-marge", value: "~4,1%" },
      { label: "Current ratio", value: "0,94" },
      { label: "Net debt / EBITDA", value: "~1,92×" },
    ],
    pillars: { automation: 84.0, utility: 30.8, resilience: 25.3, flex: 75.0, customers: 81.7, ai: 0 },
    business:
      "United Rentals is de korte-huurpool: eigen vloot, maar de productieve laag staat of valt met utilization en capex-cyclus, niet met een meerjarige aftermarket-claim op geïnstalleerd klantijzer.",
    reading: [
      {
        title: "Automatisering",
        body: "Schaal van een eigen rental-park. De operatie is gedigitaliseerd; de laag is het park zelf, dat elke dag opnieuw moet worden ingezet.",
      },
      {
        title: "Utiliteit",
        body: "FCF-marge ~4,1% na fleet-capex: de machine levert omzet, maar nuttig geld na vervanging van het ijzer is dun. U 30,8 is de knip.",
      },
      {
        title: "Resilience",
        body: "Current ratio 0,94; net debt/EBITDA ~1,92×. R 25,3 — utilization- en capex-schokken bijten sneller dan bij aftermarket-bezit.",
      },
      {
        title: "Aanpassingsvermogen",
        body: "Industrial en construction elk ~48%; specialty-mix en key accounts (69%) geven enige stuurbaarheid.",
      },
      {
        title: "Klantparticipatie",
        body: "Key accounts 69% — terugkerende huurders, maar de relatie is korte inzet, geen annuity op klantijzer.",
      },
    ],
    risks: [
      "Utilization en bouwcyclus",
      "Fleet-capex die FCF dun houdt",
      "Prijsdruk in rental",
      "Current ratio onder 1",
    ],
    source: "Desk score run 2026-09-07-aura-s-top100 · World-rang #163. Cluster: bezit vs huur.",
  },
];

export const companiesByTicker = Object.fromEntries(
  companies.map((c) => [c.ticker.toLowerCase(), c]),
) as Record<string, Company>;

export function getCompany(ticker: string) {
  return companiesByTicker[ticker.toLowerCase()];
}

export function rankedCompanies() {
  return [...companies].sort((a, b) => b.s - a.s);
}

export function neighbors(ticker: string) {
  const list = rankedCompanies();
  const i = list.findIndex((c) => c.ticker.toLowerCase() === ticker.toLowerCase());
  if (i < 0) return { prev: undefined, next: undefined };
  return { prev: list[i - 1], next: list[i + 1] };
}

export const etalageTickers = ["PME", "DHR", "TECH"] as const;
/** Cover samples — featured depth, not extra etalage rows. */
export const sampleTickers = ["HEI", "GATX"] as const;
export const mandenTickers = ["SAP", "DLB"] as const;
