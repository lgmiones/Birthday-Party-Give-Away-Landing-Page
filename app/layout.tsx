import type { Metadata } from "next";
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
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
