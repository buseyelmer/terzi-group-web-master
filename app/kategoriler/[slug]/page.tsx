import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CategoryProductsPage } from "@/feature/category/component/category-products-page";
import { getCategoryBySlug, PRODUCT_CATEGORIES } from "@/feature/category/data/categories";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Kategori Bulunamadı | Terzi Group" };
  }

  return {
    title: `${category.label} | Terzi Group`,
    description: category.description,
  };
}

export default async function KategoriPage({ params }: PageProps) {
  const { slug } = await params;

  if (!getCategoryBySlug(slug)) {
    notFound();
  }

  return (
    <Suspense fallback={null}>
      <CategoryProductsPage slug={slug} />
    </Suspense>
  );
}
