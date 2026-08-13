import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Font stacks are defined as CSS custom properties in globals.css using
// widely-available system fonts. This keeps the build fully self-contained
// (no external font fetch at build time) while still giving headings a
// bold, condensed poster feel and body text a clean, readable one.

export const metadata: Metadata = {
  title: "Win a Free Birthday Party | Bolder Adventure Park Giveaway",
  description:
    "Enter for a chance to win the $1,000 Ultimate Bolder Birthday: a free All Access Party, arcade cards, and a professional photographer at Bolder Adventure Park. Drawn every month, 100% free to enter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Bolder's own ad-click tracking tag — Kai's snippet, appends a
            tracking script to <head> on every page load. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var head = document.head;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = "https://t.bolderadventurepark.com/v1/ddf05f173e25d97480dd3858da4dca89ed067a4f548792907593075d7bc1e190?tag=!clicked&ref_url=" + encodeURI(document.URL);
              head.appendChild(script);
            `,
          }}
        />
        {/* Meta (Facebook) Pixel — Kai's snippet, for Facebook ad tracking. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '350477910802639');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}

        {/* Meta Pixel noscript fallback, required alongside the script
            above for browsers with JS disabled. */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=350477910802639&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Patch tracking pixel — Kai's header pixel for the giveaway
            opt-in form, loaded after the page is interactive so it never
            blocks the initial render. */}
        <Script
          src="https://cdn.patchretention.com/pixel/700670/pixel.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
