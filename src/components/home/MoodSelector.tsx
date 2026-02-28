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
    recommendation: { name: "Thai Sweet Chilli", desc: "For when the screen glows.", slug: "thai-sweet-chilli" }
  },
  {
    id: "office-break",
    title: "Office Break",
    color: "bg-slate-900",
    recommendation: { name: "Himalayan Salt & Pepper", desc: "Clean focus.", slug: "himalayan-salt-pepper" }
  },
  {
    id: "post-workout",
    title: "Post Workout",
    color: "bg-zinc-900",
    recommendation: { name: "Raw Makhana", desc: "Pure fuel.", slug: "raw-makhana" }
  },
  {
    id: "movie-time",
    title: "Movie Time",
    color: "bg-stone-900",
    recommendation: { name: "Cheddar Cheese", desc: "Comfort you can hear.", slug: "cheddar-cheese" }
  }
];

export function MoodSelector() {
  const [hoveredMood, setHoveredMood] = useState<string | null>(null);
  const { playCrunch } = useAudio();

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-5xl md:text-6xl font-display font-medium text-white mb-4">
          What's your Midnight?
        </h2>
        <p className="text-muted text-lg md:text-xl">Find the crunch for your moment.</p>
      </div>

      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:h-[80vh]">
        {moods.map((mood) => {
          const isHovered = hoveredMood === mood.id;
          return (
            <motion.div
              key={mood.id}
              className={cn(
                "relative flex items-center justify-center overflow-hidden cursor-pointer min-h-[50vh] md:min-h-0",
                mood.color
              )}
              onMouseEnter={() => setHoveredMood(mood.id)}
              onMouseLeave={() => setHoveredMood(null)}
              onClick={() => {
                if (window.innerWidth < 768) {
                   setHoveredMood(isHovered ? null : mood.id);
                }
              }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Background image placeholder */}
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out",
                  isHovered ? "scale-110 blur-md opacity-40" : "scale-100 blur-0 opacity-60"
                )}
                style={{ backgroundImage: `url('https://source.unsplash.com/random/800x600/?dark,${mood.id}')` }} // Placeholder API
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

              <div className="relative z-10 text-center p-8">
                <motion.h3 
                  className={cn("text-4xl md:text-5xl font-display text-white transition-all duration-500", isHovered ? "-translate-y-4" : "translate-y-0")}
                >
                  {mood.title}
                </motion.h3>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="absolute inset-x-0 bottom-[-4rem] flex flex-col items-center"
                    >
                      <p className="text-brand-cream text-xl font-display mb-1">{mood.recommendation.name}</p>
                      <p className="text-warm italic text-sm mb-4">"{mood.recommendation.desc}"</p>
                      <Link 
                        href={`/range/${mood.recommendation.slug}`}
                        onClick={(e) => { e.stopPropagation(); playCrunch(); }}
                        className="text-xs uppercase tracking-widest text-white border-b border-white/30 hover:border-accent hover:text-accent pb-1 transition-colors"
                      >
                        See This Flavor
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
