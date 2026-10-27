"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Scene from "./Scene";
import { products, formatKSh, fromPrice } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchOpen) setTimeout(() => ref.current?.focus(), 300);
    else setQ("");
  }, [searchOpen]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setSearchOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [setSearchOpen]);
  const res = q.trim()
    ? products.filter((p) =>
        (p.name + p.sub + p.category).toLowerCase().includes(q.toLowerCase())
      )
    : products.slice(0, 4);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-y-auto bg-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="wrap py-8">
            <div className="flex justify-end">
              <button
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
              >
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>
            <input
              ref={ref}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="display h-lg mt-10 w-full border-b border-charcoal/30 bg-transparent pb-5 placeholder:text-charcoal/30 focus:border-charcoal focus:outline-none"
            />
            <p className="eyebrow mb-8 mt-12 text-olive">
              {q ? `${res.length} results` : "Popular"}
            </p>
            <div className="grid grid-cols-2 gap-6 pb-16 md:grid-cols-4">
              {res.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-[1200ms] ease-soft group-hover:scale-105">
                      <Scene
                        kind={p.scene}
                        tone={p.tone}
                        seed={p.slug.length}
                        image={p.image}
                        alt={p.name}
                      />
                    </div>
                  </div>
                  <p className="mt-3 font-serif text-xl">{p.name}</p>
                  <p className="text-[12px] text-charcoal/60">
                    {p.sub} · {formatKSh(fromPrice(p))}
                  </p>
                </Link>
              ))}
              {!res.length && (
                <p className="col-span-full font-serif text-2xl italic">
                  Nothing found for “{q}”.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
