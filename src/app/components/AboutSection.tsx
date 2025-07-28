'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      className="bg-fixed bg-center bg-cover bg-no-repeat py-20 px-4"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="max-w-4xl mx-auto text-center bg-white/80 p-10 rounded-xl shadow-lg">
        <motion.h2
          className="text-3xl font-bold text-orange-700 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About BappaInUSA
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          BappaInUSA was born out of a deep love for Indian traditions and a desire to bring the
          spirit of Ganesh Utsav into homes across the United States. We deliver handcrafted Ganpati
          idols from India, ensuring authenticity, quality, and devotion in every delivery.
        </motion.p>
      </div>
    </section>
  );
}
