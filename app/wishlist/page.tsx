"use client";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function WishlistPage() {
  const { wishlist, add, clearWishlist } = useStore();
  const savedItems = products.filter((p) => wishlist.includes(p.slug));

  const handleAddAll = () => {
    savedItems.forEach((p) => add(p.slug, 0, 1));
  };

  return (
    <section className="wrap section">
      <div className="mb-10 flex flex-col justify-between gap-4 border-b border-sand pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow mb-2 text-olive">Kipusa Limited</p>
          <h1 className="display h-xl text-charcoal">Saved Wishlist</h1>
          <p className="mt-2 text-sm text-charcoal/70">
            {savedItems.length > 0
              ? `You have ${savedItems.length} saved ${
                  savedItems.length === 1 ? "item" : "items"
                } across Kipusa Beauty, Kipusa Prints, and Kipusa Home.`
              : "Save products or print services as you browse to compare and revisit later."}
          </p>
        </div>

        {savedItems.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handleAddAll}
              className="btn btn-dark gap-2"
            >
              <ShoppingBag size={14} />
              <span>Add All to Bag</span>
            </button>
            <button
              type="button"
              onClick={clearWishlist}
              className="btn btn-line-dark gap-2"
            >
              <Trash2 size={14} />
              <span>Clear Saved</span>
            </button>
          </div>
        )}
      </div>

      {savedItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {savedItems.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-lg rounded-2xl border border-sand bg-white p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-beige text-terracotta">
            <Heart size={24} strokeWidth={1.4} />
          </div>
          <h2 className="font-serif text-2xl text-charcoal">
            Your wishlist is currently empty
          </h2>
          <p className="mt-2 text-sm text-charcoal/65">
            Tap the heart icon on any item in Kipusa Beauty, Kipusa Prints, or
            Kipusa Home to save it here.
          </p>
          <Link href="/shop" className="btn btn-dark mt-6">
            Explore Catalogue
          </Link>
        </div>
      )}
    </section>
  );
}
