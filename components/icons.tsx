// Hand-rolled inline SVG icon set — keeps the project dependency-free.
// Only the icons actually used on the site live here (checklists, the
// "how entry works" steps, and star ratings).
import type { SVGProps } from "react";

export function IconClipboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="8.5" y="2.5" width="7" height="3.5" rx="1.5" fill="currentColor" />
      <path d="M8.5 11h7M8.5 15h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconGift(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="9.5" width="17" height="11" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 9.5h17M12 9.5V21" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 9.5c-1-3.2-6-3.6-6-.5 0 1.7 3 1.9 6 .5zm0 0c1-3.2 6-3.6 6-.5 0 1.7-3 1.9-6 .5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.9z" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
