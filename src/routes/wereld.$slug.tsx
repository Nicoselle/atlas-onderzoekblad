import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { ScoreRoster } from "@/components/atlas/score-roster";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { companiesForPlace, resolveWorldPlace } from "@/lib/atlas/place";
import type { WorldPlace } from "@/lib/atlas/world";

export const Route = createFileRoute("/wereld/$slug")({
  loader: ({ params }) => {
    const place = resolveWorldPlace(params.slug);
    if (!place) throw notFound();
    return { place, companies: companiesForPlace(place) };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${placeTitle(loaderData?.place)} · Atlas` }],
  }),
  component: WorldPlacePage,
});

function placeTitle(place: WorldPlace | undefined) {
  return place?.item.name ?? "Wereld";
}

function WorldPlacePage() {
  const { place, companies } = Route.useLoaderData();
  const kicker = placeKicker(place);
  const empty =
    place.kind === "basket"
      ? "Geen dossier op dit blad voor deze mand. De wereldtelling blijft staan; Atlas verzint geen filings."
      : "Geen dossier op dit blad voor dit continent. Atlas verzint geen filings.";

  return (
    <SiteShell>
      <PageHero
        kicker={kicker}
        title={place.item.name}
        dek={
          <>
            {place.item.note}{" "}
            <StatusBadge status="VOORLOPIG" className="ml-1 align-middle" />
          </>
        }
        aside={
          <p className="font-sans text-sm text-muted">
            <span className="block font-display text-4xl font-medium tabular-nums text-ink">
              {place.item.scored}
            </span>
            gescoord · {place.item.names} namen
          </p>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="mb-8 font-sans text-sm text-muted">
          Primaire tabel toont alleen totaal S — onderzoeksrang, geen tip. A · U · R · A-flex
          staan in de lezing eronder.
        </p>
        <ScoreRoster companies={companies} empty={empty} />
        <p className="mt-8 font-sans text-sm">
          <Link to="/wereld" className="underline decoration-rule underline-offset-4">
            ← Continenten & manden
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}

function placeKicker(place: WorldPlace) {
  switch (place.kind) {
    case "basket":
      return "Mand · leeskaart";
    case "continent":
      return "Continent · leeskaart";
    default: {
      const _never: never = place;
      return _never;
    }
  }
}
