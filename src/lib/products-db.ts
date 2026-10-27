import { dbConnect } from "@/lib/mongodb";
import ProductModel, { ProductDocument } from "@/models/Product";
import { computePricing, formatMoney } from "@/lib/pricing";
import type { Product, CategoryKey } from "@/lib/product-types";

export const PAGE_SIZE = 24;

export { CATEGORIES } from "@/lib/categories";
export type { Product, CategoryKey } from "@/lib/product-types";

export function toProduct(doc: ProductDocument): Product {
  const variants = doc.variants.map((v) => {
    const pricing = computePricing(v.sourcing, v.testing, v.packaging, {
      price1: v.price1,
      price2: v.price2,
      price3: v.price3,
    });
    return {
      dose: v.dose,
      sku: v.sku,
      costBreakdown: pricing.costBreakdown,
      cost: pricing.cost,
      prices: pricing.prices,
      margins: pricing.margins,
    };
  });
  // Default/lowest-priced variant used for card + list convenience fields.
  const defaultVariant = variants.reduce((lowest, v) =>
    v.prices.vial < lowest.prices.vial ? v : lowest,
  );
  return {
    slug: doc.slug,
    name: doc.name,
    category: doc.category,
    featured: doc.featured,
    variants,
    description:
      doc.description ||
      `${doc.name} from a tracked, lab-verified lot. Cost per vial 1, vial 2, or vial 3 — same cost base; margin falls as volume rises.`,
    image: doc.image,
    imageHover: doc.imageHover,
    dose: defaultVariant.dose,
    sku: defaultVariant.sku,
    costBreakdown: defaultVariant.costBreakdown,
    cost: defaultVariant.cost,
    prices: defaultVariant.prices,
    margins: defaultVariant.margins,
  };
}

export { formatMoney };

export async function listProducts({
  page = 1,
  pageSize = PAGE_SIZE,
  category,
  query,
}: {
  page?: number;
  pageSize?: number;
  category?: CategoryKey | "all";
  query?: string;
}) {
  await dbConnect();

  const filter: Record<string, unknown> = {};
  if (category && category !== "all") {
    filter.category = category;
  }
  if (query && query.trim()) {
    const q = query.trim();
    filter.$or = [
      { name: { $regex: q, $options: "i" } },
      { "variants.dose": { $regex: q, $options: "i" } },
      { "variants.sku": { $regex: q, $options: "i" } },
    ];
  }

  const total = await ProductModel.countDocuments(filter);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);

  const docs = await ProductModel.find(filter)
    .sort({ sortOrder: 1, name: 1 })
    .skip((safePage - 1) * pageSize)
    .limit(pageSize)
    .lean<ProductDocument[]>();

  return {
    products: docs.map((d) => toProduct(d as ProductDocument)),
    total,
    totalPages,
    page: safePage,
    pageSize,
  };
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await dbConnect();
  const doc = await ProductModel.findOne({ slug }).lean<ProductDocument>();
  return doc ? toProduct(doc as ProductDocument) : null;
}

export async function featuredProducts(limit = 6): Promise<Product[]> {
  await dbConnect();
  let docs = await ProductModel.find({ featured: true })
    .sort({ sortOrder: 1 })
    .limit(limit)
    .lean<ProductDocument[]>();
  if (!docs.length) {
    docs = await ProductModel.find()
      .sort({ sortOrder: 1 })
      .limit(limit)
      .lean<ProductDocument[]>();
  }
  return docs.map((d) => toProduct(d as ProductDocument));
}

export async function countProducts() {
  await dbConnect();
  return ProductModel.countDocuments();
}

export type ProductVariantInput = {
  dose: string;
  sku: string;
  sourcing: number;
  testing: number;
  packaging: number;
  price1?: number;
  price2?: number;
  price3?: number;
};

export async function createProduct(data: {
  slug: string;
  name: string;
  category: CategoryKey;
  featured?: boolean;
  variants: ProductVariantInput[];
  description?: string;
  image?: string;
  imageHover?: string;
  sortOrder?: number;
}) {
  await dbConnect();
  const doc = await ProductModel.create(data);
  return toProduct(doc);
}

export async function updateProduct(
  slug: string,
  data: Partial<{
    slug: string;
    name: string;
    category: CategoryKey;
    featured: boolean;
    variants: ProductVariantInput[];
    description: string;
    image: string;
    imageHover: string;
    sortOrder: number;
  }>,
) {
  await dbConnect();
  const doc = await ProductModel.findOneAndUpdate({ slug }, data, {
    new: true,
  }).lean<ProductDocument>();
  return doc ? toProduct(doc as ProductDocument) : null;
}

export async function deleteProduct(slug: string) {
  await dbConnect();
  await ProductModel.deleteOne({ slug });
}
