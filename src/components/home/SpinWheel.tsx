"use client";

import { useState } from "react";
import { useAudio } from "@/components/AudioProvider";
import { motion, AnimatePresence } from "framer-motion";

export function SpinWheel() {
  const [email, setEmail] = useState("");
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const { playCrunch } = useAudio();

  const outcomes = [
    { label: "10% OFF", code: "MIDNIGHT10" },
    { label: "15% OFF", code: "CRUNCH15" },
    { label: "FREE SHIPPING", code: "FREESHIP" },
    { label: "BOGO FREE", code: "MIDNIGHTBOGO" },
    { label: "SECRET GIFT", code: "MYSTERYGIFT" },
  ];

  const handleSpin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || hasSpun) return;

    playCrunch();
    setIsSpinning(true);
    
    // Simulate spin duration
    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      const randomIdx = Math.floor(Math.random() * outcomes.length); 
      setResult(outcomes[randomIdx].label);
      setDiscountCode(outcomes[randomIdx].code);
    }, 3000);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden flex justify-center items-center">
      <div className="brand-pattern-bg opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl gap-16">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Spin for a <span className="text-accent">Midnight Reward</span>.
          </h2>
          <p className="text-muted text-lg mb-8">
            Enter your email to unlock an exclusive discount code for your first craving.
          </p>

          {!hasSpun ? (
            <form onSubmit={handleSpin} className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
              <input 
                type="email" 
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all border border-muted/10 bg-surface/50"
                disabled={isSpinning}
              />
              <button 
                type="submit"
                disabled={isSpinning || !email}
                className="w-full bg-accent hover:bg-accent-hover text-white rounded-full px-6 py-4 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-accent/20"
              >
                {isSpinning ? "Spinning..." : "Spin the Wheel"}
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-surface border border-accent/30 rounded-2xl p-8 text-center shadow-xl"
            >
              <p className="text-accent font-display text-2xl mb-2">You won!</p>
              <p className="text-4xl text-foreground font-bold mb-4">{result}</p>
              <div className="bg-background/50 border border-dashed border-accent/50 rounded-lg p-4 mb-4">
                <p className="text-xs uppercase tracking-widest text-muted mb-1">Your Code</p>
                <p className="text-2xl font-mono font-bold text-foreground">{discountCode}</p>
              </div>
              <p className="text-muted text-sm italic">"Applied at checkout."</p>
            </motion.div>
          )}
        </div>

        {/* CSS simulated Wheel */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-accent z-20 drop-shadow-lg" />
            
            {/* Wheel */}
            <div 
              className="w-full h-full rounded-full border-8 border-surface overflow-hidden relative shadow-[0_0_60px_rgba(107,92,231,0.3)]"
              style={{
                transition: "transform 3s cubic-bezier(0.15, 0, 0.15, 1)",
                transform: isSpinning ? "rotate(1800deg)" : "rotate(0deg)",
                background: "conic-gradient(from 0deg, #111845 0deg 72deg, #060b28 72deg 144deg, #6B5CE7 144deg 216deg, #111845 216deg 288deg, #060b28 288deg 360deg)"
              }}
            >
              {/* Decorative inner circle */}
              <div className="absolute inset-0 m-auto w-16 h-16 bg-background rounded-full border-4 border-accent z-10 flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
              </div>
              
              {/* Visual Sections */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-0 left-1/2 w-1 h-1/2 bg-white/10 origin-bottom" 
                  style={{ transform: `rotate(${i * 72}deg)` }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
