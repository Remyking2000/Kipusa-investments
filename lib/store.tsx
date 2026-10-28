"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products } from "./products";

export type CartLine = { slug: string; variant: number; qty: number };

type Store = {
  lines: CartLine[];
  count: number;
  total: number;
  cartOpen: boolean;
  searchOpen: boolean;
  wishlist: string[];
  setCartOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
  add: (slug: string, variant?: number, qty?: number) => void;
  setQty: (slug: string, variant: number, qty: number) => void;
  toggleWish: (slug: string) => void;
  clearWishlist: () => void;
};

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const validSlugs = new Set(products.map((p) => p.slug));
      const rawCart: CartLine[] = JSON.parse(
        localStorage.getItem("kipusa-cart") || "[]"
      );
      const rawWish: string[] = JSON.parse(
        localStorage.getItem("kipusa-wish") || "[]"
      );
      if (Array.isArray(rawCart)) {
        setLines(rawCart.filter((l) => validSlugs.has(l.slug) && l.qty > 0));
      }
      if (Array.isArray(rawWish)) {
        setWishlist(rawWish.filter((s) => validSlugs.has(s)));
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem("kipusa-cart", JSON.stringify(lines));
      localStorage.setItem("kipusa-wish", JSON.stringify(wishlist));
    } catch {}
  }, [lines, wishlist, ready]);

  useEffect(() => {
    document.body.style.overflow = cartOpen || searchOpen ? "hidden" : "";
  }, [cartOpen, searchOpen]);

  const add = useCallback((slug: string, variant = 0, qty = 1) => {
    setLines((ls) => {
      const i = ls.findIndex((l) => l.slug === slug && l.variant === variant);
      if (i >= 0)
        return ls.map((l, j) => (j === i ? { ...l, qty: l.qty + qty } : l));
      return [...ls, { slug, variant, qty }];
    });
    setCartOpen(true);
  }, []);

  const setQty = useCallback((slug: string, variant: number, qty: number) => {
    setLines((ls) =>
      ls.flatMap((l) =>
        l.slug === slug && l.variant === variant
          ? qty > 0
            ? [{ ...l, qty }]
            : []
          : [l]
      )
    );
  }, []);

  const toggleWish = useCallback((slug: string) => {
    setWishlist((w) =>
      w.includes(slug) ? w.filter((s) => s !== slug) : [...w, slug]
    );
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  const value = useMemo<Store>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const total = lines.reduce((n, l) => {
      const p = products.find((x) => x.slug === l.slug);
      return n + (p ? p.variants[l.variant]?.price ?? 0 : 0) * l.qty;
    }, 0);
    return {
      lines,
      count,
      total,
      cartOpen,
      searchOpen,
      wishlist,
      setCartOpen,
      setSearchOpen,
      add,
      setQty,
      toggleWish,
      clearWishlist,
    };
  }, [
    lines,
    cartOpen,
    searchOpen,
    wishlist,
    add,
    setQty,
    toggleWish,
    clearWishlist,
  ]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("StoreProvider missing");
  return c;
}
