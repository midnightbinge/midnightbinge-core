"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Roasted Makhana",
    slug: "flavoured-makhana",
    desc: "Bold flavors, signature crunch.",
    image: "/products/thai_sweet_chilli.png",
    color: "from-accent/20"
  },
  {
    name: "Raw Makhana",
    slug: "raw-makhana",
    desc: "Pure, honest, and unflavoured.",
    image: "/products/raw_makhana.png",
    color: "from-warm/20"
  },
  {
    name: "Cripso",
    slug: "cripso",
    desc: "The next generation of crunch.",
    image: "/products/achari_punch_crispo.png",
    color: "from-secondary/40"
  }
];

export function BestSellers() {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-medium mb-6 text-foreground">
            Explore the <span className="text-accent">Range</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto italic font-accent">
            "From the bold heat of Peri Peri to the simple honesty of Raw Makhana. Find your category."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <Link 
                href={`/range?category=${cat.slug}`} 
                className="block relative aspect-[4/5] bg-surface rounded-3xl border border-muted/10 overflow-hidden shadow-xl hover:shadow-accent/10 transition-all duration-500"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Image Section */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full h-full group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out drop-shadow-2xl">
                    <Image 
                      src={cat.image} 
                      alt={cat.name} 
                      fill
                      className="object-contain z-10"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-surface via-surface/80 to-transparent z-20">
                  <h3 className="text-3xl font-display text-foreground mb-2 flex items-center gap-2 group-hover:text-accent transition-colors">
                    {cat.name}
                    <ChevronRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={24} />
                  </h3>
                  <p className="text-muted text-sm font-body italic group-hover:text-foreground transition-colors">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
