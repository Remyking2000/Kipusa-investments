"use client";
import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return done ? (
    <p className="rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-sm text-cream">
      Thank you for subscribing to Kipusa Limited updates. (Phase 1 frontend
      preview — mailing list integration pending Phase 2.)
    </p>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex max-w-md overflow-hidden rounded-lg border border-cream/30 bg-white/5 focus-within:border-cream"
    >
      <input
        required
        type="email"
        placeholder="Enter your email address"
        aria-label="Email address"
        className="w-full bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/55 focus:outline-none"
      />
      <button
        type="submit"
        className="eyebrow shrink-0 bg-cream px-5 py-3 text-[10px] font-semibold text-forest transition-colors hover:bg-beige"
      >
        Join
      </button>
    </form>
  );
}
