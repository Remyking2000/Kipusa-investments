"use client";
import Link from "next/link";
import {
  Printer,
  Copy,
  BookOpen,
  Layers,
  UserCheck,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Scene from "./Scene";
import {
  kipusaPrintsServices,
  kipusaPrintsMetrics,
  kipusaPrintsCustomSolutions,
  type PrintServiceItem,
} from "@/lib/products";

function ServiceIcon({ name }: { name: PrintServiceItem["iconName"] }) {
  switch (name) {
    case "printer":
      return <Printer size={22} strokeWidth={1.5} />;
    case "copy":
      return <Copy size={22} strokeWidth={1.5} />;
    case "book":
      return <BookOpen size={22} strokeWidth={1.5} />;
    case "layers":
      return <Layers size={22} strokeWidth={1.5} />;
    case "user-check":
      return <UserCheck size={22} strokeWidth={1.5} />;
    case "globe":
      return <Globe size={22} strokeWidth={1.5} />;
  }
}

export default function KipusaPrintsView() {
  return (
    <div className="bg-cream">
      {/* =================================================================
          1. CORE SERVICES GRID (6 SERVICES FROM SCREENSHOT 1)
      ================================================================== */}
      <section className="section wrap">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-2 text-olive">What We Offer</p>
          <h2 className="display h-lg text-charcoal">
            Complete Printing, Design &amp; Everyday Services
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/75 sm:text-base">
            Kipusa Prints is a service-first hub—bringing document printing,
            in-house graphic design, E-Citizen support, and authorized DHL
            shipping together under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {kipusaPrintsServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white p-6 shadow-xs transition-all duration-300 hover:border-forest/50 hover:shadow-md sm:p-7"
            >
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-beige text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <ServiceIcon name={service.iconName} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">
                  {service.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-sand/60 pt-4">
                <Link
                  href={`/contact?subject=${encodeURIComponent(
                    `Kipusa Prints — ${service.title}`
                  )}`}
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-btn text-forest group-hover:text-charcoal"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          2. COMMITMENT TO SWIFT SERVICES & METRICS (FROM SCREENSHOT 2)
      ================================================================== */}
      <section className="border-y border-sand bg-beige/60 py-14 md:py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
              <Scene
                kind="artisan"
                tone={2}
                seed={8}
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="Kipusa Prints team delivering swift client service"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-2 text-olive">Our Service Promise</p>
            <h2 className="display h-lg text-charcoal">
              We are committed to delivering swift services to you
            </h2>
            <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-charcoal/80 sm:text-base">
              We work hard to ensure your world is always running, even when no
              other copy shop is open. We believe your time is your greatest
              resource—so we stay available and handle every printing, design,
              or dispatch request swiftly and reliably.
            </p>

            {/* 3 Metrics: 92 Hrs Per Week, 99% Efficiency, 100% Client Satisfaction */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-sand pt-6 sm:gap-6">
              {kipusaPrintsMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-sand bg-white p-4 text-center sm:p-5"
                >
                  <p className="font-serif text-2xl font-semibold text-forest sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/65">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. CUSTOM & CREATIVE PRINTING — "PRINT THEIR DREAMS" (SCREENSHOTS 3 & 4)
      ================================================================== */}
      <section className="section wrap">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-beige px-3.5 py-1 text-[11px] font-medium uppercase tracking-wider text-forest">
              <Sparkles size={13} />
              <span>Print Their Dreams · Inspire Their Future</span>
            </div>

            <h2 className="display h-lg mt-4 text-charcoal">
              Turning ideas and memories into something tangible.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              Whether you are preparing a thoughtful personalized gift, creating
              custom apparel, preserving family memories, bringing a child’s
              artwork to life, or producing branded materials for your
              organization, Kipusa Prints brings creativity and quality together.
            </p>

            {/* Quick Tag Cloud of Custom Capabilities */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Personalized Gifts",
                "Custom Clothing & T-Shirts",
                "Photo Frames",
                "Custom Mugs",
                "Printed Cushions",
                "Colourful Notebooks",
                "Stickers & Labels",
                "Publishing",
                "Branded Materials",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-sand bg-white px-3 py-1.5 text-xs font-medium text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact?subject=Kipusa%20Prints%20—%20Custom%20Printing%20%26%20Personalized%20Gifts"
                className="btn btn-dark gap-2"
              >
                <span>Start a Custom Print Request</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* 4 Simplified Custom Solution Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {kipusaPrintsCustomSolutions.map((sol) => (
              <div
                key={sol.title}
                className="rounded-2xl border border-sand bg-white p-6 shadow-xs"
              >
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  {sol.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/70 sm:text-sm">
                  {sol.description}
                </p>
                <ul className="mt-4 space-y-1 border-t border-sand/60 pt-3 text-xs font-medium text-forest">
                  {sol.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          4. BOTTOM SERVICE INQUIRY BANNER
      ================================================================== */}
      <section className="wrap pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-forest p-8 text-cream sm:p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow text-[10px] text-sage">
              Kipusa Prints — Ready to Help
            </p>
            <h3 className="mt-2 font-serif text-2xl text-cream sm:text-3xl">
              Need printing rates, graphic design, E-Citizen support, or DHL
              dispatch?
            </h3>
            <p className="mt-2 text-sm text-cream/80">
              Reach out to Kipusa Prints today to bring your ideas to life
              through custom printing, personalized gifts, and swift everyday
              services.
            </p>
          </div>
          <Link
            href="/contact?subject=Kipusa%20Prints%20Service%20Inquiry"
            className="btn btn-line shrink-0 gap-2"
          >
            <span>Contact Kipusa Prints</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
