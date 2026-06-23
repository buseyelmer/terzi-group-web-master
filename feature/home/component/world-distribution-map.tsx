"use client";

import {
  WORLD_LAND_PATHS,
  WORLD_MAP_VIEWBOX,
  type WorldMapHub,
  hubToPercent,
} from "../data/world-map-svg";

type WorldDistributionMapProps = {
  hubs: readonly WorldMapHub[];
  tooltipPrefix: string;
  activeId: string | null;
  onActivate: (id: string | null) => void;
};

export function WorldDistributionMap({
  hubs,
  tooltipPrefix,
  activeId,
  onActivate,
}: WorldDistributionMapProps) {
  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-[#0a1128]">
      <svg
        viewBox={`0 0 ${WORLD_MAP_VIEWBOX.width} ${WORLD_MAP_VIEWBOX.height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-label="Dünya dağıtım haritası"
      >
        <defs>
          <linearGradient id="world-ocean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c1631" />
            <stop offset="100%" stopColor="#0a1128" />
          </linearGradient>
        </defs>

        <rect
          width={WORLD_MAP_VIEWBOX.width}
          height={WORLD_MAP_VIEWBOX.height}
          fill="url(#world-ocean)"
        />

        <g fill="#3d5a80" stroke="#6b8cae" strokeWidth={0.4} strokeLinejoin="round">
          {WORLD_LAND_PATHS.map((land) => (
            <path key={land.id} d={land.d} opacity={0.95} />
          ))}
        </g>
      </svg>

      {hubs.map((hub) => {
        const { x, y } = hubToPercent(hub.x, hub.y);
        const isActive = activeId === hub.id;
        const tooltip = `${tooltipPrefix} ${hub.name}`;

        return (
          <button
            key={hub.id}
            type="button"
            aria-label={tooltip}
            className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none"
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => onActivate(hub.id)}
            onMouseLeave={() => onActivate(null)}
            onFocus={() => onActivate(hub.id)}
            onBlur={() => onActivate(null)}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/35 ${
                isActive ? "map-marker-pulse" : ""
              }`}
              aria-hidden
            />
            <span
              className={`relative block rounded-full border-2 border-white bg-brand transition-all duration-300 ${
                isActive ? "h-3.5 w-3.5 shadow-[0_0_8px_rgba(220,12,24,0.9)]" : "h-2.5 w-2.5"
              }`}
            />

            <span
              className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-200 ${
                isActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              }`}
              role="tooltip"
            >
              {tooltip}
            </span>
          </button>
        );
      })}
    </div>
  );
}
