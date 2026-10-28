import Link from "next/link";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import EditorialSection from "@/components/EditorialSection";
import CategoryNavigation from "@/components/CategoryNavigation";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Hero />

      <BrandStory />

      {/* Editorial 1: Kipusa Beauty */}
      <EditorialSection
        eyebrow="Kipusa Beauty · Botanical Skincare"
        heading="Nourishing Oils, Scrubs & Body Care"
        body="Formulated with cold-pressed plant oils, raw shea butter, and gentle exfoliating scrubs to leave skin soft, radiant, and cared for every day."
        cta="Shop Kipusa Beauty"
        href="/collections/kipusa-beauty"
        scene="artisan"
        tone={4}
        seed={5}
        image="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=85"
        inset={{
          scene: "bottle",
          tone: 1,
          seed: 2,
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85",
        }}
      />

      {/* Editorial 2: Kipusa Prints (Service Division) */}
      <EditorialSection
        flip
        bg="bg-beige"
        eyebrow="Kipusa Prints · 92 Hrs/Week · 99% Efficiency"
        heading="Committed to Delivering Swift Services"
        body="From scanning, printing, photocopying, and lamination to in-house graphic design, personalized gifts, E-Citizen support, and authorized DHL worldwide shipping."
        cta="Explore Kipusa Prints"
        href="/collections/kipusa-prints"
        scene="savanna"
        tone={0}
        seed={2}
        image="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1400&q=85"
        inset={{
          scene: "artisan",
          tone: 2,
          seed: 4,
          image:
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85",
        }}
      />

      {/* Division Cards */}
      <CategoryNavigation />

      {/* Editorial 3: Kipusa Home */}
      <EditorialSection
        eyebrow="Kipusa Home · Everyday Living"
        heading="Hand-Poured Candles, Soaps & Home Care"
        body="Scented soy candles, botanical room mists, cold-process soaps, and gentle surface care designed to bring calm and warmth into your home."
        cta="Shop Kipusa Home"
        href="/collections/kipusa-home"
        scene="botanical"
        tone={1}
        seed={8}
        image="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1400&q=85"
        inset={{
          scene: "soap",
          tone: 0,
          seed: 6,
          image:
            "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=85",
        }}
      />

      {/* Featured Products Grid */}
      <ProductGrid
        eyebrow="The Collection"
        title="Kipusa Beauty & Home Essentials"
        items={products.slice(0, 8)}
      />

      {/* Bottom 4-Column Quick Links Strip */}
      <section className="border-t border-sand/80 bg-cream">
        <div className="wrap grid grid-cols-2 md:grid-cols-4">
          {[
            ["Kipusa Beauty", "/collections/kipusa-beauty"],
            ["Kipusa Prints", "/collections/kipusa-prints"],
            ["Kipusa Home", "/collections/kipusa-home"],
            ["Reach Us", "/contact"],
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
