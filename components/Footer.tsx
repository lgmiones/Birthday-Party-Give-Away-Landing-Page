import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";

/**
 * Everything lives on this one page now (no separate /giveaway route), so
 * the footer is just the logo, centered, plus the legal fine print.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex items-center justify-center">
          {/* The source logo is black line-art on a transparent
              background; `invert` flips it to white for this dark
              footer without needing a separate white-logo asset. */}
          <Image
            src="/images/images/bolder-logo.png"
            alt={SITE_NAME}
            width={340}
            height={216}
            className="h-16 w-auto invert sm:h-20"
          />
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}. This is a promotional giveaway, not a purchase or booking service.</p>
          <p>No purchase necessary to enter or win.</p>
        </div>
      </div>
    </footer>
  );
}
