import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";
import { IconCheck, IconClock, IconStar, IconGift } from "./icons";

const inclusions = [
  "Full park access — zip lines, ropes courses, climbing walls, bumper cars, laser tag, tubing slides & more",
  "Private party room with a dedicated host",
  "Food & drinks for the whole crew",
  "Birthday cake",
  "Decorations, set up and ready to go",
  "Goodie bags for every guest",
];

const highlights = [
  {
    icon: IconClock,
    title: "Valid 12 Months",
    desc: "Use it anytime in the next year — pick whatever date works for your family.",
  },
  {
    icon: IconStar,
    title: "52 Chances to Win",
    desc: "We draw one winner every week. Enter once and you're in all 52 drawings.",
  },
  {
    icon: IconGift,
    title: "100% Free",
    desc: "No purchase necessary, no entry fee, no catch.",
  },
];

export default function PrizeSection() {
  return (
    <section id="prize" aria-labelledby="prize-heading" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-party-yellow-100 px-4 py-1.5 text-sm font-semibold text-ink">
            What You&apos;re Entering to Win
          </span>
          <h2 id="prize-heading" className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            A FREE All Access Birthday Party for 10 Kids
          </h2>
          <p className="mt-4 text-ink-light">
            Everything on our All Access Birthday package — planned, hosted,
            and paid for. An estimated $2,500+ value, completely free to the
            winner.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={80} className="mt-10 rounded-4xl bg-white p-6 shadow-card sm:p-10">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-left text-ink-light">
                <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-party-pink-100 pt-8 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-party-pink-100 sm:mx-0">
                  <item.icon className="h-6 w-6 text-party-pink-500" />
                </div>
                <p className="mt-3 font-display font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={140} className="mt-10 flex justify-center">
          <CTAButton size="lg" />
        </ScrollReveal>
      </div>
    </section>
  );
}
