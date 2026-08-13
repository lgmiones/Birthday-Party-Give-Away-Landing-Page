import Image from "next/image";
import Script from "next/script";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

// Kai's real VSL, hosted on Wistia. The blur/placeholder styling for this
// media-id lives in globals.css (`wistia-player[media-id='...']`).
const WISTIA_MEDIA_ID = "yxgwzyh3fp";

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

        {/* Kai's real VSL, embedded via Wistia's web-component player.
            The two loader scripts below register the <wistia-player>
            custom element; the blurred placeholder look before it loads
            comes from the CSS rule in globals.css. */}
        <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
        <Script
          src={`https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`}
          strategy="afterInteractive"
          type="module"
        />
        <ScrollReveal delayMs={100} className="relative mx-auto mt-10 max-w-2xl">
          <div className="overflow-hidden rounded-lg bg-night shadow-soft">
            <wistia-player media-id={WISTIA_MEDIA_ID} aspect="1.7777777777777777" />
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
