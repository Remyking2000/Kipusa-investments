"use client";
import { useId, useState } from "react";

export type SceneKind =
  | "savanna"
  | "dusk"
  | "botanical"
  | "soap"
  | "bottle"
  | "candle"
  | "artisan"
  | "texture";

const DEFAULT_KIND_IMAGES: Record<SceneKind, string[]> = {
  savanna: [
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85",
  ],
  dusk: [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85",
  ],
  botanical: [
    "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  ],
  artisan: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85",
  ],
  soap: [
    "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=1200&q=85",
  ],
  bottle: [
    "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=85",
  ],
  candle: [
    "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85",
  ],
  texture: [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
  ],
};

const tones = [
  { bg: "#E6DAC3", bg2: "#D8C7A6", ink: "#7A7B54", ink2: "#2E3A2C", accent: "#A5543A" },
  { bg: "#D9D5BC", bg2: "#BFC0A0", ink: "#55603F", ink2: "#2E3A2C", accent: "#8C6A45" },
  { bg: "#E9D8BE", bg2: "#D4B48E", ink: "#8C5A3C", ink2: "#4A3B2C", accent: "#A5543A" },
  { bg: "#DDD7C4", bg2: "#C4BEA4", ink: "#6C7050", ink2: "#3A4433", accent: "#B08A5A" },
  { bg: "#E4D2B8", bg2: "#CDB08C", ink: "#6B5A3C", ink2: "#3B3226", accent: "#7A7B54" },
];

function rand(seed: number) {
  let s = seed * 9301 + 49297;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}

export default function Scene({
  kind,
  tone = 0,
  seed = 1,
  image,
  alt = "",
  className = "",
}: {
  kind: SceneKind;
  tone?: number;
  seed?: number;
  image?: string;
  alt?: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const id = useId().replace(/:/g, "");
  const t = tones[tone % tones.length];
  const r = rand(seed + tone * 7);
  const W = 1000,
    H = 1000;

  const fallbackPool = DEFAULT_KIND_IMAGES[kind] || DEFAULT_KIND_IMAGES.bottle;
  const resolvedImage =
    image || fallbackPool[Math.abs(seed + tone) % fallbackPool.length];

  if (resolvedImage && !imgError) {
    return (
      <img
        src={resolvedImage}
        alt={alt}
        loading="lazy"
        onError={() => setImgError(true)}
        className={`h-full w-full object-cover object-center ${className}`}
      />
    );
  }

  const wrap = (children: React.ReactNode, defs?: React.ReactNode) => (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <filter id={`g${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.09 0" />
        </filter>
        {defs}
      </defs>
      {children}
      <rect width={W} height={H} filter={`url(#g${id})`} />
    </svg>
  );

  if (kind === "savanna" || kind === "dusk") {
    const dusk = kind === "dusk";
    const sky1 = dusk ? "#E2A978" : "#EFE0C0";
    const sky2 = dusk ? "#C97B52" : "#E4C99B";
    const hills = [
      { y: 600, c: dusk ? "#A8683F" : "#C9B58A" },
      { y: 680, c: dusk ? "#7D5036" : "#A9A079" },
      { y: 770, c: dusk ? "#4F3A2A" : "#7A7B54" },
      { y: 860, c: dusk ? "#2F2A20" : "#4F5A3C" },
    ];
    const acacia = (x: number, y: number, s: number, c: string) => (
      <g transform={`translate(${x} ${y}) scale(${s})`} fill={c}>
        <path d="M-4 0 C-6 -60 -2 -110 -10 -150 L10 -150 C4 -110 8 -60 4 0Z" />
        <ellipse cx="0" cy="-165" rx="150" ry="26" />
        <ellipse cx="-70" cy="-148" rx="80" ry="18" />
        <ellipse cx="75" cy="-150" rx="85" ry="18" />
      </g>
    );
    return wrap(
      <>
        <rect width={W} height={H} fill={`url(#sky${id})`} />
        <circle
          cx={620 + r() * 80}
          cy={dusk ? 520 : 400}
          r={dusk ? 120 : 80}
          fill={dusk ? "#F4D3A0" : "#FAF1D8"}
          opacity={0.95}
        />
        {hills.map((h, i) => (
          <path
            key={i}
            d={`M0 ${h.y} C250 ${h.y - 50 - r() * 40} 500 ${h.y + 20} 750 ${
              h.y - 30
            } S1000 ${h.y} 1000 ${h.y - 10} V1000 H0Z`}
            fill={h.c}
          />
        ))}
        {acacia(260 + r() * 60, 790, 1.4, dusk ? "#241E17" : "#3C4630")}
        {acacia(760, 700, 0.6, dusk ? "#3A2C20" : "#6B6F4B")}
      </>,
      <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={sky1} />
        <stop offset="1" stopColor={sky2} />
      </linearGradient>
    );
  }

  return wrap(
    <>
      <rect width={W} height={H} fill={t.bg} />
      <rect y={760} width={W} height={240} fill={t.bg2} />
      <rect x={410} y={318} width={180} height={470} rx={26} fill={t.accent} opacity={0.88} />
    </>
  );
}
