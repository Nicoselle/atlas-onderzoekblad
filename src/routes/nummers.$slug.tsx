import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/atlas/site-shell";
import { StatusBadge } from "@/components/atlas/status-badge";
import { getCompany } from "@/lib/atlas/companies";
import { getEdition } from "@/lib/atlas/editions";
import { formatNlDate } from "@/lib/atlas/format";

export const Route = createFileRoute("/nummers/$slug")({
  loader: ({ params }) => {
    const edition = getEdition(params.slug);
    if (!edition) throw notFound();
    return edition;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Nummer"} · Atlas` }],
  }),
  component: EditionPage,
});

function EditionPage() {
  const edition = Route.useLoaderData();
  const related = (edition.relatedTickers ?? []).map((t) => getCompany(t)).filter(Boolean);

  return (
    <SiteShell>
      <article>
        <header className="border-b border-rule">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">
              {edition.kicker} · {formatNlDate(edition.date)}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
              {edition.title}
            </h1>
            <p className="mt-5 font-sans text-lg leading-relaxed text-ink-soft">{edition.dek}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <StatusBadge status="VOORLOPIG" />
              <span className="font-sans text-xs text-faint">{edition.theme}</span>
            </div>
          </div>
        </header>

        {edition.image ? (
          <figure className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
            <img
              src={edition.image}
              alt={edition.imageAlt ?? ""}
              className="w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              width={1792}
              height={1008}
            />
          </figure>
        ) : null}

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          {edition.body.map((block, i) => {
            if (block.type === "h") {
              return (
                <h2 key={i} className="mt-10 font-display text-2xl font-medium tracking-tight">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="mt-8 border-l-2 border-moss pl-5 font-display text-xl leading-snug text-ink"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="mt-4 list-disc space-y-2 pl-5 font-sans text-sm text-ink-soft">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mt-5 font-sans text-base leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
          })}

          {related.length > 0 ? (
            <div className="mt-12 border-t border-rule pt-8">
              <p className="font-sans text-xs tracking-[0.18em] text-faint uppercase">Dossiers</p>
              <ul className="mt-3 space-y-2">
                {related.map((c) =>
                  c ? (
                    <li key={c.ticker}>
                      <Link
                        to="/dossiers/$ticker"
                        params={{ ticker: c.ticker.toLowerCase() }}
                        className="font-sans text-sm underline decoration-rule underline-offset-4"
                      >
                        {c.ticker} · {c.name}
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          ) : null}

          <p className="mt-10 font-sans text-sm">
            <Link to="/nummers" className="underline decoration-rule underline-offset-4">
              ← Alle nummers
            </Link>
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
