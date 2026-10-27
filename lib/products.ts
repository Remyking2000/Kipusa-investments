import type { SceneKind } from "@/components/Scene";

export type Variant = { label: string; price: number };
export type Product = {
  slug: string;
  name: string;
  sub: string;
  category: string;
  scene: SceneKind;
  tone: number;
  variants: Variant[];
  rating: number;
  reviews: number;
  description: string;
  ingredients: string;
};

export type Collection = { slug: string; name: string; blurb: string; scene: SceneKind; tone: number };

export const collections: Collection[] = [
  { slug: "bath-body-skincare", name: "Bath, Body & Skincare", blurb: "Lotions, washes and butters made with shea, macadamia and wild botanicals.", scene: "bottle", tone: 1 },
  { slug: "hair-care", name: "Hair Care", blurb: "Shampoos and conditioners for scalp and strand, free of harsh sulphates.", scene: "bottle", tone: 3 },
  { slug: "soaps", name: "All-natural Soaps", blurb: "Cold-process bars, cut and cured by hand in small batches.", scene: "soap", tone: 0 },
  { slug: "candles", name: "Hand-poured Candles", blurb: "Soy wax candles scented with the grasses and woods of the savanna.", scene: "candle", tone: 2 },
  { slug: "gift-kits", name: "Gift Kits", blurb: "Considered sets, wrapped in recycled paper and kanga cloth.", scene: "soap", tone: 4 },
  { slug: "home-care", name: "Home Care", blurb: "Everyday cleaners and hand washes, kind to hands and to water.", scene: "bottle", tone: 2 },
];

export const products: Product[] = [
  {
    slug: "natural-soap-aloe-avocado", name: "Natural Soap", sub: "Aloe + Avocado", category: "soaps", scene: "soap", tone: 0,
    variants: [{ label: "120g bar", price: 980 }, { label: "Set of 3", price: 2700 }], rating: 4.9, reviews: 62,
    description: "A gentle bar cured for six weeks. Cool aloe and cold-pressed avocado oil leave skin soft, never tight.",
    ingredients: "Saponified olive, coconut and avocado oils, aloe vera, shea butter, essential oils.",
  },
  {
    slug: "hand-wash-cedar-orange", name: "Hand Wash", sub: "Cedar + Orange", category: "home-care", scene: "bottle", tone: 2,
    variants: [{ label: "300ml", price: 2000 }, { label: "500ml refill", price: 2800 }], rating: 4.8, reviews: 41,
    description: "A softly foaming wash with warm cedar and bright orange peel. Plant-derived cleansers, nothing stripping.",
    ingredients: "Coconut-derived cleansers, glycerin, orange peel oil, cedarwood oil, aloe.",
  },
  {
    slug: "lotion-palmarosa-shea-macadamia", name: "Lotion", sub: "Palmarosa + Shea + Macadamia", category: "bath-body-skincare", scene: "bottle", tone: 1,
    variants: [{ label: "250ml", price: 3000 }, { label: "500ml", price: 5200 }], rating: 5, reviews: 88,
    description: "A rich yet quick-absorbing body lotion, made with shea from northern Kenya and macadamia from the highlands.",
    ingredients: "Shea butter, macadamia oil, palmarosa, aloe, vitamin E.",
  },
  {
    slug: "shower-set", name: "Shower Set", sub: "Shampoo · Conditioner · Bodywash", category: "gift-kits", scene: "bottle", tone: 3,
    variants: [{ label: "Trio", price: 5500 }], rating: 4.7, reviews: 29,
    description: "Our three shower essentials, together in a recycled-paper box. A gift that is easy to give and easy to love.",
    ingredients: "See individual products.",
  },
  {
    slug: "body-wash-cedarwood-basil", name: "Body Wash", sub: "Cedarwood + Basil", category: "bath-body-skincare", scene: "bottle", tone: 4,
    variants: [{ label: "300ml", price: 2000 }, { label: "500ml", price: 3200 }], rating: 4.8, reviews: 53,
    description: "Green, woody and grounding. A creamy wash that cleanses without leaving skin dry.",
    ingredients: "Coconut-derived cleansers, glycerin, cedarwood, basil, aloe.",
  },
  {
    slug: "wild-grasses-candle", name: "Wild Grasses Scented Candle", sub: "Small tin", category: "candles", scene: "candle", tone: 2,
    variants: [{ label: "200g", price: 4500 }], rating: 4.9, reviews: 37,
    description: "Warm dry grass, pale musk and a thread of smoke. Hand-poured in Nairobi, burns for 40 hours.",
    ingredients: "Soy wax, cotton wick, fragrance and essential oils.",
  },
  {
    slug: "wild-grasses-candle-large", name: "Wild Grasses Scented Candle", sub: "Large vessel", category: "candles", scene: "candle", tone: 0,
    variants: [{ label: "600g", price: 10800 }], rating: 5, reviews: 19,
    description: "The same savanna scent in a larger, three-wick vessel made for living rooms.",
    ingredients: "Soy wax, cotton wicks, fragrance and essential oils.",
  },
  {
    slug: "shampoo-conditioner-duo", name: "Shampoo + Conditioner Duo", sub: "Rosemary + Baobab", category: "hair-care", scene: "bottle", tone: 3,
    variants: [{ label: "2 × 300ml", price: 3600 }], rating: 4.8, reviews: 47,
    description: "A pairing for strong, shiny hair. Rosemary for the scalp, baobab oil for the lengths.",
    ingredients: "Plant cleansers, baobab oil, rosemary, aloe, panthenol.",
  },
  {
    slug: "savanna-gift-kit", name: "Savanna Gift Kit", sub: "Soap · Lotion · Candle", category: "gift-kits", scene: "soap", tone: 4,
    variants: [{ label: "Kit", price: 7800 }], rating: 4.9, reviews: 22,
    description: "A bar of soap, a bottle of lotion and a small candle, wrapped in kanga cloth.",
    ingredients: "See individual products.",
  },
  {
    slug: "kitchen-surface-spray", name: "Surface Spray", sub: "Lemongrass + Thyme", category: "home-care", scene: "bottle", tone: 0,
    variants: [{ label: "500ml", price: 1600 }], rating: 4.6, reviews: 15,
    description: "A plant-based spray for counters and tables. Fresh, herbal and safe around food.",
    ingredients: "Plant-derived surfactants, vinegar, lemongrass and thyme oils.",
  },
];

export const featured = products.slice(0, 8);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const fromPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));
export const formatKSh = (n: number) => "KSh " + n.toLocaleString("en-KE");
export const fullName = (p: Product) => (p.sub && !p.name.includes("Candle") ? `${p.name}: ${p.sub}` : p.name);
