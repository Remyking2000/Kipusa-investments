import Link from "next/link";
import ProductCard from "./ProductCard";
import { featured, type Product } from "@/lib/products";
import { Reveal } from "./Reveal";

export default function ProductGrid({
  eyebrow = "The collection",
  title = "Kipusa Beauty & Home Essentials",
  subtitle,
  items = featured,
  showLink = true,
  linkHref = "/shop",
  linkLabel = "View all products",
  bg = "bg-cream",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: Product[];
  showLink?: boolean;
  linkHref?: string;
  linkLabel?: string;
  bg?: string;
}) {
  return (
    <section className={`section ${bg}`}>
      <div className="wrap">
        {title && (
          <Reveal className="mb-14 text-center md:mb-20">
            <p className="eyebrow mb-4 text-olive">{eyebrow}</p>
            <h2 className="display h-lg">{title}</h2>
            {subtitle && (
              <p className="mx-auto mt-3 max-w-[54ch] text-sm text-charcoal/65">
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
        {showLink && (
          <Reveal className="mt-16 text-center md:mt-20">
            <Link
              href={linkHref}
              className="inline-flex items-center justify-center bg-[#8A856D] px-9 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-forest"
            >
              {linkLabel}
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
