"use client";

import { useState } from "react";
import { useAudio } from "@/components/AudioProvider";

export function SpinWheel() {
  const [email, setEmail] = useState("");
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const { playCrunch } = useAudio();

  const outcomes = ["10% Off", "15% Off", "Free Shipping", "Free Mini", "Try Again"];

  const handleSpin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || hasSpun) return;

    playCrunch();
    setIsSpinning(true);
    
    // Simulate spin duration
    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      // Random result bias towards good things
      const randomIdx = Math.floor(Math.random() * 4); 
      setResult(outcomes[randomIdx]);
    }, 3000);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl gap-16">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Before you go — spin for something good.
          </h2>
          <p className="text-muted text-lg mb-8">
            Enter your email to unlock a reward for your first midnight craving.
          </p>

          {!hasSpun ? (
            <form onSubmit={handleSpin} className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
              <input 
                type="email" 
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                disabled={isSpinning}
              />
              <button 
                type="submit"
                disabled={isSpinning || !email}
                className="w-full bg-accent hover:bg-accent-hover text-white rounded-full px-6 py-4 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSpinning ? "Spinning..." : "Spin the Wheel"}
              </button>
            </form>
          ) : (
            <div className="bg-surface border border-accent/30 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
              <p className="text-warm font-display text-2xl mb-2">You won!</p>
              <p className="text-4xl text-white font-bold mb-4">{result}</p>
              <p className="text-muted text-sm">We'll email you your code when we launch.</p>
            </div>
          )}
        </div>

        {/* CSS simulated Wheel */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-brand-cream z-20" />
            
            {/* Wheel */}
            <div 
              className="w-full h-full rounded-full border-4 border-surface overflow-hidden relative shadow-[0_0_50px_rgba(107,92,231,0.2)]"
              style={{
                transition: "transform 3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                transform: isSpinning ? "rotate(1800deg)" : "rotate(0deg)",
                background: "conic-gradient(from 0deg, #111845 0deg 72deg, #060b28 72deg 144deg, #6B5CE7 144deg 216deg, #111845 216deg 288deg, #060b28 288deg 360deg)"
              }}
            >
              {/* Decorative inner circle */}
              <div className="absolute inset-0 m-auto w-12 h-12 bg-accent rounded-full border-4 border-black z-10" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
