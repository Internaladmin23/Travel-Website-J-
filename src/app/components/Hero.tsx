"use client";

import { motion } from "framer-motion";
import { CarFront } from "lucide-react"; // Optional cab icon

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 text-white overflow-hidden bg-black">
      {/* Animated Highway-Styled Wave */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-[200%] h-full animate-wave opacity-70"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cabWave" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDB813" /> {/* Taxi Yellow */}
              <stop offset="50%" stopColor="#0f0f0f" />
              <stop offset="100%" stopColor="#38bdf8" /> {/* Travel blue */}
            </linearGradient>
          </defs>
          <path
            fill="url(#cabWave)"
            d="M0,224L60,197.3C120,171,240,117,360,128C480,139,600,213,720,224C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <div className="flex justify-center mb-4">
          <CarFront className="w-12 h-12 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Ride Smarter. Travel Safer.
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Seamless cab solutions for corporate travelers. Trusted by top firms in Bengaluru for over 20 years.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#fleet"
            className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Explore Our Fleet
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Partner With Us
          </a>
        </div>
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        .animate-wave {
          animation: waveFlow 10s linear infinite;
        }

        @keyframes waveFlow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
