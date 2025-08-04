'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

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
        scrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      } `}
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
          <Link href="/">
            <h1 className="text-xl font-bold text-orange-400 cursor-pointer">BappaInUSA</h1>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-4 top-4 text-3xl text-orange-700"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {menuOpen && (
            <ul
              className={`mt-6 space-y-4 text-center font-medium ${
                scrolled || menuOpen ? 'text-orange-400' : 'text-gray-100'
              }`}
            >
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link href="#showcase" onClick={() => setMenuOpen(false)}>
                  Idols
                </Link>
              </li> */}
              <li>
                <Link href="/GanpatiGallery" onClick={() => setMenuOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <button onClick={onCartClick} className="relative cursor-pointer">
                  <FaShoppingCart className={`text-xl ${
                scrolled || menuOpen ? 'text-orange-400' : 'text-gray-100'
              }`} />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left - Navigation */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-orange-400 cursor-pointer">BappaInUSA</h1>
          </Link>

          {/* Center - Image */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/ShreeGaneshayNamah.png"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right - Navigation */}
          <ul
            className={`flex gap-6 font-medium ${
              scrolled ? 'text-orange-500' : 'text-gray-100'
            }`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <Link href="#showcase">Idols</Link>
            </li> */}
            <li>
              <Link href="/GanpatiGallery">Gallery</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <button onClick={onCartClick} className="relative cursor-pointer">
                <FaShoppingCart className={`text-xl ${
                scrolled || menuOpen ? 'text-orange-400' : 'text-gray-100'
              }`}  />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center mx-auto my-auto justify-center ">
                    {cart.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
