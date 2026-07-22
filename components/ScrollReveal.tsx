"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
};

/**
 * Lightweight scroll-reveal wrapper built on IntersectionObserver — no
 * animation library required. Elements fade/slide in once they enter the
 * viewport. The underlying `.reveal` CSS class collapses to a no-op when
 * the user has requested reduced motion (see globals.css).
 */
export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the element is already scrolled past the top of the viewport when
    // this mounts (e.g. the page was loaded/hot-reloaded at a saved scroll
    // position, or navigated to via a URL hash further down the page), it
    // will never fire an "entering viewport" intersection event — it can
    // only exit or already-be-inside. Left alone, it would stay stuck at
    // opacity: 0 forever. Reveal it immediately in that case.
    const rect = node.getBoundingClientRect();
    if (rect.bottom < 0) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Safety net: guarantee content is never permanently invisible even in
    // edge cases the checks above don't anticipate (e.g. an element that
    // starts partially clipped by a parent, or an observer that never
    // reports intersection for some reason).
    const fallback = window.setTimeout(() => {
      node.classList.add("is-visible");
      observer.disconnect();
    }, 1800 + delayMs);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delayMs]);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
