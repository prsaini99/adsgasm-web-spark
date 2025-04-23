
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import LearnMore from "@/components/LearnMore";
import Footer from "@/components/Footer";

const LearnMorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default LearnMorePage;
