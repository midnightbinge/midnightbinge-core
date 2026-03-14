"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-display text-accent mb-4">Oops.</h1>
        <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">Something went quiet.</h2>
        <p className="text-muted text-lg max-w-md mx-auto mb-12 italic">
          &ldquo;Even the best crunches have a pause. We&apos;re working on getting the night back on track.&rdquo;
        </p>
        
        <button 
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
        >
          <RefreshCcw size={18} />
          Try again
        </button>
      </motion.div>
    </div>
  );
}
