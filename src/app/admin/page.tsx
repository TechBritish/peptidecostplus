import Link from "next/link";
import { listProducts, formatMoney } from "@/lib/products-db";
import { CATEGORIES } from "@/lib/categories";
import type { CategoryKey } from "@/lib/product-types";
import { deleteProductAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function AdminCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const category = (params.category ?? "all") as CategoryKey | "all";
  const query = params.q ?? "";

  const result = await listProducts({ page, pageSize: 20, category, query });

  function pageHref(p: number) {
    const sp = new URLSearchParams();
    if (category !== "all") sp.set("category", category);
    if (query) sp.set("q", query);
    if (p > 1) sp.set("page", String(p));
    const qs = sp.toString();
    return `/admin${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <span className="admin-eyebrow">Product Catalog</span>
          <h1>{result.total} products</h1>
        </div>
        <Link href="/admin/products/new" className="admin-btn-primary">
          + New product
        </Link>
      </div>

      <form className="admin-filters" method="get">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search name, dose, SKU…"
        />
        <select name="category" defaultValue={category}>
          {CATEGORIES.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
        <button type="submit" className="admin-btn-secondary">
          Filter
        </button>
      </form>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Doses</th>
              <th>Category</th>
              <th>From (cost)</th>
              <th>From (vial price)</th>
              <th>Featured</th>
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {result.products.map((p) => (
              <tr key={p.slug}>
                <td>
                  <Link href={`/admin/products/${p.slug}/edit`}>
                    {p.name}
                  </Link>
                </td>
                <td>{p.variants.length}</td>
                <td>{p.category}</td>
                <td className="mono">{formatMoney(p.cost)}</td>
                <td className="mono">{formatMoney(p.prices.vial)}</td>
                <td>{p.featured ? "★" : ""}</td>
                <td className="admin-row-actions">
                  <Link href={`/admin/products/${p.slug}/edit`}>Edit</Link>
                  <form
                    action={deleteProductAction.bind(null, p.slug)}
                  >
                    <button type="submit" className="admin-link-danger">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {!result.products.length && (
              <tr>
                <td colSpan={7} className="admin-empty">
                  No products match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {result.totalPages > 1 && (
        <div className="admin-pagination">
          <Link
            href={pageHref(result.page - 1)}
            aria-disabled={result.page <= 1}
            className={result.page <= 1 ? "is-disabled" : ""}
          >
            ← Prev
          </Link>
          <span>
            Page {result.page} of {result.totalPages}
          </span>
          <Link
            href={pageHref(result.page + 1)}
            aria-disabled={result.page >= result.totalPages}
            className={result.page >= result.totalPages ? "is-disabled" : ""}
          >
            Next →
          </Link>
        </div>
      )}
    </div>
  );
}
