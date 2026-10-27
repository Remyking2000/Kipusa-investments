import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-forest text-cream">
      <Link href="/shop" className="eyebrow flex h-9 items-center justify-center px-4 text-center text-[10px] md:text-[11px]">
        Purchase with purpose in 2026 — Shop the collection
      </Link>
    </div>
  );
}
