import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Contact — Peptides Cost Plus",
  description:
    "Reach Peptides Cost Plus for order questions, warranty claims, and general support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Support</span>
          <h1>Contact</h1>
          <p>
            Questions about an order, a claim, or how our pricing works —
            write us. We respond within{" "}
            <Placeholder>[1 business day]</Placeholder>.
          </p>
        </div>
      </section>
      <section className="legal-content wrap">
        <div className="contact-grid">
          <div className="contact-card">
            <h2>Email</h2>
            <p>
              <Placeholder>[SUPPORT EMAIL]</Placeholder>
            </p>
            <p>
              Include your order number for anything related to shipping,
              warranty, or refunds.
            </p>
            <a href="mailto:support@peptidescostplus.com" className="btn-primary">
              Open email draft
            </a>
          </div>
          <div className="contact-card">
            <h2>Mailing address</h2>
            <p>
              <Placeholder>[BUSINESS MAILING ADDRESS]</Placeholder>
            </p>
            <p>
              Phone / contact form:{" "}
              <Placeholder>[SUPPORT PHONE/CONTACT FORM]</Placeholder>
            </p>
          </div>
        </div>
        <h2>Before you write</h2>
        <ul>
          <li>
            Temperature or transit issues need photos within 24 hours of
            delivery.
          </li>
          <li>
            We do not provide dosing or medical guidance — speak with a
            licensed healthcare provider.
          </li>
          <li>
            Physical returns of delivered product are not accepted. Claims
            are handled by replacement or refund under the published
            policies.
          </li>
        </ul>
      </section>
    </>
  );
}
