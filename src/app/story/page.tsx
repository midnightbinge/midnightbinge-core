"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function StoryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;
  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-background min-h-screen pt-24 selection:bg-accent selection:text-foreground relative">
      
      {/* 1. The Feeling (Opening) */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 w-full h-full opacity-5 mix-blend-overlay pointer-events-none">
          <Image src="/assets/Brand Pattern 01.png" alt="" fill className="object-cover" />
        </div>
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
          <p className="text-xl md:text-2xl text-muted font-accent mt-8 italic">
            "When the world is quiet, when the day has ended, when our guards are down."
          </p>
        </motion.div>
      </section>

      {/* 2. The Visual Story (Carousel) */}
      <section className="py-24 md:py-40 bg-surface relative overflow-hidden">
        <div className="brand-pattern-bg opacity-[0.02]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">Two Brothers. One Problem.</h2>
            <p className="text-xl text-muted font-body max-w-2xl mx-auto">
              Unable to find a snacking brand that neither made them feel guilty, nor scared them. They could've stayed consumers, but they chose to become creators.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Carousel Area */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={`/story/story_page_${currentIndex + 1}.png`} 
                    alt={`Midnight Story Page ${currentIndex + 1}`} 
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center px-4 md:px-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all shadow-lg active:scale-90"
                  aria-label="Previous Story"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-8">
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all shadow-lg active:scale-90"
                  aria-label="Next Story"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Pagination / Progress */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentIndex === i ? "w-12 bg-accent" : "w-4 bg-muted/30 hover:bg-muted/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-muted text-sm font-medium tracking-widest uppercase">
                Step {currentIndex + 1} <span className="mx-2 opacity-30">/</span> {totalSlides}
              </p>
            </div>
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
            Late at night, when the world feels honest, something became clear.
          </h2>
          <p className="text-xl md:text-2xl text-muted font-body leading-relaxed">
            Snacking had stopped feeling human. Every option came with a lecture. <span className="text-accent font-accent italic text-3xl md:text-4xl block mt-6">"That is when Midnight was born."</span>
          </p>
        </motion.div>
      </section>

      {/* 4. The Challenge & Mission */}
      <section className="py-32 bg-secondary/30 px-6">
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
                On the other, indulgent snacks are loud and disconnected from honesty. In this space, the soul of eating gets lost.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-background p-10 md:p-12 rounded-3xl border border-foreground/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <Image src="/assets/Right Flower 01.png" alt="" width={128} height={128} />
              </div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">The Challenge</h4>
              <p className="text-2xl font-display text-foreground leading-relaxed relative z-10">
                "To reimagine snacking where health, taste, and emotion could exist together without losing authenticity."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Solution / Better Feels Good */}
      <section className="py-40 bg-brand-cream text-black px-6 text-center relative overflow-hidden">
        <div className="brand-pattern-bg opacity-[0.05] grayscale brightness-0" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-display mb-8">The Solution.</h2>
          <p className="text-xl md:text-2xl opacity-80 leading-relaxed mb-16">
            Midnight bridges this gap by creating snacks that balance health, taste, and honesty by design. Using clean ingredients, olive oil, and thoughtful preparation, Midnight delivers flavor without excess.
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
