"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";
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
...