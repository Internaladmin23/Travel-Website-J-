"use client";

import Image from "next/image";
import Link from "next/link";


const cabs = [
  {
    id: 1,
    name: "Swift Dzire",
    description: "Compact and comfortable for quick city pickups.",
    image: "/swift.avif",
    
    
    
  },
  {
    id: 2,
    name: "Innova Crysta",
    description: "Spacious and premium for family or business trips.",
    image: "/innova.jpeg",
    
    
    
  },
  {
    id: 3,
    name: "Toyota Camry",
    description: "Executive sedan for smooth, premium rides.",
    image: "/camry.webp",
    
    
    
  },
  {
    id: 4,
    name: "BMW ",
    description: "Luxury class for elite comfort and style.",
    image: "/bmw-3  .jpg",
   
  },
];

export default function AvailableCabs() {
  return (
    <section className="py-20 bg-gray-200 text-gray-900" id="fleet">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900">
          Available Cabs 
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
                <h3 className="text-xl font-bold text-white mb-1">
                  {cab.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{cab.description}</p>

                

                <button className="w-full bg-gray-200 text-black py-2 rounded-xl font-semibold hover:bg-green-500 transition">
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
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            View All Cabs
          </Link>
        </div>
      </div>
    </section>
  );
}
