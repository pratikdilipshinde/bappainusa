'use client';

import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaCommentDots } from 'react-icons/fa';

export default function SocialMediaButtons() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <a
            href="https://wa.me/17473561617?text=Hi! I'm interested in your Ganpati idols."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-green-600 cursor-pointer"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          <a
            href="https://instagram.com/bappainusa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-pink-500 cursor-pointer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </>
      )}

      {/* Main floating button */}
      <button
        className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
      >
        <FaCommentDots className="w-6 h-6" />
      </button>
    </div>
  );
}
