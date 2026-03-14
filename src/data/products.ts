export interface ProductSize {
  size: string;
  price: string;
}

export interface RelatedProduct {
  name: string;
  slug: string;
  image: string;
}

export interface QuickCommerce {
  name: "Blinkit" | "Zepto" | "Amazon";
  url: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Flavoured Makhana" | "Raw Makhana" | "Cripso";
  tagline: string;
  heartCopy: string;
  description: string;
  ingredients: string;
  sizes: ProductSize[];
  priceRange: string;
  image: string;
  color: string;
  isGlobal?: boolean;
  related: RelatedProduct[];
  quickCommerce?: QuickCommerce[];
}

const DEFAULT_QC: QuickCommerce[] = [
  { name: "Blinkit", url: "https://blinkit.com/s/?q=midnight+binge" },
  { name: "Zepto", url: "https://www.zeptonow.com/search?query=midnight+binge" },
  { name: "Amazon", url: "https://www.amazon.in/s?k=midnight+binge" },
];

export const products: Product[] = [
  {
    id: "thai-chilli",
    name: "Thai Sweet Chilli",
    slug: "thai-sweet-chilli",
    category: "Flavoured Makhana",
    tagline: "A bright, sharp kick balanced with a sweet, sticky finish.",
    heartCopy: "Some nights need something bold. This is that crunch.",
    description: "Made to keep you awake when the movie gets good. Roasted slow, seasoned with care.",
    ingredients: "Makhana (Popped Lotus Seeds), Olive Oil, Sugar, Spices (Chilli, Garlic, Onion), Salt, Tamarind, Yeast Extract.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/thai_sweet_chilli.png",
    color: "from-red-900/40",
    related: [
      { name: "Peri Peri Rush", slug: "peri-peri-rush", image: "/products/peri_peri_rush.png" },
      { name: "Achari Punch Crispo", slug: "achari-punch-crispo", image: "/products/achari_punch_crispo.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "peri-peri",
    name: "Peri Peri Rush",
    slug: "peri-peri-rush",
    category: "Flavoured Makhana",
    tagline: "A fiery blend of spices that hits just right.",
    heartCopy: "For those who seek a thrill in every bite.",
    description: "A little heat for a long evening. Clean ingredients, real spice, no compromise.",
    ingredients: "Makhana, Olive Oil, Bird's Eye Chilli, Garlic, Paprika, Oregano, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/peri_peri_rush.png",
    color: "from-orange-900/40",
    related: [
      { name: "Thai Sweet Chilli", slug: "thai-sweet-chilli", image: "/products/thai_sweet_chilli.png" },
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "cheese",
    name: "Cheddar Cheese Comfort",
    slug: "cheddar-cheese-comfort",
    category: "Flavoured Makhana",
    tagline: "Velvety cheddar meets the perfect crunch.",
    heartCopy: "A warm hug for your taste buds.",
    description: "Comfort you can hear. Slow-roasted makhana with real cheddar seasoning.",
    ingredients: "Makhana, Olive Oil, Cheese Powder, Whey Powder, Onion Powder, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/cheddar_cheese_comfort.png",
    color: "from-yellow-700/40",
    related: [
      { name: "Ranch-O-Cheese Crispo", slug: "ranch-o-cheese-crispo", image: "/products/ranch_o_cheese_cripso.png" },
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "tandoori",
    name: "Tandoor Barbeque",
    slug: "tandoor-barbeque",
    category: "Flavoured Makhana",
    tagline: "The essence of the clay oven, captured in a crunch.",
    heartCopy: "Deep, smoky, and irresistibly bold.",
    description: "Smoky. Slow. Satisfying. The kind of crunch that stays with you.",
    ingredients: "Makhana, Olive Oil, Smoked Paprika, Cumin, Coriander, Black Salt, Natural Smoke Flavor.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/tandoor_barbeque.png",
    color: "from-red-950/40",
    related: [
      { name: "Thai Sweet Chilli", slug: "thai-sweet-chilli", image: "/products/thai_sweet_chilli.png" },
      { name: "Achari Punch Crispo", slug: "achari-punch-crispo", image: "/products/achari_punch_crispo.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "mint",
    name: "Jalapeno Mint",
    slug: "jalapeno-mint",
    category: "Flavoured Makhana",
    tagline: "A refreshing burst followed by a gentle heat.",
    heartCopy: "Cool outside. Warm inside. Just like you.",
    description: "A sophisticated balance of fresh mint and sharp jalapeno. Made for quiet moments.",
    ingredients: "Makhana, Olive Oil, Dried Mint, Jalapeno Powder, Lime Juice Powder, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/jalapeno_mint.png",
    color: "from-green-900/40",
    related: [
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" },
      { name: "Pure Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "salt-pepper",
    name: "Himalayan Salt and Pepper",
    slug: "himalayan-salt-pepper",
    category: "Flavoured Makhana",
    tagline: "Pure Himalayan pink salt and freshly cracked black pepper.",
    heartCopy: "Simple. Honest. Right.",
    description: "The gold standard of snacking. Nothing hidden, just the seasoning you know.",
    ingredients: "Makhana, Olive Oil, Himalayan Pink Salt, Black Pepper.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/himalayan_salt_and_pepper.png",
    color: "from-zinc-800/40",
    related: [
      { name: "Pure Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" },
      { name: "Jalapeno Mint", slug: "jalapeno-mint", image: "/products/jalapeno_mint.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "raw-makhana",
    name: "Pure Raw Makhana",
    slug: "raw-makhana",
    category: "Raw Makhana",
    tagline: "Hand-picked, sun-dried, and ready for your creations.",
    heartCopy: "Nothing added. Nothing hidden.",
    description: "The ultimate blank canvas. Sourced with care, popped to perfection.",
    ingredients: "100% Popped Lotus Seeds.",
    sizes: [{ size: "100g", price: "₹200" }, { size: "200g", price: "₹380" }],
    priceRange: "₹200 - ₹380",
    image: "/products/raw_makhana.png",
    color: "from-warm/20",
    related: [
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" },
      { name: "Jalapeno Mint", slug: "jalapeno-mint", image: "/products/jalapeno_mint.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "achari",
    name: "Achari Punch Crispo",
    slug: "achari-punch-crispo",
    category: "Cripso",
    tagline: "Tangy, spicy, and full of character.",
    heartCopy: "A crunch that catches you off guard.",
    description: "The classic Indian pickle flavor reimagined for a new kind of crunch.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Pickle Spice Blend (Mango, Lime, Chilli), Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/achari_punch_crispo.png",
    color: "from-orange-700/40",
    related: [
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" },
      { name: "Tandoor Barbeque", slug: "tandoor-barbeque", image: "/products/tandoor_barbeque.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "mexican",
    name: "Tomato Mexicana Crispo",
    slug: "tomato-mexicana-crispo",
    category: "Cripso",
    tagline: "The zest of sun-ripened tomatoes with Mexican herbs.",
    heartCopy: "Bright, bold, and gone too fast.",
    description: "Fresh and vibrant. Made for the moments when you need a little more color.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Tomato Powder, Herb Blend, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/tomato_mexicana_crispo.png",
    color: "from-red-800/40",
    related: [
      { name: "Feisty Korean Crispo", slug: "feisty-korean-crispo", image: "/products/feisty_korean_crispo.png" },
      { name: "Peri Peri Rush", slug: "peri-peri-rush", image: "/products/peri_peri_rush.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "korean",
    name: "Feisty Korean Crispo",
    slug: "feisty-korean-crispo",
    category: "Cripso",
    tagline: "A bold kick of Gochugaru and a touch of sweetness.",
    heartCopy: "Some cravings don't wait for permission.",
    description: "The trendiest crunch in the night. Intense, satisfying, and deeply flavorful.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Korean Spice Blend, Soy Sauce Powder, Ginger, Garlic, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/feisty_korean_crispo.png",
    color: "from-red-950/40",
    related: [
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" },
      { name: "Mystery Masala Crispo", slug: "mystery-masala-crispo", image: "/products/mystery_masala_crispo.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "mystery",
    name: "Mystery Masala Crispo",
    slug: "mystery-masala-crispo",
    category: "Cripso",
    tagline: "An enigmatic blend that reveals a new note with every bite.",
    heartCopy: "A flavour that keeps you guessing.",
    description: "Can you solve the crunch? A complex seasoning blend for those who love a challenge.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Proprietary Spice Blend, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/mystery_masala_crispo.png",
    color: "from-indigo-900/40",
    related: [
      { name: "Feisty Korean Crispo", slug: "feisty-korean-crispo", image: "/products/feisty_korean_crispo.png" },
      { name: "Ranch-O-Cheese Crispo", slug: "ranch-o-cheese-crispo", image: "/products/ranch_o_cheese_cripso.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "ranch",
    name: "Ranch-O-Cheese Crispo",
    slug: "ranch-o-cheese-crispo",
    category: "Cripso",
    tagline: "Cool ranch herbs meet rich cheddar cheese.",
    heartCopy: "Creamy, cheesy, and absolutely addictive.",
    description: "Double the indulgence. A balanced seasoning that respects the crunch.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Cheese Powder, Buttermilk Powder, Garlic, Onion, Herbs, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/ranch_o_cheese_cripso.png",
    color: "from-blue-900/40",
    related: [
      { name: "Mystery Masala Crispo", slug: "mystery-masala-crispo", image: "/products/mystery_masala_crispo.png" },
      { name: "Cheddar Cheese Comfort", slug: "cheddar-cheese-comfort", image: "/products/cheddar_cheese_comfort.png" }
    ],
    quickCommerce: DEFAULT_QC
  },
  {
    id: "truffle",
    name: "Truffle",
    slug: "truffle",
    category: "Flavoured Makhana",
    tagline: "Earthy, rich, and unforgettable.",
    heartCopy: "The gold standard of earthiness.",
    description: "A sophisticated crunch for the discerning night. Coming soon to your quiet hours.",
    ingredients: "Makhana, Olive Oil, Black Truffle Salt, Natural Truffle Aroma.",
    sizes: [],
    priceRange: "Coming Soon",
    image: "/products/07.png",
    isGlobal: true,
    color: "from-zinc-900/60",
    related: [
      { name: "Cheddar Cheese Comfort", slug: "cheddar-cheese-comfort", image: "/products/cheddar_cheese_comfort.png" },
      { name: "Pure Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" }
    ]
  }
];
