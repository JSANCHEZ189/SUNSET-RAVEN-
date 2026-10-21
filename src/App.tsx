import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsServices } from './components/SkillsServices';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050608] text-[#cfd8e3] selection:bg-[#ff4655] selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsServices />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
