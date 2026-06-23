import { BottleWine, Box, Package } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { ProductCategoryKey } from "@/feature/category/data/categories";
import { NapkinIcon } from "./category-icons";

type CategoryIcon = ComponentType<SVGProps<SVGSVGElement>>;

export const categoryIcons: Record<ProductCategoryKey, CategoryIcon> = {
  beverages: BottleWine,
  hygiene: NapkinIcon,
  grocery: Package,
  packaging: Box,
};
