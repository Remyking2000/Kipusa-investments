import Link from "next/link";
import ProductCard from "./ProductCard";
import { featured, type Product } from "@/lib/products";
import { Reveal } from "./Reveal";

export default function ProductGrid({ title = "Organic Savanna Products", items = featured, showLink = true }: { title?: string; items?: Product[]; showLink?: boolean }) {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <Reveal className="mb-14 text-center md:mb-24">
          <p className="eyebrow mb-5 text-olive">The collection</p>
          <h2 className="display h-lg">{title}</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}><ProductCard p={p} /></Reveal>
          ))}
        </div>
        {showLink && (
          <Reveal className="mt-20 text-center"><Link href="/shop" className="btn btn-line-dark">View all products</Link></Reveal>
        )}
      </div>
    </section>
  );
}
