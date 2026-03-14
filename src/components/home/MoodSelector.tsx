"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useAudio } from "@/components/AudioProvider";
import { cn } from "@/lib/utils";

const moods = [
  {
    id: "late-night",
    title: "Late Night Binge",
    color: "bg-indigo-950",
    image: "/lifestyle/01.png",
    productImage: "/products/thai_sweet_chilli.png",
    recommendation: { name: "Thai Sweet Chilli", desc: "For when the screen glows.", slug: "thai-sweet-chilli" }
  },
  {
    id: "office-break",
    title: "Office Break",
    color: "bg-slate-900",
    image: "/lifestyle/05.png",
    productImage: "/products/himalayan_salt_and_pepper.png",
    recommendation: { name: "Himalayan Salt and Pepper", desc: "Clean focus.", slug: "himalayan-salt-pepper" }
  },
  {
    id: "post-workout",
    title: "Post Workout",
    color: "bg-zinc-900",
    image: "/lifestyle/07.png",
    productImage: "/products/raw_makhana.png",
    recommendation: { name: "Pure Raw Makhana", desc: "Pure fuel.", slug: "raw-makhana" }
  },
  {
    id: "movie-time",
    title: "Movie Time",
    color: "bg-stone-900",
    image: "/lifestyle/09.png",
    productImage: "/products/cheddar_cheese_comfort.png",
    recommendation: { name: "Cheddar Cheese Comfort", desc: "Comfort you can hear.", slug: "cheddar-cheese-comfort" }
  }
];

export function MoodSelector() {
  const [hoveredMood, setHoveredMood] = useState<string | null>(null);
  const { playCrunch } = useAudio();

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="brand-pattern-bg opacity-[0.02]" />
      
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-medium text-foreground mb-4">
          What's your <span className="text-accent">Midnight?</span>
        </h2>
        <p className="text-muted text-lg md:text-xl italic font-display">Find the crunch for your moment.</p>
      </div>

      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[70vh]">
        {moods.map((mood) => {
          const isHovered = hoveredMood === mood.id;
          return (
            <motion.div
              key={mood.id}
              tabIndex={0}
              role="button"
              aria-expanded={isHovered}
              className={cn(
                "relative flex flex-col items-center justify-center overflow-hidden cursor-pointer min-h-[40vh] md:min-h-0 border-b md:border-b-0 md:border-r border-white/5 last:border-0",
                mood.color
              )}
              onMouseEnter={() => setHoveredMood(mood.id)}
              onMouseLeave={() => setHoveredMood(null)}
              onFocus={() => setHoveredMood(mood.id)}
              onBlur={() => setHoveredMood(null)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setHoveredMood(isHovered ? null : mood.id); }}
              onClick={() => setHoveredMood(isHovered ? null : mood.id)}
              whileHover={{ flexGrow: 1.2 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Lifestyle Background Image */}
              <div className="absolute inset-0">
                <Image 
                  src={mood.image} 
                  alt={mood.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-1000 ease-out",
                    isHovered ? "scale-110 opacity-30 grayscale-[0.5]" : "scale-100 opacity-50 grayscale"
                  )}
                />
              </div>
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

              {/* Reveal Product Shot on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50, rotate: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: -5 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute z-20 w-32 md:w-48 h-32 md:h-48 pointer-events-none"
                  >
                    <Image 
                      src={mood.productImage} 
                      alt="Recommended Product" 
                      fill
                      className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-30 text-center p-8">
                <motion.h3 
                  className={cn(
                    "text-3xl md:text-4xl font-display keep-white text-white transition-all duration-500", 
                    isHovered ? "translate-y-[-80px] md:translate-y-[-120px] scale-110" : "translate-y-0"
                  )}
                >
                  {mood.title}
                </motion.h3>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="absolute inset-x-0 bottom-[-1rem] md:bottom-[-2rem] flex flex-col items-center px-4"
                    >
                      <p className="text-brand-cream text-xl md:text-2xl font-accent mb-1 keep-white text-white">{mood.recommendation.name}</p>
                      <p className="text-warm italic text-xs md:text-sm mb-4 md:mb-6 text-white/80">"{mood.recommendation.desc}"</p>
                      <Link 
                        href={`/range/${mood.recommendation.slug}`}
                        onClick={(e) => { e.stopPropagation(); playCrunch(); }}
                        className="px-6 py-2 bg-white text-black rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-colors whitespace-nowrap shadow-xl"
                      >
                        Try This Flavor
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
