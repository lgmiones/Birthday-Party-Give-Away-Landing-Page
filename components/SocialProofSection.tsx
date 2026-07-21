import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { IconStar } from "./icons";

const testimonials = [
  {
    quote:
      "Everything was already planned out — decorations, cake, games. I didn't lift a finger and my son had the best birthday ever.",
    name: "Priya M.",
    role: "Parent of a 6-year-old",
  },
  {
    quote:
      "The kids were entertained the entire time and I actually got to enjoy the party instead of running it.",
    name: "Daniel R.",
    role: "Parent of twins",
  },
  {
    quote:
      "It felt like a professionally planned event, but it still felt personal and fun for our family.",
    name: "Courtney L.",
    role: "Parent of a 9-year-old",
  },
];

const gallery = [
  {
    src: "/images/images/Birthday-parties.jpg",
    alt: "Kids gathered around a birthday cake with a balloon garland at Bolder Adventure Park",
    span: "sm:row-span-2",
  },
  {
    src: "/images/images/Parties1.png",
    alt: "Kids sharing pizza at a birthday party celebration",
    span: "sm:row-span-1",
  },
  {
    src: "/images/images/Groups2.jpg",
    alt: "Kids playing laser tag together during a party",
    span: "sm:row-span-1",
  },
  {
    src: "/images/images/Parties2.png",
    alt: "Girls jumping and celebrating on the jump pads at Bolder Adventure Park",
    span: "sm:row-span-2",
  },
  {
    src: "/images/carousel-images/Carousel-1.jpg",
    alt: "The climbing wall and tubing slides at Bolder Adventure Park",
    span: "sm:row-span-1",
  },
  {
    src: "/images/All-Attraction/Bumper-cars.jpg",
    alt: "A kid laughing while riding bumper cars at Bolder Adventure Park",
    span: "sm:row-span-1",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-party-yellow-300" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section aria-labelledby="social-proof-heading" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 id="social-proof-heading" className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Loved by Families Like Yours
          </h2>
          <p className="mt-4 text-ink-light">
            Hundreds of happy celebrations hosted — here&apos;s what a few parents
            had to say.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delayMs={i * 80}>
              <figure className="h-full rounded-3xl bg-white p-7 shadow-card">
                <Stars />
                <blockquote className="mt-4 text-ink-light">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 font-display font-bold text-ink">
                  {t.name}
                  <span className="block text-sm font-normal text-ink-light">{t.role}</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14 text-center">
          <p className="font-display text-3xl font-extrabold text-party-pink-500 sm:text-4xl">
            Hundreds of Happy Celebrations Hosted
          </p>
        </ScrollReveal>

        {/* Celebration gallery — kicker + headline + asymmetric photo grid */}
        <ScrollReveal className="mx-auto mt-20 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-party-pink-500">
            <span className="h-px w-8 bg-party-pink-300" aria-hidden="true" />
            A Glimpse of the Celebration
            <span className="h-px w-8 bg-party-pink-300" aria-hidden="true" />
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            This Is What a Happy Birthday Looks Like.
          </h3>
          <p className="mt-3 text-ink-light">
            Frosting on fingers, confetti in the air, and a smile that
            won&apos;t quit. That&apos;s the goal, every single time.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[190px]">
          {gallery.map((img, i) => (
            <ScrollReveal key={img.src} delayMs={i * 50} className={img.span}>
              <div className="group h-full overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={480}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
