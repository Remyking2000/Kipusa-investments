import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="section border-y border-sand bg-beige/55">
      <div className="wrap grid items-center gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-3 text-olive">About Kipusa Limited</p>
          <h2 className="display h-lg text-charcoal">
            One brand family across personal care, print &amp; home living.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-charcoal/80">
            <strong>Kipusa Limited</strong> brings together three complementary
            business sections under one cohesive roof:{" "}
            <strong>Kipusa Beauty</strong> for botanical skincare and personal
            care, <strong>Kipusa Prints</strong> for custom packaging, labels,
            and commercial print collateral, and <strong>Kipusa Home</strong>{" "}
            for everyday home fragrance and lifestyle essentials.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/about" className="btn btn-line-dark">
              Learn About Kipusa
            </Link>
            <Link href="/contact" className="btn btn-dark">
              Contact &amp; Inquiries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
