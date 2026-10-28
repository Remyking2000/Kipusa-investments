import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Scene from "./Scene";
import { collections } from "@/lib/products";

export default function CategoryNavigation() {
  return (
    <section className="section bg-cream" aria-labelledby="divisions-heading">
      <div className="wrap">
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-2 text-olive">Three Specialized Divisions</p>
            <h2 id="divisions-heading" className="display h-lg text-charcoal">
              Explore Kipusa Limited
            </h2>
          </div>
          <Link href="/shop" className="link-u self-start text-forest md:self-auto">
            View Full Catalogue →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {collections.map((c, i) => (
            <div
              key={c.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition-all duration-300 hover:border-forest/50 hover:shadow-md"
            >
              <div>
                <Link
                  href={`/collections/${c.slug}`}
                  className="zoom block aspect-[16/11] w-full overflow-hidden bg-beige"
                >
                  <div className="zoomable h-full w-full">
                    <Scene
                      kind={c.scene}
                      tone={c.tone}
                      seed={i + 4}
                      image={c.image}
                      alt={c.name}
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <p className="eyebrow text-[10px] text-olive">{c.tagline}</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-charcoal md:text-3xl">
                    <Link
                      href={`/collections/${c.slug}`}
                      className="hover:text-forest"
                    >
                      {c.name}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">
                    {c.blurb}
                  </p>

                  {/* Subcategories */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.subcategories.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-md bg-beige/80 px-2.5 py-1 text-[11px] text-charcoal/80"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-sand/70 px-6 py-4">
                <Link
                  href={`/collections/${c.slug}`}
                  className="flex items-center justify-between text-xs font-medium uppercase tracking-btn text-forest group-hover:text-charcoal"
                >
                  <span>{c.ctaLabel}</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
