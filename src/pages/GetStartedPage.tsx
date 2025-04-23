
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const GetStartedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default GetStartedPage;
