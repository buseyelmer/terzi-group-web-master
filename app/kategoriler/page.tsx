import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsCatalogPage } from "@/feature/category/component/products-catalog-page";

export const metadata: Metadata = {
  title: "Ürün Kategorileri | Terzi Group",
  description:
    "İçecek, hijyen, bakkaliye ve ambalaj kategorilerinde toptan ürün kataloğu.",
};

function CatalogFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-center text-gray-400">
      Yükleniyor...
    </div>
  );
}

export default function KategorilerPage() {
  return (
    <Suspense fallback={<CatalogFallback />}>
      <ProductsCatalogPage />
    </Suspense>
  );
}
