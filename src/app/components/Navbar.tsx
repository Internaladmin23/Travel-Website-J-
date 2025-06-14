// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Our Fleet", route: "/cabs" },
    { name: "Contact Us", route: "/contact", isButton: true },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo with Name */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Eco Venture Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-green-600">Eco Venture</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-black font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.route}
                onClick={closeMenu}
                className={`inline-block transition duration-200 ${
                  item.isButton
                    ? "bg-green-600 text-white px-8 py-2 rounded-4xl hover:bg-green-700"
                    : "hover:text-green-600"
                }`}
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
          className="md:hidden text-3xl text-black"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-black font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.route}
                  onClick={closeMenu}
                  className={`block transition ${
                    item.isButton
                      ? "bg-green-600 text-white px-5 py-2 rounded-md text-center hover:bg-green-700"
                      : "hover:text-green-700"
                  }`}
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
