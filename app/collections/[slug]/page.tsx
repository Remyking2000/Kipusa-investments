import { notFound } from "next/navigation";
import Link from "next/link";
import Scene from "@/components/Scene";
import CollectionCatalog from "@/components/CollectionCatalog";
import {
  collections,
  getCollection,
  products,
} from "@/lib/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCollection(params.slug);
  if (!c) notFound();

  const items = products.filter((p) => p.section === c.slug);

  return (
    <>
      {/* Division Hero Header */}
      <section className="relative overflow-hidden border-b border-sand bg-beige/60 py-12 md:py-16">
        <div className="wrap grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-2 text-olive">
              Kipusa Limited · {c.tagline}
            </p>
            <h1 className="display h-xl text-charcoal">{c.name}</h1>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-charcoal/75">
              {c.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {collections.map((other) => (
                <Link
                  key={other.slug}
                  href={`/collections/${other.slug}`}
                  className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
                    other.slug === c.slug
                      ? "bg-forest text-cream"
                      : "border border-sand bg-white text-charcoal hover:border-forest"
                  }`}
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
              <Scene
                kind={c.scene}
                tone={c.tone}
                seed={7}
                image={c.image}
                alt={c.name}
              />
            </div>
          </div>
        </div>
      </section>

      <CollectionCatalog collection={c} items={items} />
    </>
  );
}
