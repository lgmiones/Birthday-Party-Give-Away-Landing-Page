import ScrollReveal from "./ScrollReveal";
import { IconCheck } from "./icons";

// Pulled directly from Bolder's real All Access Party package and the
// "All of our birthday packages include" section on bolderadventurepark.com,
// plus the arcade cards and photographer Paul confirmed are part of the
// $1,000 prize, so a winner sees exactly what they're actually getting.
const packageIncludes = [
  "The full All Access Party for 10 guests, birthday child included",
  "A private 45-minute party table reservation",
  "2 parent passes",
  "Pizza meal for the whole group",
  "Unlimited drinks, two flavor choices, refilled all party long",
  "Bring your own cake, we'll have the table ready",
  "A $20 Arcade Card for every guest, 10 total",
  "A professional photographer capturing the whole party",
];

const accessTo = [
  "Every Base Camp attraction",
  'Ropes Course & Zip Lines (48" height minimum)',
  'Via Ferrata, the climb across the Bolder Mountains (48" height and 88 lbs. minimum)',
];

// The $1,000 figure, broken down exactly the way Paul priced it out, so the
// value reads as verifiable rather than a round-number marketing claim.
const valueBreakdown = [
  { label: "All Access Party", amount: "$449" },
  { label: "$20 Arcade Card × 10 guests", amount: "$200" },
  { label: "Professional Party Photographer", amount: "$350" },
];

/**
 * One prize, drawn every month: the $1,000 Ultimate Bolder Birthday. The
 * two-column "Package Includes / Access To" split mirrors the real All
 * Access Party page on bolderadventurepark.com, and the value breakdown at
 * the bottom shows exactly how the $1,000 figure adds up, so it reads as
 * concrete and verifiable rather than an invented round number.
 */
export default function PrizeSection() {
  return (
    <section id="prize" aria-labelledby="prize-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ScrollReveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-night">
            The Grand Prize, Drawn Every Month
          </span>
          <h2 id="prize-heading" className="mt-4 font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
            The $1,000 Ultimate
            <br />
            <span className="text-cta">Bolder Birthday</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-light">
            One winner a month gets the whole thing planned, hosted, and
            paid for. Here&apos;s exactly what&apos;s included.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={100} className="mt-8 rounded-lg bg-cream p-6 shadow-card sm:p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="font-body text-sm font-bold uppercase tracking-wide text-ink">
                Package Includes
              </p>
              <ul className="mt-3 space-y-3">
                {packageIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left text-ink-light">
                    <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-sm font-bold uppercase tracking-wide text-ink">
                Access To
              </p>
              <ul className="mt-3 space-y-3">
                {accessTo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left text-ink-light">
                    <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-cta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="mt-8 space-y-1.5 border-t border-ink/10 pt-5 text-sm">
            {valueBreakdown.map((line) => (
              <div key={line.label} className="flex items-baseline justify-between text-ink-light">
                <dt>{line.label}</dt>
                <dd className="font-semibold text-ink">{line.amount}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between border-t border-ink/10 pt-2">
              <dt className="font-bold uppercase tracking-wide text-ink">Total Prize Value</dt>
              <dd className="font-display text-2xl text-cta">$999</dd>
            </div>
          </dl>

          <p className="mt-6 text-center text-xs text-ink-light/80">
            One winner drawn every month. Height and weight minimums
            apply on Vertical Climbing Adventures, for guest safety.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
