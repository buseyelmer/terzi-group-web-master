"use client";

import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { stats } = corporatePageContent;

export function CorporateStats() {
  return (
    <section className="border-y border-white/10 bg-[#0f172a] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="section-badge text-brand">{stats.badge}</p>
          <h2 className="section-title mt-2 text-white">{stats.title}</h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 80} className="text-center">
              <p className="text-xl font-bold text-brand sm:stat-value">{item.value}</p>
              <p className="mt-2 text-sm text-gray-400 sm:text-base">{item.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
