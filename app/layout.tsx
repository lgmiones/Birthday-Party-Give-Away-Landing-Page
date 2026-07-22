import type { Metadata } from "next";
import "./globals.css";

// Font stacks are defined as CSS custom properties in globals.css using
// widely-available system fonts. This keeps the build fully self-contained
// (no external font fetch at build time) while still giving headings a
// friendly, rounded feel and body text a clean, readable one.

export const metadata: Metadata = {
  title: "Win a FREE Birthday Party | Bolder Adventure Park Giveaway",
  description:
    "Enter for a chance to win a completely free All Access Birthday Party for 10 kids at Bolder Adventure Park. 100% free to enter, 52 weekly chances to win.",
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
