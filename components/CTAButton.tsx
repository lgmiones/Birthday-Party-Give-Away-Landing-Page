import Link from "next/link";
import type { ReactNode } from "react";
import { GIVEAWAY_URL } from "@/lib/constants";

type CTAButtonProps = {
  children?: ReactNode;
  size?: "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

/**
 * The single primary call-to-action used throughout the site.
 * Always labeled "See Giveaway" and always points at GIVEAWAY_URL,
 * so every instance stays in sync if the destination ever changes.
 */
export default function CTAButton({
  children = "See Giveaway",
  size = "md",
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-lg"
      : "px-6 py-3 text-base";

  return (
    <Link
      href={GIVEAWAY_URL}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-cta font-display font-semibold text-white shadow-soft transition-all duration-200 hover:bg-cta-hover hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
        🎉
      </span>
    </Link>
  );
}
