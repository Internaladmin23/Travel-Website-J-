"use client";

import { motion } from "framer-motion";
import { FaGlobeAsia, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-lg">
          We’re not just another travel site — we bring personalized experiences to your fingertips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >
            <div className="text-blue-500 text-4xl mb-4 mx-auto">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Global Destinations",
    description: "Explore 100+ countries with hand-picked recommendations and guides.",
    icon: <FaGlobeAsia />,
  },
  {
    title: "Tailored Itineraries",
    description: "Trips crafted by experts to fit your budget and dream destinations.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is always available to help you travel worry-free.",
    icon: <FaHeadset />,
  },
];
