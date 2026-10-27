import { formatMoney } from "@/lib/pricing";
import type { Product } from "@/lib/products-db";

export default function LedgerCard({
  product,
  highlight = "vial",
}: {
  product: Product;
  highlight?: "vial" | "threeMonth" | "bulk";
}) {
  return (
    <div className="ledger-wrap">
      <div className="ledger">
        <div className="ledger-head">
          <span className="name">
            {product.name} — {product.dose}
          </span>
          <span className="sku">SKU {product.sku}</span>
        </div>
        {product.costBreakdown.map((line) => (
          <div className="ledger-row" key={line.label}>
            <span>{line.label}</span>
            <span>{formatMoney(line.amount)}</span>
          </div>
        ))}
        <div className="ledger-row">
          <span>Base cost per vial</span>
          <span>{formatMoney(product.cost)}</span>
        </div>
        <div className={`ledger-row margin${highlight === "vial" ? " is-active" : ""}`}>
          <span>Cost per vial 1 · +37.5%</span>
          <span>{formatMoney(product.prices.vial)}</span>
        </div>
        <div className={`ledger-row margin${highlight === "threeMonth" ? " is-active" : ""}`}>
          <span>Cost per vial 2 · +30%</span>
          <span>{formatMoney(product.prices.threeMonth)}</span>
        </div>
        <div className={`ledger-row margin${highlight === "bulk" ? " is-active" : ""}`}>
          <span>Cost per vial 3 · +22.5%</span>
          <span>{formatMoney(product.prices.bulk)}</span>
        </div>
        <div className="ledger-total">
          <span className="label">Starting at vial 1</span>
          <span className="amount">{formatMoney(product.prices.vial)}</span>
        </div>
      </div>
      <div className="stamp">
        <div className="stamp-inner">
          LAB
          <br />
          VERIFIED
        </div>
      </div>
    </div>
  );
}
