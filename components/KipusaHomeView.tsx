"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Compass,
  Info,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  kipusaHomeCertification,
  kipusaHomeGallery,
  kipusaHomeGalleryCategories,
  kipusaHomeHero,
  kipusaHomeJournal,
  kipusaHomeJourney,
  kipusaHomePhilosophy,
  kipusaHomeServices,
  type KipusaHomeSpaceCategory,
} from "@/lib/kipusa-home";
import { collections, type Product } from "@/lib/products";
import ProductCard from "./ProductCard";

const studioNav = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#journey" },
  { label: "Spaces Gallery", href: "#gallery" },
  { label: "Certified", href: "#certified" },
  { label: "Consultation", href: "#consultation" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#home-contact" },
];

export default function KipusaHomeView({
  homeProducts = [],
}: {
  homeProducts?: Product[];
}) {
  const [activeCategory, setActiveCategory] = useState<
    "All Spaces" | KipusaHomeSpaceCategory
  >("All Spaces");
  const [selectedService, setSelectedService] = useState<string>(
    "Interior Design"
  );
  const [selectedSpace, setSelectedSpace] = useState<string>("Living Room");
  const [consultationType, setConsultationType] = useState<string>(
    "On-Site Space Assessment"
  );
  const [submitted, setSubmitted] = useState(false);
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const filteredGallery =
    activeCategory === "All Spaces"
      ? kipusaHomeGallery
      : kipusaHomeGallery.filter((item) => item.category === activeCategory);

  const handleServiceInquire = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setSubmitted(false);
    const el = document.getElementById("consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-cream text-charcoal">
      {/* =====================================================================
          1. INTERIOR PHOTOGRAPHY HERO
      ====================================================================== */}
      <section className="relative min-h-[78svh] w-full overflow-hidden bg-bark text-cream md:min-h-[84svh]">
        <img
          src={kipusaHomeHero.heroImage}
          alt="Kipusa Home — Peaceful, Warm, Serene Living Space"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Warm architectural vignette — restrained & natural */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B17]/80 via-[#1F1B17]/35 to-[#1F1B17]/20" />

        <div className="wrap relative z-10 flex min-h-[78svh] flex-col justify-between py-12 md:min-h-[84svh] md:py-20">
          {/* Top Studio Identifier */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream/20 pb-5">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-[10px] tracking-[0.26em] text-cream/85">
                Kipusa Limited · Interior Design &amp; Home Studio
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cream/80">
              {collections.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className={`px-3 py-1 transition-colors ${
                    c.slug === "kipusa-home"
                      ? "bg-cream text-charcoal font-medium"
                      : "border border-cream/25 text-cream/85 hover:border-cream hover:text-cream"
                  }`}
                >
                  {c.shortName}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Hero Editorial Statement */}
          <div className="my-auto max-w-3xl py-10 md:py-16">
            <p className="eyebrow mb-4 text-xs tracking-[0.28em] text-sand">
              {kipusaHomeHero.brand}
            </p>
            <h1 className="font-serif text-4xl font-light leading-[1.06] tracking-[-0.01em] text-cream sm:text-6xl md:text-7xl">
              {kipusaHomeHero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg md:text-xl font-light">
              {kipusaHomeHero.supportingMessage}
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={kipusaHomeHero.primaryCta.href}
                className="inline-flex items-center justify-center gap-3 bg-cream px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-300 hover:bg-sand"
              >
                <span>{kipusaHomeHero.primaryCta.label}</span>
                <ArrowRight size={15} />
              </a>
              <a
                href={kipusaHomeHero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-3 border border-cream/70 bg-charcoal/25 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-cream backdrop-blur-xs transition-colors duration-300 hover:bg-cream hover:text-charcoal"
              >
                <span>{kipusaHomeHero.secondaryCta.label}</span>
              </a>
            </div>
          </div>

          {/* Bottom Studio Highlights Strip */}
          <div className="grid grid-cols-2 gap-6 border-t border-cream/20 pt-6 text-xs text-cream/80 sm:grid-cols-4">
            <div>
              <p className="eyebrow text-[10px] text-sand">Studio Focus</p>
              <p className="mt-1 font-serif text-lg text-cream">
                Interior Design &amp; Styling
              </p>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-sand">Aesthetic</p>
              <p className="mt-1 font-serif text-lg text-cream">
                Warm Contemporary &amp; Natural
              </p>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-sand">Spaces</p>
              <p className="mt-1 font-serif text-lg text-cream">
                Living, Dining, Sleep &amp; Outdoor
              </p>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-sand">Handover Standard</p>
              <p className="mt-1 font-serif text-lg text-cream">
                Kipusa Home Certified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDITORIAL IN-PAGE SUB-NAVIGATION
      ====================================================================== */}
      <div className="sticky top-[64px] z-30 border-b border-sand bg-cream/95 backdrop-blur-md">
        <div className="wrap flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-3.5">
          <div className="flex items-center gap-6 md:gap-8">
            <span className="hidden font-serif text-sm italic text-bark lg:inline">
              Kipusa Home Studio
            </span>
            {studioNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-charcoal/75 transition-colors hover:text-charcoal"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#consultation"
            className="hidden shrink-0 bg-[#8A856D] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-forest sm:inline-block"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* =====================================================================
          2. EDITORIAL INTRODUCTION & PHILOSOPHY
      ====================================================================== */}
      <section id="philosophy" className="section wrap scroll-mt-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Asymmetrical Editorial Photography Column */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-beige sm:w-[88%]">
                <img
                  src={kipusaHomePhilosophy.mainImage}
                  alt="Warm minimalist living space with natural timber and linen"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 sm:absolute sm:-bottom-10 sm:right-0 sm:mt-0 sm:w-[54%] border border-sand bg-cream p-3 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden bg-beige">
                  <img
                    src={kipusaHomePhilosophy.detailImage}
                    alt="Natural ceramic and linen interior details"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2.5 text-[11px] uppercase tracking-[0.16em] text-bark">
                  Natural Wood · Linen · Warm Earth Tones
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Copy & Philosophy Pillars */}
          <div className="lg:col-span-6 lg:pl-4 sm:pt-8 lg:pt-2">
            <p className="eyebrow mb-3 text-olive">
              {kipusaHomePhilosophy.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-light leading-[1.15] text-charcoal sm:text-4xl md:text-5xl">
              {kipusaHomePhilosophy.title}
            </h2>
            <p className="mt-6 font-serif text-xl font-normal leading-relaxed text-bark sm:text-2xl">
              “{kipusaHomePhilosophy.lead}”
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              {kipusaHomePhilosophy.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 3 Philosophy Pillars */}
            <div className="mt-10 divide-y divide-sand border-y border-sand">
              {kipusaHomePhilosophy.pillars.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                >
                  <div className="sm:col-span-5 flex items-baseline gap-3">
                    <span className="font-serif text-sm text-olive">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-charcoal">
                      {pillar.label}
                    </h3>
                  </div>
                  <p className="sm:col-span-7 text-xs leading-relaxed text-charcoal/75 sm:text-sm">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. VISUALLY RICH SERVICES SECTION (6 CORE SERVICES)
      ====================================================================== */}
      <section
        id="services"
        className="scroll-mt-28 border-t border-sand bg-[#F5F0E6] py-16 md:py-24"
      >
        <div className="wrap">
          <div className="mb-14 grid items-end gap-6 border-b border-sand pb-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3 text-olive">
                Our Design &amp; Styling Capabilities
              </p>
              <h2 className="font-serif text-3xl font-light leading-[1.12] text-charcoal sm:text-5xl">
                Six Tailored Services for Thoughtful Living
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">
                From initial concept boards and bespoke décor sourcing to
                seasonal hosting and full project implementation, Kipusa Home
                guides every stage of your interior transformation.
              </p>
            </div>
          </div>

          {/* 6 Services Editorial Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {kipusaHomeServices.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between border border-sand bg-cream transition-colors duration-500 hover:border-bark/60"
              >
                <div>
                  {/* Photography Header */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 bg-cream/95 px-3 py-1 font-serif text-sm tracking-wider text-charcoal">
                      {service.number}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8">
                    <p className="eyebrow text-[10px] text-olive">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-normal text-charcoal sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-sand/80 pt-4 text-xs text-charcoal/80">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="h-1 w-1 rounded-full bg-olive" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-sand px-6 py-4 sm:px-8">
                  <button
                    type="button"
                    onClick={() => handleServiceInquire(service.title)}
                    className="inline-flex w-full items-center justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-forest transition-colors group-hover:text-charcoal"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. FOUR-STEP CUSTOMER JOURNEY
      ====================================================================== */}
      <section
        id="journey"
        className="scroll-mt-28 border-t border-sand bg-cream py-16 md:py-24"
      >
        <div className="wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3 text-olive">How We Work</p>
            <h2 className="font-serif text-3xl font-light text-charcoal sm:text-5xl">
              A Calm, Guided Four-Step Journey
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/75 sm:text-base">
              Every Kipusa Home project follows a structured, transparent
              progression—from your first consultation to certified handover.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kipusaHomeJourney.map((step, index) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between border border-sand bg-[#FAF7F2] p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-sand pb-4">
                    <span className="font-serif text-4xl font-light text-olive">
                      {step.step}
                    </span>
                    <span className="eyebrow text-[10px] text-bark/70">
                      Step {index + 1} of 4
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-normal text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-olive">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sand/60">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-charcoal/55">
                    {index === 0 && "Initial Discovery"}
                    {index === 1 && "Concept & Curation"}
                    {index === 2 && "Execution & Styling"}
                    {index === 3 && "Kipusa Home Certified"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#consultation"
              className="inline-flex items-center gap-3 bg-forest px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:bg-charcoal"
            >
              <span>Begin Step 01 — Book a Consultation</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. IMMERSIVE INTERIOR DESIGN GALLERY
      ====================================================================== */}
      <section
        id="gallery"
        className="scroll-mt-28 border-t border-sand bg-beige/60 py-16 md:py-24"
      >
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 border-b border-sand pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow mb-3 text-olive">
                Curated Interior Inspiration
              </p>
              <h2 className="font-serif text-3xl font-light text-charcoal sm:text-5xl">
                Spaces Designed for Serene Living
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/75 sm:text-base">
                Explore our lookbook across living rooms, bedrooms, dining
                spaces, kitchens, and outdoor sanctuaries—featuring natural
                timber, breathable linens, and warm architectural tones.
              </p>
            </div>

            {/* Space Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(
                [
                  "All Spaces",
                  ...kipusaHomeGalleryCategories,
                ] as const
              ).map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                      active
                        ? "bg-forest text-cream"
                        : "border border-sand bg-cream text-charcoal hover:border-bark"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Asymmetrical Editorial Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
            {filteredGallery.map((item, idx) => {
              // Create an editorial asymmetrical rhythm across the 12-column grid
              const colSpan =
                activeCategory === "All Spaces"
                  ? idx % 4 === 0
                    ? "md:col-span-7"
                    : idx % 4 === 1
                    ? "md:col-span-5"
                    : idx % 4 === 2
                    ? "md:col-span-5"
                    : "md:col-span-7"
                  : "md:col-span-6";

              return (
                <figure
                  key={item.id}
                  className={`group flex flex-col justify-between border border-sand bg-cream ${colSpan}`}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-beige">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 bg-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal">
                      {item.category}
                    </span>
                  </div>

                  <figcaption className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-olive">
                        {item.materials}
                      </p>
                      <h3 className="mt-1.5 font-serif text-2xl font-normal text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
                        {item.caption}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-sand/70 pt-4">
                      <span className="text-[11px] text-charcoal/60">
                        Kipusa Home Editorial Lookbook
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSpace(item.category.replace(/s$/, ""));
                          handleServiceInquire("Interior Design");
                        }}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-forest hover:text-charcoal"
                      >
                        <span>Style a Similar Space</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. KIPUSA HOME CERTIFIED & VIP MEMBERSHIP SECTION
      ====================================================================== */}
      <section
        id="certified"
        className="scroll-mt-28 border-t border-sand bg-forest py-16 text-cream md:py-24"
      >
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-cream/25 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-sand">
                <Award size={14} />
                <span>{kipusaHomeCertification.eyebrow}</span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-light leading-[1.12] text-cream sm:text-5xl">
                {kipusaHomeCertification.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/85">
                {kipusaHomeCertification.description}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/75 sm:text-base">
                {kipusaHomeCertification.vipDescription}
              </p>

              <div className="mt-8 grid gap-6 border-t border-cream/15 pt-8 sm:grid-cols-2">
                {kipusaHomeCertification.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="border border-cream/15 bg-cream/5 p-6"
                  >
                    <h3 className="font-serif text-2xl font-normal text-sand">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-cream/80 sm:text-sm">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certified Emblem & Architectural Visual */}
            <div className="lg:col-span-5">
              <div className="border border-cream/20 bg-[#233229] p-8 sm:p-10">
                <div className="border border-sand/40 p-6 text-center sm:p-8">
                  <Sparkles
                    size={28}
                     strokeWidth={1.3}
                    className="mx-auto text-sand"
                  />
                  <p className="mt-4 eyebrow text-[10px] tracking-[0.28em] text-sand">
                    Official Studio Mark
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-light text-cream">
                    Kipusa Home Certified
                  </h3>
                  <div className="mx-auto my-5 h-px w-16 bg-sand/50" />
                  <p className="text-xs leading-relaxed text-cream/80 sm:text-sm">
                    Issued at Step 04 (Certification &amp; Handover) along with
                    invitation to the Kipusa Home VIP Membership program.
                  </p>
                  <div className="mt-7">
                    <a
                      href="#consultation"
                      className="inline-flex w-full items-center justify-center gap-2 bg-cream px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-sand"
                    >
                      <span>Inquire About Certification</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. CONSULTATION REQUEST SECTION
      ====================================================================== */}
      <section
        id="consultation"
        className="scroll-mt-28 border-t border-sand bg-cream py-16 md:py-24"
      >
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Consultation Overview */}
            <div className="lg:col-span-5">
              <p className="eyebrow mb-3 text-olive">
                Begin Your Interior Journey
              </p>
              <h2 className="font-serif text-3xl font-light text-charcoal sm:text-5xl">
                Book a Kipusa Home Consultation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                Share the details of your space, preferred service, and design
                vision. Our team will review your request and coordinate an
                initial assessment and concept session.
              </p>

              <div className="mt-8 space-y-5 border-t border-sand pt-6 text-sm text-charcoal/80">
                <div className="flex items-start gap-3.5">
                  <Compass
                    size={18}
                    className="mt-0.5 shrink-0 text-forest"
                  />
                  <div>
                    <p className="font-medium text-charcoal">
                      Tailored to Your Space &amp; Scope
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/70">
                      Available for single-room styling, seasonal event décor,
                      décor sourcing, or complete residential implementation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Layers size={18} className="mt-0.5 shrink-0 text-forest" />
                  <div>
                    <p className="font-medium text-charcoal">
                      Centralized Kipusa Client Care
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/70">
                      Structured for seamless management through the Kipusa
                      Limited administration system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border border-sand bg-beige/60 p-5 text-xs leading-relaxed text-charcoal/70">
                <div className="flex items-start gap-2.5">
                  <Info size={15} className="mt-0.5 shrink-0 text-olive" />
                  <span>
                    <strong>Phase 1 Note:</strong> This consultation form
                    validates your request in the storefront interface. Live
                    admin dashboard dispatch and scheduling integration will be
                    connected in Phase 2/3.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Studio Form */}
            <div className="lg:col-span-7">
              <div className="border border-sand bg-white p-6 shadow-xs sm:p-10">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle2
                      size={40}
                      className="mx-auto mb-4 text-forest"
                    />
                    <p className="eyebrow text-[10px] text-olive">
                      Kipusa Home Studio
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-charcoal">
                      Consultation Request Recorded
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-charcoal/75">
                      Thank you for requesting a{" "}
                      <strong>{selectedService}</strong> consultation for your{" "}
                      <strong>{selectedSpace}</strong> ({consultationType}).
                      Backend studio routing will be active in Phase 2/3.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="border border-charcoal px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
                      >
                        Submit Another Request
                      </button>
                      <Link
                        href="/contact?subject=Kipusa%20Home%20Consultation"
                        className="bg-forest px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-charcoal"
                      >
                        Visit Main Contact Page
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="name@example.com"
                          className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Optional phone contact"
                          className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                          Consultation Format
                        </label>
                        <select
                          value={consultationType}
                          onChange={(e) => setConsultationType(e.target.value)}
                          className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal focus:border-forest focus:bg-white focus:outline-none"
                        >
                          <option value="On-Site Space Assessment">
                            On-Site Space Assessment
                          </option>
                          <option value="Studio Design Consultation">
                            Studio Design Consultation
                          </option>
                          <option value="Virtual Concept Consultation">
                            Virtual Concept Consultation
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                          Primary Service Needed *
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal focus:border-forest focus:bg-white focus:outline-none"
                        >
                          {kipusaHomeServices.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                          Space Type *
                        </label>
                        <select
                          value={selectedSpace}
                          onChange={(e) => setSelectedSpace(e.target.value)}
                          className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal focus:border-forest focus:bg-white focus:outline-none"
                        >
                          <option value="Living Room">Living Room</option>
                          <option value="Bedroom">Bedroom</option>
                          <option value="Dining Space">Dining Space</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Outdoor Space">Outdoor Space</option>
                          <option value="Full Residence">Full Residence</option>
                          <option value="Seasonal / Event Space">
                            Seasonal / Event Space
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal/80">
                        Tell Us About Your Space &amp; Vision *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your space, desired atmosphere, timeline, or styling goals..."
                        className="w-full border border-sand bg-cream/50 px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:bg-white focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 bg-forest px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:bg-charcoal sm:w-auto"
                    >
                      <span>Request Kipusa Home Consultation</span>
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. EDITORIAL INSPIRATION & JOURNAL SECTION
      ====================================================================== */}
      <section
        id="journal"
        className="scroll-mt-28 border-t border-sand bg-[#F5F0E6] py-16 md:py-24"
      >
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-sand pb-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-3 text-olive">
                Editorial Notes &amp; Inspiration
              </p>
              <h2 className="font-serif text-3xl font-light text-charcoal sm:text-5xl">
                The Kipusa Home Journal
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-charcoal/75">
              Reflections on spatial harmony, tactile natural materials, warm
              lighting, and the art of creating peaceful rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {kipusaHomeJournal.map((entry) => {
              const isExpanded = expandedArticle === entry.id;
              return (
                <article
                  key={entry.id}
                  className="flex flex-col justify-between border border-sand bg-cream"
                >
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-beige">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-olive">
                        <span>{entry.category}</span>
                        <span>{entry.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-charcoal">
                        {entry.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                        {entry.excerpt}
                      </p>

                      {isExpanded && (
                        <div className="mt-4 space-y-3 border-t border-sand pt-4 text-sm leading-relaxed text-charcoal/85">
                          {entry.content.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-sand px-6 py-4 sm:px-8">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedArticle(isExpanded ? null : entry.id)
                      }
                      className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-forest hover:text-charcoal"
                    >
                      <span>
                        {isExpanded ? "Close Editorial Note" : "Read Editorial Note"}
                      </span>
                      <ArrowRight
                        size={14}
                        className={`transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          OPTIONAL HOME FRAGRANCE & AMBIENT LIVING ACCENTS
      ====================================================================== */}
      {homeProducts.length > 0 && (
        <section className="border-t border-sand bg-cream py-16 md:py-20">
          <div className="wrap">
            <div className="mb-10 flex flex-col justify-between gap-4 border-b border-sand pb-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-2 text-olive">
                  Sensory Finishing Touches
                </p>
                <h2 className="font-serif text-2xl font-light text-charcoal sm:text-4xl">
                  Home Fragrance &amp; Living Accents
                </h2>
              </div>
              <Link href="/shop" className="link-u text-charcoal">
                Browse Full Catalogue
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-7">
              {homeProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.slug} p={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          9. VERIFIED KIPUSA HOME CONTACT & UNIFIED DIVISION LINKS
      ====================================================================== */}
      <section
        id="home-contact"
        className="scroll-mt-28 border-t border-sand bg-beige/75 py-16 md:py-20"
      >
        <div className="wrap">
          <div className="grid gap-10 border border-sand bg-cream p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-2 text-olive">
                Connect with Kipusa Home
              </p>
              <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
                Kipusa Home — Part of Kipusa Investments Limited
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/75 sm:text-base">
                For interior design consultations, décor sourcing, seasonal
                event styling, or Kipusa Home Certification inquiries, reach out
                through our consultation form above or our central Kipusa
                Limited inquiry desk.
              </p>

              <div className="mt-8 grid gap-6 border-t border-sand pt-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-[10px] text-olive">
                    Division &amp; Brand
                  </p>
                  <p className="mt-1.5 font-serif text-xl text-charcoal">
                    Kipusa Home · Kipusa Limited
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal/70">
                    Interior Design, Décor Sourcing, Concept Design, Home
                    Styling, Seasonal Décor &amp; Project Implementation.
                  </p>
                </div>

                <div>
                  <p className="eyebrow text-[10px] text-olive">
                    Verified Contact Routing
                  </p>
                  <p className="mt-1.5 flex items-center gap-2 font-serif text-xl text-charcoal">
                    <MapPin size={16} className="text-forest" />
                    <span>Central Kipusa Inquiry Desk</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal/70">
                    Direct phone, studio address, and admin dashboard
                    notifications are managed centrally by Kipusa Investments
                    Limited.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-sand pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="eyebrow text-[10px] text-olive">
                  One Kipusa · Three Distinct Experiences
                </p>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/75">
                  Move seamlessly across Kipusa Limited’s three business
                  divisions:
                </p>

                <div className="mt-4 space-y-2.5">
                  {collections.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className={`flex items-center justify-between border px-4 py-3 text-xs transition-colors ${
                        c.slug === "kipusa-home"
                          ? "border-forest bg-forest text-cream"
                          : "border-sand bg-beige/40 text-charcoal hover:border-charcoal"
                      }`}
                    >
                      <span className="font-medium uppercase tracking-[0.16em]">
                        {c.name}
                      </span>
                      <span className="text-[11px] opacity-80">
                        {c.shortName === "Home"
                          ? "Current Studio"
                          : `Explore ${c.shortName} →`}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href="/contact?subject=Kipusa%20Home%20Inquiry"
                  className="inline-flex w-full items-center justify-center gap-2 border border-charcoal bg-charcoal px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-forest"
                >
                  <span>Open Central Contact Desk</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
