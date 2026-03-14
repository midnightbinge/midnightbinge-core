"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAudio } from "@/components/AudioProvider";
import { products, Product } from "@/data/products";

const categories = ["All", "Flavoured Makhana", "Raw Makhana", "Cripso"] as const;

function RangeContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeTab, setActiveTab] = useState<typeof categories[number]>("All");
  const { playCrunch } = useAudio();

  useEffect(() => {
    if (categoryParam) {
      if (categoryParam === "flavoured-makhana") setActiveTab("Flavoured Makhana");
      else if (categoryParam === "raw-makhana") setActiveTab("Raw Makhana");
      else if (categoryParam === "cripso") setActiveTab("Cripso");
    }
  }, [categoryParam]);

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

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
                ? "bg-accent text-white shadow-[0_0_20px_rgba(4,88,102,0.4)]" 
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
          <AnimatePresence mode="popLayout">
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
                  <div className="relative w-full h-[80%] group-hover:scale-[1.08] transition-transform duration-500 ease-out drop-shadow-2xl">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="flex-grow flex flex-col z-10">
                  <Link href={`/range/${product.slug}`} className="hover:text-accent transition-colors">
                    <h3 className="text-3xl font-display text-foreground mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-muted italic text-sm mb-6 flex-grow">"{product.tagline}"</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-muted/10">
                    <div>
                      {product.sizes.length > 0 && (
                        <div className="flex gap-2 mb-1">
                          {product.sizes.map(s => (
                            <span key={s.size} className="text-xs bg-muted/10 text-muted px-2 py-0.5 rounded">{s.size}</span>
                          ))}
                        </div>
                      )}
                      {product.priceRange && <p className="text-foreground font-medium">{product.priceRange}</p>}
                    </div>
                    
                    <button 
                      onClick={(e) => { e.preventDefault(); playCrunch(); }}
                      className="px-5 py-2 bg-accent hover:bg-accent-hover text-white rounded-full text-sm font-medium transition-colors shadow-md active:scale-95"
                    >
                      I'm interested
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Atmospheric Closing */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden border-t border-foreground/5">
        <div className="brand-pattern-bg opacity-[0.02]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="font-accent text-3xl text-foreground mb-6">"Better that feels Good."</p>
          <p className="text-muted max-w-md mx-auto">Until next time, snack better. Feel good.</p>
        </div>
      </section>
    </div>
  );
}

export default function RangePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <RangeContent />
    </Suspense>
  );
}
