"use client";

import { Lock } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/feature/home/component/fade-in";
import {
  getCategoryBySlug,
  PRODUCT_CATEGORIES,
} from "../data/categories";
import { ProductCard } from "./product-card";

type ProductsCatalogPageProps = {
  initialSlug?: string;
};

export function ProductsCatalogPage({ initialSlug }: ProductsCatalogPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramSlug = searchParams.get("kategori") ?? initialSlug;
  const defaultSlug = PRODUCT_CATEGORIES[0].slug;

  const resolveSlug = useCallback(
    (slug: string | null | undefined) => {
      if (slug && getCategoryBySlug(slug)) return slug;
      return defaultSlug;
    },
    [defaultSlug],
  );

  const [activeSlug, setActiveSlug] = useState(() => resolveSlug(paramSlug));

  useEffect(() => {
    setActiveSlug(resolveSlug(paramSlug));
  }, [paramSlug, resolveSlug]);

  const activeCategory =
    getCategoryBySlug(activeSlug) ?? PRODUCT_CATEGORIES[0];

  function selectCategory(slug: string) {
    setActiveSlug(slug);
    router.replace(`/kategoriler?kategori=${slug}`, { scroll: false });
  }

  return (
    <>
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <FadeIn>
            <p className="section-badge text-brand">Ürün Kategorileri</p>
            <h1 className="section-title-lg mt-2 text-gray-900">
              Toptan Ürün Kataloğu
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
              Kategorilere göz atın, ürünleri inceleyin. Fiyat ve sipariş için
              hesabınıza giriş yapın.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            role="tablist"
            aria-label="Ürün kategorileri"
            className="flex gap-1 overflow-x-auto border-b border-gray-200 pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const isActive = activeSlug === category.slug;

              return (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectCategory(category.slug)}
                  className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors sm:px-6 sm:text-base ${
                    isActive
                      ? "border-brand text-brand"
                      : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-800"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="mt-8"
            key={activeCategory.slug}
          >
            <FadeIn>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="section-title text-gray-900">
                    {activeCategory.label}
                  </h2>
                  <p className="mt-2 max-w-2xl text-base text-gray-500">
                    {activeCategory.description}
                  </p>
                </div>
                <Link
                  href="/giris"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  <Lock className="h-4 w-4" />
                  Giriş Yap
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {activeCategory.products.map((product, index) => (
                <FadeIn key={product.id} delay={index * 50}>
                  <ProductCard
                    product={product}
                    categoryKey={activeCategory.key}
                    gradient={activeCategory.gradient}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
