import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";
import { GIVEAWAY_URL } from "@/lib/constants";

const stats = [
  { value: "500+", label: "Families Entered" },
  { value: "4.9★", label: "Average Rating" },
  { value: "1", label: "Grand-Prize Winner" },
];

export default function HeroSection() {
  return (
    <section
      id="giveaway"
      aria-label="Birthday party giveaway introduction"
      className="relative overflow-hidden bg-gradient-to-b from-party-yellow-50 via-cream to-cream"
    >
      {/* Top trust bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-party-pink-100 bg-white/70 px-4 py-2.5 text-center text-xs font-bold tracking-wide text-ink sm:text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-party-yellow-200 px-3 py-1">
          🎉 500+ Families Already Entered
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1">
          FAMILY-TRUSTED &middot; FREE TO ENTER
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
            The Birthday Party Your Kids Will{" "}
            <em className="text-party-pink-500">Never</em> Stop{" "}
            <span className="marker-highlight">Talking About.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-light">
            One lucky family wins a completely planned birthday celebration —
            venue, cake, decorations, games, and gifts, all taken care of.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton size="lg" />
            <Link
              href="#prize"
              className="font-semibold text-ink-light underline decoration-party-pink-300 decoration-2 underline-offset-4 transition-colors hover:text-party-pink-500"
            >
              View Prize Details
            </Link>
          </div>
        </ScrollReveal>

        {/* "Video style" preview card, echoing the reference layout */}
        <ScrollReveal delayMs={120} className="relative mx-auto mt-12 max-w-2xl">
          <Link
            href={GIVEAWAY_URL}
            aria-label="See the full giveaway details"
            className="group relative block overflow-hidden rounded-4xl border-4 border-white bg-ink shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/images/images/Reviews-birthday-parties.jpg"
                alt="Kids cheering at a birthday party at Bolder Adventure Park, with a Happy Birthday balloon banner and cake"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-soft transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-cta sm:h-8 sm:w-8" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </div>
          </Link>

          <span className="sticker-badge absolute -right-3 -top-5 z-10 rounded-2xl bg-cta px-4 py-2 font-display text-sm font-bold text-white shadow-card sm:-right-6 sm:text-base">
            Limited Entries!
          </span>

          <p className="mt-4 text-sm text-ink-light">
            Peek at what one winning family&apos;s birthday could look like —
            then see the giveaway for yourself.
          </p>
        </ScrollReveal>

        {/* Stat row */}
        <ScrollReveal delayMs={180} className="mx-auto mt-12 flex max-w-xl items-center justify-center divide-x divide-party-pink-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 px-3 sm:px-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-ink-light sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Prize / urgency bar */}
        <ScrollReveal
          delayMs={220}
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-3xl bg-white p-4 shadow-card sm:flex-row sm:gap-6 sm:p-5"
        >
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-party-yellow-100 text-2xl">
              🎁
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-light">Total Prize Value</p>
              <p className="font-display text-xl font-bold text-ink sm:text-2xl">
                $2,500+ <span className="text-sm font-semibold text-party-pink-500">&middot; 100% Free to Enter</span>
              </p>
            </div>
          </div>
          <CTAButton size="md" className="w-full sm:w-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
}
