import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { IconCheck, IconClipboard, IconGift, IconStar } from "@/components/icons";

export const metadata: Metadata = {
  title: "Enter to Win | Bolder Adventure Park Birthday Giveaway",
  description:
    "Official rules and entry instructions for the free All Access Birthday Party giveaway at Bolder Adventure Park — 52 weekly drawings, 100% free to enter.",
};

const inclusions = [
  "Full park access for the birthday guest of honor + 9 friends",
  "Private party room with a dedicated host",
  "Food & drinks, birthday cake, decorations, and goodie bags",
  "Valid any date in the 12 months after you're notified",
];

const steps = [
  {
    icon: IconClipboard,
    title: "Submit Your Entry",
    desc: "Fill out the short form below — just enough info to reach you if you win.",
  },
  {
    icon: IconStar,
    title: "You're In Every Weekly Drawing",
    desc: "One entry covers all 52 weekly drawings over the next 12 months. No re-entering.",
  },
  {
    icon: IconGift,
    title: "Winners Are Notified Directly",
    desc: "We draw one winner a week and reach out by phone or email — no need to check back.",
  },
];

const rules = [
  "No purchase necessary to enter or win.",
  "Open to legal residents of the eligible area, 18 years or older at time of entry (entrants under 18 must have parent or guardian consent and the guardian must complete entry on their behalf).",
  "Limit one entry per person or household for the full giveaway period; duplicate entries will be disqualified.",
  "One winner is selected at random each week from all eligible entries received to date — 52 weekly drawings total over the 12-month entry period.",
  "Winners are notified directly by phone or email and have a limited time to respond before an alternate winner may be selected.",
  "Prize has no cash value, cannot be exchanged or transferred, and must be redeemed within 12 months of the win date.",
  "Sponsor: Bolder Adventure Park. Void where prohibited by law.",
];

/**
 * Destination for every "Enter Now to Win" CTA on the landing page. This is
 * a real, on-brand entry/rules page — the one piece that's intentionally a
 * placeholder is the entry-form box marked below: drop in a Google Form,
 * Gleam, Rafflecopter embed, or your own signup widget once you have one.
 */
export default function GiveawayPage() {
  return (
    <>
      <main className="bg-cream">
        {/* Minimal brand strip — no full navbar, just a way back home */}
        <div className="flex justify-center border-b border-party-pink-100 bg-white/70 py-5">
          <Link href="/" aria-label="Back to home">
            <Image
              src="/images/images/bolder-logo.png"
              alt="Bolder Adventure Park"
              width={340}
              height={216}
              className="h-20 w-auto sm:h-24"
              priority
            />
          </Link>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <ScrollReveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-party-pink-100 px-4 py-1.5 text-sm font-semibold text-party-pink-500">
              Official Entry Page
            </span>
            <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              You&apos;re One Entry Away From a{" "}
              <span className="marker-highlight">Free Birthday Party</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-light">
              One entry gets you into all 52 weekly drawings for a
              completely free All Access Birthday Party for 10 kids at
              Bolder Adventure Park. No purchase necessary, ever.
            </p>
            <a
              href="#enter"
              className="mt-5 inline-block font-semibold text-ink-light underline decoration-party-pink-300 decoration-2 underline-offset-4 transition-colors hover:text-party-pink-500"
            >
              Jump to the entry form ↓
            </a>
          </ScrollReveal>

          {/* Prize recap */}
          <ScrollReveal delayMs={80} className="mt-12 rounded-4xl bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              What You&apos;re Entering to Win
            </h2>
            <ul className="mt-4 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-light">
                  <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* How entry works */}
          <ScrollReveal delayMs={120} className="mt-12">
            <h2 className="text-center font-display text-2xl font-bold text-ink">
              How Entry Works
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.title} className="relative rounded-3xl bg-white p-5 shadow-card">
                  <span className="absolute right-4 top-4 font-display text-xs font-bold text-ink-light/50">
                    {i + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-party-pink-100">
                    <step.icon className="h-5 w-5 text-party-pink-500" />
                  </div>
                  <p className="mt-3 font-display font-bold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm text-ink-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Entry form placeholder — the one intentional gap on this page */}
          <div id="enter">
            <ScrollReveal
              delayMs={160}
              className="mt-12 rounded-4xl border-2 border-dashed border-party-pink-300 bg-white/60 p-8 text-center sm:p-12"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-party-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-party-pink-500">
                Entry Form Placeholder
              </span>
              <p className="mx-auto mt-4 max-w-md text-ink-light">
                Drop your real entry form or link here — a Google Form,
                Gleam, Rafflecopter embed, or your own signup widget all
                work. Until then, this box marks exactly where it goes.
              </p>
            </ScrollReveal>
          </div>

          {/* Official rules, condensed */}
          <ScrollReveal delayMs={200} className="mt-12 rounded-4xl bg-white/60 p-6 text-sm text-ink-light sm:p-8">
            <h2 className="font-display text-lg font-bold text-ink">
              Official Giveaway Rules
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-ink-light/80">
              This is placeholder rules language, not legal advice — have
              an attorney review and finalize your official rules
              (including any state-specific registration requirements)
              before launching the giveaway.
            </p>
          </ScrollReveal>

          <p className="mt-10 text-center">
            <Link
              href="/"
              className="font-semibold text-party-pink-500 underline decoration-2 underline-offset-4 hover:text-cta"
            >
              ← Back to Home
            </Link>
          </p>
        </div>
      </main>
      <Footer showNavLinks={false} />
    </>
  );
}
