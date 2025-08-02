'use client';

import { motion } from 'framer-motion';
import { FaTruck, FaShieldAlt, FaClock } from 'react-icons/fa';

const info = [
  {
    icon: <FaTruck size={32} className="text-orange-500" />,
    title: 'Nationwide Shipping',
    desc: 'We deliver Ganpati idols to all 50 states across the USA.',
  },
  {
    icon: <FaShieldAlt size={32} className="text-green-600" />,
    title: 'Safe Packaging',
    desc: 'Each idol is packed securely to prevent damage during transit.',
  },
  {
    icon: <FaClock size={32} className="text-blue-500" />,
    title: 'Timely Delivery',
    desc: 'We make sure your idol arrives well before the festival begins.',
  },
];

export default function ShippingInfo() {
  return (
    <section className="py-16 bg-orange-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-800 mb-10">Shipping & Delivery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {info.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 place-self-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700">{item.title}</h3>
              <p className="font-noto text-sm text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
