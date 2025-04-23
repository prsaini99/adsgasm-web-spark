
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
