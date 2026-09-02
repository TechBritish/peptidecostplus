import type { ReactNode } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/auth";
import { logoutAction } from "@/app/admin/actions";

export const metadata = { title: "Admin — Peptides Cost Plus" };

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const store = await cookies();
  const authed = verifySessionToken(store.get(ADMIN_COOKIE)?.value);

  if (!authed) {
    // Login page renders its own shell; proxy already redirects unauth'd
    // requests, this is just a safety net for direct renders.
    return <div className="admin-shell">{children}</div>;
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <Link href="/admin" className="admin-brand">
            Peptides Cost Plus <span>· Admin</span>
          </Link>
          <nav className="admin-nav">
            <Link href="/admin">Catalog</Link>
            <Link href="/admin/products/new">+ New SKU</Link>
            <Link href="/shop" target="_blank">
              View site ↗
            </Link>
            <form action={logoutAction}>
              <button type="submit" className="admin-logout">
                Log out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="admin-main">{children}</main>
    </div>
  );
}
