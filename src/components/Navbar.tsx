"use client";

import { useAudio } from "@/components/AudioProvider";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Volume2, VolumeX, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleMute, playCrunch } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "The Range", path: "/range" },
    { name: "Midnight Story", path: "/story" },
    { name: "Snack Smart", path: "/snack-smart" },
    { name: "Gifts", path: "/gifts" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out",
          scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            {theme === "dark" ? (
              <img src="/assets/logo-white.png" alt="Midnight Logo" className="h-8 md:h-10 w-auto object-contain" />
            ) : (
              <img src="/assets/logo-black.png" alt="Midnight Logo" className="h-8 md:h-10 w-auto object-contain" />
            )}
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={playCrunch}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="hover:text-accent transition-colors">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMute} aria-label="Toggle Sound" className="hover:text-accent transition-colors">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium transition-colors transform hover:scale-105 active:scale-95 duration-200 ease-out"
              onClick={() => { playCrunch(); alert("Notify form opening..."); }}
            >
              Notify Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="hover:text-accent transition-colors">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" className="relative z-50">
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-opacity duration-500 ease-out",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-3xl font-display font-medium hover:text-accent transition-colors"
              onClick={() => {
                setMobileOpen(false);
                playCrunch();
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-6 mt-8">
            <button onClick={toggleMute} aria-label="Toggle Sound" className="hover:text-accent transition-colors">
              {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
            </button>
          </div>
          <button
            className="mt-6 bg-accent hover:bg-accent-hover text-white px-8 py-4 text-xl rounded-full font-medium transition-colors"
            onClick={() => { playCrunch(); alert("Notify form opening..."); setMobileOpen(false); }}
          >
            Notify Me
          </button>
        </div>
      </div>
    </>
  );
}
