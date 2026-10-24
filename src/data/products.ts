import catalog from "./catalog.json";

export type CategoryKey = "glp1" | "performance" | "blends" | "bioregulators";

export const CATEGORIES: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "All products" },
  { key: "glp1", label: "GLP-1 / Weight" },
  { key: "performance", label: "Performance / Wellness" },
  { key: "blends", label: "Blends" },
  { key: "bioregulators", label: "Bioregulators" },
];

export const MARGIN = {
  vial: 0.375,
  threeMonth: 0.30,
  bulk: 0.225,
} as const;

export const VIALS_IN_3_MONTH = 3;
export const VIALS_IN_BULK = 10;

export type CostLine = {
  label: string;
  amount: number;
};

export type Product = {
  slug: string;
  name: string;
  dose: string;
  sku: string;
  category: CategoryKey;
  featured?: boolean;
  costBreakdown: CostLine[];
  cost: number;
  prices: {
    vial: number;
    threeMonth: number;
    bulk: number;
  };
  margins: {
    vial: number;
    threeMonth: number;
    bulk: number;
  };
  description: string;
  image: string;
  imageHover: string;
};

type CatalogRow = {
  slug: string;
  name: string;
  dose: string;
  sku: string;
  category: CategoryKey;
  sourcing: number;
  testing: number;
  packaging: number;
  featured?: boolean;
};

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export function formatMoney(n: number) {
  return `$${n.toFixed(2)}`;
}

export const products: Product[] = (catalog as CatalogRow[]).map((row) => {
  const costBreakdown: CostLine[] = [
    { label: "Sourcing & raw material", amount: row.sourcing },
    { label: "Third-party lab verification", amount: row.testing },
    { label: "Cold-chain packaging & shipping", amount: row.packaging },
  ];
  const cost = round2(row.sourcing + row.testing + row.packaging);
  const vial = round2(cost * (1 + MARGIN.vial));
  const threeMonth = round2(
    cost * VIALS_IN_3_MONTH * (1 + MARGIN.threeMonth),
  );
  const bulk = round2(cost * VIALS_IN_BULK * (1 + MARGIN.bulk));

  return {
    slug: row.slug,
    name: row.name,
    dose: row.dose,
    sku: row.sku,
    category: row.category,
    featured: row.featured,
    costBreakdown,
    cost,
    prices: { vial, threeMonth, bulk },
    margins: {
      vial: round2(vial - cost),
      threeMonth: round2(threeMonth - cost * VIALS_IN_3_MONTH),
      bulk: round2(bulk - cost * VIALS_IN_BULK),
    },
    description: `${row.name} (${row.dose}) from a tracked, lab-verified lot. Buy one vial, a 3-month protocol, or bulk — same cost base; margin falls as volume rises.`,
    image: "/vial.svg",
    imageHover: "/vial-label.svg",
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function featuredProducts(): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.length ? featured : products.slice(0, 6);
}
