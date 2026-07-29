"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { IconStar } from "./icons";

// Real 5-star guest reviews, pulled from bolderadventurepark.com and
// Bolder's Tripadvisor listing, so this section reflects actual feedback
// rather than invented quotes.
const testimonials = [
  {
    quote:
      "This place is awesome. My son loved the blaster, trampoline, and bumper cars. Staff is great and friendly. I greatly recommend this place!",
    name: "Missy Zamora",
    role: "Park Guest",
  },
  {
    quote:
      "Came here for my niece’s birthday party and the party hosts were amazing. Everyone was very informative and polite. Definitely recommend!",
    name: "Giovanna Cortina",
    role: "Birthday Party Host",
  },
  {
    quote:
      "Bolder has become one of my daughter’s favorite places to hang out with her friends. She loves the opportunities to enjoy her favorite activities.",
    name: "Keonica Rushing",
    role: "Park Guest",
  },
  {
    quote:
      "Bolder Adventure Park is a fantastic destination for families, offering more than 15 attractions that keep kids engaged. We've had an incredible time every time we've gone.",
    name: "Kelly W.",
    role: "Tripadvisor Review",
  },
];

function QuoteMark() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true" className="text-cta">
      <path
        d="M0 22V13.2C0 5.4 4.4 0.8 12 0V4.6C7.6 5.4 5.6 7.6 5.6 11.4H12V22H0ZM16 22V13.2C16 5.4 20.4 0.8 28 0V4.6C23.6 5.4 21.6 7.6 21.6 11.4H28V22H16Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-4 w-4 text-gold-500" />
      ))}
    </div>
  );
}

/**
 * Real 5-star reviews, shown as a horizontal carousel (three visible at
 * once on desktop, one at a time on mobile) instead of a static grid, so
 * more quotes can rotate through without the section growing taller. Same
 * snap-scroll-plus-arrows pattern as AttractionCarousel, for consistency.
 */
export default function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section aria-label="Guest reviews" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ScrollReveal className="text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <StarRow />
            <span className="font-body text-sm font-bold text-ink-light">
              Real 5-Star Reviews
            </span>
          </div>
          <h2 className="font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
            What Families Are Saying
          </h2>
        </ScrollReveal>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-card
                className="w-[85%] flex-shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
              >
                <ScrollReveal delayMs={i * 80} className="h-full rounded-lg bg-white p-6 shadow-card">
                  <div className="flex items-start justify-between">
                    <QuoteMark />
                    <StarRow />
                  </div>
                  <p className="mt-4 text-ink-light">{t.quote}</p>
                  <p className="mt-4 font-body text-sm font-bold uppercase tracking-wide text-ink">{t.name}</p>
                  <p className="text-xs text-ink-light">{t.role}</p>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous review"
            onClick={() => scroll(-1)}
            disabled={atStart}
            className="absolute -left-2 top-[calc(50%-1.25rem)] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card transition-all hover:bg-cta hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:flex sm:-left-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => scroll(1)}
            disabled={atEnd}
            className="absolute -right-2 top-[calc(50%-1.25rem)] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card transition-all hover:bg-cta hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:flex sm:-right-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
