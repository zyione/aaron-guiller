"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Determine card span based on index to create an asymmetric editorial grid
  // This logic gives specific items different grid row/col spans
  const getGridClass = (i: number) => {
    switch (i % 7) {
      case 0:
        return "md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto"; // Large feature
      case 1:
        return "md:col-span-4 md:row-span-1 aspect-square"; // Top right small
      case 2:
        return "md:col-span-4 md:row-span-1 aspect-square"; // Bottom right small
      case 3:
        return "md:col-span-6 md:row-span-2 aspect-[3/4]"; // Tall portrait
      case 4:
        return "md:col-span-6 md:row-span-1 aspect-[16/9]"; // Wide landscape
      case 5:
        return "md:col-span-3 md:row-span-1 aspect-square"; // Small
      case 6:
        return "md:col-span-3 md:row-span-1 aspect-square"; // Small
      default:
        return "md:col-span-4 md:row-span-1 aspect-square";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
      className={`group relative overflow-hidden bg-surface-gray ${getGridClass(index)}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[0.7] contrast-125 saturate-50 group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-105"
        />
        {/* Subtle gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
      </div>

      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-sm tracking-widest uppercase mb-2 font-mono"
          >
            {project.location} — {project.category}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-bg-cream text-2xl md:text-3xl font-serif"
          >
            {project.title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
}
