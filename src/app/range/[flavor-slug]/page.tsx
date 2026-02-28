"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAudio } from "@/components/AudioProvider";
import { useState } from "react";
import { ArrowLeft, Droplet, Leaf, Shield } from "lucide-react";

// Mock database for dynamic routing
const productDB: Record<string, any> = {
  "thai-sweet-chilli": {
    name: "Thai Sweet Chilli",
    heartCopy: "Some nights need something bold. This is that crunch.",
    desc: "A bright, sharp kick of chilli perfectly balanced with a sweet, sticky finish. Made to keep you awake when the movie gets good.",
    ingredients: "Makhana (Popped Lotus Seeds), Olive Oil, Sugar, Spices & Condiments (Chilli, Garlic, Onion), Salt, Tamarind Powder, Yeast Extract.",
    sizes: [{ size: "20g", price: "₹50" }, { size: "60g", price: "₹150" }],
    color: "from-red-900/40",
    related: [
      { name: "Peri Peri", slug: "peri-peri", image: "/products/02.png" }, 
      { name: "Achari Punch", slug: "achari-punch", image: "/products/02.png" }
    ],
    image: "/products/01.png"
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
      { name: "Raw Makhana", slug: "raw-makhana", image: "/products/01.png" }, 
      { name: "Himalayan Salt & Pepper", slug: "himalayan-salt-pepper", image: "/products/06.png" }
    ],
    image: "/products/02.png"
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
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-white">
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link href="/range" className="inline-flex items-center text-muted hover:text-white transition-colors" onClick={playCrunch}>
          <ArrowLeft size={16} className="mr-2" /> Back to Range
        </Link>
      </div>

      {/* HEART (Top): Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 pb-24">
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
            <h1 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight">{product.name}</h1>
            <p className="text-2xl text-warm font-display italic mb-6">"{product.heartCopy}"</p>
            <p className="text-lg text-muted font-body leading-relaxed max-w-lg mx-auto md:mx-0">
              {product.desc}
            </p>
          </motion.div>

        </div>
      </section>

      {/* HEAD (Middle): Ingredients & Logic */}
      <section className="py-24 bg-surface relative">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted mb-6">What's Inside</h3>
              <p className="text-white text-lg leading-relaxed mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
                {product.ingredients}
              </p>
              <div className="flex items-start gap-4">
                <Shield className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Honest Transparency</h4>
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
      <section className="py-24 bg-[#060b28]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          
          <div className="bg-secondary border border-white/10 rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-display text-white mb-8">Make it yours.</h3>
            
            <div className="flex justify-center gap-4 mb-8">
              {product.sizes.map((s: any) => (
                <button
                  key={s.size}
                  onClick={() => { setSelectedSize(s.size); playCrunch(); }}
                  className={`px-8 py-4 rounded-xl border transition-all ${
                    selectedSize === s.size 
                      ? "border-accent bg-accent/10 text-white shadow-[0_0_15px_rgba(107,92,231,0.2)]" 
                      : "border-white/10 text-muted hover:border-white/30"
                  }`}
                >
                  <span className="block text-xl font-bold mb-1">{s.size}</span>
                  <span className="block text-sm opacity-70">{s.price}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl text-white mb-4">Total: {currentPrice}</p>
              <button 
                onClick={() => { playCrunch(); alert("Notify logic triggered"); }}
                className="w-full md:w-auto px-12 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium text-lg transition-transform transform hover:scale-105"
              >
                Notify Me When Live
              </button>
            </div>
          </div>

          {/* You Might Also Like */}
          <div className="pt-12 border-t border-white/10">
            <h4 className="text-xl font-display text-white mb-8">You might also like</h4>
            <div className="flex justify-center gap-6">
              {product.related.map((rel: any) => (
                <Link 
                  key={rel.slug} 
                  href={`/range/${rel.slug}`}
                  onClick={playCrunch}
                  className="bg-surface px-6 py-4 rounded-xl border border-white/5 hover:border-accent transition-colors flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-black/20 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={rel.image} alt={rel.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="text-white text-sm font-medium">{rel.name}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
