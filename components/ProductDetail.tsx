"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  FileText,
  ChevronRight,
  Info,
} from "lucide-react";
import Scene, { type SceneKind } from "./Scene";
import { formatKSh, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function ProductDetail({ p }: { p: Product }) {
  const { add, wishlist, toggleWish } = useStore();
  const [v, setV] = useState(0);
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  const gallery: { kind: SceneKind; tone: number; image: string }[] = (
    p.gallery && p.gallery.length > 0
      ? p.gallery
      : [p.image, p.hoverImage].filter(Boolean)
  ).map((imageUrl, idx) => ({
    kind: idx === 0 ? p.scene : idx === 1 ? "botanical" : "savanna",
    tone: p.tone,
    image: imageUrl,
  }));
  const [open, setOpen] = useState<string | null>("Description");

  return (
    <section className="wrap pb-12 pt-6 md:pt-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-charcoal/65"
      >
        <Link href="/" className="hover:text-forest">
          Home
        </Link>
        <ChevronRight size={13} />
        <Link
          href={`/collections/${p.section}`}
          className="hover:text-forest font-medium text-charcoal/80"
        >
          {p.sectionLabel}
        </Link>
        <ChevronRight size={13} />
        <span className="text-charcoal">{p.name}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-12 lg:gap-12">
        {/* Left: Product Gallery */}
        <div className="md:col-span-7">
          <div className="grid gap-3 md:grid-cols-[84px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setImg(i)}
                  className={`aspect-square w-20 shrink-0 overflow-hidden rounded-xl border transition-all ${
                    img === i
                      ? "border-forest ring-1 ring-forest opacity-100"
                      : "border-sand opacity-65 hover:opacity-100"
                  }`}
                >
                  <Scene
                    kind={g.kind}
                    tone={g.tone}
                    seed={i + 2}
                    image={g.image}
                    alt={`${p.name} thumbnail ${i + 1}`}
                  />
                </button>
              ))}
            </div>
            <div
              key={img}
              className="order-1 aspect-[4/5] overflow-hidden rounded-2xl border border-sand bg-white md:order-2"
            >
              <Scene
                kind={gallery[img]?.kind || p.scene}
                tone={gallery[img]?.tone ?? p.tone}
                seed={img + 2}
                image={gallery[img]?.image || p.image}
                alt={`${p.name} — ${p.sub}`}
              />
            </div>
          </div>
        </div>

        {/* Right: Product Information & Actions */}
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-md bg-beige px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-forest">
            <span>{p.sectionLabel}</span>
            <span>·</span>
            <span>{p.category}</span>
          </div>

          <h1 className="display h-md mt-3 text-charcoal">{p.name}</h1>
          <p className="mt-1.5 font-serif text-xl italic text-bark/80">
            {p.sub}
          </p>

          <p className="mt-5 text-2xl font-semibold text-charcoal">
            {formatKSh(p.variants[v].price)}
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/80">
            {p.description}
          </p>

          {/* Placeholder Indicator Banner */}
          {p.isPlaceholder && (
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-sand bg-beige/60 p-3.5 text-xs text-charcoal/75">
              <Info size={15} className="mt-0.5 shrink-0 text-olive" />
              <span>
                <strong>Phase 1 Sample Entry:</strong> Product specifications
                and KSh pricing shown here are structured placeholders ready for
                Kipusa Limited’s official catalogue data.
              </span>
            </div>
          )}

          {/* Variants / Options */}
          {p.variants.length > 0 && (
            <div className="mt-6">
              <p className="eyebrow mb-2.5 text-[10px] text-charcoal/75">
                Select Option / Pack Size
              </p>
              <div className="flex flex-wrap gap-2.5">
                {p.variants.map((x, i) => (
                  <button
                    key={x.label}
                    type="button"
                    onClick={() => setV(i)}
                    className={`rounded-lg border px-4 py-2.5 text-xs font-medium transition-colors ${
                      v === i
                        ? "border-forest bg-forest text-cream"
                        : "border-sand bg-white text-charcoal hover:border-forest"
                    }`}
                  >
                    {x.label} — {formatKSh(x.price)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Bag + Wishlist */}
          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center rounded-lg border border-sand bg-white">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="p-3.5 text-charcoal hover:bg-beige"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                <Minus size={14} />
              </button>
              <span className="w-9 text-center text-sm font-medium">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="p-3.5 text-charcoal hover:bg-beige"
                onClick={() => setQty(qty + 1)}
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              type="button"
              className="btn btn-dark flex-1 gap-2"
              onClick={() => add(p.slug, v, qty)}
            >
              <ShoppingBag size={15} />
              <span>Add to Bag</span>
            </button>

            <button
              type="button"
              aria-label="Toggle wishlist"
              onClick={() => toggleWish(p.slug)}
              className="flex items-center justify-center rounded-lg border border-sand bg-white px-4 transition-colors hover:border-forest"
            >
              <Heart
                size={18}
                strokeWidth={1.4}
                className={
                  wishlist.includes(p.slug)
                    ? "fill-terracotta text-terracotta"
                    : "text-charcoal"
                }
              />
            </button>
          </div>

          {/* Custom Print Inquiry Button for Kipusa Prints */}
          {p.section === "kipusa-prints" && (
            <div className="mt-3">
              <Link
                href={`/contact?subject=${encodeURIComponent(
                  `Custom Print Inquiry: ${p.name}`
                )}`}
                className="btn btn-line-dark w-full gap-2"
              >
                <FileText size={15} />
                <span>Request Custom Print Specifications / Quote</span>
              </Link>
            </div>
          )}

          {/* Accordions */}
          <div className="mt-10 border-t border-sand">
            {[
              ["Description", p.description],
              ["Specifications & Details", p.details],
              [
                "Ordering & Delivery (Phase 1 Note)",
                "Online payment processing, live shipping rate calculation, and order management are scheduled for Phase 2/3 integration. You can test the cart and wishlist flow or submit an inquiry via our contact page.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="border-b border-sand">
                <button
                  type="button"
                  onClick={() => setOpen(open === t ? null : t)}
                  className="eyebrow flex w-full items-center justify-between py-4 text-left text-[11px] text-charcoal"
                >
                  <span>{t}</span>
                  <span className="text-base">{open === t ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === t ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-charcoal/75">
                    {b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
