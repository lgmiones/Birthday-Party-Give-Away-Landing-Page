const items = [
  "Free $1,000 Ultimate Bolder Birthday Giveaway",
  "One Winner Drawn Every Month, All Year",
  "100% Free to Enter, No Purchase Necessary",
  "Takes Less Than 10 Seconds to Enter",
];

function TickerGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2 whitespace-nowrap">
          <span aria-hidden="true" className="text-night/40">
            •
          </span>
          <span className="font-body text-xs font-bold uppercase tracking-wide text-night sm:text-sm">
            {item}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Thin, always-scrolling announcement strip across the very top of the
 * homepage, matching the ticker on bolderadventurepark.com. Built the same
 * way as the attraction filmstrip used to work: the content is duplicated back to back and
 * translated exactly one copy-width, so the loop has no visible seam and
 * never runs out of content, no matter how long someone leaves it running.
 */
export default function AnnouncementBanner() {
  return (
    <div className="overflow-hidden bg-cta py-2.5">
      <div className="flex w-max animate-ticker">
        <TickerGroup />
        <TickerGroup hidden />
      </div>
    </div>
  );
}
