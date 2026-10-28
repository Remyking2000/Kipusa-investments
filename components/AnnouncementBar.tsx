import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-[#8A856D] text-white">
      <Link
        href="/shop"
        className="flex h-10 items-center justify-center px-4 text-center text-[10px] font-normal uppercase tracking-[0.24em] transition-opacity hover:opacity-90 md:text-[11px]"
      >
        THOUGHTFULLY CRAFTED IN KENYA. EXPLORE KIPUSA BEAUTY, PRINTS &amp; HOME.
      </Link>
    </div>
  );
}
