"use client";

import Image from "next/image";
import { FaUsers, FaStar, FaRupeeSign } from "react-icons/fa";

const cabs = [
  {
    id: 1,
    name: "Swift Dzire",
    description: "Compact and comfortable for quick city pickups.",
    image: "/swift.avif ",
    capacity: 4,
    rating: 4.7,
    price: 899,
  },
  {
    id: 2,
    name: "Innova Crysta",
    description: "Spacious and premium for family or business trips.",
    image: "/innova.jpeg",
    capacity: 6,
    rating: 4.9,
    price: 1099,
  },
  {
    id: 3,
    name: "Toyota Camry",
    description: "Executive sedan for smooth, premium rides.",
    image: "/camry.webp",
    capacity: 4,
    rating: 4.8,
    price: 1499,
  },
  {
    id: 4,
    name: "BMW / Benz (3/5/6 Series)",
    description: "Luxury class for elite comfort and style.",
    image: "/bmwbenz.jpg",
    capacity: 4,
    rating: 4.9,
    price: 2999,
  },
  {
    id: 5,
    name: "Jaguar / Rolls Royce",
    description: "VIP-level travel for weddings and prestige events.",
    image: "/rolls.jpg",
    capacity: 4,
    rating: 5.0,
    price: 5999,
  },
  {
    id: 6,
    name: "Tempo Traveller (12+1)",
    description: "Perfect for small groups with AC & LED options.",
    image: "/fleet/tempo.jpg",
    capacity: 13,
    rating: 4.7,
    price: 1799,
  },
  {
    id: 7,
    name: "Buses (21–53 Seaters)",
    description: "Ideal for corporate & employee group transport.",
    image: "/fleet/bus.jpg",
    capacity: 53,
    rating: 4.6,
    price: 2999,
  },
  {
    id: 8,
    name: "Volvo / Multi-Axle",
    description: "Best for long-distance luxury corporate tours.",
    image: "/volvo.webp",
    capacity: 50,
    rating: 4.8,
    price: 3999,
  },
];

export default function CabsPage() {
  return (
    <section className="py-22 bg-gray-200 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-14 text-center text-black">
         # Our Fleet
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {cabs.map((cab) => (
            <div
              key={cab.id}
              className="bg-gray-900/80 border border-yellow-400/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-black/70 transition duration-300 hover:scale-[1.02] flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={cab.image}
                  alt={cab.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <h3 className="text-xl font-bold text-yellow-300 mb-1">
                  {cab.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{cab.description}</p>

                <div className="flex justify-between items-center text-sm text-gray-200 mb-4">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-yellow-300" />
                    {cab.capacity} pax
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-300" />
                    {cab.rating}
                  </div>
                </div>

                <div className="text-lg font-semibold text-green-400 mb-4">
                  ₹{cab.price.toLocaleString()} onwards
                </div>

                <button className="w-full bg-gray-200 text-black py-2 rounded-xl font-semibold hover:bg-yellow-300 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
