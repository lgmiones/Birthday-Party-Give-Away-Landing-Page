# Free Birthday Party Giveaway Landing Page

A lean, single-offer Next.js (App Router) + TypeScript + Tailwind CSS
marketing landing page for the Bolder Adventure Park birthday giveaway. Its
only job is to get cold ad traffic to enter for a free All Access Birthday
Party for 10 kids.

Styled to sit close to bolderadventurepark.com's own look: a condensed,
uppercase display face, a punchy orange CTA color, and alternating white and
near-black sections, instead of an invented brand look.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

(If you used the setup below that already ran `git init` and made the first
commit for you, just add the remote and push.)

### 2. Deploy to Vercel

- Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
- Framework preset: **Next.js** (auto-detected, no config needed).
- No environment variables are required; click **Deploy**.
- Every push to `main` will auto-deploy. Pull requests get their own preview
  URL automatically.

Image optimization (the `next/image` calls throughout) is handled
automatically by Vercel's infrastructure at request time, nothing extra to
configure. If you instead self-host with `npm run build && npm run start`
on your own server, install `sharp` (`npm install sharp`) so local
optimization has a native encoder to use.

## Page structure

Everything lives on one page, no separate routes. It follows Kai's
requested flow: banner, headline, sub headline, real VSL video, button,
form, more about Bolder, social proof.

The "B" A/B-test variant (no VSL, form at the very top) is a separate
project — see the sibling `birthday-giveaway-b` folder — so each version
deploys and tracks independently.

```
app/
  layout.tsx        Root layout, metadata, header tracking scripts (Bolder tag + Meta Pixel)
  page.tsx           Banner -> Hero (incl. VSL) -> Entry Form -> Prize -> About Bolder -> Social Proof
  globals.css        Tailwind + scroll-reveal + reduced-motion + Wistia placeholder styles
components/
  HeroSection.tsx         Headline, sub headline, real Wistia VSL embed, CTA button
  EntryForm.tsx           Real Patch form (iframe), takes an optional formUrl prop
  PrizeSection.tsx        What you'd win, with the $1,000 value breakdown
  AboutBolderSection.tsx  Short "more about Bolder" blurb, dark section
  AttractionCarousel.tsx  Labeled carousel of all 12 real Bolder attractions
  SocialProof.tsx         Real 5-star guest reviews, shown as a carousel
  Footer.tsx              Dark footer, centered logo
  CTAButton.tsx           Reusable button, anchors down to #enter on the page
  AnnouncementBanner.tsx  Scrolling ticker strip at the very top of the page
  ScrollReveal.tsx        IntersectionObserver-based reveal-on-scroll wrapper
  icons.tsx               Hand-rolled inline SVG icon set (no icon library)
types/
  wistia.d.ts        JSX typing for the <wistia-player> custom element
lib/
  constants.ts       Site name
public/images/       Bolder Adventure Park logo + photography used on the page
```

Every file in `components/` is imported and rendered somewhere, no unused
drafts left in the tree.

## Notes

- **The entry form is Kai's real Patch form**, embedded via an iframe in
  `EntryForm.tsx` (`.../6a746f262960ef3d03df0761/700670`). The `formUrl`
  prop lets a different page pass a different Patch form if needed. Kai's
  Patch tracking pixel for this form is loaded separately in
  `app/layout.tsx` via `next/script`. If Patch changes the form's height,
  bump the iframe's `minHeight` in `EntryForm.tsx` to match.
- **The VSL is Kai's real Wistia video** (media-id `yxgwzyh3fp`), embedded
  in `HeroSection.tsx` via the `<wistia-player>` web component.
- **Header tracking scripts** (Bolder's ad-click tag + Meta/Facebook Pixel)
  are in `app/layout.tsx`'s `<head>`, loading on every page load.
- There's no dedicated official-rules section on the page right now — add
  one (with real legal review) before the giveaway actually launches.
- Update the CTA button's default label in one place: `CTAButton.tsx`'s
  `children` prop.
- Respects `prefers-reduced-motion` (see `globals.css`) and keeps visible
  focus states throughout.
- `public/images/` also contains the original source photo dump from Bolder
  Adventure Park (attraction, venue, and event photography) alongside the
  handful of files actually used on the page. Only the used files are
  tracked in git, see `.gitignore`, so the rest stays available locally for
  future sections without bloating the repo or the Vercel build.
