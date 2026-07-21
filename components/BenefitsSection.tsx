import ScrollReveal from "./ScrollReveal";
import { IconClipboard, IconUsers, IconCalm, IconHeart } from "./icons";

const benefits = [
  {
    icon: IconClipboard,
    title: "Everything Already Organized",
    desc: "Venue, food, decor, and activities — all arranged before the big day arrives.",
    bg: "bg-party-blue-100",
  },
  {
    icon: IconUsers,
    title: "Fun for Every Guest",
    desc: "Games and activities designed to keep kids of all ages happily entertained.",
    bg: "bg-party-pink-100",
  },
  {
    icon: IconCalm,
    title: "Stress-Free for Parents",
    desc: "No juggling vendors or spreadsheets — the whole celebration is handled.",
    bg: "bg-party-lavender-100",
  },
  {
    icon: IconHeart,
    title: "A Truly Memorable Day",
    desc: "A birthday designed to be remembered, built around your child's joy.",
    bg: "bg-party-yellow-100",
  },
];

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-heading" className="confetti-bg bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 id="benefits-heading" className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Why Families Will Love It
          </h2>
          <p className="mt-4 text-ink-light">
            Designed to take the pressure off parents and put the fun front and
            center for kids.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <ScrollReveal key={item.title} delayMs={i * 70}>
              <div className="h-full rounded-3xl border border-party-pink-100 bg-cream p-7 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${item.bg}`}>
                  <item.icon className="h-8 w-8 text-ink" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
