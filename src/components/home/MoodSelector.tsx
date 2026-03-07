"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const moods = [
  {
    id: "late-night",
    title: "Late Night Binge",
    color: "bg-indigo-950",
    image: "/lifestyle/01.png",
    productImage: "/products/01.png",
    recommendation: { name: "Thai Sweet Chilli", desc: "For when the screen glows.", slug: "thai-sweet-chilli" }
  },
  {
    id: "office-break",
    title: "Office Break",
    color: "bg-slate-900",
    image: "/lifestyle/05.png",
    productImage: "/products/06.png",
    recommendation: { name: "Himalayan Salt & Pepper", desc: "Clean focus.", slug: "himalayan-salt-pepper" }
  },
  {
    id: "post-workout",
    title: "Post Workout",
    color: "bg-zinc-900",
    image: "/lifestyle/07.png",
    productImage: "/products/01.png",
    recommendation: { name: "Raw Makhana", desc: "Pure fuel.", slug: "raw-makhana" }
  },
  {
    id: "movie-time",
    title: "Movie Time",
    color: "bg-stone-900",
    image: "/lifestyle/09.png",
    productImage: "/products/03.png",
    recommendation: { name: "Cheddar Cheese", desc: "Comfort you can hear.", slug: "cheddar-cheese" }
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
              className={cn(
                "relative flex flex-col items-center justify-center overflow-hidden cursor-pointer min-h-[60vh] md:min-h-0 border-r border-white/5 last:border-r-0",
                mood.color
              )}
              onMouseEnter={() => setHoveredMood(mood.id)}
              onMouseLeave={() => setHoveredMood(null)}
              onClick={() => {
                if (window.innerWidth < 1024) {
                   setHoveredMood(isHovered ? null : mood.id);
                }
              }}
              whileHover={{ flexGrow: 1.5 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Lifestyle Background Image */}
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out",
                  isHovered ? "scale-110 opacity-30 grayscale-[0.5]" : "scale-100 opacity-50 grayscale"
                )}
                style={{ backgroundImage: `url('${mood.image}')` }}
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

              {/* Reveal Product Shot on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.img
                    src={mood.productImage}
                    alt="Recommended Product"
                    initial={{ opacity: 0, scale: 0.5, y: 50, rotate: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: -5 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute z-20 w-48 h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] pointer-events-none"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-30 text-center p-8 mt-auto md:mt-0">
                <motion.h3 
                  className={cn(
                    "text-3xl md:text-4xl font-display keep-white text-white transition-all duration-500", 
                    isHovered ? "translate-y-[-120px] scale-110" : "translate-y-0"
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
                      className="absolute inset-x-0 bottom-[-2rem] flex flex-col items-center"
                    >
                      <p className="text-brand-cream text-2xl font-display mb-1 keep-white text-white">{mood.recommendation.name}</p>
                      <p className="text-warm italic text-sm mb-6 text-white/80">"{mood.recommendation.desc}"</p>
                      <Link 
                        href={`/range/${mood.recommendation.slug}`}
                        onClick={(e) => { e.stopPropagation(); playCrunch(); }}
                        className="px-6 py-2 bg-white text-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-colors"
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
