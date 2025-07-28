import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IdolShowcase from "./components/IdolShowcase";
import GanpatiCardCarousel from "./components/GanpatiCardCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import AboutSection from "./components/AboutSection";
import ShippingInfo from "./components/ShippingInfo";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GanpatiCardCarousel />
      <WhyChooseUs />
      <HowItWorks />
      <AboutSection />
      <ShippingInfo />
      <ContactSection />
      <Footer />
    </>
  );
}
