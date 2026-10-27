import Link from "next/link";
import { Reveal, Stagger } from "./Reveal";

export default function BrandStory() {
  return (
    <section className="section bg-beige">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-2"><Reveal><p className="eyebrow text-olive">Our belief</p></Reveal></div>
        <div className="md:col-span-7 md:col-start-4">
          <h2 className="display h-xl"><Stagger text="A different way of doing business" /></h2>
        </div>
        <div className="md:col-span-4 md:col-start-8">
          <Reveal delay={0.2}>
            <p className="text-[15px] leading-[1.95] text-charcoal/75">
              We believe products should be made well, and made in a way that empowers the people behind them. Every bar, bottle and candle is crafted in Kenya by a growing team of artisans, using ingredients sourced fairly from local growers. Thirty percent of our profits are reinvested into community projects, from clean water to schooling.
            </p>
            <Link href="/about" className="link-u mt-10">Learn more</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
