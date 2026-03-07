"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EntranceAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState("11:59");
  const [showTagline, setShowTagline] = useState(false);
  const [isMidnight, setIsMidnight] = useState(false);

  useEffect(() => {
    // 2s delay before flip to midnight (increased for more anticipation)
    const flipTimer = setTimeout(() => {
      setTime("12:00");
      setIsMidnight(true);
      setShowTagline(true);
    }, 2000);

    // 5s total duration before resolving (premium high-end feel)
    const resolveTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(resolveTimer);
    };
  }, []);

  // Generate 15 unique makhana pieces for the "rain" effect
  const makhanaPieces = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 0.5,
    size: 20 + Math.random() * 40,
    rotate: Math.random() * 360,
  }));

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
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Falling Makhana Rain - Triggers at 12:00 */}
          {isMidnight && (
            <div className="absolute inset-0 pointer-events-none">
              {makhanaPieces.map((piece) => (
                <motion.img
                  key={piece.id}
                  src="/products/raw_makhana.png"
                  alt="Falling Makhana"
                  className="absolute object-contain opacity-40 blur-[1px]"
                  style={{ 
                    left: piece.left, 
                    width: piece.size, 
                    height: piece.size,
                    top: -100
                  }}
                  initial={{ y: 0, rotate: piece.rotate }}
                  animate={{ y: "120vh", rotate: piece.rotate + 360 }}
                  transition={{ 
                    duration: piece.duration, 
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-8xl md:text-[12rem] font-display font-medium tracking-tighter relative z-10"
          >
            {time}
          </motion.div>

          {/* Tagline */}
          <AnimatePresence>
            {showTagline && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mt-8 text-2xl md:text-3xl font-body text-warm font-medium tracking-widest relative z-10"
              >
                It's Midnight. <span className="text-accent">Snack Smart.</span>
              </motion.p>
            )}
          </AnimatePresence>

          {/* Progress Bar (Visual Hint of duration) */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-accent/30"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
