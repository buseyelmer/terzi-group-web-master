export type ProductCategoryKey = "beverages" | "hygiene" | "grocery" | "packaging";

export type CategoryProduct = {
  id: string;
  name: string;
  brand?: string;
  unit: string;
};

export type ProductCategory = {
  key: ProductCategoryKey;
  slug: string;
  label: string;
  description: string;
  gradient: string;
  products: CategoryProduct[];
};

const BRAND_LOGOS: Record<string, string> = {
  Fanta: "/brands/fanta.svg",
  "Coca-Cola": "/brands/coca-cola.svg",
  "Red Bull": "/brands/red-bull.svg",
  "Kebab Boxx": "/brands/kebab-boxx.svg",
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    key: "beverages",
    slug: "icecekler",
    label: "İçecekler",
    description: "Uludağ Gazoz, Fanta, Coca-Cola ve Red Bull toptan tedarik.",
    gradient: "from-amber-700 via-amber-600 to-orange-500",
    products: [
      { id: "bev-1", name: "Uludağ Gazoz", brand: "Uludağ", unit: "Koli" },
      { id: "bev-2", name: "Fanta", brand: "Fanta", unit: "Koli" },
      { id: "bev-3", name: "Coca-Cola", brand: "Coca-Cola", unit: "Koli" },
      { id: "bev-4", name: "Red Bull", brand: "Red Bull", unit: "Koli" },
    ],
  },
  {
    key: "hygiene",
    slug: "hijyen",
    label: "Hijyen Ürünleri",
    description: "Peçete ve tuvalet kağıdı toptan tedarik.",
    gradient: "from-sky-700 via-sky-600 to-cyan-500",
    products: [
      { id: "hyg-1", name: "Peçete", unit: "Paket" },
      { id: "hyg-2", name: "Tuvalet Kağıdı", unit: "Paket" },
    ],
  },
  {
    key: "grocery",
    slug: "bakkaliye",
    label: "Bakkaliye",
    description: "Salça ve mısır toptan tedarik.",
    gradient: "from-emerald-700 via-emerald-600 to-green-500",
    products: [
      { id: "gro-1", name: "Salça", unit: "Koli" },
      { id: "gro-2", name: "Mısır", unit: "Koli" },
    ],
  },
  {
    key: "packaging",
    slug: "ambalajlama",
    label: "Ambalajlama",
    description: "Pizza kutusu, alüminyum tabak, strafor ambalaj ve Kebab Boxx.",
    gradient: "from-slate-700 via-slate-600 to-gray-500",
    products: [
      { id: "pkg-1", name: "Pizza Kutusu", unit: "Paket" },
      { id: "pkg-2", name: "Alüminyum Tabak", unit: "Koli" },
      { id: "pkg-3", name: "Strafor Ambalaj", unit: "Paket" },
      { id: "pkg-4", name: "Kebab Boxx", brand: "Kebab Boxx", unit: "Koli" },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryHref(slug: string): string {
  return `/kategoriler?kategori=${slug}`;
}

export function getProductsCatalogHref(slug?: string): string {
  return slug ? `/kategoriler?kategori=${slug}` : "/kategoriler";
}

export function getBrandLogo(brand?: string): string | undefined {
  if (!brand) return undefined;
  return BRAND_LOGOS[brand];
}
