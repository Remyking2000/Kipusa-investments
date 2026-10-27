import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex flex-col items-center leading-none ${className}`} aria-label="Organic Savanna home">
      <span className="font-serif text-[26px] font-light uppercase tracking-[0.28em] md:text-[30px]">Organic</span>
      <span className="eyebrow mt-1 text-[9px] tracking-[0.55em]">Savanna</span>
    </Link>
  );
}
