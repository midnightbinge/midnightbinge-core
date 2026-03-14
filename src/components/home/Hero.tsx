"use client";

import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    type: "emotion",
    image: "/lifestyle/01.png",
    tagline: "Better Feels Good",
    subline: "Premium makhana, roasted in olive oil for your quietest hours."
  },
  {
    id: 2,
    type: "mockup",
    image: "/products/peri_peri_rush.png",
    tagline: "The Honest Crunch",
    subline: "Bold flavors that respect your body. Sourced with care."
  },
  {
    id: 3,
    type: "emotion",
    image: "/lifestyle/03.png",
    tagline: "Real Food for Real Nights",
    subline: "Snacking evolved for the bold and the beautiful."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects - disabled if reduced motion is preferred
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-secondary/50 pointer-events-none"
      >
        <Image 
          src="/assets/Breeze 01.png" 
          alt="Midnight Atmosphere" 
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
      </motion.div>

      {/* Main Content & Slider Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center h-[70vh] justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: shouldReduceMotion ? 0.4 : 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            {slides[currentSlide].type === "emotion" ? (
              <motion.div 
                className="w-full h-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative"
                initial={shouldReduceMotion ? {} : { y: 20 }}
                animate={{ y: 0 }}
              >
                <Image 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].tagline} 
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            ) : (
              <motion.div 
                className="w-full h-full flex items-center justify-center"
                initial={shouldReduceMotion ? {} : { y: 20 }}
                animate={{ y: 0 }}
              >
                <div className="relative w-full max-w-2xl aspect-[16/9] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent flex items-center justify-center">
                  <div className="relative w-full h-[80%] md:h-[32rem] transform rotate-[-5deg] drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
                    <Image 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].tagline} 
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Floating Tagline Over Slider */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <motion.h1 
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 drop-shadow-lg"
                >
                  {slides[currentSlide].tagline}<span className="text-accent">.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-3xl text-warm font-accent max-w-2xl drop-shadow-md px-4"
                >
                  {slides[currentSlide].subline}
                </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-accent w-16" : "bg-white/20"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Buttons Repositioned Below Slider - REDUCED DELAY */}
      <motion.div 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative z-20 flex flex-col sm:flex-row gap-6 items-center mt-12 mb-12 px-6 w-full justify-center"
      >
        <Link 
          href="/range"
          className="w-full sm:w-auto px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/30 text-center"
        >
          Explore the Range
        </Link>
        <Link 
          href="/story"
          className="w-full sm:w-auto px-10 py-5 border-2 border-foreground/20 hover:border-accent hover:text-accent text-foreground rounded-full font-medium transition-all hover:bg-accent/10 text-center"
        >
          Our Story
        </Link>
      </motion.div>

    </section>
  );
}
