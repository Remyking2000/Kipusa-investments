"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scene, { type SceneKind } from "./Scene";

const slides: {
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  scene: SceneKind;
  tone: number;
  seed: number;
  image: string;
}[] = [
  {
    eyebrow: "KIPUSA BEAUTY · BOTANICAL OILS, SCRUBS & SKINCARE",
    title: "NOURISHING RITUALS FOR SKIN & BODY",
    cta: "SHOP NOW",
    href: "/collections/kipusa-beauty",
    scene: "soap",
    tone: 0,
    seed: 2,
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "KIPUSA PRINTS · PRINTING, GRAPHIC DESIGN, E-CITIZEN & DHL",
    title: "COMMITTED TO DELIVERING SWIFT SERVICES",
    cta: "EXPLORE SERVICES",
    href: "/collections/kipusa-prints",
    scene: "artisan",
    tone: 2,
    seed: 5,
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "KIPUSA HOME · HAND-POURED CANDLES, SOAPS & LIVING",
    title: "WARMTH & CALM FOR EVERYDAY SPACES",
    cta: "SHOP NOW",
    href: "/collections/kipusa-home",
    scene: "candle",
    tone: 2,
    seed: 4,
    image:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "KIPUSA LIMITED · BEAUTY · PRINTS · HOME",
    title: "THOUGHTFULLY CRAFTED IN KENYA",
    cta: "SHOP ALL",
    href: "/shop",
    scene: "botanical",
    tone: 1,
    seed: 8,
    image:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative h-[calc(100svh-120px)] min-h-[520px] w-full overflow-hidden md:h-[calc(100svh-152px)]">
      {/* Background Image Crossfade + Subtle Zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <Scene
              kind={s.scene}
              tone={s.tone}
              seed={s.seed}
              image={s.image}
              alt={s.title}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Bottom-Left Overlay Copy & Olive-Taupe Button (Matching Screenshot) */}
      <div className="wrap relative flex h-full flex-col justify-end pb-16 md:pb-24 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className="flex max-w-[920px] flex-col items-start text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-normal uppercase tracking-[0.22em] text-white/95 md:mb-4 md:text-[12px]">
              {s.eyebrow}
            </p>
            <h1 className="font-sans text-2xl font-normal uppercase tracking-[0.18em] text-white sm:text-4xl md:text-[42px] md:leading-[1.2]">
              {s.title}
            </h1>
            <div className="mt-7 md:mt-9">
              <Link
                href={s.href}
                className="inline-flex items-center justify-center bg-[#8A856D] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-[#726E58]"
              >
                {s.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom-Right Circular Pagination Dots (Matching Screenshot) */}
      <div className="absolute bottom-7 right-6 flex items-center gap-3 md:bottom-10 md:right-12">
        {slides.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Go to slide ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-2.5 w-2.5 rounded-full border border-white transition-all duration-300 ${
              n === i
                ? "bg-white scale-110"
                : "bg-transparent opacity-75 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
