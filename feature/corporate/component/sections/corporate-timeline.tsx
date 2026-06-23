"use client";

import { Building2, Globe2, Snowflake, Sparkles } from "lucide-react";
import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { timeline } = corporatePageContent;

const TIMELINE_ICONS = [Building2, Globe2, Snowflake, Sparkles];

export function CorporateTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,12,24,0.12),_transparent_65%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-badge text-brand">{timeline.badge}</p>
          <h2 className="section-title mt-3 text-white">{timeline.title}</h2>
          <p className="mt-3 text-base text-gray-400">
            1986&apos;dan bugüne, güven ve büyümeyle şekillenen bir yolculuk.
          </p>
        </FadeIn>

        {/* Desktop — yatay zaman çizelgesi */}
        <div className="relative mt-20 hidden lg:block">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[4.75rem] h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
            aria-hidden
          />

          <div className="grid grid-cols-4 gap-6">
            {timeline.items.map((item, index) => {
              const Icon = TIMELINE_ICONS[index];
              const isHighlight = index === timeline.items.length - 1;

              return (
                <FadeIn key={item.year} delay={index * 100}>
                  <div className="group flex flex-col items-center text-center">
                    <div
                      className={`relative z-10 flex h-[9.5rem] w-[9.5rem] flex-col items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl ${
                        isHighlight
                          ? "border-brand bg-brand/15 shadow-lg shadow-brand/20 group-hover:scale-105 group-hover:shadow-brand/30"
                          : "border-white/15 bg-[#1a2744]/80 group-hover:border-brand/50 group-hover:bg-[#1a2744] group-hover:shadow-brand/15"
                      }`}
                    >
                      <span
                        className={`font-heading text-3xl font-bold tracking-tight ${
                          isHighlight ? "text-white" : "text-brand"
                        }`}
                      >
                        {item.year}
                      </span>
                      <span className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">
                        {item.title}
                      </span>
                    </div>

                    <article className="mt-8 min-h-[160px] rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand/25 group-hover:bg-white/[0.08]">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors duration-300 group-hover:bg-brand/25">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </article>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Mobil & tablet — dikey zaman çizelgesi */}
        <div className="relative mt-14 lg:hidden">
          <div
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent sm:left-8"
            aria-hidden
          />

          <div className="space-y-10">
            {timeline.items.map((item, index) => {
              const Icon = TIMELINE_ICONS[index];

              return (
                <FadeIn key={item.year} delay={index * 80}>
                  <div className="relative pl-14 sm:pl-16">
                    <span
                      className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand bg-[#0f172a] shadow-[0_0_12px_rgba(220,12,24,0.45)] sm:left-6"
                      aria-hidden
                    />
                    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:border-brand/25 hover:bg-white/[0.08]">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-base font-bold text-brand sm:text-lg">
                        {item.year}
                      </span>
                      <h3 className="card-title mt-1 text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </article>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
