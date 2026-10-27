"use client";
import { useState } from "react";
import { Heart, Minus, Plus, Star } from "lucide-react";
import Scene, { type SceneKind } from "./Scene";
import { formatKSh, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function ProductDetail({ p }: { p: Product }) {
  const { add, wishlist, toggleWish } = useStore();
  const [v, setV] = useState(0);
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  const gallery: { kind: SceneKind; tone: number }[] = [{ kind: p.scene, tone: p.tone }, { kind: "botanical", tone: p.tone }, { kind: "savanna", tone: p.tone }];
  const [open, setOpen] = useState<string | null>("Description");
  return (
    <section className="wrap grid gap-10 pb-10 pt-8 md:grid-cols-12 md:gap-14 md:pt-14">
      <div className="md:col-span-7">
        <div className="grid gap-3 md:grid-cols-[80px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {gallery.map((g, i) => (
              <button key={i} onClick={() => setImg(i)} className={`aspect-square w-20 overflow-hidden border transition-opacity ${img === i ? "border-charcoal" : "border-transparent opacity-60 hover:opacity-100"}`}><Scene kind={g.kind} tone={g.tone} seed={i + 2} /></button>
            ))}
          </div>
          <div key={img} className="order-1 aspect-[4/5] animate-[fade_0.9s_ease] overflow-hidden md:order-2"><Scene kind={gallery[img].kind} tone={gallery[img].tone} seed={img + 2} /></div>
        </div>
      </div>
      <div className="md:col-span-5 md:pl-6">
        <p className="eyebrow text-olive">{p.category.replace(/-/g, " ")}</p>
        <h1 className="display h-md mt-4">{p.name}</h1>
        <p className="mt-2 font-serif text-2xl italic text-bark/80">{p.sub}</p>
        <p className="mt-5 flex items-center gap-2 text-[12px] text-charcoal/65"><Star size={13} strokeWidth={1.2} className="fill-terracotta text-terracotta" />{p.rating.toFixed(1)} · {p.reviews} reviews</p>
        <p className="mt-6 text-xl">{formatKSh(p.variants[v].price)}</p>
        <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.9] text-charcoal/75">{p.description}</p>

        {p.variants.length > 1 && (
          <div className="mt-8">
            <p className="eyebrow mb-3">Size</p>
            <div className="flex flex-wrap gap-3">
              {p.variants.map((x, i) => (
                <button key={x.label} onClick={() => setV(i)} className={`border px-5 py-3 text-[12px] tracking-wide transition-colors duration-300 ${v === i ? "border-charcoal bg-charcoal text-cream" : "border-charcoal/25 hover:border-charcoal"}`}>{x.label}</button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-3">
          <div className="flex items-center border border-charcoal/25">
            <button aria-label="Decrease" className="p-4 hover:bg-beige" onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={13} /></button>
            <span className="w-8 text-center text-[14px]">{qty}</span>
            <button aria-label="Increase" className="p-4 hover:bg-beige" onClick={() => setQty(qty + 1)}><Plus size={13} /></button>
          </div>
          <button className="btn btn-dark flex-1" onClick={() => add(p.slug, v, qty)}>Add to bag</button>
          <button aria-label="Wishlist" onClick={() => toggleWish(p.slug)} className="border border-charcoal/25 px-4 transition-colors hover:border-charcoal"><Heart size={17} strokeWidth={1.2} className={wishlist.includes(p.slug) ? "fill-terracotta text-terracotta" : ""} /></button>
        </div>

        <div className="mt-12 border-t border-sand">
          {[["Description", p.description], ["Ingredients", p.ingredients], ["Shipping & returns", "Free delivery in Nairobi on orders over KSh 5,000. Nationwide delivery in 2–4 days. Returns accepted within 14 days if unopened."]].map(([t, b]) => (
            <div key={t} className="border-b border-sand">
              <button onClick={() => setOpen(open === t ? null : t)} className="eyebrow flex w-full items-center justify-between py-5 text-left"><span>{t}</span><span>{open === t ? "−" : "+"}</span></button>
              <div className={`grid transition-all duration-500 ease-soft ${open === t ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}><p className="overflow-hidden text-[14px] leading-[1.85] text-charcoal/70">{b}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
