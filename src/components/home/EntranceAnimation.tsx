"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function EntranceAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState("11:59");
  const [showTagline, setShowTagline] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Define handleComplete first to avoid hoisting issues
  const handleComplete = useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasSeenEntrance", "true");
    }
  }, []);

  useEffect(() => {
    // Check if user has already seen the animation this session
    if (typeof window !== "undefined" && sessionStorage.getItem("hasSeenEntrance")) {
      setIsVisible(false);
      return;
    }

    const flipTimer = setTimeout(() => {
      setTime("12:00");
      setShowTagline(true);
    }, 1200);

    const resolveTimer = setTimeout(() => {
      handleComplete();
    }, 2800);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(resolveTimer);
    };
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
        >
          {/* Skip Button */}
          <button 
            onClick={handleComplete}
            className="absolute top-8 right-8 z-[110] text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors p-4"
            aria-label="Skip animation"
          >
            Skip
          </button>

          {/* Subtle Brand Pattern Background */}
          <motion.div 
            className="brand-pattern-bg opacity-10"
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          {/* Atmospheric Floating Makhana - Single focus element */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image 
                src="/products/raw_makhana.png" 
                alt="" 
                fill 
                className="object-contain blur-[2px]" 
              />
            </div>
          </motion.div>

          {/* Digital Clock */}
          <motion.div
            key={time}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-7xl md:text-[12rem] font-display font-medium tracking-tighter relative z-10"
          >
            {time}
          </motion.div>

          {/* Brand Tagline */}
          <div className="h-24 flex items-center justify-center relative z-10">
            <AnimatePresence mode="wait">
              {showTagline && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center space-y-1"
                >
                  <p className="text-2xl md:text-4xl font-display text-accent">
                    It's Midnight<span className="text-foreground">.</span>
                  </p>
                  <p className="text-xs md:text-base font-accent text-warm tracking-[0.1em] opacity-90">
                    Better that feels good.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Subtle Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[1px] bg-accent/40"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
