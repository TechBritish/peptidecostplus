import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Image src="/logo.png" alt="Peptides Cost Plus" width={137} height={100} className="logo-mark" />
            </div>
            <p>
              Transparent, cost-plus pricing on lab-verified peptide
              supplies. One vial, 3-month, or bulk — same published ledger.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/shop">Full catalog</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/cost-plus-difference">Cost-Plus Difference</Link></li>
              <li><Link href="/quality-testing">Quality &amp; Testing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/warranty-policy">Warranty</Link></li>
              <li><Link href="/shipping-policy">Shipping</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Peptides Cost Plus. All rights reserved.</span>
          <span>1 vial +35% · 3-month +25% · bulk +15%.</span>
        </div>
      </div>
    </footer>
  );
}
