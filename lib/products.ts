import type { SceneKind } from "@/components/Scene";

export type BusinessSectionSlug =
  | "kipusa-beauty"
  | "kipusa-prints"
  | "kipusa-home";

export type Variant = { label: string; price: number };

export type Product = {
  slug: string;
  name: string;
  sub: string;
  section: BusinessSectionSlug;
  sectionLabel: "Kipusa Beauty" | "Kipusa Prints" | "Kipusa Home";
  category: string;
  scene: SceneKind;
  tone: number;
  image: string;
  hoverImage: string;
  gallery: string[];
  badge?: string;
  actionType?: "cart" | "inquiry";
  isPlaceholder: boolean;
  variants: Variant[];
  description: string;
  details: string;
};

export type Collection = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  blurb: string;
  subcategories: string[];
  scene: SceneKind;
  tone: number;
  image: string;
  ctaLabel: string;
  isServiceDivision?: boolean;
};

export type PrintServiceItem = {
  id: string;
  title: string;
  summary: string;
  iconName:
    | "printer"
    | "copy"
    | "book"
    | "layers"
    | "user-check"
    | "globe";
  ctaText: string;
};

export type CustomPrintCategory = {
  title: string;
  items: string[];
  description: string;
};

export const kipusaPrintsServices: PrintServiceItem[] = [
  {
    id: "scanning-printing",
    title: "Scanning & Printing",
    summary:
      "We resolve all your everyday and commercial printing needs with crisp document and photo printing and high-resolution scanning.",
    iconName: "printer",
    ctaText: "Inquire about printing rates",
  },
  {
    id: "photocopy-services",
    title: "Photocopy Services",
    summary:
      "Our high-speed machines accommodate all types of documents and photos for clear, reliable single or bulk copies.",
    iconName: "copy",
    ctaText: "Inquire about photocopy rates",
  },
  {
    id: "lamination-binding",
    title: "Lamination & Binding",
    summary:
      "Preserve and present your reports, proposals, and certificates with durable lamination and neat document binding.",
    iconName: "book",
    ctaText: "Inquire about binding & lamination",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    summary:
      "Our in-house design team combines efficiency, creativity, and quality to prepare your layouts, branding, and artwork.",
    iconName: "layers",
    ctaText: "Start a graphic design brief",
  },
  {
    id: "ecitizen-services",
    title: "E-Citizen Services",
    summary:
      "All your E-Citizen needs in one convenient shop—fast assistance with online applications, renewals, and document printing.",
    iconName: "user-check",
    ctaText: "Get E-Citizen assistance",
  },
  {
    id: "dhl-authorized-agent",
    title: "DHL Authorized Agent",
    summary:
      "We help you deliver documents and packages with DHL—send anywhere in the world safely and swiftly.",
    iconName: "globe",
    ctaText: "Inquire about DHL dispatch",
  },
];

export const kipusaPrintsMetrics = [
  { value: "92 Hrs", label: "Per Week" },
  { value: "99%", label: "Efficiency" },
  { value: "100%", label: "Client Satisfaction" },
];

export const kipusaPrintsCustomSolutions: CustomPrintCategory[] = [
  {
    title: "Personalized Gifts & Keepsakes",
    items: ["Custom Mugs", "Photo Frames", "Printed Cushions"],
    description:
      "Turn cherished memories and artwork into thoughtful keepsakes for families, children, and special occasions.",
  },
  {
    title: "Custom Clothing & Apparel",
    items: ["Custom T-Shirts", "Branded Apparel", "Event Wear"],
    description:
      "Quality garment printing featuring custom designs, team logos, or creative illustrations.",
  },
  {
    title: "Stationery, Stickers & Publishing",
    items: ["Colourful Notebooks", "Custom Stickers", "Book Publishing"],
    description:
      "From personalized notebooks and sticker labels to short-run publishing for educators, authors, and creatives.",
  },
  {
    title: "Branded Business Materials",
    items: ["Marketing Collateral", "Signage & Banners", "Corporate Print"],
    description:
      "Professional branded materials that bring creativity and quality together for your organization.",
  },
];

