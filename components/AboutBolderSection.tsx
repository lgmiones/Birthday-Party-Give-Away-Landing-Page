import ScrollReveal from "./ScrollReveal";
import AttractionMarquee from "./AttractionMarquee";

export default function AboutBolderSection() {
  return (
    <section id="bolder" aria-labelledby="bolder-heading" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-party-blue-100 px-4 py-1.5 text-sm font-semibold text-ink">
            New to Bolder?
          </span>
          <h2 id="bolder-heading" className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            What Is Bolder Adventure Park?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-light">
            Bolder Adventure Park is an indoor adventure destination packed
            with zip lines, ropes courses, climbing walls, bumper cars, laser
            tag, tubing slides, and more — all under one roof. It&apos;s built for
            unforgettable birthdays and family days out, rain or shine.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-bleed on purpose — sits outside the max-w-4xl text column so
          the filmstrip can run edge to edge like a real photo strip. */}
      <ScrollReveal delayMs={80} className="mt-8 sm:mt-10">
        <AttractionMarquee />
      </ScrollReveal>
    </section>
  );
}
