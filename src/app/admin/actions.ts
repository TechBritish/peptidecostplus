"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE,
  checkPassword,
  createSessionToken,
} from "@/lib/auth";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/lib/products-db";
import type { CategoryKey } from "@/lib/product-types";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  if (!checkPassword(password)) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`);
  }

  const token = createSessionToken();
  const store = await cookies();
  store.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  redirect(next || "/admin");
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

function num(formData: FormData, key: string) {
  return Number(formData.get(key) ?? 0);
}

function parseVariants(formData: FormData) {
  const doses = formData.getAll("variantDose").map(String);
  const skus = formData.getAll("variantSku").map(String);
  const sourcings = formData.getAll("variantSourcing").map(Number);
  const testings = formData.getAll("variantTesting").map(Number);
  const packagings = formData.getAll("variantPackaging").map(Number);

  return doses
    .map((dose, i) => ({
      dose,
      sku: skus[i] ?? "",
      sourcing: sourcings[i] ?? 0,
      testing: testings[i] ?? 0,
      packaging: packagings[i] ?? 0,
    }))
    .filter((v) => v.dose.trim() && v.sku.trim());
}

export async function createProductAction(formData: FormData) {
  await createProduct({
    slug: String(formData.get("slug")),
    name: String(formData.get("name")),
    category: String(formData.get("category")) as CategoryKey,
    featured: formData.get("featured") === "on",
    variants: parseVariants(formData),
    image: String(formData.get("image") || "/vial.svg"),
    imageHover: String(formData.get("imageHover") || "/vial-label.svg"),
    sortOrder: num(formData, "sortOrder"),
  });
  redirect("/admin");
}

export async function updateProductAction(
  originalSlug: string,
  formData: FormData,
) {
  await updateProduct(originalSlug, {
    slug: String(formData.get("slug")),
    name: String(formData.get("name")),
    category: String(formData.get("category")) as CategoryKey,
    featured: formData.get("featured") === "on",
    variants: parseVariants(formData),
    image: String(formData.get("image") || "/vial.svg"),
    imageHover: String(formData.get("imageHover") || "/vial-label.svg"),
    sortOrder: num(formData, "sortOrder"),
  });
  redirect("/admin");
}

export async function deleteProductAction(slug: string) {
  await deleteProduct(slug);
  redirect("/admin");
}
