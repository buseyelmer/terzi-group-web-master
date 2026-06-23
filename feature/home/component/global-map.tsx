"use client";

import { useState } from "react";
import { homeContent } from "../data/content";
import { WORLD_MAP_HUBS } from "../data/world-map-svg";
import { FadeIn } from "./fade-in";
import { WorldDistributionMap } from "./world-distribution-map";

const { globalMap } = homeContent;

export function GlobalMap() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-[#0a1128] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="section-badge text-brand">
            {globalMap.badge}
          </p>
          <h2 className="section-title mt-2 text-white">
            {globalMap.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-400">{globalMap.subtitle}</p>
        </FadeIn>

        <FadeIn delay={120} className="relative mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1128] p-2 shadow-2xl shadow-black/40 sm:p-4">
            <WorldDistributionMap
              hubs={WORLD_MAP_HUBS}
              tooltipPrefix={globalMap.tooltipPrefix}
              activeId={activeId}
              onActivate={setActiveId}
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {WORLD_MAP_HUBS.map((hub) => (
              <button
                key={hub.id}
                type="button"
                onMouseEnter={() => setActiveId(hub.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(hub.id)}
                onBlur={() => setActiveId(null)}
                className={`rounded-full border px-3 py-1.5 text-base font-medium transition-all duration-500 ease-in-out sm:px-4 ${
                  activeId === hub.id
                    ? "border-brand bg-brand text-white"
                    : "border-gray-600 text-gray-400 hover:border-brand/50 hover:text-white"
                }`}
              >
                {hub.name}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
