"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const { playCrunch } = useAudio();

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* Parallax Background / Ambient Texture */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-secondary/50 pointer-events-none"
      >
        <img src="/assets/Breeze 01.png" alt="Brand Texture" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.8, ease: [0.4, 0, 0.2, 1] }} // Delay accounts for EntranceAnimation
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 tracking-tight"
        >
          Better Feels Good<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted font-body max-w-2xl mb-12"
        >
          Premium makhana crafted for your quietest hours and boldest cravings.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link 
            href="/range"
            onClick={playCrunch}
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-transform transform hover:scale-105 active:scale-95 duration-200"
          >
            Explore the Range
          </Link>
          <Link 
            href="/story"
            onClick={playCrunch}
            className="px-8 py-4 border border-foreground/20 hover:border-foreground text-foreground rounded-full font-medium transition-all hover:bg-foreground/5"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Product Shot */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), opacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 4.2, ease: "easeOut" }}
        className="absolute bottom-[-10%] md:bottom-[-20%] z-[5] w-full max-w-4xl opacity-90 pointer-events-none"
      >
        <div className="w-full aspect-[16/9] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background/0 to-transparent flex items-center justify-center">
            <img src="/products/04.png" alt="Midnight Pack" className="w-auto h-96 md:h-[32rem] object-contain drop-shadow-[0_0_80px_rgba(107,92,231,0.4)] transform rotate-[-5deg]" />
        </div>
      </motion.div>

    </section>
  );
}
