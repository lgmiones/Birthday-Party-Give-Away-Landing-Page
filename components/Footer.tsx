import Link from "next/link";
import { GIVEAWAY_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-party-pink-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-party-pink-200">
              🎂
            </span>
            {SITE_NAME}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-light">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-party-pink-500">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={GIVEAWAY_URL} className="hover:text-party-pink-500">
                See Giveaway
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-party-pink-100 pt-6 text-xs text-ink-light sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}. This is a promotional giveaway, not a purchase or booking service.</p>
          <p>No purchase necessary. See full rules on the giveaway page.</p>
        </div>
      </div>
    </footer>
  );
}
