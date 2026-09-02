"use client";

import { useState } from "react";
import { CATEGORIES } from "@/lib/products-db";
import type { Product, ProductVariant } from "@/lib/product-types";

type VariantRow = {
  dose: string;
  sku: string;
  sourcing: number;
  testing: number;
  packaging: number;
};

function toVariantRow(v: ProductVariant): VariantRow {
  const [sourcing = 0, testing = 0, packaging = 0] = v.costBreakdown.map(
    (l) => l.amount,
  );
  return { dose: v.dose, sku: v.sku, sourcing, testing, packaging };
}

export default function ProductForm({
  product,
  action,
  submitLabel,
}: {
  product?: Product;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  const [variants, setVariants] = useState<VariantRow[]>(
    product?.variants?.length
      ? product.variants.map(toVariantRow)
      : [{ dose: "", sku: "", sourcing: 0, testing: 0, packaging: 0 }],
  );

  function updateVariant(i: number, patch: Partial<VariantRow>) {
    setVariants((rows) =>
      rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r)),
    );
  }

  function addVariant() {
    setVariants((rows) => [
      ...rows,
      { dose: "", sku: "", sourcing: 0, testing: 0, packaging: 0 },
    ]);
  }

  function removeVariant(i: number) {
    setVariants((rows) => rows.filter((_, idx) => idx !== i));
  }

  return (
    <form className="admin-form" action={action}>
      <div className="admin-form-grid">
        <label className="admin-field">
          <span>Slug (URL identifier)</span>
          <input
            name="slug"
            defaultValue={product?.slug}
            placeholder="semax-5mg"
            required
          />
        </label>
        <label className="admin-field">
          <span>Name</span>
          <input name="name" defaultValue={product?.name} required />
        </label>
        <label className="admin-field">
          <span>Category</span>
          <select name="category" defaultValue={product?.category ?? "glp1"}>
            {CATEGORIES.filter((c) => c.key !== "all").map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label className="admin-field admin-field-checkbox">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={product?.featured}
          />
          <span>Featured on homepage</span>
        </label>
      </div>

      <h3 className="admin-form-subhead">Dose variants</h3>
      <p className="admin-form-hint">
        Each dose is a separate SKU. Public prices are computed automatically:
        vial +35%, 3-month +25%, bulk +15% over cost.
      </p>
      {variants.map((v, i) => (
        <div className="admin-form-grid admin-form-grid-3" key={i}>
          <label className="admin-field">
            <span>Dose</span>
            <input
              name="variantDose"
              value={v.dose}
              onChange={(e) => updateVariant(i, { dose: e.target.value })}
              placeholder="5 mg"
              required
            />
          </label>
          <label className="admin-field">
            <span>SKU code</span>
            <input
              name="variantSku"
              value={v.sku}
              onChange={(e) => updateVariant(i, { sku: e.target.value })}
              placeholder="PC-SEM-5"
              required
            />
          </label>
          <label className="admin-field">
            <span>Sourcing ($)</span>
            <input
              type="number"
              step="0.01"
              name="variantSourcing"
              value={v.sourcing}
              onChange={(e) =>
                updateVariant(i, { sourcing: Number(e.target.value) })
              }
              required
            />
          </label>
          <label className="admin-field">
            <span>Testing ($)</span>
            <input
              type="number"
              step="0.01"
              name="variantTesting"
              value={v.testing}
              onChange={(e) =>
                updateVariant(i, { testing: Number(e.target.value) })
              }
              required
            />
          </label>
          <label className="admin-field">
            <span>Packaging ($)</span>
            <input
              type="number"
              step="0.01"
              name="variantPackaging"
              value={v.packaging}
              onChange={(e) =>
                updateVariant(i, { packaging: Number(e.target.value) })
              }
              required
            />
          </label>
          <div className="admin-field admin-field-checkbox">
            <button
              type="button"
              className="admin-btn-secondary"
              onClick={() => removeVariant(i)}
              disabled={variants.length <= 1}
            >
              Remove dose
            </button>
          </div>
        </div>
      ))}
      <div className="admin-form-actions" style={{ marginBottom: 24 }}>
        <button type="button" className="admin-btn-secondary" onClick={addVariant}>
          + Add dose
        </button>
      </div>

      <h3 className="admin-form-subhead">Images</h3>
      <div className="admin-form-grid">
        <label className="admin-field">
          <span>Bottle image path</span>
          <input
            name="image"
            defaultValue={product?.image ?? "/vial.svg"}
            placeholder="/vial.svg"
          />
        </label>
        <label className="admin-field">
          <span>Hover / banner image path</span>
          <input
            name="imageHover"
            defaultValue={product?.imageHover ?? "/vial-label.svg"}
            placeholder="/vial-label.svg"
          />
        </label>
        <label className="admin-field">
          <span>Sort order</span>
          <input type="number" name="sortOrder" defaultValue={0} />
        </label>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
