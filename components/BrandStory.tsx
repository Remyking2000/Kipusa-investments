import Link from "next/link";
import { Reveal, Stagger } from "./Reveal";

export default function BrandStory() {
  return (
    <section className="section bg-beige">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-2">
          <Reveal>
            <p className="eyebrow text-olive">Our Philosophy</p>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-4">
          <h2 className="display h-xl">
            <Stagger text="Thoughtfully crafted for skin, print & everyday living" />
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-8">
          <Reveal delay={0.2}>
            <p className="text-[15px] leading-[1.95] text-charcoal/75">
              Kipusa Limited brings together three dedicated divisions under one
              roof: nourishing botanical oils, scrubs and body care at{" "}
              <strong>Kipusa Beauty</strong>; swift document printing, graphic
              design, custom gifts, E-Citizen and DHL services at{" "}
              <strong>Kipusa Prints</strong>; and hand-poured candles, soaps and
              living essentials at <strong>Kipusa Home</strong>.
            </p>
            <Link href="/about" className="link-u mt-10">
              Learn more
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
