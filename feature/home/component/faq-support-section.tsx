"use client";

import { homeContent } from "../data/content";
import { ExpertSupportBox } from "./expert-support-box";
import { FaqAccordion } from "./faq-accordion";
import { FadeIn } from "./fade-in";

const { faq } = homeContent;

export function FaqSupportSection() {
  return (
    <section className="bg-[#f9fafb] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="section-badge text-brand">{faq.badge}</p>
          <h2 className="section-title-lg mt-3 text-[#1a2744]">{faq.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-500 lg:max-w-xl">
            {faq.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:gap-12 xl:grid-cols-[1fr_400px] xl:gap-16">
          <FadeIn delay={80}>
            <FaqAccordion items={faq.items} />
          </FadeIn>

          <FadeIn delay={160}>
            <ExpertSupportBox content={faq.support} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
