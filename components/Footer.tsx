import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import { collections } from "@/lib/products";

const col = "space-y-3 text-[14px] text-cream/75 [&_a]:transition-colors [&_a:hover]:text-cream";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="wrap py-20 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display h-lg">Do good,<br />empower people.</p>
            <p className="mt-8 max-w-[42ch] text-[14px] leading-[1.9] text-cream/70">Responsible hair, body and skincare, handmade by artisans in Kenya from rich African ingredients.</p>
            <div className="mt-10">
              <p className="eyebrow mb-4 text-sage">Join to get 10% off your first order</p>
              <Newsletter />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-7">
            <div>
              <p className="eyebrow mb-6 text-sage">Shop</p>
              <ul className={col}>
                <li><Link href="/shop">All products</Link></li>
                {collections.map((c) => <li key={c.slug}><Link href={`/collections/${c.slug}`}>{c.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-6 text-sage">Customer care</p>
              <ul className={col}>
                <li><Link href="/contact">Reach us</Link></li>
                <li><Link href="/contact">Shipping &amp; returns</Link></li>
                <li><Link href="/contact">Retail outlets</Link></li>
                <li><Link href="/cart">Your bag</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-6 text-sage">Our story</p>
              <ul className={col}>
                <li><Link href="/about">Our story</Link></li>
                <li><Link href="/about">Press</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <div className="mt-8 flex gap-5"><Instagram size={19} strokeWidth={1.2} /><Facebook size={19} strokeWidth={1.2} /><Twitter size={19} strokeWidth={1.2} /></div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-cream/15 pt-10 md:flex-row md:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] text-cream/60">
            <span>© 2026 Organic Savanna</span><a href="#">Privacy Policy</a><a href="#">Refund Policy</a><a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
