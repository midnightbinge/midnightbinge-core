"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finally, a snack that doesn't taste like cardboard but doesn't make me feel terrible the next morning.",
    name: "Rohan",
    city: "Mumbai"
  },
  {
    quote: "The Sweet Chilli flavour during my 2 AM coding sessions has become a ritual. Unmatched crunch.",
    name: "Ananya",
    city: "Bangalore"
  },
  {
    quote: "It actually feels premium. You don't usually say that about a pouch of snacks.",
    name: "Kabir",
    city: "Delhi"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-16 text-center">
          Real nights. Real people.
        </h2>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center bg-secondary border border-white/5 p-10 rounded-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <span className="absolute top-6 left-6 text-6xl font-display text-warm/20 leading-none">"</span>
              <p className="text-lg md:text-xl text-foreground font-body italic relative z-10 mb-8 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex flex-col">
                <span className="text-brand-cream font-medium">{t.name}</span>
                <span className="text-muted text-sm">{t.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
