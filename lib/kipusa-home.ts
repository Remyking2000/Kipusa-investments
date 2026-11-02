export type KipusaHomeService = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  aspect?: "tall" | "wide" | "square";
};

export type KipusaHomeJourneyStep = {
  step: string;
  title: string;
  subtitle: string;
  description: string;
};

export type KipusaHomeSpaceCategory =
  | "Living Rooms"
  | "Bedrooms"
  | "Dining Spaces"
  | "Kitchens"
  | "Outdoor Spaces";

export type KipusaHomeGalleryItem = {
  id: string;
  title: string;
  category: KipusaHomeSpaceCategory;
  materials: string;
  caption: string;
  image: string;
  span: "large" | "tall" | "standard";
};

export type KipusaHomeJournalEntry = {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
};

export const kipusaHomeHero = {
  brand: "Kipusa Home",
  headline: "Peaceful. Warm. Serene. Spaces.",
  supportingMessage:
    "Creating personalized living spaces that reflect your personality, enrich your lifestyle, and make every moment at home more meaningful.",
  primaryCta: {
    label: "Book a Consultation",
    href: "#consultation",
  },
  secondaryCta: {
    label: "Explore Our Services",
    href: "#services",
  },
  heroImage:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
  secondaryImage:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
};

export const kipusaHomePhilosophy = {
  eyebrow: "Our Philosophy · Interior Architecture & Living",
  title: "Thoughtfully curated interiors rooted in calm, warmth, and natural texture.",
  lead: "At Kipusa Home, we believe a home should be more than an arrangement of furniture—it should be a quiet sanctuary shaped around the rhythms of your daily life.",
  paragraphs: [
    "Drawing inspiration from warm contemporary African sensibilities, organic timber, woven linen, natural stone, and sunlit proportions, our studio approaches every room with restraint and intention.",
    "Whether we are conceptualizing a complete residential transformation, sourcing tactile décor pieces, or styling a space for an intimate gathering, every detail is chosen to feel personal, timeless, and effortlessly welcoming.",
  ],
  pillars: [
    {
      label: "Warm Materiality",
      detail: "Natural wood, unbleached linen, woven fibres, ceramic vessels, and warm earth tones.",
    },
    {
      label: "Personal Expression",
      detail: "Tailored layouts and curated objects that reflect your lifestyle and story.",
    },
    {
      label: "Enduring Serenity",
      detail: "Balanced proportions, uncluttered flow, and calm lighting for everyday living.",
    },
  ],
  mainImage:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  detailImage:
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85",
};

