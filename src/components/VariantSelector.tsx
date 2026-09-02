"use client";

import { useState } from "react";
import { formatMoney } from "@/lib/pricing";
import PriceTable from "@/components/PriceTable";
import type { Product, ProductVariant } from "@/lib/product-types";

export default function VariantSelector({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const variant: ProductVariant = product.variants[index];

  return (
    <div className="variant-selector">
      <div className="variant-dose-picker" role="tablist" aria-label="Dose size">
        {product.variants.map((v, i) => (
          <button
            key={v.sku}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? "is-active" : ""}
            onClick={() => setIndex(i)}
          >
            <span className="variant-dose-label">{v.dose}</span>
            <span className="variant-dose-price">
              {formatMoney(v.prices.vial)}
            </span>
          </button>
        ))}
      </div>

      <span className="eyebrow">SKU {variant.sku}</span>

      <PriceTable
        product={{ ...product, prices: variant.prices, cost: variant.cost }}
      />

      <a
        className="btn-primary"
        href={`mailto:support@peptidescostplus.com?subject=${encodeURIComponent(
          `Request ${variant.sku} ${product.name}`,
        )}`}
      >
        Request this size
      </a>
      <p className="quote-note">
        No cart yet. Email us the SKU and size you want — we invoice from the
        published price above.
      </p>

      <details className="cost-disclosure">
        <summary>How this price is built</summary>
        <div className="cost-disclosure-body">
          {variant.costBreakdown.map((line) => (
            <div className="cost-disclosure-row" key={line.label}>
              <span>{line.label}</span>
              <span>{formatMoney(line.amount)}</span>
            </div>
          ))}
          <div className="cost-disclosure-row cost-disclosure-total">
            <span>Cost per vial</span>
            <span>{formatMoney(variant.cost)}</span>
          </div>
        </div>
      </details>
    </div>
  );
}
