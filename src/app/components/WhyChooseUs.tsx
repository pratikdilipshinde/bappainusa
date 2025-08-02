'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaShippingFast, FaGopuram, FaHandHoldingHeart } from 'react-icons/fa';

const features = [
  {
    title: 'Eco-Friendly Idols',
    description: 'Crafted with sustainable clay and natural colors.',
    icon: <FaLeaf size={32} className="text-green-600" />,
  },
  {
    title: 'Fast USA Delivery',
    description: 'Get your idol delivered safely and on time.',
    icon: <FaShippingFast size={32} className="text-blue-500" />,
  },
  {
    title: 'Made in India',
    description: 'Authentic designs handcrafted by Indian artisans.',
    icon: <FaGopuram size={32} className="text-orange-500" />,
  },
  {
    title: 'Devotion Packed',
    description: 'Every idol is packed with blessings and care.',
    icon: <FaHandHoldingHeart size={32} className="text-red-500" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="bg-white/80 max-w-6xl mx-auto text-center rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-orange-700 mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="mb-4 place-self-center sm:place-self-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-800">{feature.title}</h3>
              <p className="font-noto text-sm text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
