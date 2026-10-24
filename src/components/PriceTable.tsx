import { formatMoney } from "@/lib/pricing";
import { VIALS_IN_3_MONTH, VIALS_IN_BULK } from "@/lib/pricing";
import type { Product } from "@/lib/products-db";

const ROWS = [
  { key: "vial" as const, label: "1 vial", note: "+37.5% margin" },
  {
    key: "threeMonth" as const,
    label: `3-month (${VIALS_IN_3_MONTH} vials)`,
    note: "+30% margin",
  },
  {
    key: "bulk" as const,
    label: `Bulk (${VIALS_IN_BULK} vials)`,
    note: "+22.5% margin",
  },
];

export default function PriceTable({
  product,
  highlight = "vial",
}: {
  product: Product;
  highlight?: "vial" | "threeMonth" | "bulk";
}) {
  return (
    <div className="price-table">
      {ROWS.map((row) => (
        <div
          key={row.key}
          className={`price-table-row${row.key === highlight ? " is-active" : ""}`}
        >
          <div className="price-table-label">
            <span>{row.label}</span>
            <span className="price-table-note">{row.note}</span>
          </div>
          <strong>{formatMoney(product.prices[row.key])}</strong>
        </div>
      ))}
      <div className="price-table-cost">
        <span>Published cost per vial</span>
        <span>{formatMoney(product.cost)}</span>
      </div>
    </div>
  );
}
