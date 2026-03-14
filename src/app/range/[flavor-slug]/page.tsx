"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { useAudio } from "@/components/AudioProvider";
import { useState } from "react";
import { ArrowLeft, Droplet, Leaf, Shield } from "lucide-react";
import { products } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params["flavor-slug"] as string;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size);
  const { playCrunch } = useAudio();

  const currentPrice = product.sizes.find((s: any) => s.size === selectedSize)?.price;

  return (
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6 relative z-10">
        <Link href="/range" className="inline-flex items-center text-muted hover:text-foreground transition-colors group" onClick={playCrunch}>
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Range
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
            <div className="relative w-full h-96 md:h-[36rem] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
              {product.description}
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
              <h3 className="text-2xl font-display mb-4">Roasted in Olive Oil.</h3>
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
            <h3 className="text-3xl font-display text-foreground mb-8 font-accent">Make it yours</h3>
            
            <div className="flex justify-center gap-4 mb-8">
              {product.sizes.map((s: any) => (
                <button
                  key={s.size}
                  onClick={() => { setSelectedSize(s.size); playCrunch(); }}
                  className={`px-8 py-4 rounded-xl border transition-all ${
                    selectedSize === s.size 
                      ? "border-accent bg-accent/10 text-foreground shadow-[0_0_15px_rgba(4,88,102,0.2)]" 
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
                onClick={() => { playCrunch(); alert("Keep me posted logic triggered"); }}
                className="w-full md:w-auto px-12 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium text-lg transition-transform transform hover:scale-105 shadow-lg shadow-accent/20"
              >
                I'm interested
              </button>
            </div>
          </div>

          {/* You Might Also Like */}
          <div className="pt-12 border-t border-muted/10">
            <h4 className="text-xl font-display text-foreground mb-8">You might also like</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {product.related.map((rel: any) => (
                <Link 
                  key={rel.slug} 
                  href={`/range/${rel.slug}`}
                  onClick={playCrunch}
                  className="bg-surface px-6 py-4 rounded-xl border border-muted/5 hover:border-accent transition-colors flex items-center gap-3 shadow-md"
                >
                  <div className="w-12 h-12 bg-black/5 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                    <Image src={rel.image} alt={rel.name} fill className="object-contain p-1" />
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
