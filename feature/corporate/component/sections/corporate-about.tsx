"use client";

import { Building2 } from "lucide-react";
import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { about } = corporatePageContent;

export function CorporateAbout() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="section-badge text-brand">{about.badge}</p>
            <h2 className="section-title-lg mt-3 text-[#1a2744]">{about.title}</h2>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm sm:p-10">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand/5" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Building2 className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-gray-100 pt-8 sm:grid-cols-3 sm:gap-4">
                {about.highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-2xl font-bold text-brand sm:stat-value">{item.value}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
