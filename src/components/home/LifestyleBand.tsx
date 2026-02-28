"use client";

import { motion } from "framer-motion";

export function LifestyleBand() {
  const scenes = [
    { id: 1, label: "Midnight Cravings", image: "/lifestyle/01.png" },
    { id: 2, label: "Work & Play", image: "/lifestyle/02.jpg" },
    { id: 3, label: "The Setup", image: "/lifestyle/03.png" },
    { id: 4, label: "Late Night Edit", image: "/lifestyle/04.png" },
    { id: 5, label: "Downtime", image: "/lifestyle/05.png" },
  ];

  // We only need one set mapped out twice to achieve a perfect continuous loop
  return (
    <section className="py-24 overflow-hidden bg-background relative flex">
      {/* Edge vignettes */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 40 
        }}
      >
        {[...scenes, ...scenes].map((scene, idx) => (
          <div 
            key={`${scene.id}-${idx}`} 
            className="w-[400px] h-[300px] md:w-[600px] md:h-[400px] mx-4 rounded-xl overflow-hidden relative flex-shrink-0 bg-secondary"
          >
            <img src={scene.image} alt={scene.label} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-background/20 mix-blend-overlay" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
