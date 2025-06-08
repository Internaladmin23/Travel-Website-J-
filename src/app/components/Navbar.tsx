"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Cabs", route: "/cabs" },
    { name: "Contact", route: "/contact" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-700 via-black to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-3xl font-bold text-yellow-400"
        >
          WanderWays
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.route}
                onClick={closeMenu}
                className="hover:text-yellow-400 transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle Menu"
          onClick={handleToggle}
          className="md:hidden text-3xl text-white"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-700 via-black to-gray-800 shadow-md">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-white font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.route}
                  onClick={closeMenu}
                  className="block hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
