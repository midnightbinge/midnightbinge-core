"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";

const questions = [
  {
    question: "When do you snack the most?",
    options: ["Late at night", "During work hours", "Post-workout", "With a drink"]
  },
  {
    question: "What taste do you prefer?",
    options: ["Spicy & Bold", "Cheesy & Comforting", "Simple & Salty", "Tangy & Zesty"]
  },
  {
    question: "How crunchy do you like it?",
    options: ["Light & Airy", "Extra Hard Crunch", "Melt in mouth", "Just right"]
  }
];

export function FlavorQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const { playCrunch } = useAudio();

  const handleSelect = (option: string) => {
    playCrunch();
    setAnswers([...answers, option]);
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-warm/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display text-white mb-4">What's Your Midnight Mood?</h2>
        <p className="text-muted mb-12">Take our 3-question quiz to find your perfect flavor match.</p>

        <div className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step < questions.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Question {step + 1} of {questions.length}</span>
                <h3 className="text-2xl text-white font-display mb-8">{questions[step].question}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className="px-6 py-4 border border-white/20 rounded-xl text-left text-white hover:bg-white/5 hover:border-accent transition-all duration-200"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span className="text-warm text-sm font-bold tracking-widest uppercase mb-4 block">Your perfect match is</span>
                <h3 className="text-4xl text-white font-display mb-2">Thai Sweet Chilli</h3>
                <p className="text-muted italic mb-8">"Bold and bright. A crunch that goes all night."</p>
                <div className="flex gap-4">
                  <Link 
                    href="/range/thai-sweet-chilli"
                    className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors"
                  >
                    View Product
                  </Link>
                  <button onClick={resetQuiz} className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors">
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
