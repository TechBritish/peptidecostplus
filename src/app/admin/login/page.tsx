import { loginAction } from "@/app/admin/actions";

export const metadata = { title: "Admin Login — Peptides Cost Plus" };

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const next = params.next || "/admin";
  const hasError = params.error === "1";

  return (
    <div className="admin-auth-shell">
      <form className="admin-auth-card" action={loginAction}>
        <span className="admin-eyebrow">Peptides Cost Plus</span>
        <h1>Admin Access</h1>
        <p className="admin-auth-sub">
          Enter the admin password to manage the SKU catalog.
        </p>
        <input type="hidden" name="next" value={next} />
        <label className="admin-field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            required
            autoFocus
            placeholder="••••••••"
          />
        </label>
        {hasError && (
          <p className="admin-auth-error">Incorrect password. Try again.</p>
        )}
        <button type="submit" className="admin-btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}
