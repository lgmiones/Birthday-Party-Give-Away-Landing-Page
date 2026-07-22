# Free Birthday Party Giveaway — Landing Page

A lean, single-offer Next.js (App Router) + TypeScript + Tailwind CSS
marketing landing page for the Bolder Adventure Park birthday giveaway. Its
only job is to get cold ad traffic to click **Enter Now to Win** for a free
All Access Birthday Party for 10 kids.

Every "Enter Now to Win" call-to-action points at `GIVEAWAY_URL`
(`lib/constants.ts`, currently `/giveaway`).

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
- Framework preset: **Next.js** (auto-detected — no config needed).
- No environment variables are required; click **Deploy**.
- Every push to `main` will auto-deploy. Pull requests get their own preview
  URL automatically.

Image optimization (the `next/image` calls in `HeroSection` and
`AboutBolderSection`) is handled automatically by Vercel's infrastructure at
request time — nothing extra to configure. If you instead self-host with
`npm run build && npm run start` on your own server, install `sharp`
(`npm install sharp`) so local optimization has a native encoder to use.

## Page structure

The page is intentionally short — five sections, no forms, one repeated CTA:

```
app/
  layout.tsx        Root layout, metadata
  page.tsx           Hero → Prize → About Bolder → FAQ → Final CTA
  globals.css        Tailwind + scroll-reveal + reduced-motion styles
  giveaway/page.tsx  Placeholder destination for all "Enter Now to Win" CTAs
components/
  HeroSection.tsx        Win-focused headline, prize teaser, entry mechanics chips
  PrizeSection.tsx        What's included + valid 12 months / 52 weekly drawings / free
  AboutBolderSection.tsx  Brief "what is Bolder" blurb + attraction photo grid
  FAQSection.tsx          4-question accessible accordion (single-open)
  FinalCTA.tsx            Closing banner CTA
  Footer.tsx
  CTAButton.tsx          Reusable "Enter Now to Win" button, always links to GIVEAWAY_URL
  ScrollReveal.tsx       IntersectionObserver-based reveal-on-scroll wrapper
  icons.tsx              Hand-rolled inline SVG icon set (no icon library)
lib/
  constants.ts       GIVEAWAY_URL, nav links, site name
public/images/       Bolder Adventure Park logo + photography used on the page
```

Unused but left in place (not imported by `page.tsx`, safe to delete or
repurpose later): `Navbar.tsx`, `BenefitsSection.tsx`, `HowItWorksSection.tsx`,
`SocialProofSection.tsx` — earlier, longer-form drafts of this page.

## Notes

- No forms, email/phone fields, or payment UI anywhere on the landing page —
  every CTA is a link to `GIVEAWAY_URL`.
- Update `GIVEAWAY_URL` in `lib/constants.ts` to repoint every CTA at once.
- Update the exact CTA wording in one place: `CTAButton.tsx`'s default
  `children` prop.
- Respects `prefers-reduced-motion` (see `globals.css`) and keeps visible
  focus states throughout.
- `public/images/` also contains the original source photo dump from Bolder
  Adventure Park (attraction, venue, and event photography) alongside the
  handful of files actually used on the page. Only the used files are
  tracked in git — see `.gitignore` — so the rest stays available locally
  for future sections without bloating the repo or the Vercel build.
