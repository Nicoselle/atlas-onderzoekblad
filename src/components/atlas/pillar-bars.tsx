import { PILLAR_META, type Pillars } from "@/lib/atlas/companies";
import { formatScore } from "@/lib/atlas/format";

export function PillarBars({ pillars }: { pillars: Pillars }) {
  return (
    <ul className="space-y-3">
      {PILLAR_META.map((p) => {
        const value = pillars[p.key];
        return (
          <li key={p.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3 font-sans text-xs">
              <span className="text-ink-soft">
                <span className="mr-2 font-medium tracking-wide text-moss">{p.letter}</span>
                {p.label}
              </span>
              <span className="tabular-nums text-ink">{formatScore(value)}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-paper-deep">
              <div
                className="h-full rounded-full bg-moss transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
