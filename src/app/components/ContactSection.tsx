'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message || result.error);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Something went wrong while sending your message.');
    } finally {
      setLoading(false);
    }
  };

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
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="mb-8 text-xl font-noto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have questions or special requests? We’re here to help you bring Bappa home with devotion.
        </motion.p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 font-noto"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 font-noto"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 font-noto"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="font-noto w-full bg-orange-600 cursor-pointer drop-shadow-amber-900 drop-shadow-md font-bold text-white px-6 py-3 rounded-full hover:bg-orange-700 transition text-lg"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
