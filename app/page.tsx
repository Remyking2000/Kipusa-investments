import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Awards from "@/components/Awards";
import EditorialSection from "@/components/EditorialSection";
import CategoryNavigation from "@/components/CategoryNavigation";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <EditorialSection
        eyebrow="Empowering artisans in Kenya"
        heading="Responsible Hair, Body & Skincare"
        body="Made by hand in small batches, using recipes refined over years and ingredients bought directly from Kenyan growers."
        cta="Learn more"
        href="/about"
        scene="artisan"
        tone={4}
        seed={5}
        image="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=85"
        inset={{
          scene: "soap",
          tone: 0,
          seed: 2,
          image:
            "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=85",
        }}
      />
      <EditorialSection
        flip
        bg="bg-beige"
        eyebrow="Inspired by nature. Crafted as soaps."
        heading="Escape to the savanna"
        body="Cold-process bars scented with wild grasses, cedar and citrus. Cured slowly, cut by hand, wrapped in paper."
        cta="Shop now"
        href="/collections/soaps"
        scene="savanna"
        tone={0}
        seed={2}
        image="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=1400&q=85"
        inset={{
          scene: "candle",
          tone: 2,
          seed: 4,
          image:
            "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=85",
        }}
      />
      <Awards />
      <CategoryNavigation />
      <EditorialSection
        eyebrow="All-natural & sustainably sourced"
        heading="Rich African Ingredients"
        body="Shea, baobab, macadamia, aloe and cedar. Responsibly sourced, minimally processed and never tested on animals."
        cta="Shop now"
        href="/shop"
        scene="botanical"
        tone={1}
        seed={8}
        image="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1400&q=85"
        inset={{
          scene: "bottle",
          tone: 3,
          seed: 6,
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85",
        }}
      />
      <ProductGrid />
      <section className="border-t border-sand/80 bg-cream">
        <div className="wrap grid grid-cols-2 md:grid-cols-4">
          {[
            ["Retail outlets", "/contact"],
            ["Reach us", "/contact"],
            ["Shipping & returns", "/contact"],
            ["Press", "/about"],
          ].map(([l, h]) => (
            <Link
              key={l}
              href={h}
              className="eyebrow border-b border-sand/80 py-10 text-center transition-colors duration-500 hover:bg-beige md:border-b-0 md:border-r md:py-14 md:last:border-r-0"
            >
              {l}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
