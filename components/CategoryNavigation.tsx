import Link from "next/link";
import Scene from "./Scene";
import { collections } from "@/lib/products";
import { ImageReveal, Reveal } from "./Reveal";

export default function CategoryNavigation() {
  const cats = collections.filter((c) =>
    ["bath-body-skincare", "hair-care", "soaps", "candles"].includes(c.slug)
  );
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <Reveal className="mb-12 flex items-end justify-between md:mb-20">
          <h2 className="display h-md">Shop by category</h2>
          <Link href="/shop" className="link-u hidden md:inline-block">
            Shop all
          </Link>
        </Reveal>
        <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
          {cats.map((c, i) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className={`group w-[72vw] shrink-0 snap-start md:w-auto ${
                i % 2 ? "md:mt-16" : ""
              }`}
            >
              <ImageReveal className="zoom aspect-[3/4]">
                <div className="zoomable h-full w-full transition-transform duration-[1400ms] ease-soft group-hover:scale-105">
                  <Scene
                    kind={c.scene}
                    tone={c.tone}
                    seed={i + 4}
                    image={c.image}
                    alt={c.name}
                  />
                </div>
              </ImageReveal>
              <div className="mt-5 flex items-baseline justify-between border-b border-charcoal/20 pb-4 transition-colors duration-500 group-hover:border-charcoal">
                <span className="font-serif text-2xl font-light md:text-[28px]">
                  {c.name}
                </span>
                <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
