import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">Atlas</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
            Onafhankelijk onderzoekblad over post-labour. Vanuit het Otium-project:
            wie de productieve laag houdt, zodat tijd vrijkomt voor wat ertoe doet.
          </p>
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
          </ul>
        </div>
        <div className="font-sans text-sm leading-relaxed text-muted">
          <p className="mb-3 text-xs tracking-[0.18em] text-faint uppercase">Leesgrenzen</p>
          <p>
            Persoonlijk onderzoek. <strong className="font-medium text-ink-soft">Geen beleggingsadvies.</strong>{" "}
            Scores 0–100, status VOORLOPIG — een leeswijze, geen modelportefeuille. Geen
            tipstroom. Geen koersdoelen.
          </p>
        </div>
      </div>
      <div className="border-t border-rule">
        <p className="mx-auto max-w-6xl px-4 py-4 font-sans text-xs tracking-wide text-faint sm:px-6">
          Dit nummer · 10 september 2026 · filings first · Europe/Brussels
        </p>
      </div>
    </footer>
  );
}
