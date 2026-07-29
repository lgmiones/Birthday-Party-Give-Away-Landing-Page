import ScrollReveal from "./ScrollReveal";
import { IconCheck } from "./icons";

/**
 * Placeholder for the real entry form, sized and positioned to match where
 * the actual embed (Google Form, Gleam, Rafflecopter, or a custom widget)
 * will go, embedded directly on the single homepage per Kai's flow. Swap
 * the dashed box below for the real embed once it's ready — everything
 * else (the section, the heading, the id used by the "Enter Now to Win"
 * button) can stay exactly as-is.
 */
export default function EntryForm() {
  return (
    <section id="enter" aria-label="Entry form" className="bg-cream pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-md px-5 sm:px-8">
        <ScrollReveal className="rounded-lg bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-center font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
            Enter to Win
          </h2>
          <p className="mt-2 text-center text-sm text-ink-light">
            Takes ten seconds. No purchase necessary.
          </p>

          {/* Eligibility reassurance, right where someone is about to
              commit to entering: what one entry actually buys you. */}
          <div className="mt-4 flex items-start gap-2.5 rounded-md border border-gold-500/40 bg-gold-500/10 px-4 py-3">
            <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
            <p className="text-left text-sm font-semibold text-ink">
              Once you&apos;re entered, you&apos;re eligible for all 12
              monthly drawings for the $1,000 Ultimate Bolder Birthday.
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-cta/40 bg-brand-50 px-6 py-10 text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-cta">
              <rect x="5" y="4" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <rect x="8.5" y="2.5" width="7" height="3.5" rx="1.5" fill="currentColor" />
              <path d="M8.5 11h7M8.5 15h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <p className="text-sm font-bold uppercase tracking-wide text-cta">
              Entry Form Placeholder
            </p>
            <p className="text-sm text-ink-light">
              Embed the real entry form here once it&apos;s ready, a Google
              Form, Gleam, Rafflecopter embed, or a custom widget all work.
              This box just marks where it goes.
            </p>
          </div>

          <p className="mt-4 text-center text-xs text-ink-light">
            One entry per person. No purchase necessary.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
