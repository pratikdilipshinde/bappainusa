'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*const idols = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Ganpati Idol ${i + 1}`,
  image: `/images/ganpati${i + 1}.png`,
  price: `$${49 + i * 10}`,
  material: i % 2 === 0 ? 'Eco Clay' : 'Plaster of Paris',
}));
*/

const idols = [
  {
    id: 1,
    name: 'Eco-Friendly Ganpati - 12 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$49',
    material: 'Eco Clay',
  },
  {
    id: 2,
    name: 'Classic Ganpati - 14 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$59',
    material: 'Plaster of Paris',
  },
  {
    id: 3,
    name: 'Sitting Bappa - 18 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$79',
    material: 'Hand-Painted Clay',
  },
  {
    id: 4,
    name: 'Traditional Ganpati - 21 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$99',
    material: 'POP with Water-Based Paint',
  },
  {
    id: 5,
    name: 'Ganpati with Mouse - 24 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$109',
    material: 'Eco Clay with Detailing',
  },
  {
    id: 6,
    name: 'Colorful Ganesh - 10 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$39',
    material: 'Plaster of Paris',
  },
  {
    id: 7,
    name: 'Modern Look Ganpati - 15 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$69',
    material: 'Eco-Friendly Clay',
  },
  {
    id: 8,
    name: 'Blessing Pose Ganpati - 20 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$89',
    material: 'Clay with Natural Colors',
  },
  {
    id: 9,
    name: 'Festival Special Ganpati - 22 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$119',
    material: 'POP with Gloss Finish',
  },
  {
    id: 10,
    name: 'Premium Ganpati Idol - 26 inch',
    image: '/images/ganpatiIMG1.jpg',
    price: '$139',
    material: 'Eco Clay + Handcrafted Details',
  },
];


export default function GanpatiCardCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

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
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 hover:shadow-lg transition"
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
              <p className="text-lg font-bold mt-2">{idol.price}</p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
                Order Now
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
            className={`h-3 w-3 rounded-full ${
              i === selectedIndex ? 'bg-orange-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <Link href="/ganpati-gallery">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition text-lg">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
