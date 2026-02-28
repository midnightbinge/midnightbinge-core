"use client";

import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";

export function ClosingBridge() {
  const { playCrunch } = useAudio();

  return (
    <section className="py-40 bg-background flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground max-w-4xl mx-auto leading-tight mb-12">
        Everyone has a Midnight. <br/>
        <span className="text-muted">Now it has a snack.</span>
      </h2>
      <Link 
        href="/range"
        onClick={playCrunch}
        className="px-10 py-5 bg-white text-[#060b28] hover:bg-brand-cream rounded-full font-medium transition-transform transform hover:scale-105 active:scale-95 duration-200"
      >
        Explore the Range
      </Link>
    </section>
  );
}
