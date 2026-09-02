import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Peptides Cost Plus" width={120} height={120} className="logo-mark" priority />
        </Link>
        <nav className="nav-links">
          <Link href="/shop">Shop</Link>
          <Link href="/cost-plus-difference">The Cost-Plus Difference</Link>
          <Link href="/quality-testing">Quality &amp; Testing</Link>
          <Link href="/membership">Membership</Link>
        </nav>
        <Link href="/membership" className="nav-cta">
          Apply
        </Link>
      </div>
    </header>
  );
}
