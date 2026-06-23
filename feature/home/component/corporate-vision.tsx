"use client";

import { FlaskConical, Leaf, Newspaper, ShieldCheck } from "lucide-react";
import { homeContent } from "../data/content";
import { FadeIn } from "./fade-in";

const CARD_ICONS = [Leaf, Newspaper, ShieldCheck, FlaskConical];

const CARD_LAYOUT = [
  "lg:col-span-5 lg:row-span-2 min-h-[220px] sm:min-h-[280px] lg:min-h-[480px]",
  "lg:col-span-7 min-h-[220px]",
  "lg:col-span-4 min-h-[220px]",
  "lg:col-span-3 min-h-[220px]",
] as const;

const CARD_THEMES = [
  {
    surface:
      "border-brand/20 bg-gradient-to-br from-brand-dark via-brand to-[#9a0812] shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/25",
    glow: "bg-brand/25",
    watermark: "text-white/[0.14] group-hover:text-white/[0.2]",
    iconWrap: "border-white/25 bg-white/15 text-white",
    tag: "border-white/20 bg-white/10 text-white/90",
    number: "text-white/45",
    title: "text-white",
    description: "text-white/85",
    variant: "dark" as const,
  },
  {
    surface:
      "border-gray-200 bg-white shadow-md shadow-gray-200/60 hover:border-brand/20 hover:shadow-lg hover:shadow-gray-200/80",
    glow: "bg-sky-100/80",
    watermark: "text-gray-200 group-hover:text-gray-300/80",
    iconWrap: "border-sky-100 bg-sky-50 text-sky-700",
    tag: "border-sky-100 bg-sky-50 text-sky-800",
    number: "text-gray-300",
    title: "text-gray-900",
    description: "text-gray-500",
    variant: "light" as const,
  },
  {
    surface:
      "border-gray-200 bg-white shadow-md shadow-gray-200/60 hover:border-brand/20 hover:shadow-lg hover:shadow-gray-200/80",
    glow: "bg-emerald-100/80",
    watermark: "text-gray-200 group-hover:text-gray-300/80",
    iconWrap: "border-emerald-100 bg-emerald-50 text-emerald-700",
    tag: "border-emerald-100 bg-emerald-50 text-emerald-800",
    number: "text-gray-300",
    title: "text-gray-900",
    description: "text-gray-500",
    variant: "light" as const,
  },
  {
    surface:
      "border-gray-200 bg-white shadow-md shadow-gray-200/60 hover:border-brand/20 hover:shadow-lg hover:shadow-gray-200/80",
    glow: "bg-brand-lighter/80",
    watermark: "text-gray-200 group-hover:text-gray-300/80",
    iconWrap: "border-brand-lighter bg-brand-lighter text-brand",
    tag: "border-brand-lighter bg-brand-lighter text-brand-dark",
    number: "text-gray-300",
    title: "text-gray-900",
    description: "text-gray-500",
    variant: "light" as const,
  },
] as const;

const { corporateVision } = homeContent;

export function CorporateVision() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-gray-50 via-white to-white py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand/[0.04] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {corporateVision.cards.map((card, index) => {
            const Icon = CARD_ICONS[index];
            const theme = CARD_THEMES[index];
            const isFeatured = index === 0;
            const isDark = theme.variant === "dark";

            return (
              <FadeIn
                key={card.title}
                delay={index * 90}
                className={`h-full ${CARD_LAYOUT[index]}`}
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 ease-out hover:-translate-y-1 sm:p-8 ${theme.surface} ${
                    isFeatured ? "justify-between" : "justify-end"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${theme.glow}`}
                    aria-hidden
                  />

                  {isDark && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                  )}

                  <Icon
                    className={`pointer-events-none absolute transition-all duration-700 ease-out group-hover:scale-105 ${
                      isFeatured
                        ? "-right-4 top-1/2 h-36 w-36 -translate-y-1/2 sm:h-52 sm:w-52 lg:h-64 lg:w-64"
                        : "-right-6 -bottom-6 h-36 w-36 sm:h-44 sm:w-44"
                    } ${theme.watermark}`}
                    strokeWidth={0.65}
                    aria-hidden
                  />

                  {isFeatured ? (
                    <div className="relative z-10">
                      <span
                        className={`font-accent text-xs font-semibold tracking-[0.25em] ${theme.number}`}
                      >
                        01
                      </span>
                      <div
                        className={`mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${theme.iconWrap}`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <span
                        className={`font-accent text-xs font-semibold tracking-[0.25em] ${theme.number}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${theme.iconWrap}`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}

                  <div className={`relative z-10 ${isFeatured ? "mt-auto" : "mt-8"}`}>
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] ${theme.tag}`}
                    >
                      {card.tag}
                    </span>
                    <h3
                      className={`mt-4 font-bold tracking-tight ${theme.title} ${
                        isFeatured ? "text-2xl sm:text-3xl" : "card-title"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed ${theme.description} ${
                        isFeatured ? "max-w-sm text-base sm:text-lg" : "max-w-md text-base"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
