"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Logo from "./Logo";
import { collections } from "@/lib/products";
import { useStore } from "@/lib/store";

const navLinks = [
  { href: "/collections/kipusa-beauty", label: "Kipusa Beauty" },
  { href: "/collections/kipusa-prints", label: "Kipusa Prints" },
  { href: "/collections/kipusa-home", label: "Kipusa Home" },
  { href: "/shop", label: "Shop All" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "Our Story" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 36);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-500 ${
        scrolled ? "border-b border-sand/70 shadow-xs" : "border-b border-sand/40"
      }`}
    >
      <div className="wrap">
        {/* Top Row: Left Mobile Menu / Spacer, Centered Logo, Right Utility Icons */}
        <div
          className={`grid grid-cols-3 items-center transition-all duration-500 ${
            scrolled ? "h-[64px]" : "h-[74px] md:h-[86px]"
          }`}
        >
          <div className="flex items-center">
            <button
              className="-ml-2 p-2 text-charcoal transition-opacity hover:opacity-60 md:hidden"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
            >
              <Menu size={22} strokeWidth={1.3} />
            </button>
          </div>

          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="flex items-center justify-end gap-4 sm:gap-6">
            <Link
              href="/contact"
              aria-label="Inquiries & Account"
              className="hidden text-charcoal transition-opacity hover:opacity-60 sm:block"
            >
              <User size={20} strokeWidth={1.3} />
            </Link>

            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="text-charcoal transition-opacity hover:opacity-60"
            >
              <Search size={20} strokeWidth={1.3} />
            </button>

            <Link
              href="/wishlist"
              aria-label={`Wishlist (${wishlist.length})`}
              className="relative text-charcoal transition-opacity hover:opacity-60"
            >
              <Heart
                size={20}
                strokeWidth={1.3}
                className={
                  wishlist.length > 0 ? "fill-terracotta text-terracotta" : ""
                }
              />
              {wishlist.length > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#8A856D] px-1 text-[9px] text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              aria-label={`Shopping bag (${count})`}
              onClick={() => setCartOpen(true)}
              className="relative text-charcoal transition-opacity hover:opacity-60"
            >
              <ShoppingBag size={20} strokeWidth={1.3} />
              {count > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-charcoal px-1 text-[9px] text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Row: Centered Horizontal Navigation (Organic Savanna layout) */}
        <nav
          aria-label="Main navigation"
          className={`hidden items-center justify-center gap-8 lg:gap-11 md:flex transition-all duration-500 ${
            scrolled ? "pb-3.5 pt-1" : "pb-5 pt-1"
          }`}
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active
                    ? "text-charcoal font-medium after:scale-x-100"
                    : "text-charcoal/80 hover:text-charcoal after:scale-x-0 hover:after:scale-x-100"
                } after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-charcoal after:transition-transform after:duration-500`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          >
            <div className="flex h-[74px] items-center justify-between border-b border-sand/50 px-5">
              <button
                aria-label="Close menu"
                onClick={() => setMobile(false)}
                className="p-2 -ml-2"
              >
                <X size={22} strokeWidth={1.3} />
              </button>
              <Logo />
              <span className="w-[22px]" />
            </div>

            <nav className="flex-1 overflow-y-auto px-8 pt-8">
              {[
                { href: "/", label: "Home" },
                ...navLinks,
                { href: "/wishlist", label: `Wishlist (${wishlist.length})` },
                { href: "/cart", label: `Shopping Bag (${count})` },
              ].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.45 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMobile(false)}
                    className="block border-b border-sand/40 py-4 font-serif text-2xl font-light text-charcoal"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 space-y-2 pb-8">
                <p className="eyebrow text-[10px] text-olive">
                  Kipusa Divisions
                </p>
                {collections.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/collections/${c.slug}`}
                    onClick={() => setMobile(false)}
                    className="block py-1 text-xs uppercase tracking-[0.2em] text-charcoal/70"
                  >
                    {c.name} — {c.shortName}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
