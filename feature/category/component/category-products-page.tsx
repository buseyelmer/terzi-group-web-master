"use client";

import { ProductsCatalogPage } from "./products-catalog-page";

type CategoryProductsPageProps = {
  slug: string;
};

export function CategoryProductsPage({ slug }: CategoryProductsPageProps) {
  return <ProductsCatalogPage initialSlug={slug} />;
}
