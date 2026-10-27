import type { SceneKind } from "@/components/Scene";

export type Variant = { label: string; price: number };
export type Product = {
  slug: string;
  name: string;
  sub: string;
  category: string;
  scene: SceneKind;
  tone: number;
  image: string;
  hoverImage: string;
  gallery: string[];
  badge?: string;
  variants: Variant[];
  rating: number;
  reviews: number;
  description: string;
  ingredients: string;
};

export type Collection = {
  slug: string;
  name: string;
  blurb: string;
  scene: SceneKind;
  tone: number;
  image: string;
};

export const collections: Collection[] = [
  {
    slug: "bath-body-skincare",
    name: "Bath, Body & Skincare",
    blurb: "Lotions, facial oils, washes and whipped butters made with shea, macadamia and wild East African botanicals.",
    scene: "bottle",
    tone: 1,
    image: "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "hair-care",
    name: "Hair Care",
    blurb: "Botanical shampoos, conditioning masks and scalp elixirs for crown and strand, free of harsh sulphates.",
    scene: "bottle",
    tone: 3,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "soaps",
    name: "All-natural Soaps",
    blurb: "Cold-process botanical bars, cut and cured by hand for six weeks in small artisan batches.",
    scene: "soap",
    tone: 0,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "candles",
    name: "Hand-poured Candles",
    blurb: "Soy and beeswax candles scented with the wild grasses, resins and woods of the savanna.",
    scene: "candle",
    tone: 2,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "gift-kits",
    name: "Gift Kits",
    blurb: "Considered self-care sets, wrapped in recycled cotton paper and handwoven kanga cloth.",
    scene: "soap",
    tone: 4,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "home-care",
    name: "Home Care",
    blurb: "Everyday botanical surface sprays and hand washes, kind to hands and to water.",
    scene: "bottle",
    tone: 2,
    image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1200&q=85",
  },
];

