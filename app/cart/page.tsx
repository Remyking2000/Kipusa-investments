"use client";
import Link from "next/link";
import { useState } from "react";
import { Info } from "lucide-react";
import { CartLines } from "@/components/CartDrawer";
import { useStore } from "@/lib/store";
import { formatKSh } from "@/lib/products";

export default function CartPage() {
  const { total, count } = useStore();
  const [showNotice, setShowNotice] = useState(false);

  return (
    <section className="wrap section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-2 text-center text-olive">Kipusa Limited</p>
        <h1 className="display h-xl mb-10 text-center text-charcoal">
          Your Shopping Bag
        </h1>

        <div className="rounded-2xl border border-sand bg-white p-6 sm:p-8">
          <CartLines />

          {count > 0 ? (
            <div className="mt-8 border-t border-sand pt-6">
              <div className="flex items-baseline justify-between text-lg">
                <span className="eyebrow text-xs text-charcoal/75">
                  Estimated Subtotal
                </span>
                <span className="text-xl font-semibold text-charcoal">
                  {formatKSh(total)}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-charcoal/60">
                Sample catalogue pricing. Payment gateway, order processing, and
                shipping integration are scheduled for Phase 2/3.
              </p>

              {showNotice && (
                <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-sand bg-beige p-4 text-xs text-charcoal/80">
                  <Info size={16} className="mt-0.5 shrink-0 text-forest" />
                  <div>
                    <p className="font-semibold text-charcoal">
                      Checkout Pending Phase 2/3 Integration
                    </p>
                    <p className="mt-1 leading-relaxed">
                      This Phase 1 storefront adapts the frontend shopping
                      interface for Kipusa Limited. Live payment processing,
                      backend order storage, and courier integration will be
                      connected in Phase 2/3.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="btn btn-dark flex-1"
                  onClick={() => setShowNotice(true)}
                >
                  Proceed to Checkout (Phase 2/3)
                </button>
                <Link href="/shop" className="btn btn-line-dark">
                  Continue Browsing
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-4 text-center">
              <Link href="/shop" className="btn btn-dark">
                Browse Catalogue
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
