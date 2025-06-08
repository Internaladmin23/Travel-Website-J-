"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaStar, FaRupeeSign } from "react-icons/fa";

const cabs = [
  {
    id: 1,
    name: "Swift Dzire",
    description: "Compact and comfortable for quick city pickups.",
    image: "/swift.avif",
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
];

export default function AvailableCabs() {
  return (
    <section className="py-20 bg-gray-200 text-gray-900" id="fleet">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900">
          Available Cabs & Destinations
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cabs.map((cab) => (
            <div
              key={cab.id}
              className="bg-gray-900 text-white border border-yellow-400/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-black/70 transition hover:scale-[1.02] flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={cab.image}
                  alt={cab.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-yellow-300 mb-1">
                  {cab.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{cab.description}</p>

                <div className="flex justify-between text-sm text-gray-200 mb-4">
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

        {/* Link to full fleet page */}
        <div className="flex justify-center mt-12">
          <Link
            href="/cabs"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            View All Cabs
          </Link>
        </div>
      </div>
    </section>
  );
}
