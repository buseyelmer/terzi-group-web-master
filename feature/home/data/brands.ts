export type BrandItem = {
  id: string;
  name: string;
  logo: string;
  accent: string;
};

export const PARTNER_BRANDS: BrandItem[] = [
  { id: "fanta", name: "Fanta", logo: "/brands/fanta.svg", accent: "#F7941D" },
  { id: "coca-cola", name: "Coca-Cola", logo: "/brands/coca-cola.svg", accent: "#F40009" },
  { id: "red-bull", name: "Red Bull", logo: "/brands/red-bull.svg", accent: "#DB0A40" },
  { id: "fresh-ayran", name: "Fresh Ayran", logo: "/brands/fresh-ayran.svg", accent: "#2E9E6A" },
  {
    id: "coca-cola-zero",
    name: "Coca-Cola Zero",
    logo: "/brands/coca-cola-zero.svg",
    accent: "#1A1A1A",
  },
  { id: "ice-tea", name: "Ice Tea", logo: "/brands/ice-tea.svg", accent: "#C4A000" },
  { id: "kebab-boxx", name: "Kebab Boxx", logo: "/brands/kebab-boxx.svg", accent: "#C41E3A" },
  { id: "easy-dry", name: "EasyDry", logo: "/brands/easy-dry.svg", accent: "#2563EB" },
];
