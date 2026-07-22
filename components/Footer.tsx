import Image from "next/image";
import Link from "next/link";
import { GIVEAWAY_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";

type FooterProps = {
  /** Set to false to hide the nav-links list and center the logo instead.
   *  Used by the /giveaway page, which has nothing for those links to
   *  usefully jump to — the main landing page keeps the default (true). */
  showNavLinks?: boolean;
};

export default function Footer({ showNavLinks = true }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-party-pink-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div
          className={`flex flex-col items-center gap-8 ${
            showNavLinks ? "justify-between sm:flex-row" : "justify-center"
          }`}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/images/images/bolder-logo.png"
              alt={SITE_NAME}
              width={340}
              height={216}
              className="h-16 w-auto sm:h-20"
            />
          </div>

          {showNavLinks && (
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
                  Enter Now to Win
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-party-pink-100 pt-6 text-xs text-ink-light sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}. This is a promotional giveaway, not a purchase or booking service.</p>
          <p>No purchase necessary. See full rules on the giveaway page.</p>
        </div>
      </div>
    </footer>
  );
}
