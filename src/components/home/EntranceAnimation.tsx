"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rainAssets = [
  "/products/thai_sweet_chilli.png",
  "/products/peri_peri_rush.png",
  "/products/cheddar_cheese_comfort.png",
  "/products/jalapeno_mint.png",
  "/products/thai_bop.png",
  "/products/peri_bop.png",
  "/products/cheese_bop.png",
  "/products/mint_bop.png",
];

export function EntranceAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState("11:59");
  const [showTagline, setShowTagline] = useState(false);
  const [isMidnight, setIsMidnight] = useState(false);

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      setTime("12:00");
      setIsMidnight(true);
      setShowTagline(true);
    }, 2000);

    const resolveTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(resolveTimer);
    };
  }, []);

  // Optimized rain with hardware acceleration and fixed count for snappiness
  const makhanaPieces = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      src: rainAssets[i % rainAssets.length],
      left: `${(i * 7.3) % 100}%`, // Deterministic but look random
      duration: 3 + (i % 3),
      delay: (i % 15) * 0.1,
      baseSize: 12 + (i % 8),
      rotate: i * 45,
      zDepth: i % 3,
    }));
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] } }}
        >
          {/* Subtle Brand Pattern Background */}
          <motion.img 
            src="/assets/Brand Pattern 01.png" 
            alt="Midnight Brand Pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay pointer-events-none"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          {/* Cinematic Rain Effect - Optimized for Snappiness */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {makhanaPieces.map((piece) => (
              <motion.img
                key={piece.id}
                src={piece.src}
                alt="Falling Pack"
                className="absolute object-contain will-change-transform brightness-110 contrast-125"
                style={{ 
                  left: piece.left, 
                  width: piece.baseSize * (1 + piece.zDepth * 0.3), 
                  top: -100,
                  zIndex: piece.zDepth,
                  opacity: isMidnight ? 0.3 + (piece.zDepth * 0.2) : 0
                }}
                initial={{ y: 0, rotate: piece.rotate }}
                animate={isMidnight ? { y: "130vh", rotate: piece.rotate + 360 } : {}}
                transition={{ 
                  duration: piece.duration, 
                  delay: piece.delay, 
                  ease: "linear" 
                }}
              />
            ))}
          </div>

          {/* Digital Clock */}
          <motion.div
            key={time}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-8xl md:text-[14rem] font-display font-medium tracking-tighter relative z-[10] text-foreground drop-shadow-[0_0_30px_rgba(107,92,231,0.2)]"
          >
            {time}
          </motion.div>

          {/* Brand Tagline */}
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showTagline && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center relative z-[10] space-y-2"
                >
                  <p className="text-3xl md:text-5xl font-display text-accent tracking-wide leading-none">
                    It's Midnight<span className="text-foreground">.</span>
                  </p>
                  <p className="text-lg md:text-xl font-body text-warm font-medium tracking-[0.3em] uppercase">
                    Snack Smart
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
