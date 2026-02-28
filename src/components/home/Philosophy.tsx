"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Clock } from "lucide-react";

const beliefs = [
  {
    title: "Health with Heart.",
    desc: "We don't do clinical. We believe better ingredients should taste like an indulgence.",
    icon: Heart
  },
  {
    title: "Honest Indulgence.",
    desc: "Roasted in olive oil. No hidden nasties. Just honest, bold flavor you can trust.",
    icon: ShieldCheck
  },
  {
    title: "Made for Real Moments.",
    desc: "From the 2 PM slump to the 2 AM screen glow. Midnight is crafted for when you need it most.",
    icon: Clock
  }
];

export function Philosophy() {
  return (
    <section className="py-40 bg-background border-y border-foreground/5 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="space-y-32">
          {beliefs.map((belief, idx) => (
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
