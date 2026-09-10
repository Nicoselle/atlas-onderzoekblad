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
  reading: Reading[];
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
      { label: "Omzet", value: "94,83 mld USD" },
      { label: "Automotive", value: "65,82 mld USD" },
      { label: "Energy", value: "12,77 mld USD" },
      { label: "Services", value: "12,53 mld USD" },
      { label: "Brutomarge", value: "18,0%" },
      { label: "Vrije kasstroom / omzet", value: "6,6%" },
    ],
    pillars: { automation: 95.8, utility: 49.2, resilience: 70.2, flex: 74.2, customers: 88.0, ai: 10.0 },
    business:
      "Tesla fabriceert elektrische auto’s en energieproducten in eigen fabrieken, en houdt daarboven een softwarelaag: over-the-air updates, FSD Supervised, connectiviteit en energiecontrole — ook ná verkoop of lease van het ijzer.",
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
    specialSlug: "2026-09-industrials-cluster",
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
    filing: "FY 2025 · Form 10-K",
    run: "2026-09-07-aura-s-top100",
    specialSlug: "2026-09-industrials-cluster",
    snapshot: [
      { label: "Omzet", value: "1,74 mld USD" },
      { label: "Lease-omzet", value: "1,49 mld USD" },
      { label: "Rail North America", value: "68,2%" },
      { label: "Renewal success", value: "87,3%" },
      { label: "Utilization (non-boxcar)", value: "99%" },
      { label: "OCF-marge", value: "~37,2%" },
      { label: "Net debt / EBITDA", value: "~10,7×" },
    ],
    pillars: { automation: 90.9, utility: 100.0, resilience: 36.3, flex: 69.5, customers: 77.6, ai: 0 },
    business:
      "GATX is de lessor-pool in de cluster: de onderneming bezit de railcar-vloot en verhuurt full-service. De productieve laag is eigendom van de vloot plus hoge renewal en utilization — bezit + lange lease, geen aftermarket op klantijzer.",
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
    source: "Desk score run 2026-09-07-aura-s-top100 · World-rang #71. Cluster: bezit vs huur.",
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
export const mandenTickers = ["SAP", "DLB"] as const;
