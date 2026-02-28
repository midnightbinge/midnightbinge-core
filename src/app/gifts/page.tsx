"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/components/AudioProvider";

const occasions = ["Diwali", "Corporate Gifting", "Housewarming", "Birthday", "Thank You", "Just Because"];

const bundles = [
  { name: "The Late Night Kit", desc: "3 Flavoured Makhana + 2 Cripso", price: "₹450" },
  { name: "The Purist Box", desc: "4 Packs of Raw Makhana", price: "₹700" },
  { name: "The Midnight Starter", desc: "1 of every flavor. The ultimate introduction.", price: "₹950" }
];

export default function GiftsPage() {
  const [activeOccasion, setActiveOccasion] = useState(occasions[0]);
  const { playCrunch } = useAudio();

  return (
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-white">
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b28] to-transparent z-10" />
        {/* Placeholder for warm gifted pack image */}
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-display text-foreground mb-6">Give them a Midnight.</h1>
          <p className="text-xl text-warm font-display italic">For the moments worth sharing.</p>
        </div>
      </section>

      {/* Occasion Tags & Bundles */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex overflow-x-auto gap-4 justify-start md:justify-center mb-16 pb-4 hide-scrollbar">
          {occasions.map((occ) => (
            <button
              key={occ}
              onClick={() => { setActiveOccasion(occ); playCrunch(); }}
              className={`flex-shrink-0 px-8 py-3 rounded-full border transition-all duration-300 font-medium ${
                activeOccasion === occ 
                  ? "border-accent bg-accent/10 text-white" 
                  : "border-white/10 text-muted hover:border-white/30"
              }`}
            >
              {occ}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bundles.map((bundle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-white/20 transition-colors"
            >
              <div className="w-full aspect-square bg-black/40 rounded-xl mb-6 flex items-center justify-center border border-white/5">
                Bundle Image
              </div>
              <h3 className="text-2xl font-display text-white mb-2">{bundle.name}</h3>
              <p className="text-muted text-sm mb-6 flex-grow">{bundle.desc}</p>
              <div className="w-full flex items-center justify-between mt-auto">
                <span className="text-white font-medium">{bundle.price}</span>
                <button 
                  onClick={() => { playCrunch(); alert("Enquire form opening"); }}
                  className="px-6 py-2 bg-white/5 hover:bg-accent text-white rounded-full text-sm transition-colors"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bulk Form */}
      <section className="py-32 bg-secondary border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">Corporate & Bulk</h2>
            <p className="text-muted">Looking to gift your team or stock an event? Let's talk.</p>
          </div>

          <form className="space-y-6 bg-surface p-8 md:p-12 rounded-3xl border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-colors" />
              <input type="text" placeholder="Company" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-colors" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-colors" />
              <select className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white/70 focus:border-accent outline-none transition-colors appearance-none">
                <option value="">Quantity Range</option>
                <option value="50-100">50 - 100 boxes</option>
                <option value="100-500">100 - 500 boxes</option>
                <option value="500+">500+ boxes</option>
              </select>
            </div>
            <textarea placeholder="Message & Occasion" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-accent outline-none transition-colors resize-none" />
            
            <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex items-start gap-4">
              <span className="text-warm font-display italic text-lg whitespace-nowrap">Note:</span>
              <p className="text-sm text-muted leading-relaxed">Looking for something personal? Custom packaging for bulk orders can be arranged. Reach out and we'll make it right.</p>
            </div>

            <button type="button" onClick={playCrunch} className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-4 font-medium transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
