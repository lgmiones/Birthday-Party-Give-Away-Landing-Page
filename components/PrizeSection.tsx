import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";
import {
  IconMapPin,
  IconFood,
  IconCake,
  IconDecor,
  IconGames,
  IconHost,
  IconGoodieBag,
  IconCamera,
} from "./icons";

const prizeItems = [
  {
    icon: IconMapPin,
    title: "Party Venue",
    desc: "A fully booked, family-friendly venue reserved just for your celebration.",
    bg: "bg-party-blue-100",
  },
  {
    icon: IconFood,
    title: "Food & Drinks",
    desc: "A full spread of kid-approved food and drinks for guests of all ages.",
    bg: "bg-party-pink-100",
  },
  {
    icon: IconCake,
    title: "Birthday Cake",
    desc: "A custom-designed cake made for the guest of honor.",
    bg: "bg-party-yellow-100",
  },
  {
    icon: IconDecor,
    title: "Decorations",
    desc: "Balloons, streamers, and a full themed decor setup, done for you.",
    bg: "bg-party-lavender-100",
  },
  {
    icon: IconGames,
    title: "Games & Activities",
    desc: "Fun activities and games to keep every guest entertained.",
    bg: "bg-party-mint-100",
  },
  {
    icon: IconHost,
    title: "Party Host",
    desc: "A friendly host to run the show so parents can relax and celebrate too.",
    bg: "bg-party-pink-100",
  },
  {
    icon: IconGoodieBag,
    title: "Goodie Bags",
    desc: "Take-home goodie bags for every guest at the party.",
    bg: "bg-party-blue-100",
  },
  {
    icon: IconCamera,
    title: "Photography Package",
    desc: "Professional photos to capture every candle, cake smash, and smile.",
    bg: "bg-party-yellow-100",
  },
];

export default function PrizeSection() {
  return (
    <section id="prize" aria-labelledby="prize-heading" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-party-yellow-100 px-4 py-1.5 text-sm font-semibold text-ink">
            What You Could Win
          </span>
          <h2 id="prize-heading" className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            A Complete Birthday Party, Ready to Go
          </h2>
          <p className="mt-4 text-ink-light">
            The winning family receives an entire celebration bundle — every
            piece planned and paid for, all built around your birthday guest of
            honor.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {prizeItems.map((item, i) => (
            <ScrollReveal key={item.title} delayMs={i * 60}>
              <div className="group h-full rounded-3xl bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}>
                  <item.icon className="h-7 w-7 text-ink" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14 flex flex-col items-center justify-center gap-6 rounded-4xl bg-gradient-to-r from-party-pink-100 via-party-yellow-100 to-party-blue-100 px-6 py-10 text-center sm:px-12">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink-light">
              Estimated Total Prize Value
            </p>
            <p className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">$2,500+</p>
          </div>
          <p className="max-w-xl text-ink-light">
            Every item above is included — no add-ons, no hidden costs. Just an
            unforgettable birthday, fully planned for one lucky family.
          </p>
          <CTAButton size="lg" />
        </ScrollReveal>
      </div>
    </section>
  );
}
