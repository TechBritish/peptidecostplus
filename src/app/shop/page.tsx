import type { Metadata } from "next";
import ShopCatalog from "@/components/ShopCatalog";
import type { CategoryKey } from "@/lib/product-types";
import { countProducts, listProducts } from "@/lib/products-db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop — Peptides Cost Plus",
  description:
    "Browse lab-verified peptide SKUs. Buy one vial, a 3-month protocol, or bulk — same cost base, published margin.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const category = (params.category ?? "all") as CategoryKey | "all";
  const query = params.q ?? "";

  const [result, total] = await Promise.all([
    listProducts({ page, category, query }),
    countProducts(),
  ]);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{total} products, published costs</span>
          <h1>Shop the catalog</h1>
          <p>
            Cost per vial 1 at plus 37.5%. Cost per vial 2 at plus 30%. Cost
            per vial 3 at plus 22.5%. Same lot, same ledger — volume is
            optional.
          </p>
        </div>
      </section>
      <section className="products">
        <div className="wrap">
          <ShopCatalog
            products={result.products}
            total={total}
            page={result.page}
            totalPages={result.totalPages}
            category={category}
            query={query}
          />
        </div>
      </section>
    </>
  );
}
