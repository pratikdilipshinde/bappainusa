'use client';

import { motion } from 'framer-motion';

const idols = [
  {
    id: 1,
    name: 'Eco Ganpati - 12 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$49',
    material: 'Eco Clay',
  },
  {
    id: 2,
    name: 'Traditional Ganpati - 18 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$79',
    material: 'Plaster of Paris',
  },
  {
    id: 3,
    name: 'Colorful Ganpati - 24 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$99',
    material: 'Painted Clay',
  },
];

export default function IdolShowcase() {
  return (
    <section id="showcase" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-4">Our Ganpati Idols</h2>
        <p className="text-gray-600 mb-10">Authentic, beautiful, and crafted with devotion.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {idols.map((idol, index) => (
            <motion.div
              key={idol.id}
              className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={idol.image}
                alt={idol.name}
                className="w-full h-64 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-800">{idol.name}</h3>
              <p className="text-sm text-gray-600">{idol.material}</p>
              <p className="text-lg font-bold mt-2">{idol.price}</p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
