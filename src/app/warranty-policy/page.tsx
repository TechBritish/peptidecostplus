import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Warranty Policy — Peptides Cost Plus",
  description:
    "Quality Guarantee covering COA mismatches, transit damage, and manufacturing defects on every order.",
};

export default function WarrantyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Quality Guarantee</span>
          <h1>Warranty Policy</h1>
          <p>
            Every order from Peptides Cost Plus is covered by our Quality
            Guarantee from the date of delivery.
          </p>
        </div>
      </section>
      <section className="legal-content wrap">
        <p className="meta">
          Effective date: <Placeholder>[DATE]</Placeholder> · Last updated:{" "}
          <Placeholder>[DATE]</Placeholder>
        </p>

        <h2>What&apos;s covered</h2>
        <ul>
          <li>
            Product that fails to match the lot&apos;s published Certificate of
            Analysis (purity, identity, or endotoxin results outside published
            spec)
          </li>
          <li>
            Product damaged in transit or affected by a verified
            cold-chain/temperature excursion (see reporting requirements in our{" "}
            <Link href="/refund-policy">Refund Policy</Link>)
          </li>
          <li>
            Manufacturing defects present at the time of delivery (e.g.,
            compromised vial seal, contamination visible prior to
            reconstitution)
          </li>
        </ul>

        <h2>What&apos;s not covered</h2>
        <ul>
          <li>
            Product that has been opened, reconstituted, or used, except where
            the defect was identified and reported prior to use per the
            timelines below
          </li>
          <li>
            Damage or degradation caused by improper storage after delivery
            (see storage guidance on each product page)
          </li>
          <li>Claims submitted after the applicable reporting window has passed</li>
        </ul>

        <h2>Claim window and process</h2>
        <ul>
          <li>
            <strong>Report the issue within <Placeholder>[30]</Placeholder> days of delivery</strong>{" "}
            by contacting <Placeholder>[SUPPORT EMAIL]</Placeholder> with your
            order number and a description of the issue. Time-sensitive issues
            (transit damage, temperature excursion) must be reported within the
            shorter windows described in our{" "}
            <Link href="/refund-policy">Refund Policy</Link>.
          </li>
          <li>
            Include supporting evidence where applicable — photos of the
            product, packaging, or (for COA mismatches) independent test
            results.
          </li>
          <li>
            Our team reviews the claim and responds within{" "}
            <Placeholder>[1 business day]</Placeholder>.
          </li>
          <li>
            Approved claims are resolved as a <strong>free replacement</strong>{" "}
            from the next verified lot. No return shipping is required for
            verified claims.
          </li>
        </ul>

        <h2>Why we can offer this</h2>
        <p>
          Every lot we sell is tested by an independent, accredited lab before
          release, and we retain the Certificate of Analysis for every lot
          we&apos;ve ever shipped. That record is what lets us verify a claim
          quickly instead of asking you to prove something we can already
          check.
        </p>

        <h2>Limitations</h2>
        <p>
          This warranty covers product quality and condition as described
          above. It does not constitute a medical warranty or guarantee of any
          outcome from product use. See our{" "}
          <Link href="/terms-of-service">Terms of Service</Link> for the full
          disclaimer of warranties and limitation of liability.
        </p>

        <h2>Contact</h2>
        <p>
          To start a claim: <Placeholder>[SUPPORT EMAIL]</Placeholder> or{" "}
          <Placeholder>[SUPPORT PHONE/CONTACT FORM]</Placeholder>.
        </p>
      </section>
    </>
  );
}
