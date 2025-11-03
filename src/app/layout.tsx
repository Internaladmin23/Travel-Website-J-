// src/app/layout.tsx
"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // import icon
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        {/* <Link
          href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300">
            <FaWhatsapp className="text-3xl" />
          </div>
        </Link> */}
      </body>
    </html>
  );
}
