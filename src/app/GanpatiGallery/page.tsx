'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useCart } from '../components/CartContext';
import CartDrawer from '../components/CartDrawer';
import idols from '../data/idols.json';

/*const idols = [
  {
    id: "1",
    name: 'Eco-Friendly Ganpati - 12 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 79,
    material: 'Eco Clay',
    
  },
  {
    id: "2",
    name: 'Classic Ganpati - 14 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 89,
    material: 'Plaster of Paris',
  },
  {
    id: "3",
    name: 'Sitting Bappa - 18 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 109,
    material: 'Hand-Painted Clay',
  },
  {
    id: "4",
    name: 'Traditional Ganpati - 21 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 129,
    material: 'POP with Water-Based Paint',
  },
  {
    id: "5",
    name: 'Ganpati with Mouse - 24 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 109,
    material: 'Eco Clay with Detailing',
  },
  {
    id: "6",
    name: 'Colorful Ganesh - 10 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 69,
    material: 'Plaster of Paris',
  },
  {
    id: "7",
    name: 'Modern Look Ganpati - 15 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 89,
    material: 'Eco-Friendly Clay',
  },
  {
    id: "8",
    name: 'Blessing Pose Ganpati - 20 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 109,
    material: 'Clay with Natural Colors',
  },
  {
    id: "9",
    name: 'Festival Special Ganpati - 22 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 137,
    material: 'POP with Gloss Finish',
  },
  {
    id: "10",
    name: 'Premium Ganpati Idol - 26 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: 149,
    material: 'Eco Clay + Handcrafted Details',
  },
];*/

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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    <Image
                    src={idol.image}
                    alt={idol.name}
                    width={400}
                    height={500}
                    className="w-full h-64 object-contain md:mt-6"
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
                        <button className="font-noto cursor-pointer drop-shadow-amber-900 drop-shadow-md mt-4 px-4 
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
