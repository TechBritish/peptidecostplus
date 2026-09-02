"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/categories";
import type { CategoryKey, Product } from "@/lib/product-types";

export default function ShopCatalog({
  products,
  total,
  page,
  totalPages,
  category,
  query,
}: {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
  category: CategoryKey | "all";
  query: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(query);
  const isFirstRender = useRef(true);

  function pushParams(next: { category?: string; q?: string; page?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([key, value]) => {
      if (!value || value === "all" || value === "1") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const t = setTimeout(() => {
      pushParams({ category, q: search, page: "1" });
    }, 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="shop-catalog">
      <div className="shop-toolbar">
        <label className="shop-search">
          <span>Search</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name, dose, or SKU"
          />
        </label>
        <div className="shop-cats" role="tablist" aria-label="Product categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={category === cat.key ? "is-active" : ""}
              onClick={() => pushParams({ category: cat.key, q: search, page: "1" })}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <p className="shop-count">
        {products.length} of {total} products
      </p>
      {products.length ? (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>
      ) : (
        <p className="shop-empty">No products match that search.</p>
      )}
      {totalPages > 1 && (
        <div className="shop-pagination">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => pushParams({ category, q: search, page: String(page - 1) })}
          >
            ← Prev
          </button>
          <span className="shop-pagination-status">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => pushParams({ category, q: search, page: String(page + 1) })}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
