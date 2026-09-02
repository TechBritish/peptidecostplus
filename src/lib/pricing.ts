export const MARGIN = {
  vial: 0.35,
  threeMonth: 0.25,
  bulk: 0.15,
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
): PriceBreakdown {
  const costBreakdown: CostLine[] = [
    { label: "Sourcing & raw material", amount: sourcing },
    { label: "Third-party lab verification", amount: testing },
    { label: "Cold-chain packaging & shipping", amount: packaging },
  ];
  const cost = round2(sourcing + testing + packaging);
  const vial = round2(cost * (1 + MARGIN.vial));
  const threeMonth = round2(cost * VIALS_IN_3_MONTH * (1 + MARGIN.threeMonth));
  const bulk = round2(cost * VIALS_IN_BULK * (1 + MARGIN.bulk));

  return {
    cost,
    costBreakdown,
    prices: { vial, threeMonth, bulk },
    margins: {
      vial: round2(vial - cost),
      threeMonth: round2(threeMonth - cost * VIALS_IN_3_MONTH),
      bulk: round2(bulk - cost * VIALS_IN_BULK),
    },
  };
}
