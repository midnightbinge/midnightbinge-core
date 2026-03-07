"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";

const slides = [
  {
    id: 1,
    type: "emotion",
    image: "/lifestyle/01.png",
    tagline: "Better Feels Good",
    subline: "Premium makhana crafted for your quietest hours."
  },
  {
    id: 2,
    type: "mockup",
    image: "/products/peri_peri_rush.png",
    tagline: "The Midnight Crunch",
    subline: "Bold flavors that don't compromise on wellness."
  },
  {
    id: 3,
    type: "emotion",
    image: "/lifestyle/03.png",
    tagline: "Desire Meets Design",
    subline: "Snacking evolved for the bold and the beautiful."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const { playCrunch } = useAudio();

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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
        <img src="/assets/Breeze 01.png" alt="Brand Texture" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
      </motion.div>

      {/* Main Content & Slider Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center h-[70vh] justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            {slides[currentSlide].type === "emotion" ? (
              <motion.div 
                className="w-full h-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <img 
                  src={slides[currentSlide].image} 
                  alt="Lifestyle" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            ) : (
              <motion.div 
                className="w-full h-full flex items-center justify-center"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <div className="relative w-full max-w-2xl aspect-[16/9] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent flex items-center justify-center">
                  <img 
                    src={slides[currentSlide].image} 
                    alt="Product" 
                    className="w-auto h-96 md:h-[32rem] object-contain drop-shadow-[0_0_80px_rgba(107,92,231,0.4)] transform rotate-[-5deg]"
                  />
                </div>
              </motion.div>
            )}

            {/* Floating Tagline Over Slider */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 drop-shadow-lg"
                >
                  {slides[currentSlide].tagline}<span className="text-accent">.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-3xl text-warm/90 font-display italic max-w-2xl drop-shadow-md"
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

      {/* Buttons Repositioned Below Slider */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 5.7, ease: "easeOut" }}
        className="relative z-20 flex flex-col sm:flex-row gap-6 items-center mt-12 mb-12"
      >
        <Link 
          href="/range"
          onClick={playCrunch}
          className="px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
        >
          Explore the Range
        </Link>
        <Link 
          href="/story"
          onClick={playCrunch}
          className="px-10 py-5 border-2 border-foreground/20 hover:border-accent hover:text-accent text-foreground rounded-full font-medium transition-all hover:bg-accent/5"
        >
          Our Story
        </Link>
      </motion.div>

    </section>
  );
}
