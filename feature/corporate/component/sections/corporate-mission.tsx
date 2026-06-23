"use client";

import { Eye, Target } from "lucide-react";
import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { mission } = corporatePageContent;

export function CorporateMission() {
  const cards = [
    { ...mission.mission, icon: Target },
    { ...mission.vision, icon: Eye },
  ];

  return (
    <section className="bg-[#f9fafb] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-badge text-brand">{mission.badge}</p>
          <h2 className="section-title mt-3 text-[#1a2744]">Geleceğe Yön Veren İlkeler</h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="card-title mt-6 text-[#1a2744]">{card.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{card.text}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
