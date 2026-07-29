import ScrollReveal from "./ScrollReveal";
import AttractionCarousel from "./AttractionCarousel";

export default function AboutBolderSection() {
  return (
    <section id="bolder" aria-labelledby="bolder-heading" className="bg-night py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-night">
            New to Bolder?
          </span>
          <h2 id="bolder-heading" className="mt-4 font-display text-4xl uppercase tracking-tight text-white sm:text-5xl">
            More About Bolder
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Bolder Adventure Park is 66,000 sq ft of indoor adventure in the
            heart of DFW: zip lines, ropes courses, climbing walls, bumper
            cars, tubing slides, and more, all under one roof. It&apos;s
            built for unforgettable birthdays and family days out, rain or
            shine.
          </p>
        </ScrollReveal>
      </div>

      {/* Labeled attraction carousel — three cards visible at once on
          desktop, contained within the page width (unlike the old
          edge-to-edge filmstrip) so the arrow buttons have somewhere
          sensible to sit. */}
      <ScrollReveal delayMs={80} className="mt-10 sm:mt-12">
        <p className="mx-auto mb-5 max-w-6xl px-5 text-center font-body text-sm font-bold uppercase tracking-wide text-gold-500 sm:px-8 sm:text-base">
          All Attractions at Bolder
        </p>
        <AttractionCarousel />
      </ScrollReveal>
    </section>
  );
}
