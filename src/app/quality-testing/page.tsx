import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quality & Testing — Peptides Cost Plus",
  description:
    "How every Peptides Cost Plus lot is independently lab-verified before it ships.",
};

export default function QualityTestingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Lab verified, every lot</span>
          <h1>Quality &amp; Testing</h1>
          <p>
            We don&apos;t ask you to take our word for it. Every lot is
            independently verified by an accredited third-party lab before
            it is released.
          </p>
        </div>
      </section>

      <section className="how">
        <div className="wrap">
          <h2>What we check before a lot ships</h2>
          <div className="how-grid">
            <div className="how-step">
              <span className="num">01 / IDENTITY</span>
              <h3>Is it what the label says?</h3>
              <p>
                Identity testing confirms the compound matches the lot
                documentation — not a substitute or a mislabeled analog.
              </p>
            </div>
            <div className="how-step">
              <span className="num">02 / PURITY</span>
              <h3>Does it meet published spec?</h3>
              <p>
                Purity and related-substance results are checked against
                the lot&apos;s Certificate of Analysis before release.
              </p>
            </div>
            <div className="how-step">
              <span className="num">03 / SAFETY</span>
              <h3>Endotoxin / contamination</h3>
              <p>
                Endotoxin and visible-defect checks catch lots that should
                never leave the facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-content wrap">
        <h2>The Certificate of Analysis</h2>
        <p>
          Every 12-week supply comes from a single tracked lot. That lot
          has a Certificate of Analysis (COA) from an independent,
          accredited lab. We retain the COA for every lot we have ever
          shipped — it is what lets us verify a warranty claim quickly.
        </p>
        <p>
          After purchase, you can view the COA for your exact lot from the
          product page or your account. If independent testing later shows
          the product does not match that published COA, the supply is
          covered under our{" "}
          <Link href="/warranty-policy">Warranty Policy</Link>.
        </p>

        <h2>Why only 3-month supplies</h2>
        <p>
          Selling exclusively as a complete 12-week protocol from one lot
          keeps quality consistent batch to batch. It also means one COA,
          one set of storage guidance, and one warranty covering the
          entire supply — not a mix of leftover vials from different
          lots.
        </p>

        <h2>Cold chain</h2>
        <p>
          Every order ships in insulated packaging with gel ice packs,
          regardless of season or destination. If the package arrives
          warm or the ice packs are fully melted, photograph it
          immediately and contact support within 24 hours — see the{" "}
          <Link href="/shipping-policy">Shipping Policy</Link>.
        </p>

        <p style={{ marginTop: 36 }}>
          <Link href="/warranty-policy" className="btn-primary">
            Read the Quality Guarantee
          </Link>
        </p>
      </section>
    </>
  );
}