export const products: Product[] = [
  {
    slug: "natural-soap-aloe-avocado",
    name: "Natural Soap",
    sub: "Aloe + Avocado",
    category: "soaps",
    scene: "soap",
    tone: 0,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "120g bar", price: 980 },
      { label: "Set of 3", price: 2700 },
    ],
    rating: 4.9,
    reviews: 62,
    description:
      "A gentle bar cured for six weeks. Cool Rift Valley aloe and cold-pressed avocado oil leave skin soft, calm and never tight.",
    ingredients:
      "Saponified olive, coconut and avocado oils, fresh aloe vera leaf juice, unrefined shea butter, essential oils.",
  },
  {
    slug: "rosehip-baobab-facial-oil",
    name: "Radiance Facial Oil",
    sub: "Rosehip + Baobab",
    category: "bath-body-skincare",
    scene: "bottle",
    tone: 1,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "30ml dropper", price: 2450 },
      { label: "50ml dropper", price: 3600 },
    ],
    rating: 5.0,
    reviews: 74,
    description:
      "A silky, dry-touch facial elixir cold-pressed from wild rosehip seeds and coastal Kenyan baobab oil. Restores a supple, sunlit glow morning and evening.",
    ingredients:
      "Rosa Canina (Rosehip) Seed Oil, Adansonia Digitata (Baobab) Seed Oil, Simmondsia Chinensis (Jojoba) Oil, Tocopherol (Vitamin E), Pelargonium Graveolens Flower Oil.",
  },
  {
    slug: "lotion-palmarosa-shea-macadamia",
    name: "Body Lotion",
    sub: "Palmarosa + Shea + Macadamia",
    category: "bath-body-skincare",
    scene: "bottle",
    tone: 1,
    badge: "Customer Favourite",
    image: "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "250ml", price: 3000 },
      { label: "500ml", price: 5200 },
    ],
    rating: 5.0,
    reviews: 88,
    description:
      "A rich yet quick-absorbing body lotion, made with raw shea from northern Kenya and cold-pressed macadamia from the central highlands.",
    ingredients:
      "Shea butter, macadamia integrifolia seed oil, palmarosa essential oil, aloe barbadensis leaf juice, vitamin E.",
  },
  {
    slug: "whipped-nilotica-shea-butter",
    name: "Whipped Body Butter",
    sub: "Nilotica Shea + Vanilla Bean",
    category: "bath-body-skincare",
    scene: "bottle",
    tone: 4,
    badge: "New",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "200g glass jar", price: 2650 },
      { label: "400g atelier jar", price: 4600 },
    ],
    rating: 4.9,
    reviews: 54,
    description:
      "Cloud-whipped East African Nilotica shea butter blended with marula oil and cured Madagascar vanilla pods. Melts on contact with warm skin.",
    ingredients:
      "Butyrospermum Parkii (Nilotica Shea) Butter, Sclerocarya Birrea (Marula) Oil, Prunus Amygdalus Dulcis Oil, Vanilla Planifolia Fruit Extract, Tocopherol.",
  },
  {
    slug: "hand-wash-cedar-orange",
    name: "Hand Wash",
    sub: "Cedar + Orange",
    category: "home-care",
    scene: "bottle",
    tone: 2,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "300ml", price: 2000 },
      { label: "500ml refill", price: 2800 },
    ],
    rating: 4.8,
    reviews: 41,
    description:
      "A softly foaming wash with warm cedar and bright orange peel. Plant-derived cleansers, nothing stripping.",
    ingredients:
      "Coconut-derived cleansers, botanical glycerin, sweet orange peel oil, Himalayan cedarwood oil, aloe vera.",
  },
  {
    slug: "shower-set",
    name: "Shower Set",
    sub: "Shampoo · Conditioner · Bodywash",
    category: "gift-kits",
    scene: "bottle",
    tone: 3,
    badge: "Gift Ready",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "Trio (3 × 300ml)", price: 5500 }],
    rating: 4.7,
    reviews: 29,
    description:
      "Our three shower essentials, together in a recycled-paper keepsake box. A gift that is easy to give and easy to love.",
    ingredients: "Contains Rosemary + Baobab Shampoo (300ml), Conditioner (300ml), and Cedarwood + Basil Body Wash (300ml).",
  },
  {
    slug: "body-wash-cedarwood-basil",
    name: "Body Wash",
    sub: "Cedarwood + Basil",
    category: "bath-body-skincare",
    scene: "bottle",
    tone: 4,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "300ml", price: 2000 },
      { label: "500ml", price: 3200 },
    ],
    rating: 4.8,
    reviews: 53,
    description:
      "Green, woody and grounding. A creamy low-lather botanical wash that cleanses without leaving skin dry.",
    ingredients:
      "Coconut-derived cleansers, glycerin, cedarwood oil, sweet basil leaf oil, aloe vera.",
  },
  {
    slug: "wild-grasses-candle",
    name: "Wild Grasses Scented Candle",
    sub: "Small tin",
    category: "candles",
    scene: "candle",
    tone: 2,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "200g", price: 4500 }],
    rating: 4.9,
    reviews: 37,
    description:
      "Warm dry grass, pale musk and a thread of acacia smoke. Hand-poured in Nairobi, burns cleanly for 40 hours.",
    ingredients: "100% pure soy wax, unbleached cotton wick, botanical fragrance and essential oils.",
  },
  {
    slug: "wild-grasses-candle-large",
    name: "Wild Grasses Scented Candle",
    sub: "Large vessel",
    category: "candles",
    scene: "candle",
    tone: 0,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "600g (3-Wick)", price: 10800 }],
    rating: 5.0,
    reviews: 19,
    description:
      "The same signature savanna scent in a larger, three-wick stoneware vessel crafted for open living spaces.",
    ingredients: "Soy wax, three braided cotton wicks, botanical fragrance and essential oils.",
  },
  {
    slug: "shampoo-conditioner-duo",
    name: "Shampoo + Conditioner Duo",
    sub: "Rosemary + Baobab",
    category: "hair-care",
    scene: "bottle",
    tone: 3,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "2 × 300ml", price: 3600 }],
    rating: 4.8,
    reviews: 47,
    description:
      "A restorative pairing for strong, shiny hair. Highland rosemary stimulates the scalp while cold-pressed baobab oil softens the lengths.",
    ingredients: "Plant cleansers, cold-pressed baobab seed oil, rosemary leaf oil, aloe vera, pro-vitamin B5 (panthenol).",
  },
  {
    slug: "moringa-rosemary-scalp-elixir",
    name: "Botanical Scalp Elixir",
    sub: "Moringa + Rosemary + Castor",
    category: "hair-care",
    scene: "bottle",
    tone: 1,
    badge: "New",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "50ml pipette", price: 2100 },
      { label: "100ml pipette", price: 3500 },
    ],
    rating: 4.9,
    reviews: 34,
    description:
      "A nutrient-dense pre-wash scalp treatment and protective styling oil. Cold-pressed Kenyan moringa and black castor oil nourish dry roots.",
    ingredients:
      "Moringa Oleifera Seed Oil, Ricinus Communis (Castor) Oil, Rosmarinus Officinalis Leaf Oil, Mentha Piperita Oil, Tocopherol.",
  },
  {
    slug: "hibiscus-marula-hair-mask",
    name: "Deep Conditioning Hair Mask",
    sub: "Hibiscus + Marula Butter",
    category: "hair-care",
    scene: "bottle",
    tone: 4,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "250g jar", price: 2850 }],
    rating: 4.9,
    reviews: 41,
    description:
      "A rich, high-slip conditioning mask infused with crushed hibiscus petals, raw shea and marula oil to detangle and restore curl elasticity.",
    ingredients:
      "Aqua, Butyrospermum Parkii Butter, Sclerocarya Birrea Seed Oil, Hibiscus Sabdariffa Flower Extract, Cetearyl Alcohol, Panthenol.",
  },
  {
    slug: "honey-oat-face-polish",
    name: "Gentle Face Polish",
    sub: "Wild Honey + Colloidal Oat",
    category: "bath-body-skincare",
    scene: "soap",
    tone: 2,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "100g glass jar", price: 1950 }],
    rating: 4.8,
    reviews: 39,
    description:
      "Finely milled colloidal oat flour and raw acacia honey buff away surface dryness, transforming into a soothing milky veil upon rinsing.",
    ingredients:
      "Avena Sativa (Oat) Kernel Flour, Prunus Amygdalus Dulcis Oil, Mel (Wildflower Honey), Butyrospermum Parkii Butter, Tocopherol.",
  },
  {
    slug: "pink-clay-rosewater-soap",
    name: "Artisan Soap Bar",
    sub: "Rift Clay + Rose Geranium",
    category: "soaps",
    scene: "soap",
    tone: 2,
    badge: "New",
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "120g bar", price: 980 },
      { label: "Set of 3", price: 2700 },
    ],
    rating: 4.9,
    reviews: 28,
    description:
      "Swirled with mineral-rich pink clay and scented with steam-distilled Kenyan rose geranium. Creates a creamy, velvety lather for face and body.",
    ingredients:
      "Saponified shea butter, olive and coconut oils, kaolin rose clay, pelargonium graveolens (rose geranium) oil.",
  },
  {
    slug: "acacia-vetiver-candle",
    name: "Dusk Vetiver Scented Candle",
    sub: "Amber Glass Vessel",
    category: "candles",
    scene: "candle",
    tone: 4,
    image: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "240g", price: 4900 }],
    rating: 4.9,
    reviews: 31,
    description:
      "Earthy vetiver root after rain, warm frankincense resin and wild acacia honey. Poured into reusable amber apothecary glass.",
    ingredients: "Soy and beeswax blend, cotton wick, vetiver root oil, Boswellia carterii oil.",
  },
  {
    slug: "savanna-gift-kit",
    name: "Savanna Gift Kit",
    sub: "Soap · Lotion · Candle",
    category: "gift-kits",
    scene: "soap",
    tone: 4,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "3-Piece Kit", price: 7800 }],
    rating: 4.9,
    reviews: 22,
    description:
      "A cold-process bar of soap, a full-size bottle of shea lotion and a small Wild Grasses candle, hand-wrapped in traditional kanga cloth.",
    ingredients: "Includes Natural Soap (120g), Body Lotion (250ml), and Wild Grasses Candle (200g).",
  },
  {
    slug: "complete-savanna-ritual-trunk",
    name: "The Sanctuary Ritual Box",
    sub: "Facial Oil · Body Butter · Soap · Candle",
    category: "gift-kits",
    scene: "soap",
    tone: 1,
    badge: "Limited Edition",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [{ label: "4-Piece Collector Box", price: 9600 }],
    rating: 5.0,
    reviews: 18,
    description:
      "Our most generous gifting ritual. Combines the Radiance Facial Oil, Whipped Nilotica Shea Butter, Rift Clay Soap and Dusk Vetiver Candle.",
    ingredients: "See individual full-size products.",
  },
  {
    slug: "kitchen-surface-spray",
    name: "Surface Spray",
    sub: "Lemongrass + Thyme",
    category: "home-care",
    scene: "bottle",
    tone: 0,
    image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1100&q=85",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1100&q=85",
    ],
    variants: [
      { label: "500ml glass spray", price: 1600 },
      { label: "1L refill bottle", price: 2600 },
    ],
    rating: 4.6,
    reviews: 15,
    description:
      "A plant-based botanical spray for stone, wood and kitchen counters. Crisp East African lemongrass and garden thyme.",
    ingredients: "Plant-derived surfactants, distilled water, organic lemongrass and thyme essential oils.",
  },
];

export const featured = products.slice(0, 8);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const fromPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));
export const formatKSh = (n: number) => "KSh " + n.toLocaleString("en-KE");
export const fullName = (p: Product) =>
  p.sub && !p.name.includes("Candle") ? `${p.name}: ${p.sub}` : p.name;
