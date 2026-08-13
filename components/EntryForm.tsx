import ScrollReveal from "./ScrollReveal";
import { IconCheck } from "./icons";

// Kai's original Patch opt-in form, used on the main (with-VSL) page — the
// header tracking pixel for this same form lives in app/layout.tsx. The
// no-VSL "B version" page (app/b/page.tsx) passes Kai's second Patch form
// link via the formUrl prop instead.
const DEFAULT_PATCH_FORM_URL =
  "https://addons.patchretention.com/form/6a746f262960ef3d03df0761/700670";

type EntryFormProps = {
  formUrl?: string;
};

/**
 * The real entry form, embedded directly on the page (no separate page/
 * click-through). Patch hosts the form itself as a standalone page built
 * to be iframed, so this wraps it in a responsive frame sized to roughly
 * match the form's own layout. If Patch's form height changes, bump the
 * min-height below to match.
 */
export default function EntryForm({ formUrl = DEFAULT_PATCH_FORM_URL }: EntryFormProps) {
  return (
    <section id="enter" aria-label="Entry form" className="bg-cream pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <ScrollReveal className="rounded-lg bg-white p-6 shadow-card sm:p-10">
          <h2 className="text-center font-display text-3xl uppercase tracking-tight text-ink sm:text-5xl">
            Enter to Win
          </h2>
          <p className="mt-2 text-center text-sm text-ink-light sm:text-base">
            Takes ten seconds. No purchase necessary.
          </p>

          {/* Eligibility reassurance, right where someone is about to
              commit to entering: what one entry actually buys you. */}
          <div className="mt-5 flex items-start gap-2.5 rounded-md border border-gold-500/40 bg-gold-500/10 px-4 py-3 sm:px-5 sm:py-4">
            <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
            <p className="text-left text-sm font-semibold text-ink sm:text-base">
              Once you&apos;re entered, you&apos;re eligible for all 12
              monthly drawings for the $1,000 Ultimate Bolder Birthday.
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-md">
            <iframe
              src={formUrl}
              title="Bolder Birthday Giveaway entry form"
              className="w-full"
              style={{ minHeight: 760, border: "none" }}
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-center text-xs text-ink-light">
            One entry per person. No purchase necessary.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
