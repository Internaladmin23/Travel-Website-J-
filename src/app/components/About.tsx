"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlane, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-6">
            WanderWays is your trusted travel partner offering curated journeys
            across the globe. With expert trip planning, customer-first service, and a
            passion for adventure, we turn travel dreams into reality — stress-free.
          </p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-blue-600 text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="Travel experience"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Worldwide Trips",
    description: "Explore more than 150 destinations worldwide with tailored experiences.",
    icon: <FaPlane />,
  },
  {
    title: "Expert Guides",
    description: "Our team of experienced guides ensures every journey is memorable and safe.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Trusted by Thousands",
    description: "Join a growing community of happy travelers from around the world.",
    icon: <FaUsers />,
  },
];