export const collections: Collection[] = [
  {
    slug: "kipusa-beauty",
    name: "Kipusa Beauty",
    shortName: "Beauty",
    tagline: "Botanical Skincare & Personal Care",
    blurb:
      "Nourishing facial oils, exfoliating scrubs, whipped body butters, and gentle hair and skin essentials formulated for everyday rituals.",
    subcategories: [
      "Facial Oils & Serums",
      "Body Scrubs & Polishes",
      "Body Butters & Lotions",
      "Hair & Scalp Care",
    ],
    scene: "bottle",
    tone: 1,
    image:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1200&q=85",
    ctaLabel: "Shop Kipusa Beauty",
  },
  {
    slug: "kipusa-prints",
    name: "Kipusa Prints",
    shortName: "Prints",
    tagline: "Swift Printing, Design, E-Citizen & DHL Services",
    blurb:
      "Your one-stop service partner for scanning & printing, photocopying, lamination & binding, in-house graphic design, custom branded gifts, E-Citizen support, and worldwide DHL shipping.",
    subcategories: [
      "Scanning & Printing",
      "Photocopy, Lamination & Binding",
      "Graphic Design & Custom Gifts",
      "E-Citizen & DHL Authorized Agent",
    ],
    scene: "artisan",
    tone: 2,
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=85",
    ctaLabel: "Explore Kipusa Prints Services",
    isServiceDivision: true,
  },
  {
    slug: "kipusa-home",
    name: "Kipusa Home",
    shortName: "Home",
    tagline: "Home Fragrance, Living & Everyday Care",
    blurb:
      "Hand-poured scented candles, botanical room sprays, cold-process soaps, and thoughtful lifestyle pieces designed for calm, welcoming spaces.",
    subcategories: [
      "Scented Candles",
      "Room & Linen Mists",
      "Artisan Bar Soaps",
      "Surface & Home Care",
    ],
    scene: "candle",
    tone: 0,
    image:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=85",
    ctaLabel: "Shop Kipusa Home",
  },
];

