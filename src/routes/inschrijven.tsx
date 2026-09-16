import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { SubscribeForm } from "@/components/atlas/subscribe-form";
import {
  parseSubscribeSearch,
  SUBSCRIBE_KICKER,
  SUBSCRIBE_LEDE,
  SUBSCRIBE_TITLE,
  SUBSCRIBE_TRUST,
} from "@/lib/atlas/copy";

export const Route = createFileRoute("/inschrijven")({
  validateSearch: parseSubscribeSearch,
  component: InschrijvenPage,
  head: () => ({
    meta: [{ title: "Blijf op de hoogte · Atlas" }],
  }),
});

function InschrijvenPage() {
  const { ok } = Route.useSearch();

  return (
    <SiteShell>
      <PageHero kicker={SUBSCRIBE_KICKER} title={SUBSCRIBE_TITLE} dek={SUBSCRIBE_LEDE} />

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <p className="font-sans text-xs tracking-[0.16em] text-muted uppercase">{SUBSCRIBE_TRUST}</p>
        <div className="mt-8">
          <SubscribeForm subscribed={ok === "1"} />
        </div>
      </div>
    </SiteShell>
  );
}
