"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { IconChevronDown } from "./icons";

const faqs = [
  {
    q: "What is included in the giveaway?",
    a: "The full prize bundle covers the party venue, food and drinks, a birthday cake, decorations, games and activities, a party host, goodie bags, and a photography package. Full details are listed on the giveaway page.",
  },
  {
    q: "Who can participate?",
    a: "The giveaway is open to families who meet the eligibility requirements listed in the official rules on the giveaway page. Check there for age, location, and other participation criteria.",
  },
  {
    q: "Is there an entry fee?",
    a: "No. Entry is free — there is no purchase or payment required to participate.",
  },
  {
    q: "When will the winner be announced?",
    a: "The winner announcement date is listed on the giveaway page along with the full entry timeline.",
  },
  {
    q: "Can the prize be transferred?",
    a: "Prize transferability details, including whether it can be gifted or rescheduled, are outlined in the official giveaway rules.",
  },
  {
    q: "Where can I see the complete rules?",
    a: "The complete official rules, eligibility requirements, and entry instructions are all available on the giveaway page.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-party-lavender-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ScrollReveal className="text-center">
          <h2 id="faq-heading" className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-ink-light">
            Everything families usually ask before checking out the giveaway.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <ScrollReveal key={item.q} delayMs={i * 40}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-card">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display font-semibold text-ink hover:bg-party-lavender-50"
                    >
                      {item.q}
                      <IconChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-party-pink-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-6 pb-5 text-ink-light">{item.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
