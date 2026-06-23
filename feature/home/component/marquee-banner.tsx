"use client";

import { homeContent } from "../data/content";

const segments = homeContent.marquee.segments;

export function MarqueeBanner() {
  const items = [...segments, ...segments];

  return (
    <div className="overflow-hidden border-y border-gray-100 bg-gray-50 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((text, index) => (
          <span
            key={`${text}-${index}`}
            className="mx-8 font-accent text-base font-semibold uppercase tracking-[0.25em] text-gray-500"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
