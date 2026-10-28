import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-forest text-cream">
      <div className="wrap flex min-h-[36px] items-center justify-between gap-4 py-1.5 text-[10px] md:text-[11px]">
        <span className="eyebrow mx-auto text-center md:mx-0">
          Kipusa Limited — Beauty · Prints · Home
        </span>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/collections/kipusa-beauty"
            className="eyebrow text-[10px] text-cream/80 transition-colors hover:text-cream"
          >
            Kipusa Beauty
          </Link>
          <Link
            href="/collections/kipusa-prints"
            className="eyebrow text-[10px] text-cream/80 transition-colors hover:text-cream"
          >
            Kipusa Prints
          </Link>
          <Link
            href="/collections/kipusa-home"
            className="eyebrow text-[10px] text-cream/80 transition-colors hover:text-cream"
          >
            Kipusa Home
          </Link>
        </div>
      </div>
    </div>
  );
}
