import EditorialSection from "@/components/EditorialSection";
import BrandStory from "@/components/BrandStory";
import Scene from "@/components/Scene";

export const metadata = { title: "Our story — Organic Savanna" };

export default function About() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
        <Scene
          kind="dusk"
          tone={2}
          seed={9}
          image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85"
          alt="Kenyan savanna at dusk"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-16 text-cream md:pb-24">
          <p className="eyebrow mb-5">Our story</p>
          <h1 className="display h-xl uppercase">Rooted in Kenya</h1>
        </div>
      </section>
      <BrandStory />
      <EditorialSection
        eyebrow="Our people"
        heading="Handmade by artisans"
        body="Our team cuts, pours and packs every order by hand, in a workshop where fair pay, training and flexibility come first."
        cta="Shop the collection"
        href="/shop"
        scene="artisan"
        tone={4}
        seed={11}
        image="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=85"
      />
      <EditorialSection
        flip
        bg="bg-beige"
        eyebrow="Our promise"
        heading="30% back to community"
        body="Thirty percent of profits are reinvested into social good projects, chosen together with the communities we work alongside."
        cta="Shop now"
        href="/shop"
        scene="savanna"
        tone={0}
        seed={4}
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
      />
    </>
  );
}
