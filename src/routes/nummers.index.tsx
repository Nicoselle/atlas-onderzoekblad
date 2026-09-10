import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/atlas/page-hero";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { editions, embargo } from "@/lib/atlas/editions";
import { formatNlDate } from "@/lib/atlas/format";

export const Route = createFileRoute("/nummers/")({
  component: NummersPage,
  head: () => ({
    meta: [{ title: "Editie-shelf · Atlas" }],
  }),
});

function NummersPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Nummers · research"
        title="Editie-shelf"
        dek="Gedateerde onderzoeksedities — tip-vrij. Geen tipstroom, geen koersdoelen."
        aside={<StatusBadge status="VOORLOPIG" />}
      />

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2">
        {editions.map((e) => (
          <Link
            key={e.slug}
            to="/nummers/$slug"
            params={{ slug: e.slug }}
            className="group overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[0_0_0_1px_rgba(26,23,20,0.1),0_8px_24px_-12px_rgba(26,23,20,0.18)]"
          >
            {e.image ? (
              <img
                src={e.image}
                alt={e.imageAlt ?? ""}
                className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                width={1792}
                height={1008}
              />
            ) : null}
            <div className="p-5">
              <p className="font-sans text-xs tracking-[0.18em] text-faint uppercase">
                {e.kicker} · {formatNlDate(e.date)}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight group-hover:text-moss">
                {e.title}
              </h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{e.dek}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="border-t border-rule bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl font-medium tracking-tight">Embargo · weekday release</h2>
          <p className="mt-2 font-sans text-sm text-muted">
            Wereld×TA Top20 extras — nog niet live. Eén speciale per weekdag. Geen tipstroom.
          </p>
          <ul className="mt-6 divide-y divide-rule border-y border-rule">
            {embargo.map((item) => (
              <li key={item.date} className="flex items-baseline justify-between gap-4 py-3 font-sans text-sm">
                <span className="text-ink">{item.name}</span>
                <span className="tabular-nums text-faint">Verschijnt {formatNlDate(item.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
