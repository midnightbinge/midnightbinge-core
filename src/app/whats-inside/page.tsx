"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Droplets, Wheat, Flame, Box } from "lucide-react";

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
          What's Inside<span className="text-accent">.</span>
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          variants={fadeUp}
          className="text-xl md:text-2xl text-muted font-display italic max-w-2xl mx-auto"
        >
          "Because knowing what you're reaching for shouldn't feel like a lecture. It should feel like a choice."
        </motion.p>
      </section>

      {/* HEAD: Why Makhana & Olive Oil */}
      <section className="container mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-surface p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Wheat size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Honest Ingredients</h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Sourced from the wetlands of Bihar, makhana (popped lotus seeds) has been a staple of Indian wellness for centuries. It's naturally light, packs a satisfying crunch, and carries flavor without the heavy, sluggish feeling of traditional snacks.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            We don't hide behind chemical names. If you can't say it, we don't use it.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          variants={fadeUp}
          className="bg-secondary p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Droplets size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Roasted in Olive Oil</h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Refined oils are cheap, but they leave a morning regret. We use olive oil for a cleaner roast that respects your body. It's an indulgence that actually feels good when the night ends.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Better fats. Better crunch. Better feels.
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
                <p className="text-muted max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HAND: The Difference */}
      <section className="container mx-auto px-6 md:px-12 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">The Midnight Standard</h2>
          <p className="text-lg text-muted">A side-by-side look at how we reimagine your midnight pause.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-surface rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid grid-cols-3 bg-background/50 p-8 border-b border-white/10 text-sm font-bold tracking-widest uppercase text-muted">
            <div>The Others</div>
            <div className="text-center">Midnight</div>
            <div className="text-right">Focus</div>
          </div>
          
          {[
            { label: "Oil", us: "Olive Oil", them: "Palm Oil" },
            { label: "Cooking", us: "Roasted", them: "Deep Fried" },
            { label: "Flavor", us: "Real Spices", them: "Chemical Dust" },
            { label: "Aftertaste", us: "Clean", them: "Heavy" }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-8 border-b border-white/5 last:border-0 items-center">
              <div className="text-muted font-medium">{row.them}</div>
              <div className="text-center text-accent font-bold text-lg">{row.us}</div>
              <div className="text-right text-foreground font-display">{row.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-accent text-3xl text-foreground mb-8">Ready for a better crunch?</p>
          <motion.a 
            href="/range"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-accent text-white rounded-full font-medium text-lg shadow-lg shadow-accent/20"
          >
            Explore the range
          </motion.a>
        </div>
      </section>

    </div>
  );
}
