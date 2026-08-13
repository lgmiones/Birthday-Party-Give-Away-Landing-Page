import type { DetailedHTMLProps, HTMLAttributes } from "react";

// Wistia's <wistia-player> is a custom element registered by the loader
// scripts in HeroSection.tsx (fast.wistia.com/player.js +
// fast.wistia.com/embed/<media-id>.js). TypeScript doesn't know about it by
// default, so this declares it as a valid JSX intrinsic element.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          "media-id"?: string;
          aspect?: string | number;
        },
        HTMLElement
      >;
    }
  }
}

export {};
