"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import type { CategoryProduct, ProductCategoryKey } from "../data/categories";
import { getBrandLogo } from "../data/categories";
import { categoryIcons } from "@/feature/home/component/category-icon-map";

type ProductCardProps = {
  product: CategoryProduct;
  categoryKey: ProductCategoryKey;
  gradient: string;
};

export function ProductCard({ product, categoryKey, gradient }: ProductCardProps) {
  const brandLogo = getBrandLogo(product.brand);
  const Icon = categoryIcons[categoryKey];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-brand/20 hover:shadow-md">
      <div
        className={`relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
        {brandLogo ? (
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-xl bg-white/90 p-3 shadow-sm min-[400px]:h-24 min-[400px]:w-24 min-[400px]:p-4">
            <Image
              src={brandLogo}
              alt={product.brand ?? product.name}
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
            <Icon className="h-8 w-8" strokeWidth={1.5} />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 min-[400px]:p-4 sm:p-5">
        <h3 className="card-title line-clamp-2 text-gray-900">{product.name}</h3>
        {product.brand ? (
          <p className="mt-1 text-sm font-medium text-brand">{product.brand}</p>
        ) : null}
        <p className="mt-2 text-sm text-gray-400">{product.unit}</p>
        <p className="mt-auto flex items-center gap-1.5 pt-4 text-sm text-gray-500">
          <Lock className="h-3.5 w-3.5 shrink-0" />
          Fiyat için{" "}
          <Link href="/giris" className="font-medium text-brand hover:underline">
            giriş yapın
          </Link>
        </p>
      </div>
    </article>
  );
}
