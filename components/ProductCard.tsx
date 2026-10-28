"use client";
import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingBag, Check, FileText } from "lucide-react";
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
  const [justAdded, setJustAdded] = useState(false);
  const wished = wishlist.includes(p.slug);

  const handleQuickAdd = () => {
    add(p.slug, 0, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-sand/80 bg-white transition-all duration-300 hover:border-forest/40 hover:shadow-md ${className}`}
    >
      <div>
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Link
            href={`/products/${p.slug}`}
            aria-label={p.name}
            className="block h-full w-full"
          >
            <div className="absolute inset-0 transition-all duration-700 ease-soft group-hover:scale-[1.03] group-hover:opacity-0">
              <Scene
                kind={p.scene}
                tone={p.tone}
                seed={p.slug.length}
                image={p.image}
                alt={`${p.name} — ${p.sub}`}
              />
            </div>
            <div className="absolute inset-0 scale-[1.02] opacity-0 transition-all duration-700 ease-soft group-hover:scale-100 group-hover:opacity-100">
              <Scene
                kind="botanical"
                tone={p.tone}
                seed={p.slug.length + 3}
                image={p.hoverImage || p.image}
                alt={`${p.name} alternate view`}
              />
            </div>
          </Link>

          {/* Section / Division Badge */}
          <span className="eyebrow absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[9px] text-charcoal shadow-xs backdrop-blur-xs">
            {p.sectionLabel}
          </span>

          {/* Wishlist Toggle */}
          <button
            type="button"
            aria-label={
              wished
                ? `Remove ${p.name} from wishlist`
                : `Save ${p.name} to wishlist`
            }
            onClick={() => toggleWish(p.slug)}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-xs backdrop-blur-xs transition-colors hover:bg-white"
          >
            <Heart
              size={16}
              strokeWidth={1.5}
              className={
                wished ? "fill-terracotta text-terracotta" : "text-charcoal"
              }
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-olive">
            {p.category}
          </p>
          <Link href={`/products/${p.slug}`} className="mt-1 block">
            <h3 className="font-serif text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-forest sm:text-xl">
              {p.name}
            </h3>
            <p className="mt-1 line-clamp-1 text-xs text-charcoal/65">{p.sub}</p>
          </Link>
        </div>
      </div>

      {/* Price & Clear Action Footer */}
      <div className="border-t border-sand/60 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-charcoal">
            {p.variants.length > 1 ? "From " : ""}
            {formatKSh(fromPrice(p))}
          </span>
          <span className="text-[11px] text-charcoal/55">
            {p.variants[0]?.label}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-[11px] font-medium uppercase tracking-wider transition-colors ${
              justAdded
                ? "bg-olive text-cream"
                : "bg-forest text-cream hover:bg-forest/90"
            }`}
          >
            {justAdded ? (
              <>
                <Check size={13} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={13} />
                <span>
                  {p.actionType === "inquiry" ? "Add Pack" : "Add to Bag"}
                </span>
              </>
            )}
          </button>

          {p.actionType === "inquiry" && (
            <Link
              href={`/contact?subject=${encodeURIComponent(p.name)}`}
              className="flex items-center justify-center gap-1 rounded-lg border border-sand bg-cream px-3 py-2.5 text-[11px] font-medium uppercase tracking-wider text-charcoal transition-colors hover:border-forest hover:text-forest"
              title="Request custom print quote"
            >
              <FileText size={13} />
              <span>Quote</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
