"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";

const products = [
  {
    name: "Thai Sweet Chilli",
    desc: "Bold and bright. A crunch that goes all night.",
    color: "from-red-900/40",
    slug: "thai-sweet-chilli",
    image: "/products/01.png"
  },
  {
    name: "Himalayan Salt & Pepper",
    desc: "Simple. Honest. Right.",
    color: "from-zinc-800/40",
    slug: "himalayan-salt-pepper",
    image: "/products/02.png"
  },
  {
    name: "Cripso Achari Punch",
    desc: "A crunch that catches you off guard.",
    color: "from-orange-700/40",
    slug: "cripso-achari-punch",
    image: "/products/03.png"
  },
];

export function BestSellers() {
  const { playCrunch } = useAudio();

  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-16 text-center text-foreground">
          Our Best Sellers
        </h2>
        
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
          {products.map((product) => (
            <motion.div
              key={product.name}
              className="flex-shrink-0 w-80 md:w-96 snap-center group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link href={`/range/${product.slug}`} onClick={playCrunch} className="block">
                <div className={`aspect-[4/5] w-full rounded-2xl bg-gradient-to-t ${product.color} to-surface border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-8 mb-6 group-hover:shadow-[0_0_40px_rgba(240,192,112,0.1)] transition-shadow duration-500`}>
                  
                  {/* Glowing halo behind product */}
                  <div className="absolute inset-0 bg-warm/0 group-hover:bg-warm/5 transition-colors duration-500" />
                  
                  {/* Product Pack Image */}
                  <img src={product.image} alt={product.name} className="w-auto h-56 object-contain z-10 transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                  
                </div>
                <h3 className="text-2xl font-display text-foreground mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-muted font-body italic text-sm md:text-base">"{product.desc}"</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
