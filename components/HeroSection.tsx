import Image from "next/image";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

/**
 * Main headline, sub headline, video, button — in that order, nothing else.
 * Restyled to sit closer to bolderadventurepark.com's own look: condensed
 * uppercase display type, a punchy orange CTA, and a plain white/near-black
 * palette instead of the earlier pastel party theme.
 */
export default function HeroSection() {
  return (
    <section id="giveaway" aria-label="Free birthday party giveaway" className="bg-cream">
      <div className="flex justify-center pt-8">
        <Image
          src="/images/images/bolder-logo.png"
          alt="Bolder Adventure Park"
          width={340}
          height={216}
          className="h-24 w-auto sm:h-32"
          priority
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-14 pt-8 text-center sm:px-8 sm:pb-20 sm:pt-10">
        <ScrollReveal>
          <h1 className="mx-auto max-w-2xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Win a Free
            <br />
            <span className="text-cta">Birthday Party</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-light">
            One winner a month takes home the $1,000 Ultimate Bolder
            Birthday: a free All Access Party, arcade cards for the
            whole crew, and a professional photographer. One entry,
            zero cost to enter.
          </p>
        </ScrollReveal>

        {/* Video — drop your real explainer video in here. Swap the
            <Image> + play-button block below for a <video> tag or an
            <iframe> embed (YouTube/Vimeo) once it's ready. */}
        <ScrollReveal delayMs={100} className="relative mx-auto mt-10 max-w-2xl">
          <div className="group relative block cursor-pointer overflow-hidden rounded-lg bg-night shadow-soft">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/images/Reviews-birthday-parties.jpg"
                alt="Video placeholder: kids cheering at a birthday party at Bolder Adventure Park"
                fill
                priority
                className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-night/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 text-cta sm:h-7 sm:w-7">
                    <path d="M6 4.5v15l13-7.5-13-7.5Z" fill="currentColor" />
                  </svg>
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink sm:text-sm">
                  How the giveaway works
                </span>
                <span className="rounded-md bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Video
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Button */}
        <ScrollReveal delayMs={160} className="mt-10">
          <CTAButton size="lg" />
        </ScrollReveal>
      </div>
    </section>
  );
}
