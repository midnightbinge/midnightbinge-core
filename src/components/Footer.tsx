"use client";

import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";

import { useTheme } from "./ThemeProvider";

export function Footer() {
  const { playCrunch } = useAudio();
  const { theme } = useTheme();
  
  return (
    <footer className="bg-background text-foreground pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="brand-pattern-bg" />
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex-shrink-0 w-fit">
            {theme === "dark" ? (
              <img src="/assets/logo-white.png" alt="Midnight Logo" className="h-10 md:h-12 w-auto object-contain" />
            ) : (
              <img src="/assets/logo-black.png" alt="Midnight Logo" className="h-10 md:h-12 w-auto object-contain" />
            )}
          </Link>
          <div className="space-y-2 max-w-sm">
            <p className="font-display text-xl text-warm">Better Feels Good.</p>
            <p className="text-muted leading-relaxed">Premium makhana snacks. Made for real moments.</p>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-widest text-muted font-bold mb-2">Explore</h4>
          <Link href="/" className="hover:text-accent transition-colors w-fit" onClick={playCrunch}>Home</Link>
          <Link href="/range" className="hover:text-accent transition-colors w-fit" onClick={playCrunch}>The Range</Link>
          <Link href="/story" className="hover:text-accent transition-colors w-fit" onClick={playCrunch}>Midnight Story</Link>
          <Link href="/snack-smart" className="hover:text-accent transition-colors w-fit" onClick={playCrunch}>Snack Smart</Link>
          <Link href="/gifts" className="hover:text-accent transition-colors w-fit" onClick={playCrunch}>Gifts</Link>
          <Link href="/contact" className="hover:text-accent transition-colors w-fit" onClick={playCrunch}>Contact</Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm uppercase tracking-widest text-muted font-bold mb-2">Join the Night</h4>
          <p className="text-muted max-w-xs">Drop your email. We'll send something worth opening at midnight.</p>
          <form className="flex w-full max-w-sm border-b border-muted/30 focus-within:border-accent transition-colors pb-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none outline-none text-foreground w-full placeholder:text-muted/50"
              required
            />
            <button 
              type="submit" 
              className="text-accent font-medium hover:text-foreground transition-colors uppercase text-sm tracking-wider"
              onClick={() => playCrunch()}
            >
              Submit
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group" aria-label="Instagram">
              <svg className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="container mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-muted/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted gap-4 relative z-10">
        <p>&copy; {new Date().getFullYear()} Midnight. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
