"use client";

import Link from "next/link";
import { getCategoryHref, PRODUCT_CATEGORIES } from "@/feature/category/data/categories";
import { categoryIcons } from "./category-icon-map";

export function CategoryNav() {
  return (
    <div className="relative z-10 -mt-10 mb-12 px-4 sm:-mt-12 sm:mb-16 sm:px-6 lg:mb-20 lg:px-8">
      <nav
        id="category-nav"
        className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100"
      >
        <ul className="grid grid-cols-2 divide-x divide-y divide-gray-100 sm:grid-cols-4 sm:divide-y-0">
          {PRODUCT_CATEGORIES.map(({ key, slug, label }) => {
            const Icon = categoryIcons[key];
            return (
              <li key={key}>
                <Link
                  href={getCategoryHref(slug)}
                  className="group flex flex-col items-center gap-2 px-3 py-5 transition-colors hover:bg-gray-50 sm:px-4 sm:py-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lighter text-brand transition-colors group-hover:bg-brand group-hover:text-white sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                  </span>
                  <span className="text-center text-sm font-medium text-gray-700 sm:text-base">
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
