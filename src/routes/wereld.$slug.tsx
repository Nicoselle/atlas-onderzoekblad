import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MandRoster } from "@/components/atlas/mand-roster";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { MAND_LEADS } from "@/lib/atlas/mand-rows";
import { resolveWorldPlace, rowsForPlace } from "@/lib/atlas/place";
import type { WorldPlace } from "@/lib/atlas/world";

export const Route = createFileRoute("/wereld/$slug")({
  loader: ({ params }) => {
    const place = resolveWorldPlace(params.slug);
    if (!place) throw notFound();
    return { place, rows: rowsForPlace(place) };
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
  const { place, rows } = Route.useLoaderData();
  const kicker = placeKicker(place);
  const lead = MAND_LEADS[place.item.id] ?? "Alleen namen die Atlas al heeft gelezen. S is onderzoeksrang.";
  const scored = rows.filter((row) => row.s !== null).length;
  const empty =
    place.kind === "basket"
      ? "Geen desk-tabel of dossier op dit blad voor deze mand. Atlas verzint geen filings."
      : "Geen desk-tabel of dossier op dit blad voor dit continent. Atlas verzint geen filings.";

  return (
    <SiteShell>
      <PageHero
        kicker={kicker}
        title={place.item.name}
        dek={
          <>
            {lead}{" "}
            <StatusBadge status="VOORLOPIG" className="ml-1 align-middle" />
          </>
        }
        aside={
          <p className="font-sans text-sm text-muted">
            <span className="block font-display text-4xl font-medium tabular-nums text-ink">
              {rows.length > 0 ? scored : place.item.scored}
            </span>
            gescoord · {rows.length > 0 ? rows.length : place.item.names} namen
          </p>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="mb-4 font-sans text-sm text-muted">
          Primaire tabel toont alleen bestaande S — onderzoeksrang.
        </p>
        <p className="mb-8 font-sans text-sm text-muted">{place.item.note}</p>
        <MandRoster rows={rows} empty={empty} />
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
