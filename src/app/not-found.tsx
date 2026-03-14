"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-8xl md:text-9xl font-display text-accent mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">Lost in the Night?</h2>
        <p className="text-muted text-lg max-w-md mx-auto mb-12 italic">
          &ldquo;The crunch you&apos;re looking for isn&apos;t here. But there&apos;s always something better waiting.&rdquo;
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
