import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Click See Giveaway",
    desc: "Tap the button to head over to the official giveaway page.",
  },
  {
    number: "2",
    title: "Read the Giveaway Details",
    desc: "Review what's included, the prize value, and the full giveaway rules.",
  },
  {
    number: "3",
    title: "Follow the Entry Instructions",
    desc: "Complete entry on the giveaway page to be considered for the win.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="bg-party-blue-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 id="how-heading" className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-ink-light">
            Three simple steps between you and the ultimate birthday party
            experience.
          </p>
        </ScrollReveal>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delayMs={i * 90} as="li">
              <div className="relative h-full rounded-3xl bg-white p-8 text-center shadow-card">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cta font-display text-2xl font-extrabold text-white shadow-soft">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal className="mt-14 flex justify-center">
          <CTAButton size="lg" />
        </ScrollReveal>
      </div>
    </section>
  );
}
