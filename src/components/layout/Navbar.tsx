"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-bg-cream/90 backdrop-blur-md border-b border-text-stone/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        <Link 
          href="/" 
          className={`font-serif text-xl md:text-2xl tracking-wider transition-colors duration-500 ${
            scrolled ? "text-text-stone" : "text-white"
          }`}
        >
          AARON GALANG
        </Link>

        <a
          href="#contact"
          className={`text-xs md:text-sm tracking-widest uppercase transition-all duration-500 hover:opacity-70 ${
            scrolled ? "text-text-stone" : "text-white"
          }`}
        >
          Start a Project
        </a>
      </div>
    </motion.header>
  );
}
