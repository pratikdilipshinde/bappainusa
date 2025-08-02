'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{ backgroundImage: "url('/images/contactBG.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have questions or special requests? We’re here to help you bring Bappa home with devotion.
        </motion.p>

        <form
          className="space-y-4"
          action="https://formspree.io/f/{your-form-id}" // Replace with your actual form ID
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600"
          ></textarea>
          <button
            type="submit"
            className="font-noto w-full drop-shadow-amber-950 drop-shadow-md cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
