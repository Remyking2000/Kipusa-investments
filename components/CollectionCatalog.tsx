"use client";
import { useState } from "react";
import Link from "next/link";
import { FileText, Info } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Collection, Product } from "@/lib/products";

export default function CollectionCatalog({
  collection,
  items,
}: {
  collection: Collection;
  items: Product[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(items.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((p) => p.category === activeCategory);

  return (
    <section className="section wrap">
      {/* Subcategory Filter Bar & Placeholder Note */}
      <div className="mb-10 flex flex-col justify-between gap-4 border-b border-sand pb-6 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-forest text-cream"
                  : "border border-sand bg-white text-charcoal hover:border-forest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-charcoal/65">
          Showing <strong>{filtered.length}</strong> sample{" "}
          {filtered.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Kipusa Prints Service Inquiry Strip */}
      {collection.slug === "kipusa-prints" && (
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sand bg-beige/70 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-[10px] text-terracotta">
              Custom Print &amp; Packaging Orders
            </p>
            <h2 className="mt-1 font-serif text-2xl text-charcoal">
              Have custom artwork, dielines, or bulk print specifications?
            </h2>
            <p className="mt-1 text-sm text-charcoal/75">
              Order standard starter packs directly below or submit a custom
              specification inquiry for your brand.
            </p>
          </div>
          <Link
            href="/contact?subject=Kipusa%20Prints%20Custom%20Order%20Inquiry"
            className="btn btn-dark shrink-0 gap-2"
          >
            <FileText size={15} />
            <span>Submit Print Inquiry</span>
          </Link>
        </div>
      )}

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-sand bg-white p-12 text-center">
          <p className="font-serif text-2xl text-charcoal">
            No items in this category yet.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="btn btn-line-dark mt-4"
          >
            Show All in {collection.name}
          </button>
        </div>
      )}

      {/* Catalogue Placeholder Note */}
      <div className="mt-12 flex items-center justify-center gap-2 rounded-xl border border-sand bg-beige/40 p-4 text-center text-xs text-charcoal/70">
        <Info size={15} className="shrink-0 text-olive" />
        <span>
          Items and prices displayed in <strong>{collection.name}</strong> are
          Phase 1 sample placeholders structured for easy replacement with
          Kipusa Limited’s official inventory.
        </span>
      </div>
    </section>
  );
}
