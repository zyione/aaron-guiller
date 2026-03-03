"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 bg-text-stone text-bg-cream relative overflow-hidden">
      {/* Decorative large ampersand or architecture motif in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif text-white/5 select-none pointer-events-none z-0">
        §
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 tracking-tight">
              Ready to <br />
              <span className="text-accent-gold italic">begin?</span>
            </h2>
            <p className="text-xl md:text-2xl font-sans font-light text-bg-cream/70 max-w-2xl mx-auto leading-relaxed">
              We are currently accepting select residential and commercial commissions for the upcoming year.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg mb-24"
          >
            <a 
              href="mailto:galang.aaronguillerd@gmail.com"
              className="group block w-full py-8 px-12 bg-bg-cream text-text-stone rounded-none text-xl md:text-2xl font-serif transition-transform hover:scale-105 duration-500 hover:shadow-2xl"
            >
              Start a Project
              <span className="block mt-2 text-xs font-sans tracking-[0.2em] text-text-stone/50 uppercase transition-colors group-hover:text-accent-gold">
                Send an Inquiry
              </span>
            </a>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-2xl border-t border-white/10 pt-16"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-gold mb-2">Email</span>
              <a href="mailto:galang.aaronguillerd@gmail.com" className="text-lg font-serif hover:text-accent-gold transition-colors">
                galang.aaronguillerd@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-gold mb-2">Instagram</span>
              <a href="https://instagram.com/mt.eiji" target="_blank" rel="noopener noreferrer" className="text-lg font-serif hover:text-accent-gold transition-colors">
                @mt.eiji
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
