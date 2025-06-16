"use client";

import Image from "next/image";

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
    name: "BMW 3 Series",
    description: "Luxury sedan with superior comfort and performance.",
    image: "/bmw-3.jpg",
  },
  {
    id: 5,
    name: "BMW 5 Series",
    description: "Executive-level luxury with advanced features.",
    image: "/bmw-5.jpg",
  },
  {
    id: 6,
    name: "Mercedes-Benz E-Class",
    description: "Classy and elegant with top-tier ride quality.",
    image: "/eclass.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz S-Class",
    description: "Flagship luxury experience for elite travelers.",
    image: "/sclas.avif",
  },
  {
    id: 8,
    name: "Jaguar XF",
    description: "Iconic British luxury with sporty performance.",
    image: "/xf.avif",
  },
  {
    id: 9,
    name: "Rolls Royce Phantom",
    description: "Ultimate VIP travel experience with prestige.",
    image: "/rolls.jpg",
  },
  {
    id: 10,
    name: "Tempo Traveller (12+1)",
    description: "Perfect for small groups with AC & LED options.",
    image: "/fleet/tempo.jpg",
  },
  {
    id: 11,
    name: "Buses (21–53 Seaters)",
    description: "Ideal for corporate & employee group transport.",
    image: "/bus.avif",
  },
  {
    id: 12,
    name: "Volvo / Multi-Axle",
    description: "Best for long-distance luxury corporate tours.",
    image: "/volvo.webp",
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
              className="bg-gray-900/90 border border-yellow-400/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-black/70 transition duration-300 hover:scale-[1.02] flex flex-col"
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
      </div>
    </section>
  );
}
