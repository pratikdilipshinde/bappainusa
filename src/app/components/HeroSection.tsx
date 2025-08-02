'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 + Math.min(scrollY / 1000, 0.2); // Zooms in up to 1.2x

  return (
    <section
      id="hero"
      className="h-screen relative overflow-hidden flex items-center justify-start text-center"
    >
      {/* Left-Side Text */}
      <motion.div
        className="relative z-20 text-white mx-auto text-center md:ml-28 px-4 md:mb-0 mb-[40%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#f1c104] drop-shadow-lg drop-shadow-amber-900 leading-normal">
          Celebrate <br /> Ganesh Festival <br /> with BappaInUSA
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#d9d9d9] leading-loose drop-shadow-2xl">
          Order Authentic Ganpati Idols <br /> — Delivered to Your Doorstep in the USA.
        </p>
      </motion.div>
      
      {/* Zooming Background */}
      {/* Desktop Background Image */}
      <motion.div
        className="hidden md:block mx-auto absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/images/bg-ganpati.png')",
        }}
      />

      {/* Mobile Background Image */}
      <motion.div
        className="block md:hidden absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/images/bg-ganpati-mob.png')", // your mobile version
        }}
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      
    </section>
  );
}
