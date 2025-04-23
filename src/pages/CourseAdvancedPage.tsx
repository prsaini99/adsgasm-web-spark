
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CourseAdvanced from "@/components/CourseAdvanced";
import Footer from "@/components/Footer";

const CourseAdvancedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CourseAdvanced />
      <Footer />
    </div>
  );
};

export default CourseAdvancedPage;
