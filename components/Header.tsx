"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, User, X, Instagram, Facebook, Twitter } from "lucide-react";
import Logo from "./Logo";
import { collections } from "@/lib/products";
import { useStore } from "@/lib/store";

const links = [
  { href: "/collections/best-sellers", label: "Best Sellers" },
  { href: "/shop", label: "Shop All", menu: true },
  { href: "/collections/gift-kits", label: "Gifting" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "Our Story" },
];

export default function Header() {
  const { count, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const icons = (
    <div className="flex items-center gap-5">
      <button aria-label="Search" onClick={() => setSearchOpen(true)} className="transition-opacity hover:opacity-60"><Search size={19} strokeWidth={1.2} /></button>
      <Link href="/contact" aria-label="Account" className="hidden transition-opacity hover:opacity-60 md:block"><User size={19} strokeWidth={1.2} /></Link>
      <button aria-label="Open bag" onClick={() => setCartOpen(true)} className="relative transition-opacity hover:opacity-60">
        <ShoppingBag size={19} strokeWidth={1.2} />
        {count > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-forest text-[9px] text-cream">{count}</span>}
      </button>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-700 ease-soft ${scrolled ? "bg-cream/95 backdrop-blur-[2px] border-b border-sand/70" : "bg-cream border-b border-transparent"}`}
      onMouseLeave={() => setMega(false)}
    >
      <div className={`wrap grid grid-cols-3 items-center transition-all duration-700 ease-soft ${scrolled ? "h-[64px]" : "h-[84px] md:h-[104px]"}`}>
        {/* left */}
        <nav className="hidden items-center gap-5 lg:gap-9 md:flex">
          {links.slice(0, 3).map((l) => (
            <Link key={l.label} href={l.href} onMouseEnter={() => setMega(!!l.menu)} className="eyebrow relative whitespace-nowrap py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100">
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" aria-label="Open menu" onClick={() => setMobile(true)}><Menu size={22} strokeWidth={1.2} /></button>

        <div className="flex justify-center"><Logo /></div>

        <div className="flex items-center justify-end gap-5 lg:gap-9">
          <nav className="hidden items-center gap-5 lg:gap-9 md:flex">
            {links.slice(3).map((l) => (
              <Link key={l.label} href={l.href} onMouseEnter={() => setMega(false)} className="eyebrow relative whitespace-nowrap py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100">
                {l.label}
              </Link>
            ))}
          </nav>
          {icons}
        </div>
      </div>

      {/* shop dropdown */}
      <AnimatePresence>
        {mega && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-full hidden border-t border-sand/70 bg-cream md:block"
          >
            <div className="wrap grid grid-cols-4 gap-10 py-12">
              <div>
                <p className="eyebrow mb-5 text-olive">Shop</p>
                <ul className="space-y-3 font-serif text-2xl">
                  <li><Link onClick={() => setMega(false)} href="/shop" className="hover:text-olive">All Products</Link></li>
                  <li><Link onClick={() => setMega(false)} href="/collections/best-sellers" className="hover:text-olive">Best Sellers</Link></li>
                </ul>
              </div>
              <div className="col-span-2">
                <p className="eyebrow mb-5 text-olive">Collections</p>
                <ul className="grid grid-cols-2 gap-x-10 gap-y-3 font-serif text-2xl">
                  {collections.map((c) => (
                    <li key={c.slug}><Link onClick={() => setMega(false)} href={`/collections/${c.slug}`} className="hover:text-olive">{c.name}</Link></li>
                  ))}
                </ul>
              </div>
              <p className="font-serif text-xl italic text-bark/80">Made in small batches by artisans in Kenya. 30% of profits go to social good projects.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col bg-cream"
          >
            <div className="flex h-[84px] items-center justify-between px-5">
              <button aria-label="Close menu" onClick={() => setMobile(false)}><X size={22} strokeWidth={1.2} /></button>
              <Logo />
              <span className="w-[22px]" />
            </div>
            <nav className="flex-1 overflow-y-auto px-8 pt-8">
              {[{ href: "/", label: "Home" }, ...links, ...collections.map((c) => ({ href: `/collections/${c.slug}`, label: c.name, sub: true }))].map((l: { href: string; label: string; sub?: boolean }, i) => (
                <motion.div key={l.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.045, duration: 0.7 }}>
                  <Link href={l.href} onClick={() => setMobile(false)} className={l.sub ? "block py-1.5 font-serif text-xl text-bark/80" : "block py-2.5 font-serif text-4xl font-light"}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-6 px-8 py-8"><Instagram size={20} strokeWidth={1.2} /><Facebook size={20} strokeWidth={1.2} /><Twitter size={20} strokeWidth={1.2} /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
