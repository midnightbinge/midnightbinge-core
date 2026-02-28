"use client";

import { useState } from "react";
import { useAudio } from "@/components/AudioProvider";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["General", "Wholesale & Distribution", "Gifting", "Press & Collabs"];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { playCrunch } = useAudio();

  return (
    <div className="bg-background min-h-screen pt-32 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg" />
      
      <section className="container mx-auto px-6 max-w-4xl text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-7xl font-display text-foreground mb-8">Hello.</h1>
        <p className="text-xl md:text-2xl text-muted font-display italic leading-relaxed">
          "We would love to hear from you. Whether it's a question, a craving, or a partnership — this is where we meet."
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-3xl mb-32 relative z-10">
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-white/10 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); playCrunch(); }}
              className={`pb-4 px-4 text-sm md:text-base font-medium transition-colors relative ${
                activeTab === tab ? "text-foreground" : "text-muted hover:text-foreground/80"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="contactTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Form Area */}
        <div className="bg-surface p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.form 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" required className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                <input type="email" placeholder="Email Address" required className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              </div>

              {activeTab !== "General" && (
                <input type="text" placeholder={activeTab === "Press & Collabs" ? "Publication / Handle" : "Company Name"} className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              )}

              <textarea placeholder="How can we help?" rows={5} required className="w-full rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" />
              
              <button type="button" onClick={playCrunch} className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-4 font-medium transition-colors shadow-lg hover:shadow-accent/20">
                Send Message
              </button>
            </motion.form>
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center flex flex-col items-center gap-6 border-t border-white/10 pt-16">
          <p className="text-foreground font-display text-lg">We read everything. We reply within 24 hours.</p>
          <a href="mailto:wecare@midnightbinge.com" className="text-muted hover:text-accent transition-colors font-medium">wecare@midnightbinge.com</a>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">IG</a>
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">YT</a>
          </div>
        </div>

      </section>

    </div>
  );
}
