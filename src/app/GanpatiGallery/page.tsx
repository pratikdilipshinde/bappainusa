'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useCart } from '../components/CartContext';
import CartDrawer from '../components/CartDrawer';
import idols from '../data/idols.json';

export default function GanpatiGalleryPage() {
  const [isCartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main className="min-h-screen bg-pink-900 py-12 px-4 md:pt-[7%] pt-[30%]">
        <h1 className="text-4xl font-bold text-center text-gray-200 mb-10">
          Ganpati Idols Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {idols.map((idol, index) => (
            <motion.div
              key={idol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={idol.image}
                alt={idol.name}
                width={400}
                height={500}
                className="w-full h-64 object-contain md:mt-6"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/blur-placeholder.png" // Add a small blurred image here
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orange-800 mt-4">{idol.name}</h3>
                <p className="text-sm text-gray-600">{idol.material}</p>
                <p className="font-noto text-lg font-bold mt-2">
                  <span className="text-gray-500 line-through mr-2">
                    ${Math.round(idol.price * 1.25)}
                  </span>
                  <span className="text-orange-700">${idol.price}</span>
                </p>
                <button
                  className="font-noto cursor-pointer drop-shadow-amber-900 drop-shadow-md mt-4 px-4 
                    py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition place-self-center"
                  onClick={() => addToCart({ ...idol, id: idol.id.toString() })}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <CartDrawer open={isCartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </>
  );
}
