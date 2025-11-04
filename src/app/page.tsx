

import Hero from "./components/Hero";
import AboutUs from "./components/About";
 import WhyChooseUs from "./components/WhyUs";
 import AvailableCabs from "./components/AvailableCab";
import Advertisement from "./components/Advertisement";





export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutUs/>
    
     <WhyChooseUs/>
    <Advertisement/>
    <AvailableCabs/>
    
   
    </div>
  );
}
