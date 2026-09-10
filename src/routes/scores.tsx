import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { ScoreRoster } from "@/components/atlas/score-roster";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { rankedCompanies } from "@/lib/atlas/companies";

export const Route = createFileRoute("/scores")({
  component: ScoresPage,
  head: () => ({
    meta: [{ title: "AURA/S-scores · Atlas" }],
  }),
});

function ScoresPage() {
  const rows = rankedCompanies();

  return (
    <SiteShell>
      <PageHero
        kicker="Frame · S 0–100"
        title="AURA/S-scores"
        dek="Onderzoeksrang — geen koersdoelen. Filing-first. Alleen wat in de cijfers staat, telt als feit. Geen verzonnen S."
        aside={<StatusBadge status="VOORLOPIG" />}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="mb-6 font-sans text-sm text-muted">
          De tabel toont totaal S. A · U · R · A-flex staan in de lezing eronder — niet als
          primaire kolommen.
        </p>
        <ScoreRoster companies={rows} />
        <p className="mt-4 font-sans text-xs text-faint">
          Tien dossiers op dit blad. Wereldtotaal 195 gescoord · 27 onvolledig. Geen tipstroom.
        </p>
      </div>
    </SiteShell>
  );
}
