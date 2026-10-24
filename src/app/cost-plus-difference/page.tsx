import type { Metadata } from "next";
import Link from "next/link";
import LedgerCard from "@/components/LedgerCard";
import { listProducts } from "@/lib/products-db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Cost-Plus Difference — Peptides Cost Plus",
  description:
    "How our published cost-plus pricing works: one vial +37.5%, 3-month +30%, bulk +22.5%.",
};

export default async function CostPlusDifferencePage() {
  const result = await listProducts({ page: 1, pageSize: 1 });
  const sample = result.products[0];

  if (!sample) {
    return null;
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">The industry&apos;s math</span>
          <h1>The Cost-Plus Difference</h1>
          <p>
            Most peptide retail pricing has nothing to do with cost. We
            publish the actual numbers on every product — then add one fair,
            fixed margin.
          </p>
        </div>
      </section>

      <section className="compare">
        <div className="wrap">
          <div className="compare-head">
            <span className="eyebrow">Published, not implied</span>
            <h2>Typical retail marks up 300–800%. We don&apos;t.</h2>
            <p>
              Opaque sourcing, no testing data, and a price that moves with
              demand is the industry default. Cost-plus is the opposite: the
              same four lines on every product, every time.
            </p>
          </div>
          <div className="bars">
            <div className="bar-row">
              <div className="bar-label">Typical retailer</div>
              <div className="bar-track">
                <div className="bar-fill industry" />
              </div>
              <div className="bar-value industry">~450%</div>
            </div>
            <div className="bar-row">
              <div className="bar-label">Peptides Cost Plus</div>
              <div className="bar-track">
                <div className="bar-fill us" />
              </div>
              <div className="bar-value us">Fixed margin</div>
            </div>
          </div>
          <p className="compare-foot">
            Figures reflect typical direct-to-consumer peptide retail
            markups reported industry-wide vs. our published fixed margin
            structure.
          </p>
        </div>
      </section>

      <section className="how">
        <div className="wrap">
          <h2>What goes into every price</h2>
          <div className="how-grid">
            <div className="how-step">
              <span className="num">01 / SOURCE</span>
              <h3>Sourcing &amp; raw material</h3>
              <p>
                What it actually costs to acquire the lot we will ship —
                not a made-up wholesale number.
              </p>
            </div>
            <div className="how-step">
              <span className="num">02 / VERIFY</span>
              <h3>Third-party lab verification</h3>
              <p>
                Independent testing against the lot&apos;s Certificate of
                Analysis, allocated per vial.
              </p>
            </div>
            <div className="how-step">
              <span className="num">03 / SHIP</span>
              <h3>Cold-chain packaging</h3>
              <p>
                Insulated packaging, gel packs, and the cost of getting a
                temperature-sensitive supply to you intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="wrap costplus-sample">
          <div>
            <span className="eyebrow">A real example</span>
            <h2>The same ledger on every product.</h2>
            <p>
              Below is {sample.name} {sample.dose} — the same card you&apos;ll
              see on every product page. Cost per vial, then three published
              volume prices.
            </p>
            <Link href="/shop" className="btn-primary">
              Shop the catalog
            </Link>
          </div>
          <LedgerCard product={sample} />
        </div>
      </section>
    </>
  );
}
