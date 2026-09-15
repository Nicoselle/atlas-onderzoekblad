import { BRIDGE_BODY, BRIDGE_CTA, BRIDGE_KICKER, HERE_NOW_URL } from "@/lib/atlas/copy";

export function EditionBridge() {
  return (
    <aside className="border-b border-rule bg-paper-deep" aria-label="Twee Atlas-sites">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-sans text-xs tracking-[0.16em] text-moss uppercase">{BRIDGE_KICKER}</p>
          <p className="mt-1 font-sans text-sm text-ink">{BRIDGE_BODY}</p>
        </div>
        <a
          href={HERE_NOW_URL}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border border-rule bg-paper px-4 font-sans text-sm text-ink hover:border-ink"
        >
          {BRIDGE_CTA}
        </a>
      </div>
    </aside>
  );
}
