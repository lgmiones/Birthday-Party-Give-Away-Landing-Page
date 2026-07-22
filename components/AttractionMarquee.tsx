import Image from "next/image";

type Attraction = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Real dimensions preserved per photo (via aspect-ratio below) so the strip
// reads as a genuine mixed-format filmstrip — tall shots and wide shots
// side by side — rather than a uniform grid forced into square crops.
const attractions: Attraction[] = [
  { src: "/images/All-Attraction/Climbing-adventures.jpg", alt: "The rock-carved Bolder entrance archway with climbing routes", width: 885, height: 590 },
  { src: "/images/All-Attraction/Adventure-nets.jpg", alt: "A kid climbing through the adventure netting course", width: 534, height: 800 },
  { src: "/images/All-Attraction/Zip-lines.jpg", alt: "A kid cheering while riding the zip line at Bolder Adventure Park", width: 800, height: 533 },
  { src: "/images/All-Attraction/Free-fall-drop.jpg", alt: "A kid mid-air on the free fall drop attraction", width: 533, height: 800 },
  { src: "/images/All-Attraction/Tubing-slides.jpg", alt: "Kids racing down the tubing slides at Bolder Adventure Park", width: 800, height: 533 },
  { src: "/images/All-Attraction/Mountain-experience.jpg", alt: "A kid scaling the indoor mountain experience", width: 534, height: 800 },
  { src: "/images/All-Attraction/Bumper-cars.jpg", alt: "A kid laughing while riding bumper cars at Bolder Adventure Park", width: 800, height: 533 },
  { src: "/images/All-Attraction/Ropes-courses.jpg", alt: "Kids balancing across the elevated ropes course", width: 800, height: 534 },
  { src: "/images/All-Attraction/Archery.jpg", alt: "A kid aiming a bow at the archery range", width: 365, height: 547 },
  { src: "/images/All-Attraction/Blaster-zone.jpg", alt: "Kids playing in the blaster zone arena", width: 800, height: 533 },
  { src: "/images/All-Attraction/Exploration-play.jpg", alt: "Kids climbing through the exploration play structure", width: 800, height: 533 },
  { src: "/images/All-Attraction/Jump-pads.png", alt: "A kid mid-jump on the trampoline jump pads", width: 800, height: 719 },
];

/**
 * An endless photographic filmstrip — every attraction photo, drifting past
 * in a single continuous row that never stops and never runs out. The image
 * list is duplicated back-to-back and animated with a pure-CSS
 * translateX(-50%) loop, so the seam between the last photo and the first
 * is invisible and the strip can scroll forever. No buttons, no dots — it's
 * ambient motion, not something you're meant to operate. Hovering pauses it
 * so a photo can actually be looked at.
 */
export default function AttractionMarquee() {
  const track = [...attractions, ...attractions];

  return (
    <div className="relative overflow-hidden py-2">
      <span className="sr-only">
        Photo gallery of Bolder Adventure Park attractions: climbing walls,
        adventure nets, zip lines, free fall drop, tubing slides, the
        mountain experience, bumper cars, ropes courses, archery, the
        blaster zone, exploration play, and jump pads.
      </span>

      {/* Edge fades — the strip visually dissolves into the section
          background instead of hard-cutting at the viewport edge. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-28 lg:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-28 lg:w-40" />

      <div aria-hidden="true" className="animate-marquee flex w-max gap-3 sm:gap-4">
        {track.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            style={{ aspectRatio: `${img.width} / ${img.height}` }}
            className="relative h-44 flex-shrink-0 overflow-hidden rounded-2xl shadow-card ring-1 ring-ink/5 sm:h-60 lg:h-72"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              draggable={false}
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
              className="pointer-events-none select-none object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
