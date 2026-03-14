"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      <section className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display text-foreground mb-12"
        >
          Privacy Policy<span className="text-accent">.</span>
        </motion.h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <p className="text-xl text-foreground italic font-display">
            &ldquo;Your trust is as important to us as our crunch. We handle your data with the same care we use for our makhana.&rdquo;
          </p>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">1. Information We Collect</h2>
            <p>
              When you visit our site or reach out via our contact forms, we may collect basic information such as your name, email address, and any details you choose to share with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">2. How We Use It</h2>
            <p>
              We use this information solely to respond to your inquiries, improve our brand experience, and, if you&apos;ve opted in, keep you posted on Midnight news. We never sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">3. Cookies</h2>
            <p>
              We use minimal cookies to understand how you interact with our website. This helps us make the digital &apos;Midnight&apos; as comfortable as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">4. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. Just drop us a line at <a href="mailto:wecare@midnightbinge.com" className="text-accent hover:underline">wecare@midnightbinge.com</a>.
            </p>
          </section>

          <p className="pt-12 border-t border-white/5 text-sm uppercase tracking-widest opacity-50">
            Last Updated: March 2026
          </p>
        </div>
      </section>
    </div>
  );
}
