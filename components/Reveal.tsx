"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 0.61, 0.36, 1] as const;

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Image reveal: a curtain of cream lifts while the image settles from a slight zoom. */
export function ImageReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div className="h-full w-full" variants={{ hidden: { scale: 1.12 }, show: { scale: 1 } }} transition={{ duration: 1.8, ease }}>
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 origin-top bg-cream"
        variants={{ hidden: { scaleY: 1 }, show: { scaleY: 0 } }}
        transition={{ duration: 1.3, ease }}
      />
    </motion.div>
  );
}

/** Words fade up with a stagger. */
export function Stagger({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} transition={{ staggerChildren: 0.07 }} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
          <motion.span className="inline-block" variants={{ hidden: { y: "105%" }, show: { y: 0 } }} transition={{ duration: 1, ease }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
