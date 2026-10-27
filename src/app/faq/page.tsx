import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "FAQ — Peptides Cost Plus",
  description: "Answers to common questions about our pricing, testing, shipping, and warranty.",
};

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Support</span>
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
      <section className="legal-content wrap">
        <h2>Can I buy a single vial, or do I have to take 3 months?</h2>
        <p>You can buy one vial. Cost per vial 1 is cost plus 37.5%. Cost per vial 2 is plus 30%. Cost per vial 3 is plus 22.5%. Volume is optional — we don&apos;t want to lose people who only need a single vial.</p>

        <h2>How does your pricing actually work?</h2>
        <p>Every product page shows a full cost breakdown — sourcing and raw material cost, third-party lab testing, cold-chain packaging and shipping — then three published margins on that same cost. That&apos;s the same math on every SKU.</p>

        <h2>Are your products lab-tested?</h2>
        <p>Yes. Every lot is independently verified by an accredited third-party lab before it ships. You can view the Certificate of Analysis for your exact lot from the product page or your account after purchase.</p>

        <h2>What if my package arrives without cold packaging / warm?</h2>
        <p>Photograph the packaging and contents immediately and contact <Placeholder>[SUPPORT EMAIL]</Placeholder> within 24 hours of delivery. This is required for us to verify and resolve a cold-chain issue — see our <Link href="/shipping-policy">Shipping Policy</Link> and <Link href="/refund-policy">Refund Policy</Link> for details.</p>

        <h2>Can I return a product I&apos;ve already opened?</h2>
        <p>No. Because of chain-of-custody requirements for this type of product, we can&apos;t accept physical returns of delivered product. Refunds and replacements are issued based on specific verified criteria — see our <Link href="/refund-policy">Refund Policy</Link>.</p>

        <h2>What&apos;s covered under warranty?</h2>
        <p>Damaged product, verified cold-chain/temperature failures, product that doesn&apos;t match its published Certificate of Analysis, and manufacturing defects present at delivery. Full details are in our <Link href="/warranty-policy">Warranty Policy</Link>.</p>

        <h2>How do I start a warranty or refund claim?</h2>
        <p>Email <Placeholder>[SUPPORT EMAIL]</Placeholder> with your order number and the required evidence (photos, in most cases). We respond within <Placeholder>[1 business day]</Placeholder> and don&apos;t require you to ship anything back for verified claims.</p>

        <h2>How should I store my supply?</h2>
        <p>Unopened vials should be refrigerated (2–8°C) and kept away from light. Once reconstituted, follow the storage window on your lot&apos;s insert card and avoid repeated freeze-thaw cycles. Full storage detail is on each product&apos;s &quot;Supply &amp; Storage&quot; tab.</p>

        <h2>Do you provide dosing guidance?</h2>
        <p>No. We provide product, storage, and quality information only. For guidance on use, speak with a licensed healthcare provider familiar with your situation.</p>

        <h2>What payment methods do you accept?</h2>
        <p><Placeholder>[List accepted payment methods once your processor is finalized.]</Placeholder></p>

        <h2>Where do you ship?</h2>
        <p><Placeholder>[List shipping destinations — confirm against your legal review before publishing.]</Placeholder></p>

        <h2>How long does shipping take?</h2>
        <p>Orders are processed within <Placeholder>[1]</Placeholder> business day and typically arrive within <Placeholder>[2–4]</Placeholder> business days via standard shipping. Full detail is in our <Link href="/shipping-policy">Shipping Policy</Link>.</p>

        <h2>Is there a subscription or auto-reorder option?</h2>
        <p><Placeholder>[Insert answer once you&apos;ve decided whether to enable auto-reorder every 3 months.]</Placeholder></p>
      </section>
    </>
  );
}
