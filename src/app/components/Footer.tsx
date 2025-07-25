"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Image
              src="/logo.jpeg"
              alt="Eco Venture Logo"
              width={40}
              height={40}
              className="object-contain rounded"
            />
            <h3 className="text-xl font-bold">Eco Venture</h3>
          </div>
          <p className="text-gray-400">
            Explore the world with us. We offer the best tours and travel experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/cabs" className="hover:text-blue-400">
                Fleet
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p>Email: ecoventure2025@gmail.com</p>
          <p>Phone: +91 70221 67815</p>
          <p>
            Address: No.110, Kanaka Road, Bharath Nagar,
            Bengaluru - 560091
          </p>
          <p>Technology Partner: Refex Green Mobility Ltd.</p>
        </div>
      </div>

     

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eco Venture. All rights reserved.
      </div>
      <p className="justify-center align-middle flex pt-4">
        Made with 💖 from{" "}
        <Link
          href="https://grudhrasolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:underline ml-1"
        >
          Grudhra Solutions
        </Link>
      </p>
    </footer>
  );
}
