import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/ProductGrid";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  return (
    <>
      <ProductDetail p={p} />
      <ProductGrid title="You may also love" items={products.filter((x) => x.slug !== p.slug).slice(0, 4)} showLink={false} />
    </>
  );
}
