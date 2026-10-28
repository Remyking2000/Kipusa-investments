"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Scene from "./Scene";
import {
  products,
  collections,
  formatKSh,
  fromPrice,
  type BusinessSectionSlug,
} from "@/lib/products";
import { useStore } from "@/lib/store";

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");
  const [section, setSection] = useState<"all" | BusinessSectionSlug>("all");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) setTimeout(() => ref.current?.focus(), 200);
    else {
      setQ("");
      setSection("all");
    }
  }, [searchOpen]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setSearchOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [setSearchOpen]);

  const res = products
    .filter((p) => {
      if (section !== "all" && p.section !== section) return false;
      if (!q.trim()) return true;
      return `${p.name} ${p.sub} ${p.category} ${p.sectionLabel}`
        .toLowerCase()
        .includes(q.toLowerCase());
    })
    .slice(0, 8);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-y-auto bg-cream/98 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search Kipusa Limited catalogue"
        >
          <div className="wrap py-6 md:py-10">
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <span className="eyebrow text-olive">
                Search Kipusa Limited Catalogue
              </span>
              <button
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg p-2 text-charcoal hover:bg-beige"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mt-6">
              <Search
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/45"
              />
              <input
                ref={ref}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search Kipusa Beauty oils, Kipusa Prints labels, Kipusa Home candles..."
                className="w-full rounded-xl border border-sand bg-white py-4 pl-12 pr-4 text-base text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none md:text-lg"
              />
            </div>

            {/* Division Quick Filter Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSection("all")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  section === "all"
                    ? "bg-forest text-cream"
                    : "border border-sand bg-white text-charcoal hover:border-forest"
                }`}
              >
                All Divisions
              </button>
              {collections.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSection(c.slug as BusinessSectionSlug)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    section === c.slug
                      ? "bg-forest text-cream"
                      : "border border-sand bg-white text-charcoal hover:border-forest"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <p className="eyebrow mb-5 mt-8 text-[10px] text-olive">
              {q ? `${res.length} matching results` : "Featured across divisions"}
            </p>

            <div className="grid grid-cols-1 gap-4 pb-16 min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-6">
              {res.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="group overflow-hidden rounded-xl border border-sand bg-white transition-all hover:border-forest hover:shadow-sm"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-beige">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <Scene
                        kind={p.scene}
                        tone={p.tone}
                        seed={p.slug.length}
                        image={p.image}
                        alt={p.name}
                      />
                    </div>
                  </div>
                  <div className="p-3.5">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-olive">
                      {p.sectionLabel}
                    </span>
                    <p className="mt-0.5 font-serif text-lg font-medium text-charcoal group-hover:text-forest">
                      {p.name}
                    </p>
                    <p className="mt-1 text-xs text-charcoal/65">
                      {formatKSh(fromPrice(p))}
                    </p>
                  </div>
                </Link>
              ))}
              {!res.length && (
                <div className="col-span-full rounded-xl border border-sand bg-white p-8 text-center">
                  <p className="font-serif text-2xl text-charcoal">
                    No items found for “{q}”.
                  </p>
                  <p className="mt-1 text-sm text-charcoal/65">
                    Try another keyword or switch division filter above.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
