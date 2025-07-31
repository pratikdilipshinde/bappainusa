'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const idols = [
  { id: 1, name: 'Eco Friendly Idol', src: '/images/idols/idol1.png' },
  { id: 2, name: 'Clay Idol', src: '/images/idols/idol1.png' },
  { id: 3, name: 'Traditional Idol', src: '/images/idols/idol1.png' },
  { id: 4, name: 'Modern Style Idol', src: '/images/idols/idol1.png' },
  { id: 5, name: 'Colorful Idol', src: '/images/idols/idol1.png' },
  { id: 6, name: 'Mini Idol', src: '/images/idols/idol1.png' },
  { id: 7, name: 'Classic Idol', src: '/images/idols/idol1.png' },
  { id: 8, name: 'Handmade Idol', src: '/images/idols/idol1.png' },
  { id: 9, name: 'Painted Idol', src: '/images/idols/idol1.png' },
  { id: 10, name: 'Special Edition Idol', src: '/images/idols/idol1.png' },
];

export default function GanpatiGalleryPage() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-pink-900 py-12 px-4 pt-[7%]">
            <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
                Ganpati Idols Gallery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    src={idol.src}
                    alt={idol.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold text-orange-600">
                        {idol.name}
                    </h2>
                    </div>
                </motion.div>
                ))}
            </div>
        </main>
        <Footer />
    </>
  );
}
