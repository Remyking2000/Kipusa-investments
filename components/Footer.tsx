import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import { collections } from "@/lib/products";

const col =
  "space-y-2.5 text-sm text-cream/75 [&_a]:transition-colors [&_a:hover]:text-cream";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="items-start" />
            <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-cream/75">
              Kipusa Limited brings together{" "}
              <strong className="font-medium text-cream">Kipusa Beauty</strong>,{" "}
              <strong className="font-medium text-cream">Kipusa Prints</strong>,
              and <strong className="font-medium text-cream">Kipusa Home</strong>{" "}
              in a unified storefront experience.
            </p>
            <div className="mt-8">
              <p className="eyebrow mb-3 text-[10px] text-sage">
                Catalogue &amp; Product Updates
              </p>
              <Newsletter />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow mb-4 text-[10px] text-sage">
                Business Sections
              </p>
              <ul className={col}>
                {collections.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/collections/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/shop">All Catalogue</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 text-[10px] text-sage">Shopping</p>
              <ul className={col}>
                <li>
                  <Link href="/shop">Browse Products</Link>
                </li>
                <li>
                  <Link href="/wishlist">Saved Wishlist</Link>
                </li>
                <li>
                  <Link href="/cart">Shopping Bag</Link>
                </li>
                <li>
                  <Link href="/contact">Print Quote Inquiry</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 text-[10px] text-sage">Company</p>
              <ul className={col}>
                <li>
                  <Link href="/about">About Kipusa Limited</Link>
                </li>
                <li>
                  <Link href="/contact">Contact &amp; Inquiries</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kipusa Limited. All rights reserved.</p>
          <p>
            Phase 1 Storefront Design — Sample catalogue entries and pricing are
            placeholders pending official inventory and Phase 2/3 backend
            integration.
          </p>
        </div>
      </div>
    </footer>
  );
}
