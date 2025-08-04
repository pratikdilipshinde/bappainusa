'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';
import allidols from '../data/idols.json';

export default function GanpatiCardCarousel() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { addToCart } = useCart();

  // 🔥 Filter idols to keep only unique price values
  const idols = Array.from(
    new Map(allidols.map((idol) => [idol.price, idol])).values()
  );

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on('select', onSelect);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-16 px-4 bg-orange-50">
      <h2 className="text-3xl font-bold text-orange-700 text-center mb-8">
        Ganpati Idol Collection
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {idols.map((idol) => (
            <div
              key={idol.id}
              className="min-w-[300px] max-w-[300px] justify-center bg-white rounded-xl shadow-md p-4 flex-shrink-0 hover:shadow-lg transition"
            >
              <Image
                src={idol.image}
                alt={idol.name}
                width={300}
                height={300}
                className="rounded-lg object-contain h-[250px] w-full"
              />
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
          ))}
        </div>
      </div>

      {/* Dot Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {idols.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-3 w-3 rounded-full drop-shadow-2xl ${
              i === selectedIndex ? 'bg-orange-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <Link href="/GanpatiGallery">
          <button className="font-noto bg-orange-600 cursor-pointer drop-shadow-amber-900 drop-shadow-md font-bold text-white px-6 py-3 rounded-full hover:bg-orange-700 transition text-lg">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
