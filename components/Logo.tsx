import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center leading-none ${className}`}
      aria-label="Kipusa Limited home"
    >
      <span className="font-serif text-[25px] font-medium uppercase tracking-[0.26em] md:text-[30px]">
        Kipusa
      </span>
      <span className="eyebrow mt-1 text-[8.5px] tracking-[0.42em] opacity-80">
        Limited
      </span>
    </Link>
  );
}
