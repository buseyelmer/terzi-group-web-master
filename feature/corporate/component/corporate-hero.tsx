"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { corporatePageContent } from "../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { hero } = corporatePageContent;

export function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,12,24,0.15),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.04),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          <p className="section-badge text-brand">{hero.badge}</p>
          <h1 className="hero-title mt-4 text-white">{hero.title}</h1>
          <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
            {hero.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
            {hero.description}
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/20"
          >
            İş Ortaklığı Başvurusu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
