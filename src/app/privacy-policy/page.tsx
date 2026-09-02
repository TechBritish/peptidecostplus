import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy — Peptides Cost Plus",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="legal-content wrap">
        <p className="meta">Effective date: <Placeholder>[DATE]</Placeholder> &nbsp;·&nbsp; Last updated: <Placeholder>[DATE]</Placeholder></p>

        <p>This Privacy Policy explains how Peptides Cost Plus (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, and protects information when you visit www.peptidescostplus.com or place an order.</p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Information you provide:</strong> name, email, shipping/billing address, phone number, and payment information (processed by our third-party payment processor — we do not store full card numbers).</li>
          <li><strong>Account information:</strong> if you create an account, order history and any preferences you save.</li>
          <li><strong>Automatically collected information:</strong> IP address, browser type, device information, pages viewed, and referring URLs, collected via cookies and similar technologies.</li>
          <li><strong>Communications:</strong> messages you send us through contact forms, email, or customer support, including warranty claims.</li>
        </ul>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>Process and fulfill orders, including shipping and payment processing</li>
          <li>Verify eligibility to purchase and prevent fraud</li>
          <li>Provide customer support and process warranty or refund claims</li>
          <li>Send order confirmations, shipping updates, and (with your consent, where required) marketing communications</li>
          <li>Improve the Site&apos;s performance, content, and security</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to operate the Site&apos;s shopping cart and checkout, remember preferences, and understand how visitors use the Site (analytics). You can control cookies through your browser settings; disabling some cookies may affect Site functionality, including checkout.</p>

        <h2>4. Third Parties We Share Information With</h2>
        <ul>
          <li>Our payment processor, to process transactions</li>
          <li>Our shipping carrier(s), to deliver orders</li>
          <li>Email/marketing service providers, if you opt in to communications</li>
          <li>Website hosting and security providers</li>
          <li>Analytics providers (e.g., aggregated, non-identifying usage data)</li>
          <li>Law enforcement or regulators, where required by law</li>
        </ul>
        <p>We do not sell your personal information to third parties for their own marketing purposes.</p>

        <h2>5. Data Retention</h2>
        <p>We retain order and account information for as long as needed to fulfill orders, comply with legal, tax, and accounting obligations, resolve disputes, and enforce our agreements. <Placeholder>[Insert specific retention periods if your policy sets them, e.g. &quot;Order records are retained for 7 years for tax compliance.&quot;]</Placeholder></p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal information, and to opt out of marketing communications at any time via the unsubscribe link in any email or by contacting us. <Placeholder>[If you have customers in the EU/UK or California, add GDPR/CCPA-specific rights language here — confirm requirements with counsel based on where you actually ship.]</Placeholder></p>

        <h2>7. Data Security</h2>
        <p>We use commercially reasonable technical and organizational measures (including SSL encryption on the Site and PCI-compliant payment processing) to protect your information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>This Site is not directed to individuals under 18, and we do not knowingly collect personal information from anyone under 18.</p>

        <h2>9. International Visitors</h2>
        <p><Placeholder>[Insert language here if you ship or accept orders internationally, addressing cross-border data transfer.]</Placeholder></p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Material changes will be reflected by an updated &quot;Last updated&quot; date above.</p>

        <h2>11. Contact</h2>
        <p>Questions or requests regarding this Privacy Policy or your personal information can be sent to <Placeholder>[SUPPORT/PRIVACY EMAIL]</Placeholder> or <Placeholder>[BUSINESS MAILING ADDRESS]</Placeholder>.</p>
      </section>
    </>
  );
}
