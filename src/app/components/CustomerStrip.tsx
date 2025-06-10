"use client";

import Image from "next/image";

const logos = [
  "infosys.png",
  "wipro.png",
  "tcs.png",
  "dell.png",
  "accenture.png",
  "amazon.png",
  "bosch.png",
];

export default function CustomerStrip() {
  return (
    <div className="relative bg-gray-100 py-6 overflow-hidden">
      <h2 className="text-center text-xl font-bold mb-4">Our Customers</h2>

      {/* Fading edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

      {/* Scrolling container */}
      <div className="overflow-hidden">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="min-w-[120px] gap-2.5 flex-shrink-0">
              <Image
                src={`/${logo}`}
                alt={`Customer logo ${logo}`}
                width={120}
                height={60}
                className="object-contain mx-auto"
              />
            </div>
          ))}
          {/* Duplicate logos to loop seamlessly */}
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="min-w-[120px] flex-shrink-0">
              <Image
                src={`/${logo}`}
                alt={`Customer logo ${logo}`}
                width={120}
                height={60}
                className="object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
