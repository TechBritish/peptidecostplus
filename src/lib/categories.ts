import type { CategoryKey } from "@/lib/product-types";

export const CATEGORIES: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "All products" },
  { key: "glp1", label: "GLP-1 / Weight" },
  { key: "performance", label: "Performance / Wellness" },
  { key: "blends", label: "Blends" },
  { key: "bioregulators", label: "Bioregulators" },
];
