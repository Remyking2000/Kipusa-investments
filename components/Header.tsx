"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { collections } from "@/lib/products";
import { useStore } from "@/lib/store";

const navLinks = [
  { href: "/collections/kipusa-beauty", label: "Kipusa Beauty" },
  { href: "/collections/kipusa-prints", label: "Kipusa Prints" },
  { href: "/collections/kipusa-home", label: "Kipusa Home" },
  { href: "/shop", label: "All Catalogue" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Inquiries" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand/80 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-b border-sand/50 bg-cream"
      }`}
    >
      <div
        className={`wrap flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-[68px]" : "h-[76px] md:h-[88px]"
        }`}
      >
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="-ml-2 rounded-lg p-2.5 text-charcoal transition-colors hover:bg-beige lg:hidden"
            aria-label="Open navigation menu"
            onClick={() => setMobile(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
          <Logo />
        </div>

        {/* Center: Desktop Primary Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`eyebrow relative whitespace-nowrap py-2 text-[11px] transition-colors ${
                  active
                    ? "text-forest font-semibold after:scale-x-100"
                    : "text-charcoal/80 hover:text-forest after:scale-x-0 hover:after:scale-x-100"
                } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:bg-forest after:transition-transform after:duration-300`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search, Wishlist, Cart */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            aria-label="Search catalogue"
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-charcoal transition-colors hover:bg-beige"
          >
            <Search size={19} strokeWidth={1.4} />
            <span className="hidden text-xs font-medium text-charcoal/80 xl:inline">
              Search
            </span>
          </button>

          <Link
            href="/wishlist"
            aria-label={`Saved wishlist (${wishlist.length} items)`}
            className="relative rounded-lg p-2.5 text-charcoal transition-colors hover:bg-beige"
          >
            <Heart
              size={19}
              strokeWidth={1.4}
              className={
                wishlist.length > 0 ? "fill-terracotta text-terracotta" : ""
              }
            />
            {wishlist.length > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-terracotta px-1 text-[9px] font-medium text-cream">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            aria-label={`Open shopping bag (${count} items)`}
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 rounded-lg bg-forest px-3.5 py-2 text-cream transition-colors hover:bg-forest/90"
          >
            <ShoppingBag size={17} strokeWidth={1.5} />
            <span className="hidden text-[11px] font-medium uppercase tracking-wider sm:inline">
              Bag
            </span>
            <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-cream px-1 text-[10px] font-semibold text-forest">
              {count}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-charcoal/45 backdrop-blur-xs lg:hidden"
              onClick={() => setMobile(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-50 flex w-[86%] max-w-sm flex-col justify-between bg-cream shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div>
                <div className="flex h-[76px] items-center justify-between border-b border-sand px-5">
                  <Logo />
                  <button
                    aria-label="Close navigation menu"
                    onClick={() => setMobile(false)}
                    className="rounded-lg p-2 text-charcoal hover:bg-beige"
                  >
                    <X size={22} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Three Business Sections Highlight */}
                <div className="border-b border-sand px-5 py-5">
                  <p className="eyebrow mb-3 text-[10px] text-olive">
                    Business Sections
                  </p>
                  <div className="space-y-2">
                    {collections.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/collections/${c.slug}`}
                        onClick={() => setMobile(false)}
                        className="flex items-center justify-between rounded-xl border border-sand bg-white px-4 py-3 transition-colors hover:border-forest"
                      >
                        <div>
                          <p className="font-serif text-lg font-medium text-charcoal">
                            {c.name}
                          </p>
                          <p className="text-xs text-charcoal/65">{c.tagline}</p>
                        </div>
                        <ArrowRight size={16} className="text-forest" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Additional Navigation */}
                <nav className="px-5 py-4">
                  <ul className="divide-y divide-sand/60">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/shop", label: "Shop All Catalogue" },
                      { href: "/wishlist", label: `Wishlist (${wishlist.length})` },
                      { href: "/cart", label: `Shopping Bag (${count})` },
                      { href: "/about", label: "About Kipusa Limited" },
                      { href: "/contact", label: "Inquiries & Custom Orders" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobile(false)}
                          className="flex items-center justify-between py-3.5 text-sm font-medium text-charcoal hover:text-forest"
                        >
                          <span>{item.label}</span>
                          <span className="text-charcoal/40">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="border-t border-sand bg-beige/60 px-5 py-4 text-xs text-charcoal/70">
                Kipusa Limited — Phase 1 Storefront Preview
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
