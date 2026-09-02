import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Shipping Policy — Peptides Cost Plus",
};

export default function ShippingPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Shipping Policy</h1>
        </div>
      </section>
      <section className="legal-content wrap">
        <p className="meta">Effective date: <Placeholder>[DATE]</Placeholder> · Last updated: <Placeholder>[DATE]</Placeholder></p>

        <h2>Processing time</h2>
        <p>Orders are processed and packed within <strong><Placeholder>[1] business day</Placeholder></strong> of order confirmation and payment verification. Orders placed on weekends or holidays are processed the next business day.</p>

        <h2>Packaging</h2>
        <p>Every order ships in insulated, cold-chain packaging with gel ice packs to protect product integrity in transit, regardless of season or destination. Each box includes a lot-matched insert card with storage guidance.</p>

        <h2>Delivery timelines</h2>
        <table>
          <thead><tr><th>Method</th><th>Estimated transit time</th></tr></thead>
          <tbody>
            <tr><td>Standard</td><td><Placeholder>[2–4]</Placeholder> business days</td></tr>
            <tr><td>Expedited</td><td><Placeholder>[1–2]</Placeholder> business days</td></tr>
          </tbody>
        </table>
        <p>Delivery estimates begin from the ship date, not the order date, and are estimates provided by the carrier — not a guarantee.</p>

        <h2>Reporting a temperature or transit issue</h2>
        <p>If your package arrives without adequate cold packaging (ice packs fully melted, box visibly compromised), <strong>photograph the packaging and contents immediately upon opening and contact <Placeholder>[SUPPORT EMAIL]</Placeholder> within 24 hours of delivery.</strong> This is required to qualify for a replacement under our <Link href="/refund-policy">Refund Policy</Link> and <Link href="/warranty-policy">Warranty Policy</Link> — we can&apos;t verify a cold-chain failure after the window has passed.</p>

        <h2>Tracking</h2>
        <p>A tracking number is emailed once your order ships and is also available from your account dashboard.</p>

        <h2>Shipping destinations</h2>
        <p><Placeholder>[List states/countries you ship to, and any explicitly excluded due to legal restrictions — confirm this list with counsel before publishing, as peptide shipping restrictions vary by jurisdiction.]</Placeholder></p>

        <h2>Signature and delivery confirmation</h2>
        <p><Placeholder>[Insert your actual policy — e.g., &quot;Orders over $X require an adult signature on delivery&quot; or &quot;No signature required; we are not responsible for packages confirmed delivered by carrier tracking to the address provided at checkout.&quot;]</Placeholder></p>

        <h2>Lost or stolen packages</h2>
        <p>Orders confirmed as delivered by carrier tracking that are reported lost or stolen should be reported to <Placeholder>[SUPPORT EMAIL]</Placeholder> within <Placeholder>[X]</Placeholder> days; we will assist with a carrier claim but cannot guarantee replacement for confirmed deliveries to the correct address.</p>

        <h2>Address accuracy</h2>
        <p>You&apos;re responsible for providing an accurate shipping address at checkout. We&apos;re not able to reroute packages once shipped, and orders returned due to an incorrect address may be subject to a reshipping fee.</p>

        <h2>Contact</h2>
        <p>Questions about a shipment in progress: <Placeholder>[SUPPORT EMAIL]</Placeholder>, with your order number.</p>
      </section>
    </>
  );
}
