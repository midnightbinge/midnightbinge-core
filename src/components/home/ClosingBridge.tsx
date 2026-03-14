"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ClosingBridge() {
  return (
    <section className="py-40 bg-background flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.02]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-display text-foreground mb-8">
          Everyone has a <span className="text-accent">Midnight</span>.
        </h2>
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-16 italic font-accent">
          &ldquo;Until next time, snack better. Feel good.&rdquo;
        </p>
        
        <Link 
          href="/range"
          className="px-12 py-5 bg-accent text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-accent/20"
        >
          Explore the Range
        </Link>
      </motion.div>
    </section>
  );
}
