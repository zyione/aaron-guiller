import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-cream text-text-stone selection:bg-surface-gray selection:text-text-stone relative">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
