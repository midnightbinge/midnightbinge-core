"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAudio } from "@/components/AudioProvider";
import { useState } from "react";
import { ArrowLeft, Droplet, Leaf, Shield } from "lucide-react";

// Mock database for dynamic routing - Updated with renamed packaging
const productDB: Record<string, any> = {
  "thai-sweet-chilli": {
    name: "Thai Sweet Chilli",
    heartCopy: "Some nights need something bold. This is that crunch.",
    desc: "A bright, sharp kick of chilli perfectly balanced with a sweet, sticky finish. Made to keep you awake when the movie gets good.",
    ingredients: "Makhana (Popped Lotus Seeds), Olive Oil, Sugar, Spices & Condiments (Chilli, Garlic, Onion), Salt, Tamarind Powder, Yeast Extract.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-red-900/40",
    related: [
      { name: "Peri Peri Rush", slug: "peri-peri-rush", image: "/products/peri_peri_rush.png" }, 
      { name: "Achari Punch Crispo", slug: "achari-punch-crispo", image: "/products/achari_punch_crispo.png" }
    ],
    image: "/products/thai_sweet_chilli.png"
  },
  "peri-peri-rush": {
    name: "Peri Peri Rush",
    heartCopy: "A little heat for a long evening.",
    desc: "A fiery blend of spices that hits just right. For those who seek a thrill in every bite.",
    ingredients: "Makhana, Olive Oil, Bird's Eye Chilli, Garlic, Paprika, Oregano, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-orange-900/40",
    related: [
      { name: "Thai Sweet Chilli", slug: "thai-sweet-chilli", image: "/products/thai_sweet_chilli.png" },
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" }
    ],
    image: "/products/peri_peri_rush.png"
  },
  "cheddar-cheese-comfort": {
    name: "Cheddar Cheese Comfort",
    heartCopy: "Comfort you can hear.",
    desc: "Velvety cheddar meets the perfect crunch. A warm hug for your taste buds.",
    ingredients: "Makhana, Olive Oil, Cheese Powder, Whey Powder, Onion Powder, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-yellow-700/40",
    related: [
      { name: "Ranch-O-Cheese Crispo", slug: "ranch-o-cheese-crispo", image: "/products/ranch_o_cheese_cripso.png" },
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" }
    ],
    image: "/products/cheddar_cheese_comfort.png"
  },
  "tandoor-barbeque": {
    name: "Tandoor Barbeque",
    heartCopy: "Smoky. Slow. Satisfying.",
    desc: "The essence of the clay oven, captured in a crunch. Deep, smoky, and irresistibly bold.",
    ingredients: "Makhana, Olive Oil, Smoked Paprika, Cumin, Coriander, Black Salt, Natural Smoke Flavor.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-red-950/40",
    related: [
      { name: "Thai Sweet Chilli", slug: "thai-sweet-chilli", image: "/products/thai_sweet_chilli.png" },
      { name: "Achari Punch Crispo", slug: "achari-punch-crispo", image: "/products/achari_punch_crispo.png" }
    ],
    image: "/products/tandoor_barbeque.png"
  },
  "jalapeno-mint": {
    name: "Jalapeno Mint",
    heartCopy: "Cool outside. Warm inside. Just like you.",
    desc: "A refreshing burst of mint followed by the gentle heat of jalapeno. A sophisticated balance.",
    ingredients: "Makhana, Olive Oil, Dried Mint, Jalapeno Powder, Lime Juice Powder, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-green-900/40",
    related: [
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" },
      { name: "Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" }
    ],
    image: "/products/jalapeno_mint.png"
  },
  "himalayan-salt-pepper": {
    name: "Himalayan Salt and Pepper",
    heartCopy: "Simple. Honest. Right.",
    desc: "The gold standard of snacking. Pure Himalayan pink salt and freshly cracked black pepper.",
    ingredients: "Makhana, Olive Oil, Himalayan Pink Salt, Black Pepper.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-zinc-800/40",
    related: [
      { name: "Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" },
      { name: "Jalapeno Mint", slug: "jalapeno-mint", image: "/products/jalapeno_mint.png" }
    ],
    image: "/products/himalayan_salt_and_pepper.png"
  },
  "raw-makhana": {
    name: "Pure Raw Makhana",
    heartCopy: "Nothing added. Nothing hidden.",
    desc: "Hand-picked, sun-dried, and ready for your own creations. The ultimate blank canvas.",
    ingredients: "100% Popped Lotus Seeds.",
    sizes: [{ size: "100g", price: "₹200" }, { size: "200g", price: "₹380" }],
    color: "from-warm/20",
    related: [
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" },
      { name: "Jalapeno Mint", slug: "jalapeno-mint", image: "/products/jalapeno_mint.png" }
    ],
    image: "/products/raw_makhana.png"
  },
  "achari-punch-crispo": {
    name: "Achari Punch Crispo",
    heartCopy: "A crunch that catches you off guard.",
    desc: "Tangy, spicy, and full of character. The classic Indian pickle flavor reimagined.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Pickle Spice Blend (Mango, Lime, Chilli), Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    color: "from-orange-700/40",
    related: [
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" },
      { name: "Tandoor Barbeque", slug: "tandoor-barbeque", image: "/products/tandoor_barbeque.png" }
    ],
    image: "/products/achari_punch_crispo.png"
  },
  "tomato-mexicana-crispo": {
    name: "Tomato Mexicana Crispo",
    heartCopy: "Bright, bold, and gone too fast.",
    desc: "The zest of sun-ripened tomatoes with a hint of Mexican herbs. Fresh and vibrant.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Tomato Powder, Herb Blend, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    color: "from-red-800/40",
    related: [
      { name: "Fiesty Korean Crispo", slug: "fiesty-korean-crispo", image: "/products/fiesty_korean_cripso.png" },
      { name: "Peri Peri Rush", slug: "peri-peri-rush", image: "/products/peri_peri_rush.png" }
    ],
    image: "/products/tomato_mexicana_crispo.png"
  },
  "fiesty-korean-crispo": {
    name: "Fiesty Korean Crispo",
    heartCopy: "Some cravings don't wait for permission.",
    desc: "A bold kick of Gochugaru and a touch of sweetness. The trendiest crunch in the night.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Korean Spice Blend, Soy Sauce Powder, Ginger, Garlic, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    color: "from-red-950/40",
    related: [
      { name: "Tomato Mexicana Crispo", slug: "tomato-mexicana-crispo", image: "/products/tomato_mexicana_crispo.png" },
      { name: "Mystery Masala Crispo", slug: "mystery-masala-crispo", image: "/products/mystery_masala_crispo.png" }
    ],
    image: "/products/fiesty_korean_cripso.png"
  },
  "mystery-masala-crispo": {
    name: "Mystery Masala Crispo",
    heartCopy: "A flavour that keeps you guessing.",
    desc: "An enigmatic blend of spices that reveals a new note with every crunch. Can you solve it?",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Proprietary Spice Blend, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    color: "from-indigo-900/40",
    related: [
      { name: "Fiesty Korean Crispo", slug: "fiesty-korean-crispo", image: "/products/fiesty_korean_cripso.png" },
      { name: "Ranch-O-Cheese Crispo", slug: "ranch-o-cheese-crispo", image: "/products/ranch_o_cheese_cripso.png" }
    ],
    image: "/products/mystery_masala_crispo.png"
  },
  "ranch-o-cheese-crispo": {
    name: "Ranch-O-Cheese Crispo",
    heartCopy: "Creamy, cheesy, and absolutely addictive.",
    desc: "The perfect marriage of cool ranch herbs and rich cheddar cheese. Double the indulgence.",
    ingredients: "Corn, Popped Lotus Seeds, Olive Oil, Cheese Powder, Buttermilk Powder, Garlic, Onion, Herbs, Salt.",
    sizes: [{ size: "25g", price: "₹30" }, { size: "50g", price: "₹60" }],
    color: "from-blue-900/40",
    related: [
      { name: "Mystery Masala Crispo", slug: "mystery-masala-crispo", image: "/products/mystery_masala_crispo.png" },
      { name: "Cheddar Cheese Comfort", slug: "cheddar-cheese-comfort", image: "/products/cheddar_cheese_comfort.png" }
    ],
    image: "/products/ranch_o_cheese_cripso.png"
  },
  // Fallback for others
  "default": {
    name: "Midnight Flavor",
    heartCopy: "A crunch that speaks for itself.",
    desc: "Slow roasted to perfection. A companion for your quietest hours.",
    ingredients: "Makhana (Popped Lotus Seeds), Olive Oil, Proprietary Seasoning Blend, Salt.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-accent/20",
    related: [
      { name: "Pure Raw Makhana", slug: "raw-makhana", image: "/products/raw_makhana.png" }, 
      { name: "Himalayan Salt and Pepper", slug: "himalayan-salt-pepper", image: "/products/himalayan_salt_and_pepper.png" }
    ],
    image: "/products/thai_sweet_chilli.png"
  }
};

