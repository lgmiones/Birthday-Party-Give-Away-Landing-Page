import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

const chips = [
  { value: "52", label: "Chances to Win" },
  { value: "12", label: "Months to Use It" },
  { value: "$0", label: "Cost to Enter" },
];

export default function HeroSection() {
  return (
    <section
      id="giveaway"
      aria-label="Free birthday party giveaway"
      className="relative overflow-hidden bg-gradient-to-b from-party-yellow-50 via-cream to-cream"
    >
      {/* Top trust bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-party-pink-100 bg-white/70 px-4 py-2.5 text-center text-xs font-bold tracking-wide text-ink sm:text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-party-yellow-200 px-3 py-1">
          🎁 100% FREE TO ENTER
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1">
          52 WEEKLY DRAWINGS &middot; 52 CHANCES TO WIN
        </span>
      </div>

      {/* Host brand mark */}
      <div className="relative z-10 flex justify-center pt-6">
        <Image
          src="/images/images/bolder-logo.png"
          alt="Bolder Adventure Park"
          width={340}
          height={216}
          className="h-24 w-auto sm:h-32"
          priority
        />
      </div>

      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-[5%] top-16 h-10 w-10 text-party-yellow-300 motion-safe:animate-wiggle sm:h-14 sm:w-14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 1v3M12 20v3M23 12h-3M4 12H1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1M19.8 19.8l-2.1-2.1M6.3 6.3 4.2 4.2" />
          </g>
        </svg>
        <svg
          className="absolute right-[6%] top-24 h-10 w-24 text-party-lavender-300 motion-safe:animate-float-slow sm:h-14 sm:w-32"
          viewBox="0 0 120 40"
          fill="none"
        >
          <path
            d="M2 30c10-24 20-24 30 0s20 24 30 0 20-24 30 0 20 24 26 10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute left-[8%] bottom-10 text-3xl motion-safe:animate-float-slow">🎊</span>
        <span className="absolute right-[10%] bottom-16 text-3xl motion-safe:animate-float">🎁</span>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-4 text-center sm:px-8 sm:pb-20 sm:pt-6">
        <ScrollReveal>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
            You Could <em className="text-party-pink-500">Win</em> a{" "}
            <span className="marker-highlight">FREE Birthday Party</span> Your
            Kids Will Never Forget.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-light">
            One winner takes home a completely free All Access Birthday Party
            for 10 kids at Bolder Adventure Park. No purchase, no catch.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton size="lg" />
            <Link
              href="#prize"
              className="font-semibold text-ink-light underline decoration-party-pink-300 decoration-2 underline-offset-4 transition-colors hover:text-party-pink-500"
            >
              See What You Win
            </Link>
          </div>
        </ScrollReveal>

        {/* Video placeholder — drop your real explainer video in here.
            Swap the <Image> + play-button block below for a <video> tag or
            an <iframe> embed (YouTube/Vimeo) once it's ready; everything
            else (border, badge, caption) can stay as-is. */}
        <ScrollReveal delayMs={120} className="relative mx-auto mt-12 max-w-2xl">
          <div className="group relative block cursor-pointer overflow-hidden rounded-4xl border-4 border-white bg-ink shadow-soft">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/images/Reviews-birthday-parties.jpg"
                alt="Video placeholder — kids cheering at a birthday party at Bolder Adventure Park"
                fill
                priority
                className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/10" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 text-party-pink-500 sm:h-7 sm:w-7">
                    <path d="M6 4.5v15l13-7.5-13-7.5Z" fill="currentColor" />
                  </svg>
                </span>
              </div>

              {/* Caption + tag */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ink sm:text-sm">
                  How the Giveaway Works
                </span>
                <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Video
                </span>
              </div>
            </div>
          </div>

          <span className="sticker-badge absolute -right-3 -top-5 z-10 rounded-2xl bg-cta px-4 py-2 font-display text-sm font-bold text-white shadow-card sm:-right-6 sm:text-base">
            1 Entry = 52 Chances!
          </span>

          <p className="mt-4 text-sm text-ink-light">
            Watch a quick video on exactly what you could win — fully
            planned, fully paid for, completely free.
          </p>
        </ScrollReveal>

        {/* Giveaway mechanics chips */}
        <ScrollReveal delayMs={180} className="mx-auto mt-12 flex max-w-xl items-center justify-center divide-x divide-party-pink-100">
          {chips.map((chip) => (
            <div key={chip.label} className="flex-1 px-3 sm:px-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">{chip.value}</p>
              <p className="mt-1 text-xs font-medium text-ink-light sm:text-sm">{chip.label}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
