import Link from "next/link";
import { formatMoney } from "@/lib/pricing";
import type { Product } from "@/lib/product-types";
import VialHover from "@/components/VialHover";

export default function ProductCard({ product }: { product: Product }) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.prices.vial));
  const doseCount = product.variants.length;
  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="product-swatch">
        <VialHover product={product} />
        <span className="supply-tag">{doseCount} dose {doseCount === 1 ? "size" : "sizes"}</span>
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <div className="product-foot">
          <div>
            <span className="product-price-label">From</span>
            <span className="product-price">{formatMoney(lowestPrice)}</span>
          </div>
          <span className="view">View details →</span>
        </div>
      </div>
    </Link>
  );
}
