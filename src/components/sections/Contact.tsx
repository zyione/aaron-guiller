"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 bg-text-stone text-bg-cream relative overflow-hidden">
      {/* Decorative large ampersand or architecture motif in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50vw] md:text-[40vw] font-serif text-white/5 select-none pointer-events-none z-0">
        §
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 tracking-tight">
              Ready to <br />
              <span className="text-accent-gold italic">begin?</span>
            </h2>
            <p className="text-lg md:text-2xl font-sans font-light text-bg-cream/70 max-w-2xl mx-auto leading-relaxed">
              We are currently accepting select residential and commercial commissions for the upcoming year.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg mb-16 md:mb-24"
          >
            <a 
              href="mailto:galang.aaronguillerd@gmail.com"
              className="group block w-full py-6 md:py-8 px-8 md:px-12 bg-bg-cream text-text-stone rounded-none text-lg md:text-2xl font-serif transition-transform hover:scale-105 duration-500 hover:shadow-2xl"
            >
              Start a Project
              <span className="block mt-2 text-[10px] md:text-xs font-sans tracking-[0.2em] text-text-stone/50 uppercase transition-colors group-hover:text-accent-gold">
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 w-full max-w-2xl border-t border-white/10 pt-12 md:pt-16"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-accent-gold mb-1 md:mb-2">Email</span>
              <a href="mailto:galang.aaronguillerd@gmail.com" className="text-base md:text-lg font-serif hover:text-accent-gold transition-colors break-words">
                galang.aaronguillerd<br className="sm:hidden" />@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-accent-gold mb-1 md:mb-2">Instagram</span>
              <a href="https://instagram.com/mt.eiji" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-serif hover:text-accent-gold transition-colors">
                @mt.eiji
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
