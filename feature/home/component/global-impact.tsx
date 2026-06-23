"use client";

import { Clock, Globe2, Package, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { homeContent } from "../data/content";
import { useInView } from "../hook/use-in-view";
import { FadeIn } from "./fade-in";

const statIcons = [Globe2, TrendingUp, Clock, Package];
const { globalImpact } = homeContent;

function AnimatedValue({
  value,
  suffix,
  format,
  active,
}: {
  value: number;
  suffix: string;
  format?: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  const formatted =
    format === "compact" && display >= 1000
      ? `${Math.floor(display / 1000)}K`
      : display.toLocaleString("tr-TR");

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export function GlobalImpact() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="border-y border-gray-100 bg-gray-900 py-14 sm:py-16">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="section-badge text-brand">
            {globalImpact.badge}
          </p>
          <h2 className="section-title mt-2 text-white">
            {globalImpact.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {globalImpact.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <FadeIn key={stat.label} delay={index * 100} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/15">
                  <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-xl font-bold text-white sm:stat-value">
                  <AnimatedValue
                    value={stat.value}
                    suffix={stat.suffix}
                    format={"format" in stat ? stat.format : undefined}
                    active={isInView}
                  />
                </p>
                <p className="mt-2 text-sm text-gray-400 sm:text-base">{stat.label}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
