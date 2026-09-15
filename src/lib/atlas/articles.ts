import type { Edition } from "./edition-types.ts";

/** Full speciales ported from here.now desk HTML. S copied, not recomputed. */
export const speciales: Edition[] = [
  {
    slug: "2026-09-gatx",
    kicker: "Speciale",
    title: "GATX · de wagons, niet de treinen",
    dek: "GATX rijdt geen treinen. Het bezit de railcar-vloot en verhuurt die full-service. S 72,8, status voorlopig.",
    date: "2026-09-15",
    theme: "Leasevloot · bezit plus lange huur",
    image: "/art/industrials.jpg",
    imageAlt: "Kopergravure van turbine, railcar en hijskraan",
    relatedTickers: ["GATX", "HEI", "URI"],
    body: [
      {
        type: "p",
        text: "De luie lezing noemt GATX een spoorwegbedrijf. De jaarrekening tekent iets anders: een lessor. Het bedrijf bezit de wagons en verhuurt ze full-service — onderhoud, belasting, extra diensten. S 72,8, status voorlopig. Dit is onderzoek.",
      },
      { type: "h", text: "Verhaal" },
      {
        type: "quote",
        text: "GATX Corporation, opgericht in 1898, is een wereldwijde railcar-lessor, met vloten in Noord-Amerika, Europa en India.",
      },
      {
        type: "p",
        text: "Boekjaar tot 31 december 2025: omzet 1,74 mld USD. Lease-omzet 1,49 mld — ongeveer 85,4 procent. Rail North America 68,2 procent van die omzet. Wie de claim op GATX houdt, houdt eigendom van de leasevloot plus renewal en occupancy — geen dienstregeling, en geen korte rental-pool.",
      },
      { type: "h", text: "Wat houd je?" },
      {
        type: "p",
        text: "De vraag is wat er economisch bij GATX blijft als de wagon de lease uitdraait. Het antwoord uit de 10-K: eigendom van een eigen vloot van ongeveer 156.000 railcars — tank, vracht, locomotieven — plus full-service. Segmenten: Rail North America, Rail International, een kleiner Engine Leasing, Other.",
      },
      {
        type: "p",
        text: "Dat is geen claim op één jaargang vrachtvolumes. Wel op de vloot die blijft staan, en op de hernieuwingen die haar vullen.",
      },
      { type: "h", text: "Hoe het geld binnenkomt" },
      {
        type: "p",
        text: "Form 10-K (accession 0000040211-26-000018) en SEC companyfacts CIK0000040211: omzet 1,74 mld USD, lease 1,49 mld. Operationele kas 648,1 mln USD — 37,2 procent van de omzet. Dat is de lessor-kasproxy. Onbeperkte kas 743 mln USD. Recourse-schuld ongeveer 12,45 mld USD.",
      },
      {
        type: "p",
        text: "Kas ná vlootinvesteringen is negatief. De score hangt daar bewust niet aan. Utiliteit leest de operationele-kasmarge, niet de vrije kas na nieuwe wagons. Dat hardop: het is een leeswijze, geen vrije-kas-anker.",
      },
      { type: "h", text: "Waar het schuurt" },
      {
        type: "quote",
        text: "Utilization 99,0 procent · renewal 87,3 procent — en toch schokbestendigheid 36,3 op een schuld/EBITDA-proxy van 10,7×.",
      },
      {
        type: "p",
        text: "De non-boxcar-vloot staat vol. Klanten blijven. Tegelijk wringt de hefboom: netto schuld / EBITDA-proxy 10,7×. Recourse-schuld 12,45 mld tegenover 743 mln kas. Schokbestendigheid 36,3 is het wringpunt — geen drama, wel de keten: hoge bezetting financiert een zware schuld.",
      },
      {
        type: "p",
        text: "GABX (joint venture) sloot op 1 januari 2026. Die closing zit buiten deze FY25-winst-en-verliesrekening. Wat je in 2025 leest, is de oude vloot, niet de nieuwe JV. Rail North America blijft concentratie. Aanpassingsvermogen 69,5. Een aparte hersteltest zagen we in deze run niet.",
      },
      { type: "h", text: "Score" },
      {
        type: "p",
        text: "S 72,8, status voorlopig. Overgenomen uit de desk-run 2026-09-07-aura-s-top100 — niet herberekend. Automatisering 90,9 · nut 100,0 · schokbestendigheid 36,3 · aanpassingsvermogen 69,5 · klanten 77,6 · AI-plus 0. Nut rust op de lessor-kasmarge 37,2 procent. Klanten leunen op renewal en occupancy, zonder classic NRR.",
      },
      { type: "h", text: "Wat telt als feit" },
      {
        type: "p",
        text: "Primair: Form 10-K FY eind 31 december 2025 (CIK0000040211, accession 0000040211-26-000018) plus desk-run 2026-09-07-aura-s-top100. Utilization 99,0 procent en renewal 87,3 procent staan in die 10-K. De 10,7×-hefboom is een score-proxy uit de desk-run, geen aparte 10-K-regel onder dat label. S blijft 72,8.",
      },
    ],
  },
  {
    slug: "2026-09-hei",
    kicker: "Speciale",
    title: "HEICO · aftermarket op het vliegtuig",
    dek: "HEICO houdt PMA-onderdelen en repair, plus niche-elektronica. Aftermarket plus repair is 59,6 procent van de mix. S 80,0, status voorlopig.",
    date: "2026-09-15",
    theme: "Aerospace aftermarket",
    image: "/art/industrials.jpg",
    imageAlt: "Kopergravure van turbine, railcar en hijskraan",
    relatedTickers: ["HEI", "GATX", "URI"],
    body: [
      {
        type: "p",
        text: "HEICO werkt in luchtvaart en defensie. Twee franchises: Flight Support (PMA, manufacture, aftermarket) en Electronic Technologies. De laag die terugkomt is aftermarket en repair op niche-onderdelen — niet één vliegtuigtype. S 80,0, status voorlopig. Onderzoek.",
      },
      { type: "h", text: "Verhaal" },
      {
        type: "p",
        text: "Wie de claim op HEICO houdt, houdt geen eindproduct bij de klant. Hij houdt de machine die PMA-onderdelen maakt en herstelt, plus een elektronica-franchise. In het industrials-cluster is HEICO de bezitter: de laag blijft bij manufacture en repair, niet bij de eenmalige OEM-verkoop.",
      },
      { type: "h", text: "Wat houd je?" },
      {
        type: "p",
        text: "De vraag is wat er economisch bij HEICO blijft als het onderdeel in het vliegtuig zit. Aftermarket plus repair is ongeveer 59,6 procent van de mix. Dat is een aftermarket-claim op geïnstalleerd vliegtuigijzer: airlines en MRO’s komen terug. PMA en manufacture zitten in eigen huis.",
      },
      { type: "h", text: "Hoe het geld binnenkomt" },
      {
        type: "p",
        text: "Desk-run 2026-09-07-aura-s-top100, Form 10-K: omzet 4,49 mld USD. Brutomarge 39,8 procent. Vrije-kasstroommarge 19,2 procent. Current ratio 2,83. Netto schuld / EBITDA 1,61×. We lezen nut uit die marges en uit het aftermarket-aandeel. Status voorlopig.",
      },
      { type: "h", text: "Waar het schuurt" },
      {
        type: "p",
        text: "Luchtvaart- en defensiecycli. OEM-weerstand tegen PMA. FAA/EASA. Integratie van bolt-on overnames. Een aparte hersteltest zagen we in deze run niet — herstel blijft voorzichtig genoteerd. Geen drama. Wel de sobere lezing.",
      },
      { type: "h", text: "Score" },
      {
        type: "p",
        text: "S 80,0, status voorlopig. Niet herberekend. Automatisering 80,5 · nut 97,3 · schokbestendigheid 66,3 · aanpassingsvermogen 72,5 · klanten 89,2 · AI-plus 0. World-rang 27 in de desk-run.",
      },
      { type: "h", text: "Wat telt als feit" },
      {
        type: "p",
        text: "Primair: live dossier HEI plus desk-run 2026-09-07-aura-s-top100 en de daarin genoemde 10-K. S blijft 80,0. Geen verzonnen cijfers.",
      },
    ],
  },
  {
    slug: "2026-09-tesla",
    kicker: "Speciale",
    title: "Tesla · fabrieken plus de software erop",
    dek: "Tesla maakt auto’s en energieproducten, en houdt daarboven updates, FSD, connectiviteit en energiesturing — ook ná verkoop of lease. S 84,6, status voorlopig.",
    date: "2026-09-10",
    theme: "Gehouden softwarelaag",
    image: "/art/tesla.jpg",
    imageAlt: "Kopergravure van een autofabriek met softwarelaag",
    relatedTickers: ["TSLA"],
    body: [
      {
        type: "p",
        text: "Tesla maakt elektrische auto’s en energieproducten in eigen fabrieken — metaal, batterijen, omvormers, laadpalen — en houdt daarboven een softwarelaag: over-the-air updates, FSD Supervised, connectiviteit en de besturing van energieproducten, ook als het ijzer al bij een koper of lessee staat. S 84,6, status voorlopig. Onderzoek.",
      },
      { type: "h", text: "Verhaal" },
      {
        type: "quote",
        text: "Je houdt geen auto in de garage. Je houdt een claim op de machine die fabrieken én die softwarelaag samen runt.",
      },
      { type: "h", text: "Wat houd je?" },
      {
        type: "p",
        text: "De vraag is wat er economisch bij Tesla blijft als het ijzer de deur uit is. Het antwoord uit de 10-K: Tesla houdt updates, FSD Supervised, connectiviteit en energiesturing op verkocht én geleased materieel. Wie de auto “bezit”, blijft gebruiker van Tesla’s stack. De leeswijze vraagt niet naar het stuur. Zij vraagt welke laag bij de onderneming blijft.",
      },
      { type: "h", text: "Hoe het geld binnenkomt" },
      {
        type: "p",
        text: "Boekjaar tot 31 december 2025, Form 10-K: omzet 94,83 mld USD. Automotive 65,82 mld (ongeveer 73 procent). Energy 12,77 mld. Services 12,53 mld — Supercharging, onderhoud, verzekering, gebruikte auto’s. Bedrijfsresultaat 4,36 mld. Kas plus korte beleggingen 44,06 mld tegenover schulden 6,58 mld. Brutomarge 18,0 procent. Vrije kasstroom ongeveer 6,6 procent van de omzet.",
      },
      {
        type: "p",
        text: "Wat ontbreekt, wordt het verhaal: een aparte FSD-omzetregel staat niet in de filing. Een IR-exhibit telt 1,1 miljoen FSD-abonnementen — dat is een telling, geen dollarlijn. Narratief over FSD is geen omzetbewijs tot de jaarrekening die regel levert.",
      },
      { type: "h", text: "Waar het schuurt" },
      {
        type: "p",
        text: "Autovolume, prijs en incentives raken de lijn sneller dan de softwarestory. Concurrentie. FSD en Robotaxi vragen execution terwijl de filing potentieel noemt maar de omzetregel mist. Energy is cyclisch. Regulering. De gehouden softwarelaag bestaat, maar de issuer blijft blootgesteld aan hardwarecycli.",
      },
      { type: "h", text: "Score" },
      {
        type: "p",
        text: "S 84,6, status voorlopig. Automatisering 95,8 · nut 49,2 · schokbestendigheid 70,2 · aanpassingsvermogen 74,2 · klanten 88,0 · AI-plus 10 (FSD-weights en fleet-data, in het dossier, niet verzonnen). Zonder AI-plus zou S 74,6 zijn — een researchvergelijking, geen kooplijst. Nut is de knip: de machine levert kas, maar dunner dan software-IP of consumables.",
      },
      { type: "h", text: "Wat telt als feit" },
      {
        type: "p",
        text: "Primair: SEC Form 10-K (CIK 0001318605, accession 0001628280-26-003952) plus companyfacts en dossier TSLA. S blijft 84,6. Status voorlopig.",
      },
    ],
  },
  {
    slug: "2026-09-isrg",
    kicker: "Speciale",
    title: "Intuitive Surgical · park plus instrumenten",
    dek: "da Vinci-systemen plus de instrumenten die ziekenhuizen blijven bestellen. S 81,7, status voorlopig.",
    date: "2026-09-15",
    theme: "Robotchirurgie · park",
    image: "/art/machines.jpg",
    imageAlt: "Kopergravure van machines en een drukpers",
    relatedTickers: ["ISRG"],
    body: [
      {
        type: "p",
        text: "Intuitive bouwt robotische operatiesystemen (da Vinci, Ion) plus instrumenten, accessoires en diensten. Het geplaatste park plus die instrumenten vormen de terugkerende laag. S 81,7, status voorlopig. Onderzoek.",
      },
      { type: "h", text: "Verhaal" },
      {
        type: "quote",
        text: "Je houdt een claim op die park-machine — niet op één operatie.",
      },
      { type: "h", text: "Wat houd je?" },
      {
        type: "p",
        text: "De issuer houdt systemen, IP en instrumenten op het ziekenhuispark. Connected operations, niet alleen een eenmalige systeemverkoop. Als het systeem staat, blijven de instrumenten terugkomen. Dat is de gehouden laag.",
      },
      { type: "h", text: "Hoe het geld binnenkomt" },
      {
        type: "p",
        text: "Boekjaar tot 31 december 2025: omzet 10,06 mld USD. Brutomarge 66,0 procent. Bedrijfsresultaat 2,95 mld. Operationele kas 3,03 mld — vrije kasstroom ongeveer 24,7 procent van de omzet, operationele kas ongeveer 30,1 procent. Kas plus korte beleggingen 5,93 mld. Schulden 0,0. Current ratio 4,87. R&D 13,0 procent van de omzet.",
      },
      {
        type: "p",
        text: "Classic NRR zoals bij software zagen we in deze run niet. Retentie zit hier in park- en instrumentengedrag, niet in een SaaS-regel. Daarom blijft de status voorlopig, niet omdat de filing ontbreekt.",
      },
      { type: "h", text: "Waar het schuurt" },
      {
        type: "list",
        items: [
          "Procedurevolume",
          "Ziekenhuis-investeringen",
          "PMA-regulering",
          "Robotica-concurrentie",
          "Instrumentenprijzen en vergoeding",
        ],
      },
      { type: "h", text: "Score" },
      {
        type: "p",
        text: "S 81,7, status voorlopig. Overgenomen uit desk-run 2026-09-07-aura-s-top100. Automatisering 94,0 · nut 100,0 · schokbestendigheid 75,4 · aanpassingsvermogen 75,2 · klanten 60,0 · AI-plus 0. Klanten 60 omdat classic NRR ontbreekt — parkproxy, geen verzonnen NRR.",
      },
      { type: "h", text: "Wat telt als feit" },
      {
        type: "p",
        text: "Primair: SEC CIK0001035267, 10-K accession 0001035267-26-000010. S blijft 81,7.",
      },
    ],
  },
  {
    slug: "2026-09-asml",
    kicker: "Speciale",
    title: "ASML · de schrijfmachine van de fab",
    dek: "ASML houdt EUV- en DUV-lithografie plus service op de installed base — niet de chipvraag zelf. S 70,7, status voorlopig. Cijfers in euro.",
    date: "2026-09-15",
    theme: "Lithografie · installed base",
    image: "/art/machines.jpg",
    imageAlt: "Kopergravure van machines en een drukpers",
    relatedTickers: ["ASML"],
    body: [
      {
        type: "p",
        text: "ASML bouwt lithografiesystemen waarmee chipfabrieken circuits op wafers schrijven. De economische claim rust op die laag en de service eromheen — niet op de eindvraag naar chips. S 70,7, status voorlopig. Onderzoek.",
      },
      { type: "h", text: "Verhaal" },
      {
        type: "quote",
        text: "Je houdt een claim op de machines die patronen schrijven, plus de installed base en service — niet de chipvraag zelf.",
      },
      { type: "h", text: "Wat houd je?" },
      {
        type: "p",
        text: "De vraag is wat er economisch bij ASML blijft als de fab de scanner heeft gezet. Het antwoord: de lithografie-installed base plus service. EUV en DUV, upgrades (onder meer High-NA), aftermarket. Geen claim op chipvolumes of op het fabrieksresultaat van TSMC, Intel of Samsung. Wel op de laag die die fabrieken nodig hebben om te schrijven.",
      },
      {
        type: "p",
        text: "Klantparticipatie in de score is laag (9,0) door concentratie bij weinig fabs. Dat is clusterrisico, geen oordeel over “slechte service”.",
      },
      { type: "h", text: "Hoe het geld binnenkomt" },
      {
        type: "p",
        text: "Boekjaar tot 31 december 2025, Form 20-F en companyfacts (CIK 0000937966, accession 0001628280-26-011378), in euro: omzet 32,67 mld. Brutowinst 17,26 mld. Bedrijfsresultaat 11,30 mld. Nettowinst 9,61 mld. Operationele kas 12,66 mld. R&D 4,70 mld. Remaining performance obligation 46,50 mld.",
      },
      {
        type: "p",
        text: "Desk-run-ratio’s, niet herberekend: brutomarge ongeveer 52,8 procent; vrije kasstroom / omzet ongeveer 33,9 procent; operationele kas / omzet ongeveer 38,7 procent; aftermarket-proxy ongeveer 28 procent; R&D-intensiteit ongeveer 14,4 procent; current ratio ongeveer 1,53; schuld/EBITDA-proxy ongeveer 0,50. FTE 44.027.",
      },
      {
        type: "p",
        text: "Valuta hardop: de desk-snapshot labelt sommige kas- en schuldbedragen als USD; companyfacts is euro,zelfde orde-grootte. Geen conversie hier. Primaire geldcijfers blijven euro uit de 20-F.",
      },
      { type: "h", text: "Waar het schuurt" },
      {
        type: "p",
        text: "Semicon-investeringscyclus: vraag volgt fab-capex, niet lineair de eindvraag naar chips. Exportcontrole en geopolitiek. Single-source in de EUV-keten. Klantconcentratie (TSMC, Intel, Samsung) verklaart klanten-score 9,0. Schokbestendigheid 60,5: kasrijk in absolute zin, cyclisch en geopolitiek gevoelig. Aanpassingsvermogen 75,0 via High-NA en upgrades, met lange levertijden. S blijft 70,7 — geen herberekening.",
      },
      { type: "h", text: "Score" },
      {
        type: "p",
        text: "S 70,7, status voorlopig. Automatisering 96,0 · nut 100,0 · schokbestendigheid 60,5 · aanpassingsvermogen 75,0 · klanten 9,0 · AI-plus 0. Desk-run 2026-09-07-aura-s-top100.",
      },
      { type: "h", text: "Wat telt als feit" },
      {
        type: "p",
        text: "Primair: Form 20-F FY eind 31 december 2025 (CIK 0000937966, accession 0001628280-26-011378) plus desk-run. S ongemoeid 70,7. Status voorlopig.",
      },
    ],
  },
];
