"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const moods = [
  {
    id: "late-night",
    title: "Late Night Binge",
    color: "bg-indigo-950",
    image: "/lifestyle/01.png",
    productImage: "/products/thai_sweet_chilli.png",
    recommendation: { name: "Thai Sweet Chilli", desc: "For when the screen glows.", slug: "thai-sweet-chilli" }
  },
  {
    id: "office-break",
    title: "Office Break",
    color: "bg-slate-900",
    image: "/lifestyle/05.png",
    productImage: "/products/himalayan_salt_and_pepper.png",
    recommendation: { name: "Himalayan Salt and Pepper", desc: "Clean focus.", slug: "himalayan-salt-pepper" }
  },
  {
    id: "post-workout",
    title: "Post Workout",
    color: "bg-zinc-900",
    image: "/lifestyle/07.png",
    productImage: "/products/raw_makhana.png",
    recommendation: { name: "Pure Raw Makhana", desc: "Pure fuel.", slug: "raw-makhana" }
  },
  {
    id: "movie-time",
    title: "Movie Time",
    color: "bg-stone-900",
    image: "/lifestyle/09.png",
    productImage: "/products/cheddar_cheese_comfort.png",
    recommendation: { name: "Cheddar Cheese Comfort", desc: "Comfort you can hear.", slug: "cheddar-cheese-comfort" }
  }
];

export function MoodSelector() {
...