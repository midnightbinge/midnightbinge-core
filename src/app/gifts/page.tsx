"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Package, Sparkles, Heart } from "lucide-react";

const occasions = [
  { id: "corporate", name: "Corporate Gifting", icon: Package },
  { id: "festive", name: "Festive Season", icon: Sparkles },
  { id: "personal", name: "Personalized Bundles", icon: Heart },
];

const bundles = [
  { 
    name: "The Midnight Trio", 
    desc: "A curated collection of our boldest roasted makhanas.", 
    price: "₹450", 
    image: "/products/thai_sweet_chilli.png" 
  },
  { 
    name: "The Complete Range", 
    desc: "All 13 flavors. One box. Zero compromise.", 
    price: "₹1,800", 
    image: "/products/peri_peri_rush.png" 
  },
  { 
    name: "Feisty Korean Pack", 
    desc: "A bold kick of Gochugaru and a touch of sweetness.", 
    price: "₹350", 
    image: "/products/feisty_korean_crispo.png" 
  },
];

export default function GiftsPage() {
  const [activeOccasion, setActiveOccasion] = useState(occasions[0].id);

  return (
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-foreground relative overflow-hidden">
      <div className="brand-pattern-bg" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lifestyle/02.jpg')] bg-cover bg-center opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b28] to-transparent z-10" />
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-display text-foreground mb-6">Give them a Midnight.</h1>
          <p className="text-xl md:text-2xl text-muted font-display italic max-w-2xl mx-auto">
            &ldquo;Because some moments are too good to keep to yourself.&rdquo;
          </p>
        </div>
      </section>

      {/* Occasion Switcher */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {occasions.map((occ) => (
            <button
              key={occ.id}
              onClick={() => { setActiveOccasion(occ.id); }}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all ${
                activeOccasion === occ.id 
                  ? "bg-accent text-white shadow-lg shadow-accent/20 scale-105" 
                  : "bg-surface text-muted hover:text-foreground border border-white/5"
              }`}
            >
              <occ.icon size={20} />
              {occ.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {bundles.map((bundle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-accent/30 transition-all shadow-xl"
            >
              <div className="relative w-full aspect-square mb-8 p-4 flex items-center justify-center bg-background/50 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform">
                <Image 
                  src={bundle.image} 
                  alt={bundle.name} 
                  fill 
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-2">{bundle.name}</h3>
              <p className="text-muted text-sm mb-8 flex-grow leading-relaxed italic">&ldquo;{bundle.desc}&rdquo;</p>
              <div className="w-full flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-foreground font-bold text-xl">{bundle.price}</span>
                <button
                  onClick={() => {}}
                  className="px-6 py-2 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full text-sm font-medium transition-all border border-accent/20 active:scale-95"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bulk Form */}
      <section className="py-32 bg-secondary/30 border-t border-white/5 relative">
        <div className="brand-pattern-bg opacity-[0.02]" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">Corporate & Bulk</h2>
            <p className="text-muted italic">&ldquo;Your brand, our crunch. A partnership made in the quiet hours.&rdquo;</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" aria-label="Your Name" className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              <input type="email" placeholder="Work Email" aria-label="Work Email" className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
            </div>
            <input type="text" placeholder="Company Name" aria-label="Company Name" className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
            <textarea placeholder="Tell us about your gifting needs..." aria-label="Tell us about your gifting needs" rows={5} className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" />
            <button type="button" className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-4 font-medium transition-all shadow-lg hover:shadow-accent/20 active:scale-[0.99]">
              Request a Proposal
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
