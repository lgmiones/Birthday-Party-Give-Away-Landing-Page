import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-cream px-5 pb-20 sm:px-8 sm:pb-28">
      <ScrollReveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-party-pink-100 via-party-yellow-100 to-party-blue-100 px-6 py-16 text-center shadow-soft sm:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute left-[8%] top-8 text-3xl motion-safe:animate-float">🎈</span>
            <span className="absolute right-[10%] top-10 text-3xl motion-safe:animate-float-slow">🎁</span>
            <span className="absolute left-[18%] bottom-8 text-2xl motion-safe:animate-wiggle">🎊</span>
            <span className="absolute right-[16%] bottom-10 text-3xl motion-safe:animate-float">🎂</span>
          </div>

          <div className="relative">
            <h2 id="final-cta-heading" className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
              Your Dream Birthday Party Could Be One Click Away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-light">
              Don&apos;t miss your chance to win a completely planned celebration for
              your family. See what&apos;s included and how to enter.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton size="lg" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
