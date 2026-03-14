"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Clock } from "lucide-react";

const beliefs = [
  {
    title: "Comfort by Design",
    desc: "We believe better ingredients should taste like a reward. Sourced with care, made for your quietest hours.",
    icon: Heart
  },
  {
    title: "Radical Honesty",
    desc: "Roasted slow in olive oil. Nothing hidden, just the seasoning you know. An indulgence that respects your body.",
    icon: ShieldCheck
  },
  {
    title: "Real Moments",
    desc: "From the afternoon pause to the midnight screen glow. We craft snacks for the moments that make you human.",
    icon: Clock
  }
];

export function Philosophy() {
  return (
    <section className="py-40 bg-background border-y border-foreground/5 relative overflow-hidden"><div className="brand-pattern-bg opacity-[0.02]" />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="space-y-32">
          {beliefs.map((belief) => (
            <motion.div 
              key={belief.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent mb-8">
                <belief.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl md:text-6xl font-display text-foreground mb-6 tracking-tight">
                {belief.title}
              </h3>
              <p className="text-xl md:text-2xl text-muted font-body leading-relaxed max-w-2xl">
                {belief.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
