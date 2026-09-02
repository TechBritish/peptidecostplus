import Link from "next/link";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { getProductBySlug } from "@/lib/products-db";
import { updateProductAction, deleteProductAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const boundUpdate = updateProductAction.bind(null, slug);
  const boundDelete = deleteProductAction.bind(null, slug);

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <span className="admin-eyebrow">Edit SKU · {product.sku}</span>
          <h1>{product.name}</h1>
        </div>
        <Link href="/admin" className="admin-btn-secondary">
          ← Back to catalog
        </Link>
      </div>
      <div className="admin-card">
        <ProductForm
          product={product}
          action={boundUpdate}
          submitLabel="Save changes"
        />
      </div>
      <div className="admin-card admin-card-danger">
        <div>
          <h3>Delete this SKU</h3>
          <p>This permanently removes the product from the public catalog.</p>
        </div>
        <form action={boundDelete}>
          <button type="submit" className="admin-btn-danger">
            Delete SKU
          </button>
        </form>
      </div>
    </div>
  );
}
