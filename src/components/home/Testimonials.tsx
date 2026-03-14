"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "Finally, a snack that doesn't taste like cardboard but still uses real ingredients. The Thai Sweet Chilli is my nightly ritual.",
    author: "Rohan M.",
    role: "Late Night Creator"
  },
  {
    text: "Roasted in olive oil makes such a difference. No heavy feeling the next morning. It's the only thing I stock in my office now.",
    author: "Ananya K.",
    role: "Strategic Designer"
  },
  {
    text: "The crunch is incredible. You can actually hear the quality. Simple, honest, and addictive in the best way possible.",
    author: "Vikram S.",
    role: "Wellness Enthusiast"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-4">Midnight Voices</h2>
          <p className="text-muted italic font-accent text-xl">"Real stories from the quiet hours."</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full md:w-[calc(33.333%-2rem)] bg-background p-10 rounded-3xl border border-foreground/5 shadow-xl relative group hover:border-accent/20 transition-all"
            >
              <Quote className="text-accent/20 absolute top-8 left-8 group-hover:text-accent/40 transition-colors" size={40} />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic font-display">
                  "{t.text}"
                </p>
                <div className="border-t border-foreground/5 pt-6">
                  <p className="font-bold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
