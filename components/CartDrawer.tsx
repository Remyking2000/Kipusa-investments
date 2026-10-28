"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, Info } from "lucide-react";
import Scene from "./Scene";
import { useStore } from "@/lib/store";
import { formatKSh, getProduct } from "@/lib/products";

export function CartLines({ onNavigate }: { onNavigate?: () => void }) {
  const { lines, setQty } = useStore();
  if (!lines.length)
    return (
      <div className="py-14 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beige text-forest">
          <ShoppingBag size={20} strokeWidth={1.5} />
        </div>
        <p className="font-serif text-2xl text-charcoal">Your bag is empty</p>
        <p className="mt-1 text-xs text-charcoal/65">
          Explore Kipusa Beauty, Kipusa Prints, and Kipusa Home to add items.
        </p>
      </div>
    );

  return (
    <ul className="divide-y divide-sand/80">
      {lines.map((l) => {
        const p = getProduct(l.slug);
        if (!p) return null;
        const v = p.variants[l.variant] || p.variants[0];
        return (
          <li key={l.slug + l.variant} className="flex gap-4 py-5">
            <Link
              href={`/products/${p.slug}`}
              onClick={onNavigate}
              className="h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-sand bg-beige"
            >
              <Scene
                kind={p.scene}
                tone={p.tone}
                seed={p.slug.length}
                image={p.image}
                alt={p.name}
              />
            </Link>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex justify-between gap-2">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-olive">
                    {p.sectionLabel}
                  </span>
                  <p className="font-serif text-lg font-medium leading-tight text-charcoal">
                    {p.name}
                  </p>
                  <p className="mt-0.5 text-xs text-charcoal/65">{v.label}</p>
                </div>
                <p className="text-sm font-semibold text-charcoal">
                  {formatKSh(v.price * l.qty)}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center rounded-lg border border-sand bg-white">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="p-2 text-charcoal hover:bg-beige"
                    onClick={() => setQty(l.slug, l.variant, l.qty - 1)}
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-7 text-center text-xs font-medium">
                    {l.qty}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="p-2 text-charcoal hover:bg-beige"
                    onClick={() => setQty(l.slug, l.variant, l.qty + 1)}
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <button
                  type="button"
                  className="text-xs font-medium text-charcoal/60 underline underline-offset-4 hover:text-terracotta"
                  onClick={() => setQty(l.slug, l.variant, 0)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function CartDrawer() {
  const { cartOpen, setCartOpen, total, count } = useStore();
  const [phaseNotice, setPhaseNotice] = useState(false);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-charcoal/45 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className="fixed bottom-0 right-0 top-0 z-[61] flex w-full max-w-[440px] flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
          >
            <div className="flex items-center justify-between border-b border-sand px-6 py-5">
              <h2 className="font-serif text-2xl text-charcoal">
                Shopping Bag ({count})
              </h2>
              <button
                type="button"
                aria-label="Close bag"
                onClick={() => setCartOpen(false)}
                className="rounded-lg p-2 text-charcoal hover:bg-beige"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              <CartLines onNavigate={() => setCartOpen(false)} />

              {phaseNotice && count > 0 && (
                <div className="mb-4 rounded-xl border border-sand bg-beige p-4 text-xs text-charcoal/80">
                  <div className="flex items-start gap-2">
                    <Info size={15} className="mt-0.5 shrink-0 text-forest" />
                    <div>
                      <p className="font-semibold text-charcoal">
                        Phase 1 Storefront Preview
                      </p>
                      <p className="mt-1 leading-relaxed">
                        Online checkout, payment gateway processing, and
                        automated order management are scheduled for Phase 2/3.
                        For custom print or product inquiries, please use our{" "}
                        <Link
                          href="/contact"
                          onClick={() => setCartOpen(false)}
                          className="font-semibold text-forest underline"
                        >
                          Inquiries page
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {count > 0 && (
              <div className="border-t border-sand bg-white px-6 py-5">
                <div className="mb-1.5 flex items-baseline justify-between">
                  <span className="eyebrow text-[10px] text-charcoal/70">
                    Estimated Subtotal
                  </span>
                  <span className="text-lg font-semibold text-charcoal">
                    {formatKSh(total)}
                  </span>
                </div>
                <p className="mb-4 text-xs text-charcoal/60">
                  Delivery calculation and payment processing pending Phase 2/3.
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    className="btn btn-dark w-full"
                    onClick={() => setPhaseNotice(true)}
                  >
                    Proceed to Checkout (Phase 2/3)
                  </button>
                  <Link
                    href="/cart"
                    onClick={() => setCartOpen(false)}
                    className="btn btn-line-dark w-full"
                  >
                    View Full Bag
                  </Link>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
