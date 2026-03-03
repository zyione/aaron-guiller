"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 md:py-32 bg-bg-cream border-t border-surface-gray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-stone mb-6">
              Philosophy
            </h2>
            <div className="w-12 h-[1px] bg-accent-gold mb-8" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7"
          >
            <p className="text-xl md:text-2xl text-text-stone font-serif leading-relaxed mb-8">
              True luxury is not defined by excess, but by the intentional absence of the unnecessary. We believe in crafting spaces that exhale—environments where light, material, and volume converse softly.
            </p>
            <p className="text-base text-text-stone/70 font-sans font-light leading-loose max-w-2xl">
              By removing visual noise, we allow the essential architecture to speak. Our process is rooted in a deep respect for context, environmental harmony, and the human psychological response to space. Every commission is approached as a singular study in restraint and permanence.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