export const kipusaHomeServices: KipusaHomeService[] = [
  {
    id: "interior-design",
    number: "01",
    title: "Interior Design",
    subtitle: "Spatial planning, material palettes & cohesive room design",
    description:
      "Comprehensive residential and boutique interior design that balances architectural proportion, natural light, custom furnishings, and warm finishes to create harmonious living environments.",
    highlights: [
      "Spatial layout & furniture arrangement",
      "Color, timber & textile curation",
      "Lighting & architectural finish direction",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "decor-sourcing",
    number: "02",
    title: "Décor Sourcing",
    subtitle: "Curated furniture, artisan objects & tactile accents",
    description:
      "Thoughtful procurement of statement furniture, hand-finished ceramics, woven textiles, lighting fixtures, and art pieces that bring character and authenticity to your rooms.",
    highlights: [
      "Furniture & accent piece selection",
      "Artisan ceramics, textiles & rugs",
      "Coordinated procurement & placement",
    ],
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "consultation-concept-design",
    number: "03",
    title: "Consultation and Concept Design",
    subtitle: "Tailored design direction, moodboards & spatial vision",
    description:
      "Collaborative design sessions that translate your lifestyle needs and aesthetic preferences into a clear visual concept, material palette, and actionable room roadmap.",
    highlights: [
      "On-site or virtual space walkthrough",
      "Bespoke concept boards & tonal palettes",
      "Room-by-room design recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "home-styling",
    number: "04",
    title: "Home Styling",
    subtitle: "Finishing touches, visual balance & lived-in elegance",
    description:
      "Refining existing rooms through art placement, soft furnishings, botanical arrangements, ambient fragrance, and layered textures that elevate everyday spaces.",
    highlights: [
      "Soft furnishing & drapery layering",
      "Shelving, console & tabletop curation",
      "Botanical & sensory finishing details",
    ],
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "seasonal-event-decor",
    number: "05",
    title: "Seasonal and Event Décor",
    subtitle: "Intimate gatherings, festive tablescapes & occasion styling",
    description:
      "Bespoke styling for seasonal transitions, private home hosting, milestone celebrations, and curated tablescapes designed with natural florals, linens, and warm candlelight.",
    highlights: [
      "Festive & seasonal home refreshes",
      "Bespoke dining tablescapes",
      "Private gathering & event atmosphere",
    ],
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "project-implementation",
    number: "06",
    title: "Project Implementation",
    subtitle: "End-to-end coordination, installation & final dressing",
    description:
      "Seamless execution of your approved design concept—coordinating artisans, deliveries, installations, and final room dressing until your space is ready to enjoy.",
    highlights: [
      "Schedule & installation coordination",
      "Quality inspection & placement",
      "Final styling & handover preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
  },
];

export const kipusaHomeJourney: KipusaHomeJourneyStep[] = [
  {
    step: "01",
    title: "Book a Consultation",
    subtitle: "Begin the conversation",
    description:
      "Schedule an initial consultation with Kipusa Home to share your vision, functional needs, lifestyle priorities, and the spaces you wish to transform.",
  },
  {
    step: "02",
    title: "Assessment and Design",
    subtitle: "Spatial review & concept creation",
    description:
      "We assess your space, light, and proportions to develop a cohesive design concept—complete with material palettes, layout direction, and curated décor selections.",
  },
  {
    step: "03",
    title: "Project Implementation",
    subtitle: "Sourcing, craft & installation",
    description:
      "Our team coordinates sourcing, deliveries, furnishings, and on-site styling with meticulous care, bringing every element of the approved concept to life.",
  },
  {
    step: "04",
    title: "Certification and Handover",
    subtitle: "Kipusa Home Certified completion",
    description:
      "Following our final walkthrough and finishing touches, your completed space is handed over with Kipusa Home Certification and VIP membership access.",
  },
];

export const kipusaHomeGalleryCategories: KipusaHomeSpaceCategory[] = [
  "Living Rooms",
  "Bedrooms",
  "Dining Spaces",
  "Kitchens",
  "Outdoor Spaces",
];

export const kipusaHomeGallery: KipusaHomeGalleryItem[] = [
  {
    id: "living-sanctuary-1",
    title: "Sunlit Linen & Timber Living Room",
    category: "Living Rooms",
    materials: "Oatmeal Linen · Warm Teak · Travertine",
    caption:
      "Generous low-profile seating paired with natural timber accents and soft neutral drapery for calm everyday gathering.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    span: "large",
  },
  {
    id: "bedroom-retreat-1",
    title: "Serene Earth-Toned Primary Suite",
    category: "Bedrooms",
    materials: "Washed Cotton · Woven Cane · Warm Ivory Walls",
    caption:
      "Layered neutral bedding and tactile natural textures designed for deeply restful mornings and evenings.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    span: "tall",
  },
  {
    id: "dining-gathering-1",
    title: "Sculptural Oak Dining & Hosting Space",
    category: "Dining Spaces",
    materials: "Solid Timber · Handcrafted Ceramics · Linen Pendant",
    caption:
      "An inviting dining setting centered around natural wood grain, warm ambient lighting, and artisanal tableware.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    span: "standard",
  },
  {
    id: "kitchen-warmth-1",
    title: "Warm Minimalist Culinary Space",
    category: "Kitchens",
    materials: "Natural Stone · Brushed Brass · Fluted Wood",
    caption:
      "Clean architectural lines softened with organic wood cabinetry, stone countertops, and thoughtful everyday styling.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
    span: "standard",
  },
  {
    id: "outdoor-veranda-1",
    title: "Shaded Veranda & Courtyard Lounge",
    category: "Outdoor Spaces",
    materials: "Weather-Treated Teak · Woven Rope · Terracotta Planters",
    caption:
      "Indoor-outdoor living framed by botanical greenery, breathable outdoor textiles, and relaxed lounge seating.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    span: "large",
  },
  {
    id: "living-detail-2",
    title: "Curated Reading & Lounge Corner",
    category: "Living Rooms",
    materials: "Bouclé · Raw Ceramic · Botanical Accents",
    caption:
      "Quiet architectural corners styled with tactile upholstery, sculptural vessels, and warm afternoon light.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    span: "standard",
  },
  {
    id: "bedroom-minimal-2",
    title: "Minimalist Guest Sanctuary",
    category: "Bedrooms",
    materials: "Linen Drapery · Natural Oak · Soft Sand Palette",
    caption:
      "Restrained styling and warm neutral tones that make every guest feel immediately at home.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
    span: "standard",
  },
  {
    id: "outdoor-dining-2",
    title: "Open-Air Garden Terrace",
    category: "Outdoor Spaces",
    materials: "Natural Stone · Timber Bench · Native Foliage",
    caption:
      "Seamless terrace styling designed for unhurried outdoor dining and quiet evening relaxation.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    span: "standard",
  },
];

export const kipusaHomeCertification = {
  eyebrow: "Distinction & Ongoing Care",
  title: "Kipusa Home Certified & VIP Membership",
  description:
    "Every full interior project completed and handed over by our studio carries the Kipusa Home Certified mark—signifying that the space has been thoughtfully assessed, styled, and finished to our design standard.",
  vipDescription:
    "Clients whose spaces receive Kipusa Home Certification are welcomed into the Kipusa Home VIP Membership concept, connecting your home to ongoing seasonal refreshes and priority studio consultations.",
  pillars: [
    {
      title: "Kipusa Home Certified Handover",
      detail:
        "Awarded at Step 04 of our customer journey upon completion of project implementation and final spatial review.",
    },
    {
      title: "VIP Membership Concept",
      detail:
        "Designed for certified Kipusa Home clients seeking continuity in home styling, seasonal décor transitions, and consultation access.",
    },
  ],
};

export const kipusaHomeJournal: KipusaHomeJournalEntry[] = [
  {
    id: "layering-natural-textures",
    category: "Materiality & Texture",
    readTime: "3 min read",
    title: "The Quiet Power of Linen, Timber & Earth Tones",
    excerpt:
      "How combining unbleached linen, warm wood grain, and muted sand palettes creates rooms that feel grounded without visual clutter.",
    content: [
      "A peaceful room rarely relies on ornament alone. Instead, warmth comes from the interplay of honest materials—woven linen that softens daylight, timber that brings organic grain, and matte ceramic surfaces that invite touch.",
      "When planning a living space, begin with a calm foundation of warm ivory and sand, then layer deeper tones of bark, olive, and terracotta through textiles and sculptural vessels.",
    ],
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "designing-serene-bedrooms",
    category: "Restful Spaces",
    readTime: "4 min read",
    title: "Designing a Bedroom Sanctuary for Unhurried Rest",
    excerpt:
      "Practical principles for lighting, proportion, and textile layering that turn a bedroom into a calm daily retreat.",
    content: [
      "The bedroom should signal rest the moment you cross the threshold. Keep circulation paths open, select low-glare warm lighting at bedside height, and favor breathable natural bedding.",
      "By paring back unnecessary furniture and focusing on tactile comfort, the room feels both spacious and deeply welcoming.",
    ],
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "the-art-of-gathering",
    category: "Dining & Seasonal Styling",
    readTime: "3 min read",
    title: "Thoughtful Tablescapes for Everyday & Seasonal Hosting",
    excerpt:
      "Elevating dining spaces with natural foliage, linen runners, and ambient candlelight for meaningful moments at home.",
    content: [
      "Dining spaces bridge daily routine and celebration. A well-proportioned table anchored by subtle pendant lighting sets the stage for both quiet morning coffee and evening hosting.",
      "For seasonal occasions, layer textured linen runners, ceramic vessels, and warm candlelight to create an intimate, unforced atmosphere.",
    ],
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
  },
];
