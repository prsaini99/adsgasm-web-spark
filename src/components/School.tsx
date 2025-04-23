import { GraduationCap, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const School = () => {
  const courses = [
    {
      id: 1,
      title: "Fundamentals of Digital Advertising",
      description: "Learn the core principles and strategies behind successful digital ad campaigns.",
      duration: "4 weeks",
      icon: <Monitor className="h-6 w-6" />,
      popular: false
    },
    {
      id: 2,
      title: "Advanced Performance Marketing",
      description: "Master advanced techniques to optimize campaigns and maximize ROI.",
      duration: "6 weeks",
      icon: <GraduationCap className="h-6 w-6" />,
      popular: true
    }
  ];

  return (
    <section id="school" className="py-20 bg-adsgasm-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-adsgasm-accent font-semibold mb-2">ADSGASM SCHOOL</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master the Art of Running Successful Ads
          </h2>
          <p className="text-gray-300 text-lg">
            Our comprehensive educational programs empower you with the knowledge and skills
            to create, manage, and optimize high-performing ad campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`relative bg-adsgasm/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-adsgasm-accent/40 transition-all duration-300 h-full flex flex-col ${
                course.popular ? 'shadow-[0_0_30px_rgba(255,107,107,0.15)]' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 -right-3 bg-adsgasm-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="p-3 bg-white/10 rounded-lg w-fit mb-6">
                <div className="text-adsgasm-accent">
                  {course.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {course.description}
              </p>
              
              <div className="flex items-center mb-6">
                <svg className="h-5 w-5 text-adsgasm-accent mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">{course.duration} course</span>
              </div>
              
              <Button 
                variant={course.popular ? "default" : "outline"} 
                className={
                  course.popular 
                  ? "bg-adsgasm-accent hover:bg-adsgasm-accent/90 text-white w-full"
                  : "border-white/20 text-white hover:bg-white/10 w-full"
                }
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-adsgasm-light to-adsgasm rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Become an Ads Expert?</h3>
              <p className="text-gray-100 mb-6">
                Join our next cohort and learn directly from industry professionals with proven success in digital advertising.
                Whether you're a beginner or looking to advance your skills, we have the right program for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-adsgasm-accent hover:bg-adsgasm-accent/90 text-white">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View All Courses
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-2 mr-4 shrink-0">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Expert Instructors</h4>
                  <p className="text-gray-100">Learn from professionals with real-world experience and proven success</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-2 mr-4 shrink-0">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Hands-On Approach</h4>
                  <p className="text-gray-100">Work on real campaigns and get practical experience with ad platforms</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-2 mr-4 shrink-0">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Ongoing Support</h4>
                  <p className="text-gray-100">Get continued guidance even after course completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;