export default function ProductPage() {
  const params = useParams();
  const slug = params["flavor-slug"] as string;
  const product = productDB[slug] || productDB["default"];
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size);
  const { playCrunch } = useAudio();

  const currentPrice = product.sizes.find((s: any) => s.size === selectedSize)?.price;

  return (
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6 relative z-10">
        <Link href="/range" className="inline-flex items-center text-muted hover:text-foreground transition-colors" onClick={playCrunch}>
          <ArrowLeft size={16} className="mr-2" /> Back to Range
        </Link>
      </div>

      {/* HEART (Top): Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-muted/5 pb-24 relative z-10">
        {/* Ambient background glow based on product flavor */}
        <div className={`absolute inset-0 bg-gradient-to-b ${product.color} to-transparent opacity-50 pointer-events-none`} />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            {/* Hero Pack Shot */}
            <img src={product.image} alt={product.name} className="w-auto h-96 md:h-[36rem] object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.15)] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6 leading-tight">{product.name}</h1>
            <p className="text-2xl text-warm font-display italic mb-6">"{product.heartCopy}"</p>
            <p className="text-lg text-muted font-body leading-relaxed max-w-lg mx-auto md:mx-0">
              {product.desc}
            </p>
          </motion.div>

        </div>
      </section>

      {/* HEAD (Middle): Ingredients & Logic */}
      <section className="py-24 bg-surface relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted mb-6">What's Inside</h3>
              <p className="text-foreground text-lg leading-relaxed mb-8 bg-background/50 p-6 rounded-xl border border-muted/10">
                {product.ingredients}
              </p>
              <div className="flex items-start gap-4">
                <Shield className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-foreground font-medium mb-1">Honest Transparency</h4>
                  <p className="text-sm text-muted">We don't hide behind buzzwords. Everything you taste is right there on the label.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream text-black p-8 md:p-10 rounded-2xl flex flex-col justify-center">
              <Droplet className="text-amber-600 mb-6" size={32} />
              <h3 className="text-2xl font-display mb-4">Cooked in Olive Oil. Here's why that matters.</h3>
              <p className="opacity-80 leading-relaxed">
                Most brands use cheap, refined oils that leave you feeling sluggish. We use olive oil for a cleaner, lighter roast that respects your body. It's an indulgence that actually feels good.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HAND (Bottom): Purchase & Action */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          
          <div className="bg-surface border border-muted/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl">
            <h3 className="text-3xl font-display text-foreground mb-8">Make it yours.</h3>
            
            <div className="flex justify-center gap-4 mb-8">
              {product.sizes.map((s: any) => (
                <button
                  key={s.size}
                  onClick={() => { setSelectedSize(s.size); playCrunch(); }}
                  className={`px-8 py-4 rounded-xl border transition-all ${
                    selectedSize === s.size 
                      ? "border-accent bg-accent/10 text-foreground shadow-[0_0_15px_rgba(107,92,231,0.2)]" 
                      : "border-muted/10 text-muted hover:border-muted/30"
                  }`}
                >
                  <span className="block text-xl font-bold mb-1">{s.size}</span>
                  <span className="block text-sm opacity-70">{s.price}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl text-foreground mb-4">Total: {currentPrice}</p>
              <button 
                onClick={() => { playCrunch(); alert("Notify logic triggered"); }}
                className="w-full md:w-auto px-12 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium text-lg transition-transform transform hover:scale-105 shadow-lg shadow-accent/20"
              >
                Build your night Box
              </button>
            </div>
          </div>

          {/* You Might Also Like */}
          <div className="pt-12 border-t border-muted/10">
            <h4 className="text-xl font-display text-foreground mb-8">You might also like</h4>
            <div className="flex justify-center gap-6">
              {product.related.map((rel: any) => (
                <Link 
                  key={rel.slug} 
                  href={`/range/${rel.slug}`}
                  onClick={playCrunch}
                  className="bg-surface px-6 py-4 rounded-xl border border-muted/5 hover:border-accent transition-colors flex items-center gap-3 shadow-md"
                >
                  <div className="w-12 h-12 bg-black/5 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={rel.image} alt={rel.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{rel.name}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
