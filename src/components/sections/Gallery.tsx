"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const categories: (ProjectCategory | "All")[] = ["All", "Residential", "Commercial", "Urban", "Interior"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-cream px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-12 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-stone mb-6">Selected Works</h2>
            <p className="text-lg text-text-stone/70 font-sans font-light">
              An ongoing archive of built environments, conceptual studies, and spatial investigations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide w-full md:w-auto"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 border-b border-transparent ${
                  activeCategory === category
                    ? "text-text-stone border-text-stone font-medium"
                    : "text-text-stone/40 hover:text-text-stone/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(0,1fr)]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
