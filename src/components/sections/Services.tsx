"use client";

import { motion } from "framer-motion";

const services = [
  "Residential Architecture",
  "Commercial / Office Environments",
  "Urban & Public Space Masterplanning",
  "Interior Design & Material Curation",
  "Feasibility & Concept Development"
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-surface-gray">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 md:mb-24 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-text-stone"
          >
            Specialties
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-text-stone/20 flex-1 ml-12 hidden md:block origin-left"
          />
        </div>

        <div className="max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-text-stone/10 py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-0 transition-colors hover:border-accent-gold"
            >
              <span className="text-accent-gold font-mono text-sm tracking-widest md:w-16">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="text-xl md:text-3xl font-serif text-text-stone transition-colors group-hover:text-accent-gold">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
