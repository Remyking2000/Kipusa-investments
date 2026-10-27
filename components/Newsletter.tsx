"use client";
import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return done ? (
    <p className="font-serif text-2xl italic">Thank you — your 10% code is on its way.</p>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex max-w-md border-b border-cream/50 transition-colors focus-within:border-cream">
      <input required type="email" placeholder="Email address" aria-label="Email address" className="w-full bg-transparent py-4 text-[14px] text-cream placeholder:text-cream/50 focus:outline-none" />
      <button className="eyebrow shrink-0 pl-4 text-[11px] transition-opacity hover:opacity-60">Subscribe</button>
    </form>
  );
}
