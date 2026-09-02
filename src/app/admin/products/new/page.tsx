import Link from "next/link";
import ProductForm from "@/components/admin/ProductForm";
import { createProductAction } from "@/app/admin/actions";

export default function NewProductPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <span className="admin-eyebrow">New SKU</span>
          <h1>Add a product</h1>
        </div>
        <Link href="/admin" className="admin-btn-secondary">
          ← Back to catalog
        </Link>
      </div>
      <div className="admin-card">
        <ProductForm action={createProductAction} submitLabel="Create SKU" />
      </div>
    </div>
  );
}
