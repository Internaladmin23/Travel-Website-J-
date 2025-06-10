"use client"

import Hero from "./components/Hero";
import AboutUs from "./components/About";
import WhyChooseUs from "./components/WhyUs";
import AvailableCabs from "./components/AvailableCab";
import Advertisement from "./components/Advertisement";
import CustomerStrip from "./components/CustomerStrip";




export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutUs/>
    <CustomerStrip/>
    <WhyChooseUs/>
    <Advertisement/>
    <AvailableCabs/>
    
   
    </div>
  );
}
