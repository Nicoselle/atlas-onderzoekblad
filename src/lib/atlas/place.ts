import { companies, getCompany, type Company } from "./companies";
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
