import { Link } from "@tanstack/react-router";
import { METHODE_PRODUCT } from "@/lib/atlas/copy";

export function MethodeProduct({ showIndexLink = true }: { showIndexLink?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {METHODE_PRODUCT.map((item) => (
        <article key={item.kicker}>
          <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">{item.kicker}</p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">{item.title}</h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">{item.body}</p>
        </article>
      ))}
      {showIndexLink ? (
        <p className="md:col-span-3">
          <Link to="/methode" className="font-sans text-sm text-ink underline decoration-rule underline-offset-4">
            Hoe we scoren →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
