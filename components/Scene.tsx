import { useId } from "react";

export type SceneKind = "savanna" | "dusk" | "botanical" | "soap" | "bottle" | "candle" | "artisan" | "texture";

/* Original, procedurally drawn art in the brand palette. Each scene fills its
   container (object-fit: cover behaviour via preserveAspectRatio slice).
   Swap for photography by passing `src` to <Photo/> in components/Photo.tsx. */

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

export default function Scene({ kind, tone = 0, seed = 1, className = "" }: { kind: SceneKind; tone?: number; seed?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  const t = tones[tone % tones.length];
  const r = rand(seed + tone * 7);
  const W = 1000, H = 1000;
  const wrap = (children: React.ReactNode, defs?: React.ReactNode) => (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`} aria-hidden>
      <defs>
        <filter id={`g${id}`}><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" /><feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.09 0" /></filter>
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
        <circle cx={620 + r() * 80} cy={dusk ? 520 : 400} r={dusk ? 120 : 80} fill={dusk ? "#F4D3A0" : "#FAF1D8"} opacity={0.95} />
        {hills.map((h, i) => (
          <path key={i} d={`M0 ${h.y} C250 ${h.y - 50 - r() * 40} 500 ${h.y + 20} 750 ${h.y - 30} S1000 ${h.y} 1000 ${h.y - 10} V1000 H0Z`} fill={h.c} />
        ))}
        {acacia(260 + r() * 60, 790, 1.4, dusk ? "#241E17" : "#3C4630")}
        {acacia(760, 700, 0.6, dusk ? "#3A2C20" : "#6B6F4B")}
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M${120 + i * 30} 1000 q10 -90 ${r() * 30 - 10} -140`} stroke={dusk ? "#1E1A14" : "#3C4630"} strokeWidth="3" fill="none" />
        ))}
      </>,
      <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky1} /><stop offset="1" stopColor={sky2} /></linearGradient>,
    );
  }

  if (kind === "botanical") {
    const leaves = Array.from({ length: 9 }).map((_, i) => {
      const x = 100 + i * 100 + r() * 40;
      const h = 380 + r() * 360;
      const lean = (r() - 0.5) * 160;
      return { x, h, lean, hue: i % 3 };
    });
    const cols = [t.ink, t.ink2, "#8A8D63"];
    return wrap(
      <>
        <rect width={W} height={H} fill={t.bg} />
        <rect y={640} width={W} height={360} fill={t.bg2} />
        {leaves.map((l, i) => (
          <g key={i}>
            <path d={`M${l.x} 1000 Q${l.x + l.lean / 2} ${1000 - l.h / 2} ${l.x + l.lean} ${1000 - l.h}`} stroke={cols[l.hue]} strokeWidth="4" fill="none" />
            {Array.from({ length: 7 }).map((_, j) => {
              const f = (j + 1) / 8;
              const px = l.x + l.lean * f * f;
              const py = 1000 - l.h * f;
              const side = j % 2 ? 1 : -1;
              return <path key={j} d={`M${px} ${py} q${side * 70} -40 ${side * 110} ${-8 - r() * 24} q${-side * 50} 50 ${-side * 110} 8Z`} fill={cols[(l.hue + j) % 3]} opacity={0.88} />;
            })}
          </g>
        ))}
        <circle cx={820} cy={230} r={90} fill={t.accent} opacity={0.75} />
      </>,
    );
  }

  if (kind === "artisan") {
    return wrap(
      <>
        <rect width={W} height={H} fill={t.bg} />
        <rect y={620} width={W} height={380} fill={t.ink2} opacity={0.9} />
        <circle cx={500} cy={360} r={110} fill="#6B4A36" />
        <path d="M290 1000 C300 700 380 540 500 540 S700 700 710 1000Z" fill={t.accent} />
        <path d="M380 700 C440 760 560 760 620 700" stroke="#E9D8BE" strokeWidth="14" fill="none" />
        <rect x={120} y={520} width={170} height={120} rx={4} fill={t.bg2} />
        <rect x={720} y={470} width={170} height={170} rx={4} fill={t.ink} opacity={0.8} />
      </>,
    );
  }

  if (kind === "texture") {
    return wrap(
      <>
        <rect width={W} height={H} fill={t.bg} />
        {Array.from({ length: 18 }).map((_, i) => (
          <path key={i} d={`M-20 ${i * 60} C250 ${i * 60 - 70 + r() * 80} 650 ${i * 60 + 60 - r() * 80} 1020 ${i * 60}`} stroke={i % 2 ? t.ink : t.bg2} strokeWidth={10 + r() * 14} fill="none" opacity={0.55} />
        ))}
      </>,
    );
  }

  /* product still lifes */
  const shadow = <ellipse cx={500} cy={800} rx={210} ry={22} fill="#2A2925" opacity={0.18} />;
  const backdrop = (
    <>
      <rect width={W} height={H} fill={t.bg} />
      <rect y={760} width={W} height={240} fill={t.bg2} />
      <path d={`M${650 + r() * 60} 0 Q780 ${180 + r() * 60} 1000 ${120 + r() * 60} V0Z`} fill={t.bg2} opacity={0.45} />
    </>
  );

  if (kind === "soap") {
    return wrap(
      <>
        {backdrop}
        {shadow}
        <g transform="rotate(-8 500 640)">
          <rect x={290} y={560} width={420} height={210} rx={14} fill={t.ink} />
          <rect x={290} y={560} width={420} height={44} rx={14} fill="#fff" opacity={0.12} />
          <rect x={390} y={640} width={220} height={4} fill="#F6F1E7" opacity={0.5} />
          <rect x={430} y={664} width={140} height={4} fill="#F6F1E7" opacity={0.35} />
        </g>
        <g transform="rotate(6 540 470)">
          <rect x={360} y={380} width={360} height={180} rx={14} fill={t.accent} opacity={0.92} />
          <rect x={360} y={380} width={360} height={36} rx={14} fill="#fff" opacity={0.14} />
        </g>
        <path d="M120 780 q20 -140 -10 -260 q70 90 40 260Z" fill={t.ink2} opacity={0.8} />
        <path d="M170 780 q60 -120 130 -150 q-30 90 -130 150Z" fill={t.ink} opacity={0.8} />
      </>,
    );
  }
  if (kind === "candle") {
    return wrap(
      <>
        {backdrop}
        {shadow}
        <rect x={360} y={470} width={280} height={320} rx={10} fill={t.ink2} />
        <rect x={360} y={470} width={280} height={40} rx={10} fill="#fff" opacity={0.1} />
        <rect x={372} y={470} width={256} height={26} fill="#F1E4C8" />
        <rect x={497} y={430} width={6} height={42} fill="#2A2925" />
        <path d="M500 330 C470 380 475 425 500 430 C525 425 530 380 500 330Z" fill="#F2B866" />
        <path d="M500 370 C488 395 490 420 500 424 C510 420 512 395 500 370Z" fill="#FBE7B2" />
        <rect x={415} y={600} width={170} height={90} fill="#F6F1E7" opacity={0.9} />
        <rect x={435} y={625} width={130} height={5} fill={t.ink2} opacity={0.7} />
        <rect x={455} y={645} width={90} height={4} fill={t.ink2} opacity={0.5} />
      </>,
    );
  }
  // bottle
  return wrap(
    <>
      {backdrop}
      {shadow}
      <rect x={455} y={250} width={90} height={70} rx={6} fill={t.ink2} />
      <rect x={470} y={215} width={60} height={42} rx={4} fill={t.ink2} />
      <rect x={410} y={318} width={180} height={470} rx={26} fill={t.accent} opacity={0.88} />
      <rect x={426} y={332} width={26} height={430} rx={13} fill="#fff" opacity={0.15} />
      <rect x={430} y={480} width={140} height={190} fill="#F6F1E7" />
      <rect x={452} y={512} width={96} height={6} fill={t.ink2} />
      <rect x={462} y={534} width={76} height={4} fill={t.ink2} opacity={0.6} />
      <rect x={470} y={606} width={60} height={4} fill={t.ink2} opacity={0.4} />
      <path d="M760 790 q-20 -170 20 -330 q60 150 -20 330Z" fill={t.ink} opacity={0.75} />
      <path d="M810 790 q40 -110 110 -140 q-20 100 -110 140Z" fill={t.ink2} opacity={0.7} />
    </>,
  );
}
