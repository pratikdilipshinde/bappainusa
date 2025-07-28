'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile view */}
        <div className="md:hidden flex flex-col items-center">
          <Image
            src="/images/ShreeGaneshayNamah.png"
            alt="Shree Ganeshay Namah"
            width={100}
            height={100}
            className="object-contain mb-2"
            priority
          />
          <h1 className="text-xl font-bold text-orange-400">BappaInUSA</h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-4 top-4 text-3xl text-orange-700"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {menuOpen && (
            <ul className={`mt-6 space-y-4 text-center font-medium ${
                            scrolled ? 'text-orange-400' : 'text-gray-100'
                        }`}>
              <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#showcase" onClick={() => setMenuOpen(false)}>Idols</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left - Navigation */}
            <h1 className="text-2xl font-bold text-orange-400 ">BappaInUSA</h1>

            {/* Center - Image */}
            <div className="flex-shrink-0">
            <Link href="/">
                <Image
                src="/images/ShreeGaneshayNamah.png" // Replace with your image
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
                priority
                />
            </Link>
            </div>

            {/* Right - More nav or empty */}
            <ul className={`flex gap-6 font-medium ${
                            scrolled ? 'text-orange-500' : 'text-gray-100'
                        }`}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#showcase">Idols</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
      </div>
    </motion.nav>
  );
}
