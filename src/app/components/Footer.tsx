"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Eco Venture</h3>
          <p className="text-gray-400">
            Explore the world with us. We offer the best tours and travel experiences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Tours", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-blue-400">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p>Email: contact@wanderways.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Travel Road, Adventure City</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eco Venture. All rights reserved. 
      </div>
      <p className="justify-center align-middle flex pt-4">Made with 💖 from Grudhra Solutions</p>
    </footer>
  );
}
