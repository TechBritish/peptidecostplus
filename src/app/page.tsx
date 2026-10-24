import Link from "next/link";
import LedgerCard from "@/components/LedgerCard";
import ProductCard from "@/components/ProductCard";
import { countProducts, featuredProducts } from "@/lib/products-db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [featured, total] = await Promise.all([
    featuredProducts(6),
    countProducts(),
  ]);
  const hero = featured[0];

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Cost-plus pricing, verified</span>
            <h1>
              Peptide pricing,
              <br />
              finally <em>honest.</em>
            </h1>
            <p className="lede">
              We publish what a supply actually costs to source and test —
              then add one fair, fixed margin. No inflated &quot;premium&quot;
              pricing, no games.
            </p>
            <div className="hero-ctas">
              <Link href="/shop" className="btn-primary">
                Shop the catalog
              </Link>
              <Link href="/cost-plus-difference" className="btn-secondary">
                See how pricing works →
              </Link>
            </div>
          </div>
          {hero && <LedgerCard product={hero} />}
        </div>
      </section>

      <div className="trust-strip">
        <div className="wrap">
          <div className="trust-item"><span className="dot" />Third-party lab-tested, every batch</div>
          <div className="trust-item"><span className="dot" />1 vial, 3-month, or bulk — same ledger</div>
          <div className="trust-item"><span className="dot" />Warranty-backed on every order</div>
          <div className="trust-item"><span className="dot" />Support from people who know peptides</div>
        </div>
      </div>

      <section className="compare">
        <div className="wrap">
          <div className="compare-head">
            <span className="eyebrow">The industry&apos;s math</span>
            <h2>Most of the industry marks up 300–800%. We don&apos;t.</h2>
            <p>
              The peptide market is opaque on purpose — vague sourcing, no
              testing data, and pricing that has nothing to do with cost. We
              built this store to show the difference in plain numbers.
            </p>
          </div>
          <div className="bars">
            <div className="bar-row">
              <div className="bar-label">Typical retailer</div>
              <div className="bar-track"><div className="bar-fill industry" /></div>
              <div className="bar-value industry">~450%</div>
            </div>
            <div className="bar-row">
              <div className="bar-label">Peptides Cost Plus</div>
              <div className="bar-track"><div className="bar-fill us" /></div>
              <div className="bar-value us">Fixed margin</div>
            </div>
          </div>
          <p className="compare-foot">
            Figures reflect typical direct-to-consumer peptide retail markups
            reported industry-wide vs. our published fixed margin structure.
            Full cost breakdown available on every product page.
          </p>
        </div>
      </section>

      <section className="how">
        <div className="wrap">
          <h2>How a Peptides Cost Plus order works</h2>
          <div className="how-grid">
            <div className="how-step">
              <span className="num">01 / SUPPLY</span>
              <h3>Pick a size that fits</h3>
              <p>
                Start with one vial at cost plus 37.5%. Move to a 3-month
                protocol at plus 30%, or bulk at plus 22.5%. Volume is optional.
              </p>
            </div>
            <div className="how-step">
              <span className="num">02 / VERIFY</span>
              <h3>We test before it ships</h3>
              <p>
                Every batch is checked against its certificate of analysis.
                You can view the COA for your exact lot from your account.
              </p>
            </div>
            <div className="how-step">
              <span className="num">03 / GUARANTEE</span>
              <h3>You&apos;re covered</h3>
              <p>
                If a supply arrives damaged or off-spec, our warranty
                replaces it — no return shipping, no runaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="wrap">
          <div className="products-head">
            <div>
              <span className="eyebrow">{total} SKUs</span>
              <h2>Featured from the catalog</h2>
            </div>
            <Link href="/shop">View all →</Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard product={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="warranty">
        <div className="wrap">
          <div className="warranty-card">
            <div>
              <span className="eyebrow">Quality Guarantee</span>
              <h2>Backed by the industry&apos;s best warranty.</h2>
              <p>
                Every order is covered from the moment it ships. If it
                doesn&apos;t meet spec, we make it right — fast.
              </p>
              <Link href="/warranty-policy" className="btn-primary">
                Read the full policy
              </Link>
            </div>
            <ul className="warranty-points">
              <li>Free replacement if a supply fails to match its certificate of analysis</li>
              <li>Coverage for transit damage or cold-chain failure</li>
              <li>No return shipping required for verified claims</li>
              <li>Direct support line — real answers, not a ticket queue</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
