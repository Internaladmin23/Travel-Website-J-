"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBus, FaStar, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            About Eco Venture
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Eco Venture isn&#39;t just another cab service. We deliver 360° employee
            transportation solutions for corporates across Bengaluru — with
            experience spanning over 20 years in logistics, fleet operations,
            and business-class commuting.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Feature
              icon={<FaBus className="text-blue-600 text-2xl" />}
              title="Full-Spectrum Fleet"
              description="From executive sedans and business-class SUVs to tempo travellers and 53-seater buses – we've got every corporate travel need covered."
            />
            <Feature
              icon={<FaHandshake className="text-yellow-600 text-2xl" />}
              title="Trusted Corporate Partner"
              description="Eco Venture is trusted by top companies in Bangalore for punctual, safe, and professional transport service."
            />
            <Feature
              icon={<FaStar className="text-green-600 text-2xl" />}
              title="20+ Years Industry Experience"
              description="Our management team has decades of experience in transport logistics, ensuring unmatched reliability."
            />
            <Feature
              icon={<FaMapMarkerAlt className="text-red-500 text-2xl" />}
              title="Wide City Coverage"
              description="Whether it's Electronic City or Airport runs, our reach spans all major zones of Bengaluru."
            />
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1608257878109-77a35991097e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Eco Venture Fleet"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Mini Cab Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Highlighted Fleet
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cabHighlights.map((cab) => (
              <div
                key={cab.name}
                className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-2xl transition"
              >
                <div className="relative w-full h-32 rounded-md overflow-hidden mb-3">
                  <Image
                    src={cab.image}
                    alt={cab.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg text-yellow-600">
                  {cab.name}
                </h4>
                <p className="text-sm text-gray-600">{cab.type}</p>
              </div>
            ))}
          </div>
        </motion.div>

        
        {/* Contact Info */}
<div className="bg-white shadow-md p-6 rounded-xl border max-w-xl mx-auto text-center mt-16">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">
    Contact Us
  </h3>
  <ul className="text-gray-700 space-y-2 text-sm">
    <li>
      <strong>Reach@:</strong>{" "}
      <a
        href="mailto:reach@ecoventure.travel"
        className="text-blue-600 hover:underline"
      >
        reach@ecoventure.travel
      </a>
    </li>
    <li>
      <strong>Phone:</strong> +91 70221 67815
    </li>
    <li>
      <strong>Address:</strong> No.110, Kanaka Road, Bharath Nagar,
      Bengaluru - 560091
    </li>
    <li>
      <strong>Technology Partner:</strong> Refex Green Mobility Ltd.
    </li>
  </ul>
</div>

      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="pt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

const cabHighlights = [
  {
    name: "Swift Dzire",
    type: "Compact | 4-seater",
    image: "/swift.avif",
  },
  {
    name: "Innova Crysta",
    type: "Business SUV | 6-seater",
    image: "/innova.jpeg",
  },
  {
    name: "Toyota Camry",
    type: "Luxury Sedan | 4-seater",
    image: "/camry.webp",
  },
  {
    name: "Rolls Royce",
    type: "Luxury Travel | 4-seater",
    image: "/rolls.jpg",
  },
];
