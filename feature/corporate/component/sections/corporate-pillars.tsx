"use client";

import { FlaskConical, Leaf, Newspaper, ShieldCheck } from "lucide-react";
import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { pillars } = corporatePageContent;
const CARD_ICONS = [Leaf, ShieldCheck, FlaskConical, Newspaper];
const CARD_STYLES = [
  {
    base: "bg-[#0f172a] text-white",
    hover: "hover:bg-[#162033] hover:shadow-[#0f172a]/40",
  },
  {
    base: "bg-brand-dark text-white",
    hover: "hover:bg-brand hover:shadow-brand/35",
  },
  {
    base: "bg-[#1e293b] text-white",
    hover: "hover:bg-[#273549] hover:shadow-[#1e293b]/40",
  },
  {
    base: "bg-[#111827] text-white",
    hover: "hover:bg-[#1a2332] hover:shadow-[#111827]/40",
  },
] as const;

export function CorporatePillars() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-badge text-brand">{pillars.badge}</p>
          <h2 className="section-title mt-3 text-[#1a2744]">{pillars.title}</h2>
          <p className="mt-3 text-base text-gray-500">{pillars.subtitle}</p>
        </FadeIn>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-8 sm:gap-10 lg:gap-12">
          {pillars.cards.map((card, index) => {
            const Icon = CARD_ICONS[index];
            const { base, hover } = CARD_STYLES[index];

            return (
              <FadeIn key={card.title} delay={index * 80}>
                <article
                  className={`group flex h-44 w-44 cursor-default flex-col items-center justify-center rounded-full p-5 text-center shadow-lg ring-1 ring-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-white/25 sm:h-52 sm:w-52 sm:p-6 lg:h-60 lg:w-60 lg:p-8 ${base} ${hover}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    <Icon
                      className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="card-title mt-4 font-bold leading-tight transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-snug text-white/80 transition-colors duration-300 group-hover:text-white">
                    {card.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
