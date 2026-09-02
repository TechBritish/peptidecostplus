import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Terms of Service — Peptides Cost Plus",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
        </div>
      </section>
      <section className="legal-content wrap">
        <p className="meta">
          Effective date: <Placeholder>[DATE]</Placeholder> · Last updated:{" "}
          <Placeholder>[DATE]</Placeholder>
        </p>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of www.peptidescostplus.com (the &quot;Site&quot;) and any
          purchase you make through it. By accessing the Site or placing an
          order, you agree to these Terms. If you do not agree, do not use the
          Site.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years old and legally capable of entering a
          binding contract to use this Site or place an order. By placing an
          order, you represent that you meet these requirements.
        </p>

        <h2>2. Product Classification and Use</h2>
        <p>
          <Placeholder>
            [PLACEHOLDER — insert your finalized product classification
            language here once confirmed with counsel, e.g. research-use
            classification, required disclaimers, and any restrictions on
            resale or human use.]
          </Placeholder>{" "}
          Products sold on this Site are not intended to diagnose, treat,
          cure, or prevent any disease, and nothing on this Site constitutes
          medical advice. Any decisions about the use of any product are the
          sole responsibility of the purchaser. Consult a licensed healthcare
          provider with any questions about a product&apos;s use.
        </p>

        <h2>3. Purchase Terms</h2>
        <ul>
          <li>
            All products are sold exclusively as complete 3-month (12-week)
            supplies. We do not sell individual vials, strips, or partial
            quantities.
          </li>
          <li>
            Prices are displayed in <Placeholder>[CURRENCY]</Placeholder> and
            are subject to change without notice. The price charged is the
            price displayed at the time your order is placed.
          </li>
          <li>
            We publish a cost breakdown (sourcing, testing,
            packaging/shipping, and margin) for informational and
            transparency purposes on product pages. This breakdown reflects
            our internal cost accounting methodology and may be updated
            periodically; it does not constitute a warranty, appraisal, or
            guarantee of any third party&apos;s pricing.
          </li>
          <li>
            We reserve the right to refuse, limit, or cancel any order at our
            discretion, including for suspected fraud, pricing errors, or
            quantity/eligibility violations.
          </li>
        </ul>

        <h2>4. Payment</h2>
        <p>
          Payment is due in full at the time of order. We use a third-party
          payment processor to handle transactions; we do not store your full
          payment card details on our servers. By submitting payment
          information, you represent that you are authorized to use the
          payment method provided.
        </p>

        <h2>5. Shipping and Risk of Loss</h2>
        <p>
          See our <Link href="/shipping-policy">Shipping Policy</Link> for
          processing times, packaging, and delivery details. Risk of loss and
          title for products purchased pass to you upon our delivery to the
          carrier, except as otherwise provided in our{" "}
          <Link href="/warranty-policy">Warranty Policy</Link> and{" "}
          <Link href="/refund-policy">Refund Policy</Link>.
        </p>

        <h2>6. Warranty and Returns</h2>
        <p>
          Our warranty and refund terms are governed by our separate{" "}
          <Link href="/warranty-policy">Warranty Policy</Link> and{" "}
          <Link href="/refund-policy">Refund Policy</Link>, which are
          incorporated into these Terms by reference. Due to the nature of
          the products sold and applicable chain-of-custody requirements,
          returns and refunds are available only under the specific
          circumstances described in those policies.
        </p>

        <h2>7. Account Responsibilities</h2>
        <p>
          If you create an account, you are responsible for maintaining the
          confidentiality of your login credentials and for all activity
          under your account. Notify us immediately of any unauthorized use.
        </p>

        <h2>8. Prohibited Conduct</h2>
        <p>
          You agree not to: violate any applicable law in connection with
          your use of the Site or products purchased; resell products in a
          manner that violates applicable law; misrepresent your identity or
          eligibility; interfere with the security or operation of the Site;
          or use the Site for any unlawful purpose.
        </p>

        <h2>9. Intellectual Property</h2>
        <p>
          All content on this Site — including text, graphics, logos, product
          descriptions, the cost-breakdown methodology and its presentation,
          and design elements — is owned by or licensed to Peptides Cost Plus
          and is protected by applicable intellectual property laws. You may
          not reproduce, distribute, or create derivative works from Site
          content without our prior written consent.
        </p>

        <h2>10. Disclaimer of Warranties</h2>
        <p>
          Except for the express warranty described in our Warranty Policy,
          the Site and products are provided &quot;as is&quot; without
          warranties of any kind, express or implied, to the fullest extent
          permitted by law.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Peptides Cost Plus will not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of the Site or products,
          even if advised of the possibility of such damages. Our total
          liability for any claim arising from an order will not exceed the
          amount you paid for that order.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold Peptides Cost Plus harmless from
          any claims, damages, or expenses arising from your violation of
          these Terms or misuse of any product purchased.
        </p>

        <h2>13. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms are governed by the laws of{" "}
          <Placeholder>[STATE/JURISDICTION — TBD]</Placeholder>, without
          regard to conflict-of-law principles. Any dispute arising from
          these Terms or your use of the Site will be resolved in the state
          or federal courts located in{" "}
          <Placeholder>[JURISDICTION — TBD]</Placeholder>, and you consent to
          personal jurisdiction there.{" "}
          <Placeholder>
            [Insert arbitration clause here if you intend to require
            arbitration — confirm with counsel.]
          </Placeholder>
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          Site after changes take effect constitutes acceptance of the
          revised Terms. The &quot;Last updated&quot; date above reflects the
          most recent revision.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <Placeholder>[SUPPORT EMAIL]</Placeholder> or{" "}
          <Placeholder>[BUSINESS MAILING ADDRESS]</Placeholder>.
        </p>
      </section>
    </>
  );
}