export const products: Product[] = [
  // ============================================================================
  // 1. KIPUSA BEAUTY (Oils, Scrubs, Body Butters, Cleansers, Hair Care)
  // ============================================================================
  {
    slug: "rosehip-baobab-facial-oil",
    name: "Botanical Radiance Facial Oil",
    sub: "Rosehip & Baobab Oil Blend",
    section: "kipusa-beauty",
    sectionLabel: "Kipusa Beauty",
    category: "Facial Oils & Serums",
    scene: "bottle",
    tone: 1,
    badge: "Kipusa Beauty",
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "30ml Dropper", price: 1850 },
      { label: "50ml Dropper", price: 2650 },
    ],
    description:
      "A lightweight, fast-absorbing facial oil formulated with cold-pressed rosehip and baobab oils for daily moisture and a soft, natural glow. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: Cold-pressed botanical oil blend in UV-protective amber glass dropper bottle. Ready to be updated with final Kipusa Beauty SKU details.",
  },
  {
    slug: "honey-oat-exfoliating-scrub",
    name: "Gentle Exfoliating Body & Face Scrub",
    sub: "Colloidal Oat & Raw Honey Polish",
    section: "kipusa-beauty",
    sectionLabel: "Kipusa Beauty",
    category: "Body Scrubs & Polishes",
    scene: "soap",
    tone: 2,
    badge: "Kipusa Beauty",
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "150g Glass Jar", price: 1450 },
      { label: "250g Glass Jar", price: 2100 },
    ],
    description:
      "Finely milled oat kernel and botanical oils gently buff away surface dryness, leaving skin smooth and comfortable. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: Gentle cream-to-milk exfoliating scrub. Placeholder entry for Kipusa Beauty catalogue.",
  },
  {
    slug: "whipped-shea-body-butter",
    name: "Velvet Whipped Body Butter",
    sub: "Shea Butter & Sweet Almond",
    section: "kipusa-beauty",
    sectionLabel: "Kipusa Beauty",
    category: "Body Butters & Lotions",
    scene: "bottle",
    tone: 4,
    badge: "Kipusa Beauty",
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "200g Jar", price: 1750 },
      { label: "350g Jar", price: 2800 },
    ],
    description:
      "Rich, airy whipped shea body butter that melts smoothly into warm skin after a bath or shower for lasting softness. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: Unrefined shea butter and sweet almond oil blend in wide-mouth jar. Placeholder entry for Kipusa Beauty.",
  },
  {
    slug: "golden-botanical-body-oil",
    name: "Nourishing Botanical Body Oil",
    sub: "Marula, Jojoba & Sweet Orange",
    section: "kipusa-beauty",
    sectionLabel: "Kipusa Beauty",
    category: "Facial Oils & Serums",
    scene: "bottle",
    tone: 2,
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "100ml Pump Bottle", price: 1950 },
      { label: "200ml Pump Bottle", price: 3200 },
    ],
    description:
      "A satin-finish body oil designed to lock in moisture immediately after showering while leaving a delicate citrus-botanical scent. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: Cold-pressed botanical body oil with pump dispenser. Placeholder entry for Kipusa Beauty.",
  },
  {
    slug: "rosemary-moringa-hair-oil",
    name: "Nourishing Scalp & Hair Oil",
    sub: "Rosemary, Moringa & Castor Oil",
    section: "kipusa-beauty",
    sectionLabel: "Kipusa Beauty",
    category: "Hair & Scalp Care",
    scene: "bottle",
    tone: 3,
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "50ml Pipette", price: 1550 },
      { label: "100ml Pipette", price: 2500 },
    ],
    description:
      "A soothing pre-wash scalp and hair conditioning oil formulated with moringa, castor, and rosemary leaf oil. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: Pipette applicator bottle for scalp and hair care rituals. Placeholder entry for Kipusa Beauty.",
  },
  {
    slug: "raw-cane-sugar-body-scrub",
    name: "Botanical Sugar Body Scrub",
    sub: "Raw Cane Sugar & Shea Oil",
    section: "kipusa-beauty",
    sectionLabel: "Kipusa Beauty",
    category: "Body Scrubs & Polishes",
    scene: "soap",
    tone: 1,
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "250g Jar", price: 1600 }],
    description:
      "Exfoliating sugar crystals suspended in whipped plant oils to polish rough skin and rinse clean with warm water. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: 250g body scrub jar. Placeholder entry for Kipusa Beauty.",
  },

  // ============================================================================
  // 2. KIPUSA HOME (Candles, Room Mists, Soaps, Lifestyle & Home Care)
  // ============================================================================
  {
    slug: "wild-grasses-candle",
    name: "Botanical Soy Scented Candle",
    sub: "Warm Grasses, Cedar & Vetiver",
    section: "kipusa-home",
    sectionLabel: "Kipusa Home",
    category: "Scented Candles",
    scene: "candle",
    tone: 2,
    badge: "Kipusa Home",
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "200g Single Wick", price: 2400 },
      { label: "450g Double Wick", price: 4600 },
    ],
    description:
      "A clean-burning soy wax candle poured into a reusable vessel, filling living spaces with grounded notes of cedar, vetiver, and warm amber. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: Soy wax blend with unbleached cotton wick. Placeholder entry for Kipusa Home.",
  },
  {
    slug: "botanical-linen-room-mist",
    name: "Botanical Room & Linen Mist",
    sub: "Lemongrass, Eucalyptus & White Tea",
    section: "kipusa-home",
    sectionLabel: "Kipusa Home",
    category: "Room & Linen Mists",
    scene: "bottle",
    tone: 0,
    badge: "Kipusa Home",
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "150ml Glass Atomizer", price: 1650 }],
    description:
      "Refresh bedding, curtains, and living spaces with a fine mist of crisp lemongrass, eucalyptus leaf, and soft herbal notes. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: 150ml amber glass spray bottle. Placeholder entry for Kipusa Home.",
  },
  {
    slug: "natural-soap-aloe-avocado",
    name: "Cold-Process Artisan Soap Bar",
    sub: "Aloe Vera, Avocado & Olive Oil",
    section: "kipusa-home",
    sectionLabel: "Kipusa Home",
    category: "Artisan Bar Soaps",
    scene: "soap",
    tone: 0,
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "120g Bar", price: 750 },
      { label: "Set of 3 Bars", price: 2000 },
    ],
    description:
      "Traditional cold-process soap bars for sink and bath, formulated with plant oils for a creamy, non-drying lather. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: 120g cured bar soap. Placeholder entry for Kipusa Home.",
  },
  {
    slug: "hand-wash-cedar-orange",
    name: "Botanical Foaming Hand Wash",
    sub: "Sweet Orange Peel & Cedarwood",
    section: "kipusa-home",
    sectionLabel: "Kipusa Home",
    category: "Surface & Home Care",
    scene: "bottle",
    tone: 2,
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "300ml Dispenser", price: 1500 },
      { label: "500ml Refill", price: 2200 },
    ],
    description:
      "Gentle plant-based hand wash for kitchen and bath sinks, scented with bright orange peel and warm cedar. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: 300ml pump bottle and 500ml refill pouch. Placeholder entry for Kipusa Home.",
  },
  {
    slug: "amber-vessel-reed-diffuser",
    name: "Botanical Reed Diffuser Set",
    sub: "Sandalwood, Fig & Warm Clove",
    section: "kipusa-home",
    sectionLabel: "Kipusa Home",
    category: "Home Fragrance",
    scene: "candle",
    tone: 4,
    actionType: "cart",
    isPlaceholder: true,
    image:
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&w=900&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "150ml + Rattan Reeds", price: 2650 }],
    description:
      "Continuous, flame-free scent diffusion presented in a minimalist glass apothecary bottle with natural rattan reeds. (Phase 1 sample catalogue item.)",
    details:
      "Sample specification: 150ml diffuser vessel with 8 rattan reeds. Placeholder entry for Kipusa Home.",
  },
];

export const featured = products.slice(0, 8);

export const getProductsBySection = (section: BusinessSectionSlug) =>
  products.filter((p) => p.section === section);

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getCollection = (slug: string) =>
  collections.find((c) => c.slug === slug);

export const fromPrice = (p: Product) =>
  Math.min(...p.variants.map((v) => v.price));

export const formatKSh = (n: number) => "KSh " + n.toLocaleString("en-KE");

export const fullName = (p: Product) =>
  p.sub ? `${p.name} — ${p.sub}` : p.name;
