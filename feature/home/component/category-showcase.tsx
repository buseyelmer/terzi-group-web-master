"use client";

import { ArrowRight, BottleWine, Box, Package } from "lucide-react";
import Link from "next/link";
import { getCategoryHref, PRODUCT_CATEGORIES } from "@/feature/category/data/categories";
import { homeContent } from "../data/content";
import { NapkinIcon } from "./category-icons";
import { FadeIn } from "./fade-in";

const { categoryShowcase } = homeContent;

const categoryIcons = {
  beverages: BottleWine,
  hygiene: NapkinIcon,
  grocery: Package,
  packaging: Box,
} as const;

export function CategoryShowcase() {
  return (
    <section id="kategoriler" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="section-badge text-brand">{categoryShowcase.badge}</p>
          <h2 className="section-title-lg mt-2 text-gray-900">
            {categoryShowcase.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            {categoryShowcase.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const href = getCategoryHref(category.slug);
            const Icon = categoryIcons[category.key];

            return (
              <FadeIn key={category.key} delay={index * 80}>
                <Link href={href} className="group block">
                  <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-700 ease-in-out hover:border-brand/20 hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-transform duration-700 group-hover:scale-[1.02]`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                      <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-white/30">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <h3 className="card-title absolute bottom-4 left-4 font-bold text-white">
                        {category.label}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-base leading-relaxed text-gray-500">
                        {category.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-lighter px-5 py-2.5 text-base font-semibold text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                        {categoryShowcase.viewProductsCta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/kategoriler"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:border-brand/30 hover:text-brand"
          >
            Tüm Kategorileri Gör
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
