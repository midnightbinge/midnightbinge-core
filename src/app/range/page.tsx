"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";
import { FlavorQuiz } from "@/components/range/FlavorQuiz";

const allProducts = [
  // Flavoured
  { id: "thai-chilli", name: "Thai Sweet Chilli", desc: "Bold and bright. A crunch that goes all night.", category: "Flavoured Makhana", sizes: ["20g", "60g"], price: "₹50 - ₹150", slug: "thai-sweet-chilli", isGlobal: false, image: "/products/01.png" },
  { id: "peri-peri", name: "Peri Peri", desc: "A little heat for a long evening.", category: "Flavoured Makhana", sizes: ["20g", "60g"], price: "₹50 - ₹150", slug: "peri-peri", isGlobal: false, image: "/products/02.png" },
  { id: "cheese", name: "Cheddar Cheese", desc: "Comfort you can hear.", category: "Flavoured Makhana", sizes: ["20g", "60g"], price: "₹50 - ₹150", slug: "cheddar-cheese", isGlobal: false, image: "/products/03.png" },
  { id: "tandoori", name: "Tandoori Barbeque", desc: "Smoky. Slow. Satisfying.", category: "Flavoured Makhana", sizes: ["20g", "60g"], price: "₹50 - ₹150", slug: "tandoori-barbeque", isGlobal: false, image: "/products/04.png" },
  { id: "mint", name: "Jalapeno Mint", desc: "Cool outside. Warm inside. Just like you.", category: "Flavoured Makhana", sizes: ["20g", "60g"], price: "₹50 - ₹150", slug: "jalapeno-mint", isGlobal: false, image: "/products/05.png" },
  { id: "salt-pepper", name: "Himalayan Salt and Pepper", desc: "Simple. Honest. Right.", category: "Flavoured Makhana", sizes: ["20g", "60g"], price: "₹50 - ₹150", slug: "himalayan-salt-pepper", isGlobal: false, image: "/products/06.png" },
  // Coming Soon / Global
  { id: "truffle", name: "Truffle", desc: "Earthy, rich, unforgettable.", category: "Flavoured Makhana", sizes: [], price: "", slug: "truffle", isGlobal: true, image: "/products/07.png" },
  
  // Raw
  { id: "raw-makhana", name: "Pure Raw Makhana", desc: "Nothing added. Nothing hidden.", category: "Raw Makhana", sizes: ["100g", "200g"], price: "₹200 - ₹380", slug: "raw-makhana", isGlobal: false, image: "/products/01.png" },

  // Cripso
  { id: "achari", name: "Achari Punch", desc: "A crunch that catches you off guard.", category: "Cripso", sizes: ["25g", "50g"], price: "₹30 - ₹60", slug: "achari-punch", isGlobal: false, image: "/products/02.png" },
  { id: "mexican", name: "Mexican Tomato", desc: "Bright, bold, and gone too fast.", category: "Cripso", sizes: ["25g", "50g"], price: "₹30 - ₹60", slug: "mexican-tomato", isGlobal: false, image: "/products/03.png" },
  { id: "korean", name: "Fiesty Korean", desc: "Some cravings don't wait for permission.", category: "Cripso", sizes: ["25g", "50g"], price: "₹30 - ₹60", slug: "fiesty-korean", isGlobal: false, image: "/products/04.png" },
];

const categories = ["All", "Flavoured Makhana", "Raw Makhana", "Cripso"];

export default function RangePage() {
  const [activeTab, setActiveTab] = useState("All");
  const { playCrunch } = useAudio();

  const filteredProducts = activeTab === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeTab);

  return (
    <div className="bg-background min-h-screen pt-32 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg" />
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display text-foreground mb-6"
        >
          The Range
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted max-w-2xl mx-auto"
        >
          Where desire meets decision. Each pack crafted for the moment you open it.
        </motion.p>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-6 mb-16 flex flex-wrap justify-center gap-4 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveTab(cat); playCrunch(); }}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === cat 
                ? "bg-accent text-white shadow-[0_0_20px_rgba(107,92,231,0.4)]" 
                : "bg-surface text-muted hover:text-foreground border border-muted/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-32 min-h-[50vh] relative z-10">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-2xl p-8 flex flex-col border border-muted/5 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden shadow-lg"
              >
                {/* Glow behind product */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/0 group-hover:bg-accent/10 rounded-full blur-[60px] transition-colors duration-500 pointer-events-none" />

                {product.isGlobal && (
                  <span className="absolute top-6 right-6 bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/20">
                    Global Market
                  </span>
                )}

                {/* Pack Image */}
                <Link href={`/range/${product.slug}`} className="block relative z-10 w-full aspect-square mb-8 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-auto h-[80%] object-contain drop-shadow-2xl group-hover:scale-[1.08] transition-transform duration-500 ease-out" />
                </Link>

                <div className="flex-grow flex flex-col z-10">
                  <Link href={`/range/${product.slug}`} className="hover:text-accent transition-colors">
                    <h3 className="text-3xl font-display text-foreground mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-muted italic text-sm mb-6 flex-grow">"{product.desc}"</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-muted/10">
                    <div>
                      {product.sizes.length > 0 && (
                        <div className="flex gap-2 mb-1">
                          {product.sizes.map(size => (
                            <span key={size} className="text-xs bg-muted/10 text-muted px-2 py-0.5 rounded">{size}</span>
                          ))}
                        </div>
                      )}
                      {product.price && <p className="text-foreground font-medium">{product.price}</p>}
                    </div>
                    
                    <button 
                      onClick={(e) => { e.preventDefault(); playCrunch(); alert(`Notify form for ${product.name}`); }}
                      className="px-5 py-2 bg-accent hover:bg-accent-hover text-white rounded-full text-sm font-medium transition-colors shadow-md"
                    >
                      Notify Me
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Flavor Mood Quiz */}
      <FlavorQuiz />
    </div>
  );
}
