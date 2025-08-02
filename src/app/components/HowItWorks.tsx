'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaBoxOpen } from 'react-icons/fa';

const steps = [
  {
    title: '1. Browse & Choose',
    description: 'Explore our wide collection of Ganpati idols.',
    icon: <FaSearch size={32} className="text-indigo-600" />,
  },
  {
    title: '2. Place Your Order',
    description: 'Select your idol and complete a secure checkout.',
    icon: <FaShoppingCart size={32} className="text-pink-500" />,
  },
  {
    title: '3. Receive with Love',
    description: 'Your idol arrives safely, ready for the festival.',
    icon: <FaBoxOpen size={32} className="text-yellow-500" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-orange-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-800 mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 place-self-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700">{step.title}</h3>
              <p className="font-noto text-sm text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
