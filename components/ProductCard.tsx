"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import Scene from "./Scene";
import { formatKSh, fromPrice, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function ProductCard({
  p,
  className = "",
}: {
  p: Product;
  className?: string;
}) {
  const { add, wishlist, toggleWish } = useStore();
  const wished = wishlist.includes(p.slug);

  return (
    <article className={`group ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <Link
          href={`/products/${p.slug}`}
          aria-label={p.name}
          className="block h-full w-full"
        >
          {/* primary + secondary crossfade */}
          <div className="absolute inset-0 transition-all duration-[900ms] ease-soft group-hover:scale-[1.04] group-hover:opacity-0">
            <Scene
              kind={p.scene}
              tone={p.tone}
              seed={p.slug.length}
              image={p.image}
              alt={`${p.name} — ${p.sub}`}
            />
          </div>
          <div className="absolute inset-0 scale-[1.02] opacity-0 transition-all duration-[900ms] ease-soft group-hover:scale-100 group-hover:opacity-100">
            <Scene
              kind="botanical"
              tone={p.tone}
              seed={p.slug.length + 3}
              image={p.hoverImage || p.image}
              alt={`${p.name} alternate view`}
            />
            <div className="absolute inset-0 bg-cream/10" />
          </div>
        </Link>

        <span className="eyebrow absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[9px] text-charcoal backdrop-blur-[2px]">
          {p.sectionLabel}
        </span>

        <button
          type="button"
          aria-label="Save to wishlist"
          onClick={() => toggleWish(p.slug)}
          className="absolute right-3 top-3 p-2 opacity-75 transition-opacity hover:opacity-100"
        >
          <Heart
            size={18}
            strokeWidth={1.2}
            className={
              wished ? "fill-terracotta text-terracotta" : "text-charcoal"
            }
          />
        </button>

        <button
          type="button"
          onClick={() => add(p.slug, 0)}
          className="eyebrow absolute inset-x-0 bottom-0 translate-y-full bg-cream/95 py-4 text-center text-[10px] transition-transform duration-500 ease-soft hover:bg-[#8A856D] hover:text-white group-hover:translate-y-0"
        >
          Quick add
        </button>
      </div>

      <div className="mt-5 text-center">
        <Link href={`/products/${p.slug}`} className="block">
          <h3 className="font-serif text-xl font-normal leading-tight md:text-[22px]">
            {p.name}
          </h3>
          <p className="mt-1 text-[13px] text-charcoal/60">{p.sub}</p>
        </Link>
        <p className="mt-2 text-[13px] tracking-wide">
          {p.variants.length > 1 ? "From " : ""}
          {formatKSh(fromPrice(p))}
        </p>
      </div>
    </article>
  );
}
