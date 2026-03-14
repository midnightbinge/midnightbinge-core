export interface ProductSize {
  size: string;
  price: string;
}

export interface RelatedProduct {
  name: string;
  slug: string;
  image: string;
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
}

export const products: Product[] = [
  {
    id: "thai-chilli",
    name: "Thai Sweet Chilli",
    slug: "thai-sweet-chilli",
    category: "Flavoured Makhana",
    tagline: "Bold and bright. A crunch that goes all night.",
    heartCopy: "Some nights need something bold. This is that crunch.",
    description: "A bright, sharp kick of chilli perfectly balanced with a sweet, sticky finish. Made to keep you awake when the movie gets good.",
    ingredients: "Makhana (Popped Lotus Seeds), Olive Oil, Sugar, Spices & Condiments (Chilli, Garlic, Onion), Salt, Tamarind Powder, Yeast Extract.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/thai_sweet_chilli.png",
    color: "from-red-900/40",
    related: [
      { name: "Peri Peri Rush", slug: "peri-peri-rush", image: "/products/peri_peri_rush.png" },
      { name: "Achari Punch Crispo", slug: "achari-punch-crispo", image: "/products/achari_punch_crispo.png" }
    ]
  },
  {
    id: "peri-peri",
    name: "Peri Peri Rush",
    slug: "peri-peri-rush",
    category: "Flavoured Makhana",
    tagline: "A little heat for a long evening.",
    heartCopy: "A little heat for a long evening.",
    description: "A fiery blend of spices that hits just right. For those who seek a thrill in every bite.",
    ingredients: "Makhana, Olive Oil, Bird's Eye Chilli, Garlic, Paprika, Oregano, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/peri_peri_rush.png",
    color: "from-orange-900/40",
    related: [
      { name: "Thai Sweet Chilli", slug: "thai-sweet-chilli", image: "/products/thai_sweet_chilli.png" },
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" }
    ]
  },
  {
    id: "cheese",
    name: "Cheddar Cheese Comfort",
    slug: "cheddar-cheese-comfort",
    category: "Flavoured Makhana",
    tagline: "Comfort you can hear.",
    heartCopy: "Comfort you can hear.",
    description: "Velvety cheddar meets the perfect crunch. A warm hug for your taste buds.",
    ingredients: "Makhana, Olive Oil, Cheese Powder, Whey Powder, Onion Powder, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/cheddar_cheese_comfort.png",
    color: "from-yellow-700/40",
    related: [
      { name: "Ranch-O-Cheese Crispo", slug: "ranch-o-cheese-crispo", image: "/products/ranch_o_cheese_cripso.png" },
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" }
    ]
  },
  {
    id: "tandoori",
    name: "Tandoor Barbeque",
    slug: "tandoor-barbeque",
    category: "Flavoured Makhana",
    tagline: "Smoky. Slow. Satisfying.",
    heartCopy: "Smoky. Slow. Satisfying.",
    description: "The essence of the clay oven, captured in a crunch. Deep, smoky, and irresistibly bold.",
    ingredients: "Makhana, Olive Oil, Smoked Paprika, Cumin, Coriander, Black Salt, Natural Smoke Flavor.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/tandoor_barbeque.png",
    color: "from-red-950/40",
    related: [
      { name: "Thai Sweet Chilli", slug: "thai-sweet-chilli", image: "/products/thai_sweet_chilli.png" },
      { name: "Achari Punch Crispo", slug: "achari-punch-crispo", image: "/products/achari_punch_crispo.png" }
    ]
  },
  {
    id: "mint",
    name: "Jalapeno Mint",
    slug: "jalapeno-mint",
    category: "Flavoured Makhana",
    tagline: "Cool outside. Warm inside. Just like you.",
    heartCopy: "Cool outside. Warm inside. Just like you.",
    description: "A refreshing burst of mint followed by the gentle heat of jalapeno. A sophisticated balance.",
    ingredients: "Makhana, Olive Oil, Dried Mint, Jalapeno Powder, Lime Juice Powder, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/jalapeno_mint.png",
    color: "from-green-900/40",
    related: [
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" },
      { name: "Pure Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" }
    ]
  },
  {
    id: "salt-pepper",
    name: "Himalayan Salt and Pepper",
    slug: "himalayan-salt-pepper",
    category: "Flavoured Makhana",
    tagline: "Simple. Honest. Right.",
    heartCopy: "Simple. Honest. Right.",
    description: "The gold standard of snacking. Pure Himalayan pink salt and freshly cracked black pepper.",
    ingredients: "Makhana, Olive Oil, Himalayan Pink Salt, Black Pepper.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    priceRange: "₹50 - ₹150",
    image: "/products/himalayan_salt_and_pepper.png",
    color: "from-zinc-800/40",
    related: [
      { name: "Pure Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" },
      { name: "Jalapeno Mint", slug: "jalapeno-mint", image: "/products/jalapeno_mint.png" }
    ]
  },
  {
    id: "raw-makhana",
    name: "Pure Raw Makhana",
    slug: "raw-makhana",
    category: "Raw Makhana",
    tagline: "Nothing added. Nothing hidden.",
    heartCopy: "Nothing added. Nothing hidden.",
    description: "Hand-picked, sun-dried, and ready for your own creations. The ultimate blank canvas.",
    ingredients: "100% Popped Lotus Seeds.",
    sizes: [{ size: "100g", price: "₹200" }, { size: "200g", price: "₹380" }],
    priceRange: "₹200 - ₹380",
    image: "/products/raw_makhana.png",
    color: "from-warm/20",
    related: [
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" },
      { name: "Jalapeno Mint", slug: "jalapeno-mint", image: "/products/jalapeno_mint.png" }
    ]
  },
  {
    id: "achari",
    name: "Achari Punch Crispo",
    slug: "achari-punch-crispo",
    category: "Cripso",
    tagline: "A crunch that catches you off guard.",
    heartCopy: "A crunch that catches you off guard.",
    description: "Tangy, spicy, and full of character. The classic Indian pickle flavor reimagined.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Pickle Spice Blend (Mango, Lime, Chilli), Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/achari_punch_crispo.png",
    color: "from-orange-700/40",
    related: [
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" },
      { name: "Tandoor Barbeque", slug: "tandoor-barbeque", image: "/products/tandoor_barbeque.png" }
    ]
  },
  {
    id: "mexican",
    name: "Tomato Mexicana Crispo",
    slug: "tomato-mexicana-crispo",
    category: "Cripso",
    tagline: "Bright, bold, and gone too fast.",
    heartCopy: "Bright, bold, and gone too fast.",
    description: "The zest of sun-ripened tomatoes with a hint of Mexican herbs. Fresh and vibrant.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Tomato Powder, Herb Blend, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/tomato_mexicana_crispo.png",
    color: "from-red-800/40",
    related: [
      { name: "Fiesty Korean Crispo", slug: "fiesty-korean-crispo", image: "/products/fiesty_korean_cripso.png" },
      { name: "Peri Peri Rush", slug: "peri-peri-rush", image: "/products/peri_peri_rush.png" }
    ]
  },
  {
    id: "korean",
    name: "Fiesty Korean Crispo",
    slug: "fiesty-korean-crispo",
    category: "Cripso",
    tagline: "Some cravings don't wait for permission.",
    heartCopy: "Some cravings don't wait for permission.",
    description: "A bold kick of Gochugaru and a touch of sweetness. The trendiest crunch in the night.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Korean Spice Blend, Soy Sauce Powder, Ginger, Garlic, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/fiesty_korean_cripso.png",
    color: "from-red-950/40",
    related: [
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" },
      { name: "Mystery Masala Crispo", slug: "mystery-masala-crispo", image: "/products/mystery_masala_crispo.png" }
    ]
  },
  {
    id: "mystery",
    name: "Mystery Masala Crispo",
    slug: "mystery-masala-crispo",
    category: "Cripso",
    tagline: "A flavour that keeps you guessing.",
    heartCopy: "A flavour that keeps you guessing.",
    description: "An enigmatic blend of spices that reveals a new note with every crunch. Can you solve it?",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Proprietary Spice Blend, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/mystery_masala_crispo.png",
    color: "from-indigo-900/40",
    related: [
      { name: "Fiesty Korean Crispo", slug: "fiesty-korean-crispo", image: "/products/fiesty_korean_cripso.png" },
      { name: "Ranch-O-Cheese Crispo", slug: "ranch-o-cheese-crispo", image: "/products/ranch_o_cheese_cripso.png" }
    ]
  },
  {
    id: "ranch",
    name: "Ranch-O-Cheese Crispo",
    slug: "ranch-o-cheese-crispo",
    category: "Cripso",
    tagline: "Creamy, cheesy, and absolutely addictive.",
    heartCopy: "Creamy, cheesy, and absolutely addictive.",
    description: "The perfect marriage of cool ranch herbs and rich cheddar cheese. Double the indulgence.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Cheese Powder, Buttermilk Powder, Garlic, Onion, Herbs, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    priceRange: "₹30 - ₹60",
    image: "/products/ranch_o_cheese_cripso.png",
    color: "from-blue-900/40",
    related: [
      { name: "Mystery Masala Crispo", slug: "mystery-masala-crispo", image: "/products/mystery_masala_crispo.png" },
      { name: "Cheddar Cheese Comfort", slug: "cheddar-cheese-comfort", image: "/products/cheddar_cheese_comfort.png" }
    ]
  },
  {
    id: "truffle",
    name: "Truffle",
    slug: "truffle",
    category: "Flavoured Makhana",
    tagline: "Earthy, rich, unforgettable.",
    heartCopy: "Earthy, rich, unforgettable.",
    description: "The gold standard of earthiness. A sophisticated crunch for the discerning night.",
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
