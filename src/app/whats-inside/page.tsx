"use client";

import { motion } from "framer-motion";
import { Droplets, Wheat, Flame, Box } from "lucide-react";
import Link from "next/link";

export default function WhatsInsidePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="bg-background min-h-screen pt-32 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      {/* HEART: The Opening */}
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center relative z-10">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-display text-foreground mb-6"
        >
          What&apos;s Inside<span className="text-accent">.</span>
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          variants={fadeUp}
          className="text-xl md:text-2xl text-muted font-display italic max-w-2xl mx-auto"
        >
          &ldquo;Because knowing what you&apos;re reaching for shouldn&apos;t feel like a lecture. <span className="text-accent font-accent not-italic">It should feel like a choice.</span>&rdquo;
        </motion.p>
      </section>

      {/* HEAD: Why Makhana & Olive Oil */}
      <section className="container mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-surface p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-accent/20 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <Wheat size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Honest Ingredients</h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Sourced from the wetlands of Bihar, makhana (popped lotus seeds) has been a staple of Indian wellness for centuries. It&apos;s naturally light, packs a satisfying crunch, and carries flavor without the heavy, sluggish feeling of traditional snacks.
          </p>
          <p className="text-foreground font-accent text-xl">
            &ldquo;If you can&apos;t say it, we don&apos;t use it.&rdquo;
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          variants={fadeUp}
          className="bg-secondary p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-accent/20 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <Droplets size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Roasted in Olive Oil</h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Refined oils are cheap, but they often leave a heavy aftertaste. We use olive oil for a cleaner roast that respects your body. It&apos;s an indulgence that actually feels good when the night ends.
          </p>
          <p className="text-foreground font-accent text-xl">
            &ldquo;Better fats. Better crunch.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* The Process */}
      <section className="py-32 relative overflow-hidden">
        <div className="brand-pattern-bg opacity-[0.02]" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-20">The Honest Process</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Box, title: "Sourced", desc: "Handpicked from the finest farms in Bihar." },
              { icon: Flame, title: "Popped", desc: "Gently popped to achieve maximum airy crunch." },
              { icon: Droplets, title: "Roasted", desc: "Slow-roasted in premium olive oil, never fried." },
              { icon: Wheat, title: "Seasoned", desc: "Tossed in bold, honest spice blends." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center border border-white/10 text-accent mb-8 relative group hover:border-accent transition-colors">
                  <step.icon size={32} />
                  {i < 3 && <div className="hidden md:block absolute top-1/2 left-[120%] w-full h-px bg-white/10" />}
                </div>
                <h3 className="text-2xl font-display text-foreground mb-3">{step.title}</h3>
                <p className="text-muted max-w-[200px] text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HAND: The Difference */}
      <section className="container mx-auto px-6 md:px-12 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">The Midnight Standard</h2>
          <p className="text-lg text-muted italic font-accent">&ldquo;A side-by-side look at how we reimagine your midnight pause.&rdquo;</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-surface rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid grid-cols-3 bg-background/50 p-6 md:p-8 border-b border-white/10 text-[10px] md:text-sm font-bold tracking-widest uppercase text-muted">
            <div>The Standard</div>
            <div className="text-center">Midnight</div>
            <div className="text-right">Focus</div>
          </div>
          
          {[
            { label: "Oil", us: "Olive Oil", them: "Refined Oils" },
            { label: "Cooking", us: "Roasted", them: "Fried" },
            { label: "Flavor", us: "Real Spices", them: "Artificial Seasoning" },
            { label: "Aftertaste", us: "Clean", them: "Heavy" }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-6 md:p-8 border-b border-white/5 last:border-0 items-center">
              <div className="text-muted font-medium text-sm md:text-base">{row.them}</div>
              <div className="text-center text-accent font-bold text-base md:text-lg">{row.us}</div>
              <div className="text-right text-foreground font-display text-sm md:text-base">{row.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-accent text-3xl text-foreground mb-8">Ready for a better crunch?</p>
          <Link 
            href="/range"
            className="inline-block px-12 py-5 bg-accent text-white rounded-full font-medium text-lg shadow-lg shadow-accent/20 hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95"
          >
            Explore the range
          </Link>
        </div>
      </section>

    </div>
  );
}
