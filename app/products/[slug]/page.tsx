import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/ProductGrid";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const related = products
    .filter((x) => x.slug !== p.slug && x.section === p.section)
    .concat(
      products.filter((x) => x.slug !== p.slug && x.section !== p.section)
    )
    .slice(0, 4);

  return (
    <>
      <ProductDetail p={p} />
      <ProductGrid
        bg="bg-beige/45"
        eyebrow={p.sectionLabel}
        title={`More from ${p.sectionLabel}`}
        items={related}
        linkHref={`/collections/${p.section}`}
        linkLabel={`View all ${p.sectionLabel}`}
      />
    </>
  );
}
