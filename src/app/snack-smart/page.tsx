"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Droplets, Wheat, Flame, Box } from "lucide-react";

export default function SnackSmartPage() {
  return (
    <div className="bg-background min-h-screen pt-32 selection:bg-accent selection:text-white">
      
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">Snack Smart.</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">Because knowing what's in your food shouldn't require a chemistry degree.</p>
      </section>

      {/* Why Makhana & Olive Oil */}
      <section className="container mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-surface p-10 md:p-16 rounded-3xl border border-white/5">
          <Wheat className="text-warm mb-6" size={40} />
          <h2 className="text-3xl font-display text-white mb-6">Why Makhana?</h2>
          <p className="text-muted leading-relaxed">
            Sourced from the wetlands of Bihar, makhana (popped lotus seeds) has been a staple of Indian wellness for centuries. It's naturally light, packs a satisfying crunch, and carries flavor without the heavy, sluggish feeling of potato chips or extruded corn snacks. It's the perfect canvas for midnight cravings.
          </p>
        </div>
        <div className="bg-surface p-10 md:p-16 rounded-3xl border border-white/5">
          <Droplets className="text-accent mb-6" size={40} />
          <h2 className="text-3xl font-display text-white mb-6">Why Olive Oil?</h2>
          <p className="text-muted leading-relaxed">
            Most brands use cheap, refined oils (like palm or cottonseed oil) to cut costs. We don't. We roast our makhana in olive oil. It respects the ingredient, provides a cleaner taste profile, and ensures that when you hit the bottom of the bag, you feel good about it.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-secondary py-32 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-16">How it's made.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Box, title: "Sourced", desc: "Handpicked from the finest farms in Bihar." },
              { icon: Flame, title: "Popped", desc: "Gently popped to achieve maximum airy crunch." },
              { icon: Droplets, title: "Roasted", desc: "Slow-roasted in premium olive oil, never fried." },
              { icon: Wheat, title: "Seasoned", desc: "Tossed in bold, honest spice blends." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border border-white/10 text-white mb-6 relative">
                  <step.icon size={28} />
                  {i < 3 && <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-white/10 -z-10" />}
                </div>
                <h3 className="text-xl font-display text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Block */}
      <section className="container mx-auto px-6 md:px-12 py-32">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-16 text-center">The Midnight Difference</h2>
        
        <div className="max-w-4xl mx-auto bg-surface rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-3 bg-black/50 p-6 border-b border-white/10 text-sm font-bold tracking-widest uppercase text-muted">
            <div>The Standard</div>
            <div className="text-center">Feature</div>
            <div className="text-right text-brand-cream">Midnight</div>
          </div>
          
          {[
            { label: "Oil Used", us: "Olive Oil", them: "Refined Palm Oil" },
            { label: "Cooking Method", us: "Slow Roasted", them: "Deep Fried" },
            { label: "Ingredients", us: "Transparent & Clean", them: "Hidden Preservatives" },
            { label: "The Feeling", us: "Better Feels Good", them: "The Morning Regret" }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 items-center">
              <div className="flex items-center text-muted gap-3">
                <XCircle size={18} className="text-red-500/50 hidden sm:block" />
                <span className="text-sm sm:text-base">{row.them}</span>
              </div>
              <div className="text-center font-display text-white text-lg">{row.label}</div>
              <div className="flex items-center justify-end text-brand-cream gap-3">
                <span className="text-sm sm:text-base font-medium">{row.us}</span>
                <CheckCircle2 size={18} className="text-accent hidden sm:block" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
