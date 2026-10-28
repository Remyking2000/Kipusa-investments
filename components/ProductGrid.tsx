import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { featured, type Product } from "@/lib/products";

export default function ProductGrid({
  eyebrow = "Featured Catalogue",
  title = "Kipusa Limited Products",
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
          <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-2 text-olive">{eyebrow}</p>
              <h2 className="display h-lg text-charcoal">{title}</h2>
              {subtitle && (
                <p className="mt-2 max-w-[58ch] text-sm text-charcoal/70 sm:text-base">
                  {subtitle}
                </p>
              )}
            </div>
            {showLink && (
              <Link
                href={linkHref}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-btn text-forest hover:text-charcoal"
              >
                <span>{linkLabel}</span>
                <ArrowRight size={15} />
              </Link>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
