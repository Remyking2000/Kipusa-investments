"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Scene from "./Scene";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-sand bg-beige/60">
      <div className="wrap py-10 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Introduction */}
          <div className="lg:col-span-6">
            <span className="eyebrow inline-block rounded-full border border-forest/20 bg-white px-3.5 py-1.5 text-[10px] text-forest">
              Welcome to Kipusa Limited
            </span>
            <h1 className="display h-xl mt-5 text-charcoal">
              Thoughtful essentials across{" "}
              <span className="italic text-forest">Beauty, Prints</span> &amp;{" "}
              <span className="italic text-terracotta">Home.</span>
            </h1>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-charcoal/75 md:text-lg">
              Discover nourishing botanical skincare from{" "}
              <strong className="font-medium text-charcoal">Kipusa Beauty</strong>,
              swift printing, graphic design, E-Citizen, and DHL services from{" "}
              <strong className="font-medium text-charcoal">Kipusa Prints</strong>,
              and calming everyday living essentials from{" "}
              <strong className="font-medium text-charcoal">Kipusa Home</strong>.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link href="/shop" className="btn btn-dark gap-2">
                <span>Shop Products</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/collections/kipusa-prints" className="btn btn-line-dark">
                Explore Kipusa Prints Services
              </Link>
            </div>

            {/* Quick Section Pills */}
            <div className="mt-10 border-t border-sand pt-6">
              <p className="eyebrow mb-3 text-[10px] text-olive">
                Explore by Business Division
              </p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {[
                  {
                    name: "Kipusa Beauty",
                    sub: "Oils, scrubs & body care",
                    href: "/collections/kipusa-beauty",
                  },
                  {
                    name: "Kipusa Prints",
                    sub: "Print, design, E-Citizen & DHL",
                    href: "/collections/kipusa-prints",
                  },
                  {
                    name: "Kipusa Home",
                    sub: "Candles, soaps & living",
                    href: "/collections/kipusa-home",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-xl border border-sand bg-white p-3.5 transition-all hover:border-forest hover:shadow-sm"
                  >
                    <p className="flex items-center justify-between font-serif text-lg font-medium text-charcoal group-hover:text-forest">
                      <span>{item.name}</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </p>
                    <p className="mt-0.5 text-xs text-charcoal/65">{item.sub}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Split Visual Showcase */}
          <div className="grid grid-cols-12 gap-4 lg:col-span-6">
            <div className="col-span-7 overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <Scene
                  kind="bottle"
                  tone={1}
                  seed={3}
                  image="https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1200&q=85"
                  alt="Kipusa Beauty botanical facial oils and body care"
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <p className="eyebrow text-[9px] text-olive">Kipusa Beauty</p>
                <p className="font-serif text-base text-charcoal sm:text-lg">
                  Botanical Oils, Scrubs &amp; Butters
                </p>
              </div>
            </div>

            <div className="col-span-5 flex flex-col justify-between gap-4">
              <Link
                href="/collections/kipusa-prints"
                className="group overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition-colors hover:border-forest"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Scene
                    kind="artisan"
                    tone={2}
                    seed={5}
                    image="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=85"
                    alt="Kipusa Prints services"
                  />
                </div>
                <div className="p-3">
                  <p className="eyebrow text-[9px] text-terracotta">
                    Kipusa Prints
                  </p>
                  <p className="font-serif text-sm text-charcoal group-hover:text-forest sm:text-base">
                    Printing, Design &amp; DHL
                  </p>
                </div>
              </Link>

              <Link
                href="/collections/kipusa-home"
                className="group overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition-colors hover:border-forest"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Scene
                    kind="candle"
                    tone={0}
                    seed={7}
                    image="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=85"
                    alt="Kipusa Home candles and lifestyle essentials"
                  />
                </div>
                <div className="p-3">
                  <p className="eyebrow text-[9px] text-olive">Kipusa Home</p>
                  <p className="font-serif text-sm text-charcoal group-hover:text-forest sm:text-base">
                    Candles &amp; Home Care
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
