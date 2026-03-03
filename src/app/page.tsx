import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-cream text-text-stone selection:bg-surface-gray selection:text-text-stone">
      <Navbar />
      <Hero />
      
      {/* Placeholder for future sections */}
      <div className="h-screen" />
    </main>
  );
}
