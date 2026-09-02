import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Membership — Peptides Cost Plus",
  description:
    "Apply for a Peptides Cost Plus account. The catalog is public; membership is for invoicing and volume pricing.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">No login required to browse</span>
          <h1>Apply for membership</h1>
          <p>
            The catalog and published ledgers are public. Membership is how we
            invoice, ship, and apply 3-month or bulk pricing. Fill this in and
            we will follow up.
          </p>
        </div>
      </section>
      <section className="legal-content wrap">
        <form
          className="member-form"
          action="mailto:support@peptidescostplus.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Full name
            <input name="name" type="text" required placeholder="Jane Researcher" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@lab.com" />
          </label>
          <label>
            Organization
            <input name="org" type="text" placeholder="Clinic, lab, or practice" />
          </label>
          <label>
            Typical volume
            <select name="volume" defaultValue="vial">
              <option value="vial">Mostly 1 vial</option>
              <option value="three-month">3-month protocols</option>
              <option value="bulk">Bulk / recurring</option>
            </select>
          </label>
          <label>
            Notes
            <textarea
              name="notes"
              rows={4}
              placeholder="SKUs you care about, shipping region, anything we should know."
            />
          </label>
          <button type="submit" className="btn-primary">
            Email application
          </button>
          <p className="form-note">
            This opens your mail client to <Placeholder>[SUPPORT EMAIL]</Placeholder>.
            No account is created until we reply. Browse the{" "}
            <Link href="/shop">catalog</Link> in the meantime.
          </p>
        </form>
      </section>
    </>
  );
}
