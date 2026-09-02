import type { Product } from "@/lib/product-types";

export default function VialHover({
  product,
  size = "card",
}: {
  product: Product;
  size?: "card" | "detail";
}) {
  return (
    <div className={`vial-hover vial-hover--${size}`} aria-hidden="true">
      <img
        className="vial-hover__img vial-hover__img--rest"
        src={product.image}
        alt=""
      />
      <img
        className="vial-hover__img vial-hover__img--peel"
        src={product.imageHover}
        alt=""
      />
    </div>
  );
}
