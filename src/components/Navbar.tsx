"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Basic focus trap for mobile menu
  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleTab);
      return () => window.removeEventListener('keydown', handleTab);
    }
  }, [mobileOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "The Range", path: "/range" },
    { name: "Midnight Story", path: "/story" },
    { name: "What's Inside", path: "/whats-inside" },
    { name: "Gifts", path: "/gifts" },
    { name: "Contact", path: "/contact" },
  ];

  const logoSrc = theme === "dark" ? "/assets/logo-tm-white.png" : "/assets/logo-tm-dark.png";

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out",
          scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 relative w-32 md:w-40 h-10 md:h-12 transition-all duration-300" aria-label="Midnight Home">
            <Image 
              src={logoSrc} 
              alt="Midnight Logo" 
              fill
              priority
              className="object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="group relative py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent transform translate-y-1 group-hover:translate-y-0" aria-hidden="true">
                  <Moon size={10} fill="currentColor" />
                </span>
                
                {link.name}

                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="hover:text-accent transition-colors p-2">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href="/range"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              Explore the Range
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="hover:text-accent transition-colors p-2">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} className="relative z-50 p-2">
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 pb-[env(safe-area-inset-bottom)]">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-3xl font-display font-medium hover:text-accent transition-colors"
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href="/range"
                className="mt-6 bg-accent hover:bg-accent-hover text-white px-8 py-4 text-xl rounded-full font-medium transition-colors"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Explore the Range
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
