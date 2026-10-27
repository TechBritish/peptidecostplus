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

export type PriceBreakdown = {
  cost: number;
  costBreakdown: CostLine[];
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
};

export function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export function formatMoney(n: number) {
  return `$${n.toFixed(2)}`;
}

export function computePricing(
  sourcing: number,
  testing: number,
  packaging: number,
  priceOverride?: { price1?: number; price2?: number; price3?: number },
): PriceBreakdown {
  const costBreakdown: CostLine[] = [
    { label: "Sourcing & raw material", amount: sourcing },
    { label: "Third-party lab verification", amount: testing },
    { label: "Cold-chain packaging & shipping", amount: packaging },
  ];
  const cost = round2(sourcing + testing + packaging);

  // Prefer the client's exact published per-vial tier prices (from the
  // pricing PDF) when available, instead of re-deriving them from the cost
  // breakdown, so the site matches the PDF to the cent.
  const vial =
    priceOverride?.price1 !== undefined
      ? priceOverride.price1
      : round2(cost * (1 + MARGIN.vial));
  const threeMonth =
    priceOverride?.price2 !== undefined
      ? priceOverride.price2
      : round2(cost * (1 + MARGIN.threeMonth));
  const bulk =
    priceOverride?.price3 !== undefined
      ? priceOverride.price3
      : round2(cost * (1 + MARGIN.bulk));

  return {
    cost,
    costBreakdown,
    prices: { vial, threeMonth, bulk },
    margins: {
      vial: round2(vial - cost),
      threeMonth: round2(threeMonth - cost),
      bulk: round2(bulk - cost),
    },
  };
}
