"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBus, FaClock, FaHandshake } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-0 to-blue-100 py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-black">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6">
            At <strong>Eco Venture</strong>, we provide dependable and professional employee transportation solutions to leading corporates across Bengaluru. With over 20 years of combined industry experience, we’re redefining corporate mobility with safety, punctuality, and service excellence at our core.
          </p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-blue-600 text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg text-blue-900">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
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
          className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1749214487016-6911b7a543ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Corporate transportation"
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
    title: "Modern & Versatile Fleet",
    description: "From sedans to buses, our vehicles are equipped for all corporate travel needs.",
    icon: <FaBus />,
  },
  {
    title: "On-Time Every Time",
    description: "We pride ourselves on punctuality, ensuring smooth employee pickups and drop-offs.",
    icon: <FaClock />,
  },
  {
    title: "Trusted by Corporates",
    description: "We serve major businesses across Bengaluru with safe and reliable mobility solutions.",
    icon: <FaHandshake />,
  },
];
