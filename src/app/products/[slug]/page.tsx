import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import VialHover from "@/components/VialHover";
import VariantSelector from "@/components/VariantSelector";
import { getProductBySlug } from "@/lib/products-db";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Peptides Cost Plus`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="product-detail">
      <div className="wrap detail-grid">
        <div className="detail-swatch">
          <VialHover product={product} size="detail" />
        </div>
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="desc">{product.description}</p>

          <VariantSelector product={product} />
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 56 }}>
        <Link href="/shop" className="btn-secondary">
          ← Back to catalog
        </Link>
      </div>
    </section>
  );
}
