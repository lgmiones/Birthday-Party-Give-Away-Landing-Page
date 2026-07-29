import type { ReactNode } from "react";

type CTAButtonProps = {
  children?: ReactNode;
  size?: "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

/**
 * The single primary call-to-action on the site. Always labeled "Enter Now
 * to Win" and always scrolls down to the entry form (id="enter") on the
 * same page, per Kai's single-flow layout: headline, subhead, video,
 * button, form, all on one page, no separate route.
 */
export default function CTAButton({
  children = "Enter Now to Win",
  size = "md",
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-lg"
      : "px-6 py-3 text-base";

  return (
    <a
      href="#enter"
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md bg-cta font-display uppercase tracking-wide text-white shadow-soft transition-all duration-200 hover:bg-cta-hover hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block text-lg leading-none transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
