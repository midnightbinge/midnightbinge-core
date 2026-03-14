"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  
  const logoSrc = theme === "dark" ? "/assets/logo-tm-white.png" : "/assets/logo-tm-dark.png";

  return (
    <footer className="bg-background text-foreground pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="brand-pattern-bg" />
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex-shrink-0 relative w-32 md:w-40 h-10 md:h-12 transition-all duration-300">
            <Image 
              src={logoSrc} 
              alt="Midnight Logo" 
              fill
              className="object-contain"
            />
          </Link>
          <div className="space-y-2 max-w-sm">
            <p className="font-accent text-xl text-warm">Better Feels Good.</p>
            <p className="text-muted leading-relaxed">Premium makhana snacks. Made for real moments.</p>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-widest text-muted font-bold mb-2">Explore</h4>
          <Link href="/" className="hover:text-accent transition-colors w-fit text-sm">Home</Link>
          <Link href="/range" className="hover:text-accent transition-colors w-fit text-sm">The Range</Link>
          <Link href="/story" className="hover:text-accent transition-colors w-fit text-sm">Midnight Story</Link>
          <Link href="/whats-inside" className="hover:text-accent transition-colors w-fit text-sm">What's Inside</Link>
          <Link href="/gifts" className="hover:text-accent transition-colors w-fit text-sm">Gifts</Link>
          <Link href="/contact" className="hover:text-accent transition-colors w-fit text-sm">Contact</Link>
          
          <div className="mt-4 pt-4 border-t border-muted/10 space-y-2">
            <a href="tel:+919217020447" className="block text-sm text-muted hover:text-accent transition-colors">+91 9217020447</a>
            <a href="mailto:wecare@midnightbinge.com" className="block text-sm text-muted hover:text-accent transition-colors">wecare@midnightbinge.com</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm uppercase tracking-widest text-muted font-bold mb-2">Join the Night</h4>
          <p className="text-muted max-w-xs text-sm">Drop your email. We'll send something worth opening at midnight.</p>
          <form className="flex w-full max-w-sm border-b border-muted/30 focus-within:border-accent transition-colors pb-2">
            <input 
              type="email" 
              placeholder="Email address" 
              aria-label="Email address for newsletter"
              className="bg-transparent border-none outline-none text-foreground w-full placeholder:text-muted/50 text-sm py-1"
              required
            />
            <button 
              type="submit" 
              className="text-accent font-medium hover:text-foreground transition-colors uppercase text-xs tracking-wider"
            >
              Submit
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/midnightbinge.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group" aria-label="Instagram">
              <Instagram size={18} className="text-foreground group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/company/midnight-solution/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group" aria-label="LinkedIn">
              <Linkedin size={18} className="text-foreground group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://youtube.com/@midnightbinge" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-muted/20 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group" aria-label="YouTube">
              <Youtube size={18} className="text-foreground group-hover:scale-110 transition-transform" />
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
