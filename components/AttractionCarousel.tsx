"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Attraction = {
  src: string;
  alt: string;
  label: string;
};

const DOT_COLORS = [
  "bg-party-pink-500",
  "bg-party-yellow-300",
  "bg-party-blue-400",
  "bg-party-lavender-400",
];

const AUTOPLAY_MS = 3800;
const RESUME_DELAY_MS = 4500;
const COPIES = 3; // real set repeated 3x so there's always a neighbor to scroll to

/**
 * An endless, center-focused carousel: the active slide sits large and sharp
 * in the middle, neighbors peek in dimmed on either side, and a caption
 * slides up over each photo. The real attraction list is tripled end-to-end
 * so you can keep scrolling/swiping/clicking "next" forever in either
 * direction — once the view drifts into one of the outer copies, it's
 * silently re-centered back into the middle copy (identical content, so the
 * jump is invisible) to make the loop feel truly unlimited instead of
 * snapping back at the ends.
 */
export default function AttractionCarousel({ attractions }: { attractions: Attraction[] }) {
  const n = attractions.length;
  const loop = Array.from({ length: COPIES }, () => attractions).flat();

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(n); // position within the tripled loop array
  const indexRef = useRef(n);
  const isInteracting = useRef(false);
  const resumeTimer = useRef<number | null>(null);
  const scrollEndTimer = useRef<number | null>(null);
  const recentering = useRef(false);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0 });

  const setIndexBoth = (i: number) => {
    indexRef.current = i;
    setIndex(i);
  };

  const scrollToIndex = useCallback((i: number, smooth: boolean) => {
    const track = trackRef.current;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  // Land on the first real slide (middle copy) with no animation on mount.
  useEffect(() => {
    const raf = requestAnimationFrame(() => scrollToIndex(n, false));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Figure out which slide is actually centered, and silently re-center
  // into the middle copy whenever we've drifted into an outer copy — this
  // is what makes the loop feel endless instead of running out of slides.
  const syncFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || recentering.current) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = indexRef.current;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const center = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(center - trackCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setIndexBoth(closest);

    if (closest < n || closest >= n * 2) {
      const target = (((closest % n) + n) % n) + n;
      recentering.current = true;
      requestAnimationFrame(() => {
        scrollToIndex(target, false);
        setIndexBoth(target);
        recentering.current = false;
      });
    }
  }, [n, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = window.setTimeout(syncFromScroll, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [syncFromScroll]);

  const pauseAutoplay = () => {
    isInteracting.current = true;
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      isInteracting.current = false;
    }, RESUME_DELAY_MS);
  };

  // Autoplay always steps forward through the loop — never wraps, just
  // keeps incrementing, and the recenter effect keeps it in valid range.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (isInteracting.current) return;
      const next = indexRef.current + 1;
      setIndexBoth(next);
      scrollToIndex(next, true);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [scrollToIndex]);

  useEffect(() => () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
  }, []);

  const goTo = (i: number) => {
    pauseAutoplay();
    setIndexBoth(i);
    scrollToIndex(i, true);
    scheduleResume();
  };

  const activeDot = ((index % n) + n) % n;
  const copyBase = index - activeDot;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    pauseAutoplay();
    dragState.current = { dragging: true, startX: e.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    track.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    dragState.current.dragging = false;
    scheduleResume();
  };

  return (
    <div className="relative" onMouseEnter={pauseAutoplay} onMouseLeave={scheduleResume}>
      <div
        ref={trackRef}
        className="hide-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[16%] py-4 active:cursor-grabbing sm:px-[22%]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        role="region"
        aria-roledescription="carousel"
        aria-label="Bolder Adventure Park attractions"
      >
        {loop.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`group relative aspect-square w-[68%] flex-shrink-0 snap-center overflow-hidden rounded-3xl shadow-card transition-all duration-500 ease-out sm:w-[56%] ${
              i === index ? "scale-100 opacity-100" : "scale-[0.88] opacity-50"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              draggable={false}
              sizes="(max-width: 640px) 68vw, 56vw"
              className="pointer-events-none select-none object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 pt-10">
              <p className="font-display text-sm font-bold text-white drop-shadow sm:text-base">
                {img.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / next arrows, desktop only — thumb-friendly swipe handles it on touch.
          These never run out: they just keep walking through the tripled loop. */}
      <button
        type="button"
        aria-label="Previous attraction"
        onClick={() => goTo(index - 1)}
        className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-ink shadow-card transition hover:scale-110 hover:text-party-pink-500 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 4l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next attraction"
        onClick={() => goTo(index + 1)}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-ink shadow-card transition hover:scale-110 hover:text-party-pink-500 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Story-style dot indicators, one color per real slide. Clicking a dot
          jumps within the current copy, so it never causes a big visual leap. */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {attractions.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Go to ${img.label}`}
            aria-current={i === activeDot}
            onClick={() => goTo(copyBase + i)}
            className={`h-2 rounded-full transition-all duration-300 ${DOT_COLORS[i % DOT_COLORS.length]} ${
              i === activeDot ? "w-7 opacity-100" : "w-2 opacity-35 hover:opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
