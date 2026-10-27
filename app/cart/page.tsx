"use client";
import Link from "next/link";
import { CartLines } from "@/components/CartDrawer";
import { useStore } from "@/lib/store";
import { formatKSh } from "@/lib/products";

export default function CartPage() {
  const { total, count } = useStore();
  return (
    <section className="wrap section">
      <h1 className="display h-xl mb-14 text-center">Your bag</h1>
      <div className="mx-auto max-w-3xl">
        <CartLines />
        {count > 0 ? (
          <div className="mt-10 border-t border-sand pt-8">
            <div className="flex justify-between text-lg"><span className="eyebrow">Subtotal</span><span>{formatKSh(total)}</span></div>
            <p className="mt-2 text-[12px] text-charcoal/60">Shipping and taxes calculated at checkout.</p>
            <button className="btn btn-dark mt-8 w-full" onClick={() => alert("Demo store — checkout is not connected.")}>Checkout</button>
          </div>
        ) : <div className="text-center"><Link href="/shop" className="btn btn-line-dark">Continue shopping</Link></div>}
      </div>
    </section>
  );
}
