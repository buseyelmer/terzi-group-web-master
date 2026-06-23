"use client";

import { Award, BadgePercent, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { homeContent } from "../data/content";
import { FadeIn } from "./fade-in";

const featureIcons = [BadgePercent, ShieldCheck, GraduationCap, Award];
const { corporateTrust } = homeContent;

export function CorporateTrust() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,12,24,0.04),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="section-title-lg tracking-tight text-gray-900">
            {corporateTrust.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            {corporateTrust.intro}
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch">
          <FadeIn className="flex">
            <div className="group relative min-h-[280px] w-full overflow-hidden rounded-lg border border-white/60 shadow-sm sm:min-h-[360px] lg:min-h-0 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-dark to-brand" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.12),transparent_55%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                  <h3 className="card-title text-white">
                    {corporateTrust.heroTitle}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/85">
                    {corporateTrust.heroSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid min-h-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:min-h-[360px] lg:min-h-0 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
            {corporateTrust.items.map((item, index) => {
              const Icon = featureIcons[index] ?? Award;
              return (
                <FadeIn key={item.title} delay={index * 80} className="h-full">
                  <article className="group flex h-full flex-col rounded-lg border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/80 hover:shadow-lg hover:shadow-gray-200/60 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/15">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="card-title mt-4 tracking-tight text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-gray-500">
                      {item.content}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn className="mt-8 text-center">
          <p className="text-base text-gray-500">
            {corporateTrust.contact}{" "}
            <Link
              href="/iletisim"
              className="font-medium text-brand underline-offset-2 transition-colors hover:text-brand-dark hover:underline"
            >
              {corporateTrust.contactLink}
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
