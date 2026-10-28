import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center leading-none ${className}`}
      aria-label="Kipusa Limited home"
    >
      <span className="font-sans text-[20px] font-normal uppercase tracking-[0.22em] md:text-[23px]">
        KIPUSA
      </span>
      <span className="mt-1 font-sans text-[14px] font-normal uppercase tracking-[0.28em] md:text-[16px]">
        LIMITED
      </span>
    </Link>
  );
}
