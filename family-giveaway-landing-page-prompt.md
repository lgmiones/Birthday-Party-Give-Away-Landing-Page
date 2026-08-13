# Build Prompt: Bolder Family Day Pass Giveaway Landing Page

Use this prompt to kick off the build. It mirrors the Birthday Party Giveaway
landing page project (same tech stack, same single-page architecture, same
content-sourcing discipline), swapped to a new prize.

---

## Prompt

Build a lean, single-page Next.js (App Router) + TypeScript + Tailwind CSS
marketing landing page for a **Bolder Adventure Park Family Day Pass
Giveaway**. Its only job is to get cold ad traffic to enter for a chance to
win a free family day out at Bolder Adventure Park.

**Prize:** A Family Adventure Day — 4 All Access Passes (a family of up to
4), covering every attraction at Bolder: ropes course, mountain course, zip
line, tubing slides, blaster zone, bumper cars, jump pad, adventure nets,
exploration playground, free fall drop, climbing adventures, and archery.
Real value: 4 × $34.99 All Access Pass = **$139.96**. (Confirm this exact
figure and whether food/parking is bundled with Paul before publishing —
Bolder's pricing page lists All Access Passes "starting at $34.99 for a
limited time," so double-check current pricing hasn't changed.)

**Draw structure:** one winner drawn per month, same cadence as the
birthday giveaway, unless told otherwise.

**Architecture — mirror the birthday project exactly:**
- Single page, no separate routes. Flow: headline → sub headline → video
  placeholder → CTA button → entry form (embedded on the same page, not
  linked out) → prize breakdown → about Bolder → social proof (real 5-star
  reviews) → footer.
- CTA button always says "Enter Now to Win," always scrolls to `#enter` on
  the same page via a plain anchor, no routing.
- Entry form section: build a placeholder box first (labeled, dashed
  border) sized to fit a Patch (or similar) embed, then swap in the real
  iframe once the team shares the form link, same pattern used on the
  birthday page's `EntryForm.tsx`.
- Reuse the shared component set as-is where it still applies:
  `ScrollReveal.tsx`, `AttractionCarousel.tsx` (all 12 real attraction
  photos, labeled), `SocialProof.tsx` (carousel of real reviews),
  `CTAButton.tsx`, `AnnouncementBanner.tsx`, `Footer.tsx`, `icons.tsx`.
  Only the copy and prize-specific content change.

**Design direction:** match bolderadventurepark.com's real look, not an
invented brand — condensed uppercase display font, punchy orange CTA color,
alternating white/near-black sections. Do not reuse the "$1,000 Ultimate
Bolder Birthday" framing or any birthday-specific copy; this is a family
day-out prize, not a party.

**Content-sourcing rule:** every prize inclusion, attraction name, and
testimonial must come from real bolderadventurepark.com material or a
verifiable third-party review (Tripadvisor, Google, etc.) — do not invent
figures, quotes, or inclusions. Cite exact pricing back to the ticket page
so it can be sanity-checked before launch.

**Out of scope unless asked:** a rules/legal section (add before the
giveaway actually launches, with real legal review), a Wistia/VSL video
embed (drop in once the team provides the file), and any backend wiring
for the form beyond the third-party embed.

---

## Notes for whoever runs this prompt

- This assumes the same team (Paul, Kai) and the same eventual form vendor
  (Patch) as the birthday project — adjust names/vendor if that's changed.
- The $139.96 figure is a starting estimate built from Bolder's public
  ticket pricing, not a confirmed committed prize value — get Paul's
  sign-off the same way the $999 birthday prize value was confirmed before
  it went live.
