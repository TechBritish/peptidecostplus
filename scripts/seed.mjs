// Seed MongoDB with the existing static catalog.json.
// Usage: npm run seed
import mongoose from "mongoose";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set. Add it to .env.local and run:");
  console.error("  npm run seed");
  process.exit(1);
}

const ProductVariantSchema = new mongoose.Schema(
  {
    dose: { type: String, required: true },
    sku: { type: String, required: true },
    sourcing: { type: Number, required: true },
    testing: { type: Number, required: true },
    packaging: { type: Number, required: true },
  },
  { _id: false },
);

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["glp1", "performance", "blends", "bioregulators"],
    },
    featured: { type: Boolean, default: false },
    variants: { type: [ProductVariantSchema], required: true },
    description: { type: String },
    image: { type: String, default: "/vial.svg" },
    imageHover: { type: String, default: "/vial-label.svg" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\//g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  const catalogPath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "catalog.json",
  );
  const raw = await readFile(catalogPath, "utf-8");
  const rows = JSON.parse(raw);

  const mediaMapPath = path.join(__dirname, "..", "..", "final_media_map.json");
  let mediaBySlug = new Map();
  try {
    const mediaRaw = await readFile(mediaMapPath, "utf-8");
    const mediaRows = JSON.parse(mediaRaw);
    mediaBySlug = new Map(mediaRows.map((m) => [m.slug, m]));
    console.log(`Loaded media/description overrides for ${mediaBySlug.size} SKUs.`);
  } catch {
    console.log("No final_media_map.json found, skipping media/description enrichment.");
  }

  // Group the 116 dose-variant SKU rows into ~59 base products (one per
  // peptide name), matching the client's PDF catalog. Each row becomes a
  // variant on its base product.
  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.name)) grouped.set(row.name, []);
    grouped.get(row.name).push(row);
  }

  console.log(
    `Grouped ${rows.length} SKUs into ${grouped.size} products. Seeding...`,
  );

  await mongoose.connect(MONGODB_URI, { bufferCommands: false });

  // Drop legacy indexes from the old flat-SKU schema (e.g. unique `sku`
  // index), which no longer applies now that `sku` lives inside `variants`.
  try {
    const indexes = await Product.collection.indexes();
    for (const idx of indexes) {
      if (idx.name !== "_id_" && (idx.key.sku || idx.key.dose)) {
        await Product.collection.dropIndex(idx.name);
        console.log(`Dropped legacy index: ${idx.name}`);
      }
    }
  } catch (err) {
    console.log("Index cleanup skipped:", err.message);
  }

  // Old data had one document per dose-variant SKU (116 slugs). We now key
  // documents by base-product slug (~59), so clear stale per-dose documents
  // whose slug won't be reused by the new grouping.
  const newSlugs = new Set([...grouped.keys()].map(slugify));
  const existing = await Product.find({}, { slug: 1 }).lean();
  const staleSlugs = existing
    .map((d) => d.slug)
    .filter((s) => !newSlugs.has(s));
  if (staleSlugs.length) {
    await Product.deleteMany({ slug: { $in: staleSlugs } });
    console.log(`Removed ${staleSlugs.length} stale per-dose documents.`);
  }

  let created = 0;
  let updated = 0;
  let sortOrder = 0;

  for (const [name, group] of grouped) {
    const first = group[0];
    const media = mediaBySlug.get(first.slug);
    const slug = slugify(name);

    const set = {
      name,
      category: first.category,
      featured: group.some((r) => r.featured),
      variants: group.map((r) => ({
        dose: r.dose,
        sku: r.sku,
        sourcing: r.sourcing,
        testing: r.testing,
        packaging: r.packaging,
      })),
      sortOrder: sortOrder++,
    };
    if (media?.description) {
      set.description = media.description;
    }
    if (media?.archive_slug) {
      set.image = `/products/${media.archive_slug}-before.png`;
      set.imageHover = `/products/${media.archive_slug}-after.png`;
    }

    const res = await Product.findOneAndUpdate(
      { slug },
      { $set: set },
      { upsert: true, new: true, rawResult: true },
    );
    if (res.lastErrorObject?.upserted) {
      created++;
    } else {
      updated++;
    }
  }

  console.log(`Done. Created ${created}, updated ${updated}.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
