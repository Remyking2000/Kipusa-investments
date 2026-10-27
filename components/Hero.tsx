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
  align: "left" | "center" | "right";
}[] = [
  {
    eyebrow: "30% of profits are reinvested into social good projects",
    title: "Make an impact with every purchase",
    cta: "Shop now",
    href: "/shop",
    scene: "dusk",
    tone: 2,
    seed: 3,
    image:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1800&q=85",
    align: "left",
  },
  {
    eyebrow: "Empowering artisans in Kenya",
    title: "Responsible hair, body & skincare",
    cta: "Learn more",
    href: "/about",
    scene: "artisan",
    tone: 4,
    seed: 5,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1800&q=85",
    align: "right",
  },
  {
    eyebrow: "Inspired by nature. Crafted as soaps.",
    title: "Escape to the savanna",
    cta: "Shop now",
    href: "/collections/soaps",
    scene: "savanna",
    tone: 0,
    seed: 2,
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1800&q=85",
    align: "center",
  },
  {
    eyebrow: "All-natural & sustainably sourced",
    title: "Rich African ingredients",
    cta: "Shop now",
    href: "/shop",
    scene: "botanical",
    tone: 1,
    seed: 8,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
    align: "left",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  const pos =
    s.align === "left"
      ? "items-start text-left"
      : s.align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <section className="relative h-[calc(100svh-84px-36px)] min-h-[560px] w-full overflow-hidden md:h-[calc(100svh-104px-36px)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "linear" }}
          >
            <Scene
              kind={s.scene}
              tone={s.tone}
              seed={s.seed}
              image={s.image}
              alt={s.title}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/25 to-charcoal/15" />
        </motion.div>
      </AnimatePresence>

      <div
        className={`wrap relative flex h-full flex-col justify-end pb-20 md:pb-28 ${pos} text-cream`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className={`flex max-w-[1100px] flex-col ${pos}`}
            initial="h"
            animate="s"
            exit="x"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.p
              variants={{
                h: { opacity: 0, y: 20 },
                s: { opacity: 1, y: 0 },
                x: { opacity: 0 },
              }}
              transition={{ duration: 1 }}
              className="eyebrow mb-6 max-w-[34ch] leading-relaxed md:mb-8"
            >
              {s.eyebrow}
            </motion.p>
            <motion.h1
              variants={{
                h: { opacity: 0, y: 30 },
                s: { opacity: 1, y: 0 },
                x: { opacity: 0 },
              }}
              transition={{ duration: 1.2 }}
              className="display h-xl uppercase"
              style={{ letterSpacing: "0.01em" }}
            >
              {s.title}
            </motion.h1>
            <motion.div
              variants={{
                h: { opacity: 0, y: 20 },
                s: { opacity: 1, y: 0 },
                x: { opacity: 0 },
              }}
              transition={{ duration: 1 }}
              className="mt-10 md:mt-12"
            >
              <Link href={s.href} className="btn btn-line">
                {s.cta}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 md:bottom-10">
        {slides.map((_, n) => (
          <button
            key={n}
            aria-label={`Slide ${n + 1}`}
            onClick={() => setI(n)}
            className="group py-2"
          >
            <span
              className={`block h-px w-8 bg-cream transition-opacity duration-700 ${
                n === i ? "opacity-100" : "opacity-40 group-hover:opacity-70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
