"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Advertisement() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-white via-blue-50 to-yellow-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Powering Our Fleet Responsibly
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            We proudly collaborate with <strong>Refex Green Mobility Ltd.</strong> to bring
            sustainable and energy-efficient transportation solutions to life. Together, we aim
            to reshape corporate travel through innovation, green energy, and cleaner mobility.
          </p>
          <div className="text-sm text-gray-600">
            <p>🔋 EV Integration</p>
            <p>🌿 Sustainable Transport</p>
            <p>💼 Corporate Fleet Solutions</p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1716913070951-667311041aaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // 🔁 Replace with the correct image
            alt="Refex Green Mobility"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
