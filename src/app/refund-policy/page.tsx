import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Refund Policy — Peptides Cost Plus",
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Refund Policy</h1>
        </div>
      </section>
      <section className="legal-content wrap">
        <p className="meta">Effective date: <Placeholder>[DATE]</Placeholder> · Last updated: <Placeholder>[DATE]</Placeholder></p>
        <p>Because of the nature of our products — cold-chain-sensitive, lot-tracked, and subject to chain-of-custody requirements once they leave our facility — we cannot accept physical returns of delivered product for restocking or resale under any circumstances. This protects every customer from receiving a product whose handling history after leaving our facility can&apos;t be verified. Refunds and replacements are instead issued based on the specific, verifiable criteria below.</p>

        <h2>Eligible for refund or replacement</h2>
        <p>You may request a refund or replacement if, within <strong><Placeholder>[X] days of delivery</Placeholder></strong>, one of the following applies and is reported with the supporting evidence noted:</p>
        <table>
          <thead>
            <tr><th>Issue</th><th>What&apos;s required</th></tr>
          </thead>
          <tbody>
            <tr><td>Order arrived damaged (broken vials, compromised packaging)</td><td>Photos of the damaged item(s) and shipping box, submitted within 48 hours of delivery</td></tr>
            <tr><td>Temperature excursion (cold-chain packaging failed — packaging warm/ice packs fully melted on arrival)</td><td>Photos of the packaging and ice packs on arrival, submitted within 24 hours of delivery</td></tr>
            <tr><td>Incorrect item shipped (wrong product or supply length)</td><td>Photo of the received label/lot, submitted within <Placeholder>[X]</Placeholder> days of delivery</td></tr>
            <tr><td>Failed to match Certificate of Analysis (independent testing shows the product does not meet its published COA)</td><td>Third-party lab results or documented discrepancy, submitted within <Placeholder>[X]</Placeholder> days of delivery</td></tr>
            <tr><td>Order lost in transit (confirmed by carrier tracking as undelivered past <Placeholder>[X]</Placeholder> days)</td><td>Tracking reference; we will confirm with the carrier before issuing resolution</td></tr>
          </tbody>
        </table>
        <p>Approved claims are resolved as a <strong>replacement from the next verified lot</strong>, or a <strong>refund to your original payment method</strong>, at our discretion, unless you specify a preference and the situation allows it.</p>

        <h2>Not eligible for refund</h2>
        <ul>
          <li>Change of mind after delivery</li>
          <li>Product that has been opened, reconstituted, or used</li>
          <li>Claims submitted after the reporting window above has passed</li>
          <li>Temperature excursions or damage not reported with photo evidence within the required window</li>
          <li>Delivery delays or issues caused by an incorrect address provided at checkout</li>
          <li>Orders confirmed delivered by carrier tracking where no damage or excursion is reported within the window above</li>
        </ul>

        <h2>How to request a refund or replacement</h2>
        <ul>
          <li>Contact <Placeholder>[SUPPORT EMAIL]</Placeholder> with your order number, the issue, and the required evidence listed above.</li>
          <li>Our team reviews claims and responds within <Placeholder>[X business hours/days]</Placeholder>.</li>
          <li>Approved claims are resolved without requiring you to ship anything back, given the chain-of-custody restrictions described above.</li>
        </ul>

        <h2>Warranty claims</h2>
        <p>Quality issues discovered through normal use are handled under our separate <Link href="/warranty-policy">Warranty Policy</Link>, which this Refund Policy works alongside.</p>

        <h2>Order cancellations</h2>
        <p>Orders can be canceled for a full refund only if they have not yet shipped. Once an order has shipped, it is subject to the criteria above.</p>

        <h2>Contact</h2>
        <p>Questions about this policy: <Placeholder>[SUPPORT EMAIL]</Placeholder>.</p>
      </section>
    </>
  );
}
