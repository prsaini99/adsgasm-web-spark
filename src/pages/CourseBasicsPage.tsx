
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CourseBasics from "@/components/CourseBasics";
import Footer from "@/components/Footer";

const CourseBasicsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CourseBasics />
      <Footer />
    </div>
  );
};

export default CourseBasicsPage;
