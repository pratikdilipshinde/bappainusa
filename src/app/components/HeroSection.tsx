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
      className="h-screen relative overflow-hidden flex items-center justify-end text-center"
    >
      {/* Zooming Background */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/images/bg-ganpati.png')",
          transform: `scale(${scale})`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Right-Side Text */}
      <motion.div
        className="relative z-20 text-white mr-10 md:mr-28 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 drop-shadow">
          Celebrate <br /> Ganesh Festival <br /> with BappaInUSA
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-100">
          Order Authentic Ganpati Idols <br /> — Delivered to Your Doorstep in the USA.
        </p>
      </motion.div>
    </section>
  );
}
