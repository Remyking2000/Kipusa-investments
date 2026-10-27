import { notFound } from "next/navigation";
import Link from "next/link";
import Scene from "@/components/Scene";
import ProductCard from "@/components/ProductCard";
import { collections, getCollection, products, featured } from "@/lib/products";

export function generateStaticParams() {
  return [...collections.map((c) => ({ slug: c.slug })), { slug: "best-sellers" }];
}

export default function Collection({ params }: { params: { slug: string } }) {
  const best = params.slug === "best-sellers";
  const c = best ? { slug: "best-sellers", name: "Best Sellers", blurb: "The pieces our community returns to again and again.", scene: "savanna" as const, tone: 0 } : getCollection(params.slug);
  if (!c) notFound();
  const items = best ? featured.filter((p) => p.rating >= 4.8) : products.filter((p) => p.category === c.slug);
  return (
    <>
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden">
        <Scene kind={c.scene} tone={c.tone} seed={7} />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-14 text-cream md:pb-20">
          <p className="eyebrow mb-4">Collection</p>
          <h1 className="display h-xl">{c.name}</h1>
          <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-cream/85">{c.blurb}</p>
        </div>
      </section>
      <section className="section wrap">
        {items.length ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4">
            {items.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        ) : <p className="text-center font-serif text-3xl italic">New pieces arriving soon. <Link href="/shop" className="link-u ml-3">Shop all</Link></p>}
      </section>
    </>
  );
}
