import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Scene from "@/components/Scene";
import { collections } from "@/lib/products";

export const metadata = {
  title: "About Kipusa Limited — Kipusa Beauty, Kipusa Prints & Kipusa Home",
};

export default function About() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="border-b border-sand bg-beige/60 py-14 md:py-20">
        <div className="wrap max-w-4xl text-center">
          <p className="eyebrow mb-3 text-olive">About Kipusa Limited</p>
          <h1 className="display h-xl text-charcoal">
            Three divisions crafted for everyday beauty, print &amp; living.
          </h1>
          <p className="mx-auto mt-5 max-w-[60ch] text-base leading-relaxed text-charcoal/75 md:text-lg">
            <strong>Kipusa Limited</strong> operates across three specialized
            business sections—bringing together personal care products, custom
            packaging and commercial printing, and calming home essentials.
          </p>
        </div>
      </section>

      {/* Three Business Divisions Breakdown */}
      <section className="section wrap space-y-12">
        {collections.map((c, idx) => (
          <div
            key={c.slug}
            className="grid items-center gap-8 rounded-2xl border border-sand bg-white p-6 shadow-xs md:grid-cols-12 md:p-10"
          >
            <div
              className={`md:col-span-5 ${
                idx % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div className="aspect-[16/11] overflow-hidden rounded-xl bg-beige">
                <Scene
                  kind={c.scene}
                  tone={c.tone}
                  seed={idx + 3}
                  image={c.image}
                  alt={c.name}
                />
              </div>
            </div>

            <div
              className={`md:col-span-7 ${
                idx % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <p className="eyebrow text-[10px] text-olive">{c.tagline}</p>
              <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">
                {c.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75 sm:text-base">
                {c.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.subcategories.map((sub) => (
                  <span
                    key={sub}
                    className="rounded-md bg-beige px-3 py-1 text-xs text-charcoal/80"
                  >
                    {sub}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/collections/${c.slug}`}
                  className="btn btn-dark gap-2"
                >
                  <span>{c.ctaLabel}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
