import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { collections, products } from "@/lib/products";

export const metadata = { title: "Shop all — Organic Savanna" };

export default function Shop() {
  return (
    <>
      <section className="wrap pt-20 text-center md:pt-32">
        <p className="eyebrow mb-5 text-olive">Shop</p>
        <h1 className="display h-xl">All products</h1>
        <nav className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {collections.map((c) => <Link key={c.slug} href={`/collections/${c.slug}`} className="link-u text-charcoal/70 hover:text-charcoal">{c.name}</Link>)}
        </nav>
      </section>
      <ProductGrid title="" items={products} showLink={false} />
    </>
  );
}
