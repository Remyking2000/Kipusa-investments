import { Reveal } from "./Reveal";

const press = ["Vogue", "Condé Nast Traveler", "Business Daily", "Africa Report", "Elle Décor", "The Standard"];

export default function Awards() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="wrap">
        <Reveal><p className="eyebrow mb-12 text-center text-olive">Features + Awards</p></Reveal>
        <Reveal delay={0.15}>
          <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 md:gap-x-20">
            {press.map((p) => (
              <li key={p} className="font-serif text-2xl font-light italic text-bark/55 transition-colors duration-500 hover:text-bark md:text-3xl">{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
