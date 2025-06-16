// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { CarFront } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-30 px-4 md:px-12 bg-white">
      <div className="relative overflow-hidden rounded-3xl shadow-xl min-h-[80vh] bg-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional light overlay for readability (can be removed if unnecessary) */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center text-center text-black h-full p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CarFront className="w-12 h-12 text-green-500 mb-4" />

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-400 drop-shadow-sm">
            Ride Smarter. Travel Safer.
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100">
            Seamless transport solutions trusted by enterprises for over 20 years.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="/fleet"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
            >
              Explore Fleet
            </a>
            <a
              href="/contact"
              className="border border-green-500 text-white hover:text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
