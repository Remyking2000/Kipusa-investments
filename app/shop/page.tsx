"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, X, Info, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import {
  products,
  fromPrice,
  type BusinessSectionSlug,
} from "@/lib/products";

export default function Shop() {
  const [sectionFilter, setSectionFilter] = useState<
    "all" | Exclude<BusinessSectionSlug, "kipusa-prints">
  >("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured"
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      if (sectionFilter !== "all" && p.section !== sectionFilter) return false;
      if (q) {
        const text =
          `${p.name} ${p.sub} ${p.category} ${p.sectionLabel} ${p.description}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (sort === "price-asc") {
      return [...list].sort((a, b) => fromPrice(a) - fromPrice(b));
    }
    if (sort === "price-desc") {
      return [...list].sort((a, b) => fromPrice(b) - fromPrice(a));
    }
    return list;
  }, [sectionFilter, query, sort]);

  return (
    <div className="bg-cream pb-20">
      <section className="border-b border-sand bg-beige/55 py-12 md:py-16">
        <div className="wrap text-center">
          <p className="eyebrow mb-2 text-olive">Kipusa Limited Storefront</p>
          <h1 className="display h-xl text-charcoal">Product Catalogue</h1>
          <p className="mx-auto mt-3 max-w-[58ch] text-sm text-charcoal/75 sm:text-base">
            Shop retail products from <strong>Kipusa Beauty</strong> and{" "}
            <strong>Kipusa Home</strong>, or explore printing, design, E-Citizen,
            and DHL services at <strong>Kipusa Prints</strong>.
          </p>

          {/* Division Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setSectionFilter("all")}
              className={`rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                sectionFilter === "all"
                  ? "bg-forest text-cream"
                  : "border border-sand bg-white text-charcoal hover:border-forest"
              }`}
            >
              All Products ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setSectionFilter("kipusa-beauty")}
              className={`rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                sectionFilter === "kipusa-beauty"
                  ? "bg-forest text-cream"
                  : "border border-sand bg-white text-charcoal hover:border-forest"
              }`}
            >
              Kipusa Beauty (
              {products.filter((p) => p.section === "kipusa-beauty").length})
            </button>
            <button
              type="button"
              onClick={() => setSectionFilter("kipusa-home")}
              className={`rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                sectionFilter === "kipusa-home"
                  ? "bg-forest text-cream"
                  : "border border-sand bg-white text-charcoal hover:border-forest"
              }`}
            >
              Kipusa Home (
              {products.filter((p) => p.section === "kipusa-home").length})
            </button>
            <Link
              href="/collections/kipusa-prints"
              className="inline-flex items-center gap-1.5 rounded-lg border border-forest/30 bg-beige px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <span>Kipusa Prints Services</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap pt-8 md:pt-12">
        {/* Search & Sort Bar */}
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-sand pb-6 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/45"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search oils, scrubs, body butters, candles, soaps..."
              aria-label="Search catalogue"
              className="w-full rounded-lg border border-sand bg-white py-2.5 pl-10 pr-9 text-sm text-charcoal placeholder:text-charcoal/45 focus:border-forest focus:outline-none"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-charcoal/50 hover:text-charcoal"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-xs text-charcoal/65">
              Showing <strong>{filtered.length}</strong> of {products.length}{" "}
              items
            </span>
            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value as "featured" | "price-asc" | "price-desc"
                )
              }
              aria-label="Sort products"
              className="rounded-lg border border-sand bg-white px-3.5 py-2 text-xs font-medium text-charcoal focus:border-forest focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid or Empty State */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-lg rounded-2xl border border-sand bg-white p-10 text-center">
            <p className="font-serif text-2xl text-charcoal">
              No matching catalogue items found
            </p>
            <p className="mt-2 text-sm text-charcoal/65">
              Try clearing your search keyword or switching business divisions.
            </p>
            <button
              type="button"
              onClick={() => {
                setSectionFilter("all");
                setQuery("");
              }}
              className="btn btn-dark mt-5"
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="mt-12 flex items-center justify-center gap-2 rounded-xl border border-sand bg-beige/40 p-4 text-center text-xs text-charcoal/70">
          <Info size={15} className="shrink-0 text-olive" />
          <span>
            Phase 1 Catalogue Preview — Products and KSh prices shown are
            structured placeholders ready for Kipusa Limited’s official
            inventory.
          </span>
        </div>
      </section>
    </div>
  );
}
