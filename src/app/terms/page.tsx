"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 selection:bg-accent selection:text-white relative overflow-hidden">
      <div className="brand-pattern-bg opacity-[0.03]" />
      
      <section className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display text-foreground mb-12"
        >
          Terms of Use<span className="text-accent">.</span>
        </motion.h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <p className="text-xl text-foreground italic font-display">
            &ldquo;By using this site, you&apos;re joining the Midnight community. We ask that you respect our space as much as we respect your time.&rdquo;
          </p>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">2. Intellectual Property</h2>
            <p>
              All content on this site, including the &apos;Midnight&apos; logo, designs, and copy, are the property of Midnight Binge and are protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">3. Use of Content</h2>
            <p>
              You may browse this site for personal, non-commercial use. Any unauthorized reproduction or distribution of our content is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">4. Limitation of Liability</h2>
            <p>
              Midnight Binge shall not be liable for any damages arising out of the use or inability to use this website.
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
