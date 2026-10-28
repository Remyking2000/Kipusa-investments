import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryNavigation from "@/components/CategoryNavigation";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import { getProductsBySection } from "@/lib/products";

export default function Home() {
  const beautyProducts = getProductsBySection("kipusa-beauty").slice(0, 4);
  const printProducts = getProductsBySection("kipusa-prints").slice(0, 4);
  const homeProducts = getProductsBySection("kipusa-home").slice(0, 4);

  return (
    <>
      <Hero />

      {/* Three Business Sections Overview */}
      <CategoryNavigation />

      {/* Section 1: Kipusa Beauty */}
      <ProductGrid
        bg="bg-beige/45"
        eyebrow="Kipusa Beauty"
        title="Botanical Oils, Scrubs & Body Care"
        subtitle="Nourishing facial oils, exfoliating body scrubs, whipped shea butters, and hair care essentials. (Phase 1 sample catalogue items.)"
        items={beautyProducts}
        linkHref="/collections/kipusa-beauty"
        linkLabel="Explore Kipusa Beauty"
      />

      {/* Section 2: Kipusa Prints + Custom Quote Banner */}
      <ProductGrid
        bg="bg-cream"
        eyebrow="Kipusa Prints"
        title="Custom Packaging, Labels & Print Services"
        subtitle="Product labels, branded gift boxes, stationery suites, lookbooks, and retail signage with direct pack ordering or custom quote inquiries."
        items={printProducts}
        linkHref="/collections/kipusa-prints"
        linkLabel="Explore Kipusa Prints"
      />

      <section className="wrap pb-14">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-sand bg-forest p-6 text-cream sm:p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow text-[10px] text-sage">
              Kipusa Prints — Bespoke Production
            </p>
            <h3 className="mt-2 font-serif text-2xl text-cream sm:text-3xl">
              Need custom dielines, bulk packaging, or commercial print runs?
            </h3>
            <p className="mt-2 text-sm text-cream/80">
              Send your print specifications, quantities, or artwork details to
              the Kipusa Prints team for a tailored quotation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact?subject=Kipusa%20Prints%20Custom%20Quote"
              className="btn btn-line gap-2"
            >
              <FileText size={15} />
              <span>Request a Print Quote</span>
            </Link>
            <Link
              href="/collections/kipusa-prints"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium uppercase tracking-btn text-cream/90 hover:text-cream"
            >
              <span>View Print Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Kipusa Home */}
      <ProductGrid
        bg="bg-beige/45"
        eyebrow="Kipusa Home"
        title="Candles, Soaps & Everyday Living"
        subtitle="Hand-poured scented candles, room mists, artisan cold-process soaps, and home care essentials. (Phase 1 sample catalogue items.)"
        items={homeProducts}
        linkHref="/collections/kipusa-home"
        linkLabel="Explore Kipusa Home"
      />

      {/* Brand Overview */}
      <BrandStory />
    </>
  );
}
