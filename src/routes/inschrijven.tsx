import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { SubscribeForm } from "@/components/atlas/subscribe-form";
import { OTIUM_BRIDGE } from "@/lib/atlas/copy";

export const Route = createFileRoute("/inschrijven")({
  component: InschrijvenPage,
  head: () => ({
    meta: [{ title: "Inschrijven · Atlas" }],
  }),
});

function InschrijvenPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Brief · research"
        title="Op de hoogte blijven"
        dek="Geen tipstroom. Geen koersdoelen. Alleen wanneer er een nieuw onderzoek op het blad staat."
      />

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <blockquote className="border-l-2 border-moss pl-5 font-display text-xl leading-snug text-ink">
          {OTIUM_BRIDGE}
        </blockquote>
        <p className="mt-8 font-sans text-base leading-relaxed text-ink-soft">
          Laat een adres achter. Atlas stuurt geen koopadvies, geen bot en geen kassa — alleen
          de onderzoekseditie.
        </p>
        <div className="mt-8">
          <SubscribeForm />
        </div>
      </div>
    </SiteShell>
  );
}
