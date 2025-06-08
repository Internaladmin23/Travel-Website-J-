"use client";

import { motion } from "framer-motion";
import { FaBusAlt, FaClock, FaHandsHelping } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className=" px-6 bg-gradient-to-r from-blue-200 via-gray-300 to-gray-300 text-gray-800 py-16">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-yellow-700 bg-clip-text text-transparent ">Why Choose Eco Venture</h2>
        <p className="text-gray-700 text-lg">
          Corporate employee transportation backed by trust, punctuality, and a modern fleet.
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
            className="bg-white p-8 rounded-xl shadow-4xl text-center hover:shadow-xl transition  "
          >
            <div className="text-blue-600 text-4xl mb-4 mx-auto">{card.icon}</div>
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
    title: "Reliable Fleet Service",
    description:
      "From sedans to buses, we operate a wide range of vehicles to suit all corporate travel needs.",
    icon: <FaBusAlt />,
  },
  {
    title: "Timely & Safe Commutes",
    description:
      "Our operations prioritize punctuality and driver professionalism to ensure hassle-free employee transport.",
    icon: <FaClock />,
  },
  {
    title: "Client-Centric Support",
    description:
      "Our support team works closely with corporates to tailor transport solutions that work at scale.",
    icon: <FaHandsHelping />,
  },
];
