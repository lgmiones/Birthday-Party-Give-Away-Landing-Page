import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enter to Win | Bolder Adventure Park Birthday Giveaway",
  description: "Full giveaway details, prize breakdown, and entry instructions.",
};

/**
 * Placeholder destination for every "Enter Now to Win" CTA on the landing
 * page. This is intentionally a simple informational page — replace with
 * your actual giveaway details / entry-instructions content. No forms,
 * email fields, or booking widgets live here or on the landing page itself.
 */
export default function GiveawayPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-party-pink-100 px-4 py-1.5 text-sm font-semibold text-party-pink-500">
        Giveaway Details
      </span>
      <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Giveaway Details &amp; Entry Instructions
      </h1>
      <p className="text-ink-light">
        This is where the full giveaway rules, eligibility requirements, and
        entry instructions will live. Replace this placeholder with your
        actual giveaway content or a link to your entry platform.
      </p>
      <Link
        href="/"
        className="mt-4 font-semibold text-party-pink-500 underline decoration-2 underline-offset-4 hover:text-cta"
      >
        Back to Home
      </Link>
    </main>
  );
}
