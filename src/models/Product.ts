import mongoose, { Schema, model, models } from "mongoose";
import type { CategoryKey } from "@/lib/product-types";

export type { CategoryKey } from "@/lib/product-types";

export interface ProductVariantDocument {
  dose: string;
  sku: string;
  sourcing: number;
  testing: number;
  packaging: number;
  price1?: number;
  price2?: number;
  price3?: number;
}

export interface ProductDocument extends mongoose.Document {
  slug: string;
  name: string;
  category: CategoryKey;
  featured: boolean;
  variants: ProductVariantDocument[];
  description?: string;
  image: string;
  imageHover: string;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductVariantSchema = new Schema<ProductVariantDocument>(
  {
    dose: { type: String, required: true },
    sku: { type: String, required: true },
    sourcing: { type: Number, required: true },
    testing: { type: Number, required: true },
    packaging: { type: Number, required: true },
    price1: { type: Number },
    price2: { type: Number },
    price3: { type: Number },
  },
  { _id: false },
);

const ProductSchema = new Schema<ProductDocument>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["glp1", "performance", "blends", "bioregulators"],
    },
    featured: { type: Boolean, default: false },
    variants: {
      type: [ProductVariantSchema],
      required: true,
      validate: (v: ProductVariantDocument[]) => Array.isArray(v) && v.length > 0,
    },
    description: { type: String },
    image: { type: String, default: "/vial.svg" },
    imageHover: { type: String, default: "/vial-label.svg" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

ProductSchema.index({ category: 1 });
ProductSchema.index({ name: "text", "variants.sku": "text", "variants.dose": "text" });

export default (models.Product as mongoose.Model<ProductDocument>) ||
  model<ProductDocument>("Product", ProductSchema);
