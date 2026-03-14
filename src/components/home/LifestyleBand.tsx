"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/lifestyle/01.png",
  "/lifestyle/02.jpg",
  "/lifestyle/03.png",
  "/lifestyle/04.png",
  "/lifestyle/05.png",
  "/lifestyle/06.png",
  "/lifestyle/07.png",
  "/lifestyle/08.png",
];

export function LifestyleBand() {
  // Duplicate for seamless scroll
  const doubleImages = [...images, ...images];

  return (
    <section className="py-24 overflow-hidden bg-background relative flex relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.02]" />
      
      <motion.div 
        className="flex gap-6 relative z-10"
        animate={{ x: [0, -2000] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {doubleImages.map((src, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-[280px] md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
          >
            <Image 
              src={src} 
              alt="Midnight Lifestyle" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 400px"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
