import Link from "next/link";
import Scene, { type SceneKind } from "./Scene";
import { ImageReveal, Reveal, Stagger } from "./Reveal";

type Props = {
  eyebrow: string;
  heading: string;
  body?: string;
  cta: string;
  href: string;
  scene: SceneKind;
  tone?: number;
  seed?: number;
  image?: string;
  flip?: boolean;
  inset?: { scene: SceneKind; tone?: number; seed?: number; image?: string };
  bg?: string;
};

export default function EditorialSection({
  eyebrow,
  heading,
  body,
  cta,
  href,
  scene,
  tone = 0,
  seed = 1,
  image,
  flip,
  inset,
  bg = "bg-cream",
}: Props) {
  return (
    <section className={`${bg} section`}>
      <div className="wrap grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-14">
        <div
          className={`relative md:col-span-7 ${
            flip ? "md:order-2 md:col-start-6" : ""
          }`}
        >
          <ImageReveal className="zoom aspect-[4/5] w-full md:aspect-[5/6]">
            <div className="zoomable h-full w-full transition-transform duration-[1400ms] ease-soft">
              <Scene
                kind={scene}
                tone={tone}
                seed={seed}
                image={image}
                alt={heading}
              />
            </div>
          </ImageReveal>
          {inset && (
            <div
              className={`absolute -bottom-10 hidden w-[34%] md:block ${
                flip ? "-left-12" : "-right-12"
              }`}
            >
              <ImageReveal className="aspect-[3/4] border-[10px] border-cream">
                <Scene
                  kind={inset.scene}
                  tone={inset.tone}
                  seed={inset.seed}
                  image={inset.image}
                  alt={eyebrow}
                />
              </ImageReveal>
            </div>
          )}
        </div>
        <div
          className={`md:col-span-4 ${
            flip
              ? "md:order-1 md:col-start-1 md:pr-6"
              : "md:col-start-9 md:pl-2"
          }`}
        >
          <Reveal>
            <p className="eyebrow mb-6 text-olive">{eyebrow}</p>
          </Reveal>
          <h2 className="display h-lg">
            <Stagger text={heading} />
          </h2>
          {body && (
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-[40ch] text-[15px] leading-[1.9] text-charcoal/75">
                {body}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.3} className="mt-10 md:mt-12">
            <Link href={href} className="btn btn-line-dark">
              {cta}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
