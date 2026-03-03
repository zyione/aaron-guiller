"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface-gray border-t border-text-stone/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Credibility Marker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start justify-center p-12 bg-bg-cream border border-text-stone/5 aspect-square max-w-md mx-auto min-h-[400px]"
          >
            <div className="text-8xl md:text-9xl font-serif text-accent-gold mb-4 leading-none tracking-tighter">
              45<span className="text-4xl text-text-stone/40">+</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-text-stone mb-2">
              Commissions Completed
            </h3>
            <p className="text-sm text-text-stone/60 font-sans tracking-wide">
              Across 12 global cities
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="text-accent-gold text-6xl font-serif leading-none mb-6 opacity-40">
              "
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-text-stone leading-snug mb-8 relative z-10">
              Aaron’s ability to interpret our nebulous ideas into a concrete, breathless reality was astonishing. The resulting space commands an exact, quiet presence.
            </blockquote>
            <cite className="font-sans text-sm tracking-widest uppercase text-text-stone/70 not-italic flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent-gold block" />
              Director, Aura Holdings
            </cite>

            <div className="mt-16 w-full h-[1px] bg-text-stone/10" />

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-text-stone leading-snug mb-8 mt-12 relative z-10 text-text-stone/60">
              A masterclass in restraint. It is rare to find a studio that understands what to leave out just as well as what to put in.
            </blockquote>
            <cite className="font-sans text-sm tracking-widest uppercase text-text-stone/50 not-italic flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent-gold opacity-50 block" />
              Private Residential Client
            </cite>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
