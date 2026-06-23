"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { corporatePageContent } from "../../data/content";
import { FadeIn } from "@/feature/home/component/fade-in";

const { cta } = corporatePageContent;

export function CorporateCta() {
  return (
    <section className="bg-brand py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-title text-white">{cta.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">{cta.subtitle}</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {cta.highlights.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-white/70" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={cta.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand transition-all duration-300 hover:bg-white/90 hover:shadow-lg lg:self-center"
            >
              {cta.button}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
