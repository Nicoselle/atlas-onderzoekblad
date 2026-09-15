import { Link } from "@tanstack/react-router";
import { ISSUE_DATE, OTIUM_BRIDGE, TIP_BAN_FOOTER, TIP_BAN_SHORT } from "@/lib/atlas/copy";
import { formatNlDate } from "@/lib/atlas/format";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">Atlas</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{OTIUM_BRIDGE}</p>
        </div>
        <div className="font-sans text-sm">
          <p className="mb-3 text-xs tracking-[0.18em] text-faint uppercase">Op het blad</p>
          <ul className="space-y-2 text-ink-soft">
            <li>
              <Link to="/methode" className="hover:text-ink">
                Methode
              </Link>
            </li>
            <li>
              <Link to="/wereld" className="hover:text-ink">
                Wereld
              </Link>
            </li>
            <li>
              <Link to="/scores" className="hover:text-ink">
                AURA/S-scores
              </Link>
            </li>
            <li>
              <Link to="/nummers" className="hover:text-ink">
                Nummers
              </Link>
            </li>
            <li>
              <Link to="/inschrijven" className="hover:text-ink">
                Inschrijven
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-sans text-sm leading-relaxed text-muted">
          <p className="mb-3 text-xs tracking-[0.18em] text-faint uppercase">Leesgrenzen</p>
          <p>{TIP_BAN_FOOTER}</p>
        </div>
      </div>
      <div className="border-t border-rule">
        <p className="mx-auto max-w-6xl px-4 py-4 font-sans text-xs tracking-wide text-faint sm:px-6">
          Dit nummer · {formatNlDate(ISSUE_DATE)} · filings first · Europe/Brussels · {TIP_BAN_SHORT}
        </p>
      </div>
    </footer>
  );
}
