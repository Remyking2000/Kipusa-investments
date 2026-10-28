import Link from "next/link";
import {
  ArrowRight,
  Printer,
  Copy,
  BookOpen,
  Layers,
  UserCheck,
  Globe,
} from "lucide-react";
import Hero from "@/components/Hero";
import CategoryNavigation from "@/components/CategoryNavigation";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import {
  getProductsBySection,
  kipusaPrintsServices,
  kipusaPrintsMetrics,
  type PrintServiceItem,
} from "@/lib/products";

function HomeServiceIcon({ name }: { name: PrintServiceItem["iconName"] }) {
  switch (name) {
    case "printer":
      return <Printer size={20} strokeWidth={1.5} />;
    case "copy":
      return <Copy size={20} strokeWidth={1.5} />;
    case "book":
      return <BookOpen size={20} strokeWidth={1.5} />;
    case "layers":
      return <Layers size={20} strokeWidth={1.5} />;
    case "user-check":
      return <UserCheck size={20} strokeWidth={1.5} />;
    case "globe":
      return <Globe size={20} strokeWidth={1.5} />;
  }
}

export default function Home() {
  const beautyProducts = getProductsBySection("kipusa-beauty").slice(0, 4);
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

      {/* Section 2: Kipusa Prints — Service Showcase */}
      <section className="section bg-cream" aria-labelledby="prints-heading">
        <div className="wrap">
          <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-2 text-olive">
                Kipusa Prints · Services &amp; Custom Solutions
              </p>
              <h2 id="prints-heading" className="display h-lg text-charcoal">
                Swift Printing, Design, E-Citizen &amp; DHL Services
              </h2>
              <p className="mt-2 max-w-[62ch] text-sm text-charcoal/75 sm:text-base">
                Committed to keeping your world running—from scanning,
                photocopying, and binding to graphic design, personalized gifts,
                E-Citizen assistance, and worldwide DHL delivery.
              </p>
            </div>
            <Link
              href="/collections/kipusa-prints"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-btn text-forest hover:text-charcoal"
            >
              <span>View All Kipusa Prints Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 6 Core Services Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kipusaPrintsServices.map((s) => (
              <Link
                key={s.id}
                href="/collections/kipusa-prints"
                className="group flex flex-col justify-between rounded-2xl border border-sand bg-white p-6 transition-all duration-300 hover:border-forest hover:shadow-sm"
              >
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-beige text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                    <HomeServiceIcon name={s.iconName} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-forest">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/70 sm:text-sm">
                    {s.summary}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-forest">
                  <span>{s.ctaText}</span>
                  <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>

          {/* Metrics + Custom Printing Strip */}
          <div className="mt-8 grid items-center gap-6 rounded-2xl border border-sand bg-forest p-6 text-cream sm:p-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[10px] text-sage">
                Print Their Dreams · Inspire Their Future
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream sm:text-3xl">
                Custom printing, personalized gifts &amp; branded materials
              </h3>
              <p className="mt-2 text-sm text-cream/80">
                Mugs, custom clothing, photo frames, cushions, notebooks,
                stickers, publishing, and corporate branding—delivered with
                speed and care.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/collections/kipusa-prints"
                  className="btn btn-line gap-2"
                >
                  <span>Explore Kipusa Prints</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact?subject=Kipusa%20Prints%20Service%20Inquiry"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium uppercase tracking-btn text-cream/90 hover:text-cream"
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:col-span-5">
              {kipusaPrintsMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-cream/20 bg-cream/10 p-4 text-center"
                >
                  <p className="font-serif text-xl font-semibold text-cream sm:text-2xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-cream/75">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
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
