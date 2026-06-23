"use client";

import { homeContent } from "../data/content";
import { PARTNER_BRANDS } from "../data/brands";
import { FadeIn } from "./fade-in";

const { brands } = homeContent;
const marqueeBrands = [...PARTNER_BRANDS, ...PARTNER_BRANDS];

const BRAND_LOGO_CLASS: Record<string, string> = {
  fanta: "h-14 sm:h-16",
  "coca-cola": "h-12 sm:h-14 max-w-[210px]",
  "red-bull": "h-14 sm:h-[72px] sm:max-w-[88px] max-w-[72px]",
  "coca-cola-zero": "h-12 sm:h-14 max-w-[220px]",
  "ice-tea": "h-12 sm:h-14 max-w-[200px]",
};

export function BrandsSection() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10 text-center">
          <p className="section-badge text-brand">{brands.badge}</p>
          <h2 className="section-title mt-2 text-gray-900">
            {brands.title}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base text-gray-500">{brands.subtitle}</p>
        </FadeIn>
      </div>

      <FadeIn delay={100}>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-right items-center">
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="mx-6 flex h-20 w-44 shrink-0 items-center justify-center sm:mx-12 sm:h-28 sm:w-56 lg:w-64"
              >
                <div className="flex h-[72px] w-full items-center justify-center rounded-xl bg-white px-4 shadow-sm ring-1 ring-gray-100 sm:h-20">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`w-auto object-contain ${BRAND_LOGO_CLASS[brand.id] ?? "h-14 sm:h-16 max-w-[180px]"}`}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
