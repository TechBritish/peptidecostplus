import { formatMoney, VIALS_IN_3_MONTH, VIALS_IN_BULK } from "@/lib/pricing";
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
          <span>Cost per vial</span>
          <span>{formatMoney(product.cost)}</span>
        </div>
        <div className={`ledger-row margin${highlight === "vial" ? " is-active" : ""}`}>
          <span>1 vial · +35%</span>
          <span>{formatMoney(product.prices.vial)}</span>
        </div>
        <div className={`ledger-row margin${highlight === "threeMonth" ? " is-active" : ""}`}>
          <span>3-month ({VIALS_IN_3_MONTH} vials) · +25%</span>
          <span>{formatMoney(product.prices.threeMonth)}</span>
        </div>
        <div className={`ledger-row margin${highlight === "bulk" ? " is-active" : ""}`}>
          <span>Bulk ({VIALS_IN_BULK} vials) · +15%</span>
          <span>{formatMoney(product.prices.bulk)}</span>
        </div>
        <div className="ledger-total">
          <span className="label">Starting at 1 vial</span>
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
