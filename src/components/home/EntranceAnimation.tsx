"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EntranceAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState("11:59");
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // 1.05s delay before flip (originally 1.5s)
    const flipTimer = setTimeout(() => {
      setTime("12:00");
      setShowTagline(true);
    }, 1050);

    // 2.45s total duration before resolving (originally 3.5s)
    const resolveTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2450);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(resolveTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }}
        >
          <motion.img 
            src="/assets/Brand Pattern 01.png" 
            alt="Midnight Brand Pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          <motion.div
            key={time}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-display font-medium tracking-tighter"
          >
            {time}
          </motion.div>

          {showTagline && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, delay: 0.21, ease: "easeOut" }}
              className="mt-6 text-xl md:text-2xl font-body text-warm font-medium tracking-wide"
            >
              It's Midnight. Snack Smart.
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
