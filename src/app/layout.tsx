// src/app/layout.tsx
"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

       
      </body>
    </html>
  );
}
