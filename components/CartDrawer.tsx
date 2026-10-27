"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import Scene from "./Scene";
import { useStore } from "@/lib/store";
import { formatKSh, getProduct } from "@/lib/products";

export function CartLines() {
  const { lines, setQty } = useStore();
  if (!lines.length) return <p className="py-16 text-center font-serif text-2xl italic text-bark/70">Your bag is empty.</p>;
  return (
    <ul className="divide-y divide-sand/80">
      {lines.map((l) => {
        const p = getProduct(l.slug);
        if (!p) return null;
        const v = p.variants[l.variant];
        return (
          <li key={l.slug + l.variant} className="flex gap-5 py-6">
            <Link href={`/products/${p.slug}`} className="h-28 w-24 shrink-0 overflow-hidden"><Scene kind={p.scene} tone={p.tone} seed={p.slug.length} /></Link>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between gap-3">
                <div><p className="font-serif text-xl leading-tight">{p.name}</p><p className="text-[12px] text-charcoal/60">{p.sub} · {v.label}</p></div>
                <p className="text-[13px]">{formatKSh(v.price * l.qty)}</p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center border border-charcoal/25">
                  <button aria-label="Decrease" className="p-2.5 hover:bg-beige" onClick={() => setQty(l.slug, l.variant, l.qty - 1)}><Minus size={12} /></button>
                  <span className="w-8 text-center text-[13px]">{l.qty}</span>
                  <button aria-label="Increase" className="p-2.5 hover:bg-beige" onClick={() => setQty(l.slug, l.variant, l.qty + 1)}><Plus size={12} /></button>
                </div>
                <button className="link-u text-[10px] text-charcoal/60" onClick={() => setQty(l.slug, l.variant, 0)}>Remove</button>
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
  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div className="fixed inset-0 z-[60] bg-charcoal/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={() => setCartOpen(false)} />
          <motion.aside
            className="fixed bottom-0 right-0 top-0 z-[61] flex w-full max-w-[460px] flex-col bg-cream"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            role="dialog" aria-label="Shopping bag"
          >
            <div className="flex items-center justify-between border-b border-sand/80 px-7 py-6">
              <h2 className="eyebrow">Your bag ({count})</h2>
              <button aria-label="Close" onClick={() => setCartOpen(false)}><X size={20} strokeWidth={1.2} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-7"><CartLines /></div>
            {count > 0 && (
              <div className="border-t border-sand/80 px-7 py-6">
                <div className="mb-2 flex justify-between"><span className="eyebrow">Subtotal</span><span>{formatKSh(total)}</span></div>
                <p className="mb-5 text-[12px] text-charcoal/60">Shipping calculated at checkout.</p>
                <button className="btn btn-dark w-full" onClick={() => { setCartOpen(false); window.location.href = "/cart"; }}>Checkout</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
