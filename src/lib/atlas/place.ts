import { companies, getCompany, type Company } from "./companies";
import { deskRowsForSlug, type MandRow } from "./mand-rows";
import { getBasket, getContinent, type Basket, type Continent, type WorldPlace } from "./world";

export function companiesForPlace(place: WorldPlace): Company[] {
  switch (place.kind) {
    case "basket":
      return companiesForBasket(place.item);
    case "continent":
      return companiesForContinent(place.item);
    default: {
      const _never: never = place;
      return _never;
    }
  }
}

export function companyToMandRow(company: Company): MandRow {
  return {
    ticker: company.ticker,
    name: company.name,
    sector: company.sector,
    s: company.s,
    status: company.status,
    lezing: company.heldLayer,
  };
}

/** Desk table when present; otherwise dossiers already on this blad. Never invents S. */
export function rowsForPlace(place: WorldPlace): MandRow[] {
  const desk = deskRowsForSlug(place.item.id);
  if (desk.length > 0) return desk;
  return companiesForPlace(place).map(companyToMandRow);
}

export function companiesForBasket(basket: Basket): Company[] {
  return (basket.tickers ?? [])
    .map((ticker) => getCompany(ticker))
    .filter((company): company is Company => Boolean(company));
}

export function companiesForContinent(continent: Continent): Company[] {
  return companies.filter((company) => company.continent === continent.name);
}

export function resolveWorldPlace(slug: string): WorldPlace | undefined {
  const basket = getBasket(slug);
  if (basket) return { kind: "basket", item: basket };
  const continent = getContinent(slug);
  if (continent) return { kind: "continent", item: continent };
  return undefined;
}
