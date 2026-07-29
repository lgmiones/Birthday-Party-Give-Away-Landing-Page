"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Attraction = {
  src: string;
  alt: string;
  name: string;
};

// All twelve real attraction photos, labeled the way the actual "All
// Attractions" grid on bolderadventurepark.com names each one.
const attractions: Attraction[] = [
  { src: "/images/All-Attraction/Ropes-courses.jpg", alt: "Kids balancing across the elevated ropes course", name: "Ropes Course" },
  { src: "/images/All-Attraction/Mountain-experience.jpg", alt: "A kid scaling the indoor mountain experience", name: "Mountain Course" },
  { src: "/images/All-Attraction/Zip-lines.jpg", alt: "A kid cheering while riding the zip line at Bolder Adventure Park", name: "Zip Line" },
  { src: "/images/All-Attraction/Tubing-slides.jpg", alt: "Kids racing down the tubing slides at Bolder Adventure Park", name: "Tubing Slides" },
  { src: "/images/All-Attraction/Blaster-zone.jpg", alt: "Kids playing in the blaster zone arena", name: "Blaster Zone" },
  { src: "/images/All-Attraction/Bumper-cars.jpg", alt: "A kid laughing while riding bumper cars at Bolder Adventure Park", name: "Bumper Cars" },
  { src: "/images/All-Attraction/Jump-pads.png", alt: "A kid mid-jump on the trampoline jump pads", name: "Jump Pad" },
  { src: "/images/All-Attraction/Adventure-nets.jpg", alt: "A kid climbing through the adventure netting course", name: "Adventure Nets" },
  { src: "/images/All-Attraction/Exploration-play.jpg", alt: "Kids climbing through the exploration play structure", name: "Exploration Playground" },
  { src: "/images/All-Attraction/Free-fall-drop.jpg", alt: "A kid mid-air on the free fall drop attraction", name: "Free Fall Drop" },
  { src: "/images/All-Attraction/Climbing-adventures.jpg", alt: "The rock-carved Bolder entrance archway with climbing routes", name: "Climbing Adventures" },
  { src: "/images/All-Attraction/Archery.jpg", alt: "A kid aiming a bow at the archery range", name: "Archery" },
];

/**
 * Every real Bolder attraction, labeled like the actual "All Attractions"
 * grid on bolderadventurepark.com, but shown as a compact horizontal
 * carousel (three cards visible at once on desktop, one peeking on mobile)
 * instead of the real site's tall multi-row grid, so this stays a short,
 * scannable strip rather than a page-length wall of photos. Snap-scrolling
 * plus arrow buttons cover both swipe and click navigation.
 */
export default function AttractionCarousel() {
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
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
      <div
        ref={trackRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-5"
      >
        {attractions.map((item) => (
          <div
            key={item.name}
            data-card
            className="relative h-56 w-[78%] flex-shrink-0 snap-start overflow-hidden rounded-lg shadow-card sm:h-64 sm:w-[45%] lg:w-[31.5%]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              draggable={false}
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 32vw"
              className="pointer-events-none select-none object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-md bg-white px-4 py-2.5 shadow-soft">
              <p className="font-display text-lg uppercase tracking-tight text-ink sm:text-xl">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous attraction"
        onClick={() => scroll(-1)}
        disabled={atStart}
        className="absolute left-1 top-[calc(50%-1.25rem)] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card transition-all hover:bg-cta hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next attraction"
        onClick={() => scroll(1)}
        disabled={atEnd}
        className="absolute right-1 top-[calc(50%-1.25rem)] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card transition-all hover:bg-cta hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
