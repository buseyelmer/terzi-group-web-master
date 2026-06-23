"use client";

import { Award, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { values } = corporatePageContent;
const valueIcons = [ShieldCheck, Sparkles, Award, Handshake];

export function CorporateValues() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="section-badge text-brand">{values.badge}</p>
          <h2 className="section-title mt-3 text-[#1a2744]">{values.title}</h2>
          <p className="mt-3 text-base text-gray-500">{values.subtitle}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item, index) => {
            const Icon = valueIcons[index];
            return (
              <FadeIn key={item.title} delay={index * 80}>
                <article className="group h-full rounded-xl border border-gray-100 bg-gray-50/50 p-6 transition-all duration-300 hover:border-brand/20 hover:bg-white hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/15">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="card-title mt-4 text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-500">{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
