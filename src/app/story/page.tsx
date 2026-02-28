"use client";

import { motion } from "framer-motion";

export default function StoryPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  return (
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-foreground">
      
      {/* 1. The Feeling (Opening) */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.img 
          src="/assets/Brand Pattern 01.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay pointer-events-none"
        />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground leading-tight mb-8">
            Most brands begin with a product. <br/>
            <span className="text-accent">Midnight began with a feeling.</span>
          </h1>
        </motion.div>
      </section>

      {/* 2. The Visual Story */}
      <section className="py-24 md:py-40 bg-surface relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">Two Brothers. One Problem.</h2>
            <p className="text-xl text-muted font-body max-w-2xl mx-auto">
              Unable to find a snacking brand that neither made them feel guilty, nor scared them. They could've stayed consumers, but they chose to become creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full overflow-hidden rounded-3xl border border-foreground/5 bg-background shadow-xl ${
                  num === 1 || num === 6 ? 'md:col-span-2 md:w-3/4 md:mx-auto' : ''
                }`}
              >
                <img 
                  src={`/story/story_page_${num}.png`} 
                  alt={`Midnight Story Part ${num}`} 
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Realization */}
      <section className="py-40 bg-background text-center px-6 border-b border-foreground/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-background opacity-50" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-8">
            Late at night, when the lights are low and the world feels honest, something became clear.
          </h2>
          <p className="text-xl md:text-2xl text-muted font-body leading-relaxed">
            Snacking had stopped feeling human. Every option came with a lecture. Numbers on the front. Guilt in the aftertaste. Food that talked more than it listened. <span className="text-warm font-display italic">That is when Midnight was born.</span>
          </p>
        </motion.div>
      </section>

      {/* 4. The Challenge & Mission */}
      <section className="py-32 bg-secondary px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-display text-foreground mb-6">Everyone has a Midnight.</h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                And this brand exists for that moment. Snacking today often forces people to choose between extremes. On one side, health-focused options feel cold, restrictive, and stripped of emotion. 
              </p>
              <p className="text-lg text-muted leading-relaxed">
                On the other, indulgent snacks are loud, careless, and disconnected from honesty and well-being. In this space, the soul of eating gets lost. Food becomes either a rule to follow or a guilt to carry, leaving little room for comfort, connection, or true satisfaction.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-background p-10 md:p-12 rounded-3xl border border-foreground/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <img src="/assets/Right Flower 01.png" alt="" className="w-32 h-32 object-contain" />
              </div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">The Challenge</h4>
              <p className="text-2xl font-display text-foreground leading-relaxed relative z-10">
                "To reimagine snacking without compromise where health, taste, and emotion could exist together without losing authenticity."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Solution / Better Feels Good */}
      <section className="py-40 bg-brand-cream text-black px-6 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display mb-8">The Solution.</h2>
          <p className="text-xl md:text-2xl opacity-80 leading-relaxed mb-16">
            Midnight bridges this gap by creating snacks that balance health, taste, and honesty by design. Using clean ingredients, olive oil, and thoughtful preparation, Midnight delivers flavor without excess and comfort without guilt. Every product is crafted to feel transparent, satisfying, and emotionally connected allowing people to indulge mindfully during their quiet moments. 
          </p>
          <div className="w-full h-px bg-black/10 mb-16" />
          <p className="text-2xl md:text-3xl font-display italic opacity-90 mb-6">
            The result is a snacking experience that feels complete: nourishing to the body, comforting to the mind, and deeply satisfying at heart.
          </p>
          <h3 className="text-6xl md:text-8xl font-display font-bold mt-12 tracking-tighter">
            Better Feels Good.
          </h3>
        </motion.div>
      </section>

    </div>
  );
}
