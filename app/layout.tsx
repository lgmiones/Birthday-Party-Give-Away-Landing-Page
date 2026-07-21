import type { Metadata } from "next";
import "./globals.css";

// Font stacks are defined as CSS custom properties in globals.css using
// widely-available system fonts. This keeps the build fully self-contained
// (no external font fetch at build time) while still giving headings a
// friendly, rounded feel and body text a clean, readable one.

export const metadata: Metadata = {
  title: "Birthday Party Giveaway | Win the Ultimate Birthday Party Experience",
  description:
    "Enter to win a fully planned birthday party — venue, cake, decorations, games, and gifts included. See the giveaway details and how to enter.",
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
