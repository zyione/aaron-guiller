"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    description: "Aligning on vision, site context, and project ambitions.",
  },
  {
    title: "Concept & Feasibility",
    description: "Iterative design studies, massing, and zoning analysis.",
  },
  {
    title: "Design Development",
    description: "Refining spatial flow, material selection, and structural integration.",
  },
  {
    title: "Documentation & Tendering",
    description: "Producing precise technical drawings and selecting contracting partners.",
  },
  {
    title: "Construction Observation",
    description: "Ensuring uncompromising execution of the design intent through completion.",
  }
];

export function Process() {
  return (
    <section className="py-20 md:py-32 bg-bg-cream border-t border-surface-gray">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-stone mb-6">
            Methodology
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-surface-gray z-0" />
          
          {/* Connecting Line (Mobile) */}
          <div className="block md:hidden absolute left-[27px] top-[28px] bottom-[28px] w-[1px] bg-surface-gray z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group gap-6 md:gap-0"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-surface-gray flex items-center justify-center md:mb-6 text-text-stone font-mono text-sm tracking-widest transition-transform duration-500 group-hover:bg-accent-gold group-hover:text-white group-hover:scale-110 shadow-sm border border-white">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-xl font-serif text-text-stone mb-2 md:mb-3 mt-1 md:mt-0">
                  {step.title}
                </h3>
                <p className="text-sm text-text-stone/70 font-sans font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
