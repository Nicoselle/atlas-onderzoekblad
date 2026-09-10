import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  dek,
  aside,
}: {
  kicker: string;
  title: string;
  dek?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:py-14">
        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-moss uppercase">{kicker}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-medium tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {dek ? (
            <div className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-ink-soft">{dek}</div>
          ) : null}
        </div>
        {aside ? <div className="md:pt-8">{aside}</div> : null}
      </div>
    </header>
  );
}
