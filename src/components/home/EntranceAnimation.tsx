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
    }, 5500); // Slightly longer to appreciate the rain

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(resolveTimer);
    };
  }, []);

  // Optimized rain with depth and variety
  const makhanaPieces = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      src: rainAssets[Math.floor(Math.random() * rainAssets.length)],
      left: `${Math.random() * 100}%`,
      duration: 2.5 + Math.random() * 3.5,
      delay: Math.random() * 1.5,
      size: 15 + Math.random() * 30, // Smaller packets for realism
      rotate: Math.random() * 360,
      zDepth: Math.floor(Math.random() * 3), // 0: back (small/blur), 1: mid, 2: front (large/sharp)
    }));
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } }}
        >
          {/* Subtle Brand Pattern Background */}
          <motion.img 
            src="/assets/Brand Pattern 01.png" 
            alt="Midnight Brand Pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay pointer-events-none"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          {/* Cinematic Rain Effect */}
          {isMidnight && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {makhanaPieces.map((piece) => (
                <motion.img
                  key={piece.id}
                  src={piece.src}
                  alt="Falling Pack"
                  className={`absolute object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] ${
                    piece.zDepth === 0 ? "blur-[2px] opacity-20" : 
                    piece.zDepth === 1 ? "blur-[0.5px] opacity-40" : 
                    "blur-0 opacity-60 brightness-110"
                  }`}
                  style={{ 
                    left: piece.left, 
                    width: piece.size * (1 + piece.zDepth * 0.5), 
                    top: -150,
                    zIndex: piece.zDepth
                  }}
                  initial={{ y: 0, rotate: piece.rotate }}
                  animate={{ y: "130vh", rotate: piece.rotate + 720 }}
                  transition={{ 
                    duration: piece.duration / (1 + piece.zDepth * 0.2), 
                    delay: piece.delay, 
                    ease: "linear" 
                  }}
                />
              ))}
            </div>
          )}

          {/* Digital Clock */}
          <motion.div
            key={time}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-8xl md:text-[14rem] font-display font-medium tracking-tighter relative z-[10] text-foreground drop-shadow-[0_0_30px_rgba(107,92,231,0.2)]"
          >
            {time}
          </motion.div>

          {/* Brand Tagline restyled for compliance */}
          <AnimatePresence>
            {showTagline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="mt-12 text-center relative z-[10] space-y-2"
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

          {/* Premium Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 5.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
