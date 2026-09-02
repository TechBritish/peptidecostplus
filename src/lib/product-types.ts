// Client-safe shared types. Do NOT import mongoose/mongodb or anything
// server-only into this file — it is imported by Client Components.

export type CategoryKey = "glp1" | "performance" | "blends" | "bioregulators";

export type ProductVariant = {
  dose: string;
  sku: string;
  costBreakdown: { label: string; amount: number }[];
  cost: number;
  prices: { vial: number; threeMonth: number; bulk: number };
  margins: { vial: number; threeMonth: number; bulk: number };
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryKey;
  featured?: boolean;
  variants: ProductVariant[];
  description: string;
  image: string;
  imageHover: string;
  // Convenience fields mirroring the lowest-priced/default variant, so
  // components that only need "one" price (cards, search) don't have to
  // reach into variants[0] everywhere.
  dose: string;
  sku: string;
  costBreakdown: { label: string; amount: number }[];
  cost: number;
  prices: { vial: number; threeMonth: number; bulk: number };
  margins: { vial: number; threeMonth: number; bulk: number };
};
