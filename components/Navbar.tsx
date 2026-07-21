"use client";

import { useState } from "react";
import Link from "next/link";
import { GIVEAWAY_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { IconClose, IconMenu } from "./icons";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-party-pink-100 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <Link
          href="#giveaway"
          className="flex items-center gap-2 font-display text-xl font-bold text-ink sm:text-2xl"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-party-pink-200 text-lg sm:h-10 sm:w-10"
          >
            🎂
          </span>
          {SITE_NAME}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-ink-light transition-colors hover:text-party-pink-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTAButton size="md" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-party-pink-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-party-pink-100 bg-cream px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-medium text-ink-light hover:bg-party-pink-50 hover:text-party-pink-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href={GIVEAWAY_URL}
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-cta px-5 py-3 text-center font-display font-semibold text-white shadow-soft"
            >
              See Giveaway 🎉
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
