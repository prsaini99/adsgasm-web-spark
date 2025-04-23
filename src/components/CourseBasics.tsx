import { useState } from "react";
import { Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EnrollmentDialog from "./EnrollmentDialog";

const CourseBasics = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const modules = [
    {
      title: "Introduction to Digital Advertising",
      description: "Understanding the digital advertising landscape and key concepts",
      duration: "1 week"
    },
    {
      title: "Campaign Strategy & Planning",
      description: "Learn how to develop effective ad strategies and campaign structures",
      duration: "1 week"
    },
    {
      title: "Audience Targeting & Analytics",
      description: "Master the art of reaching the right audience and measuring results",
      duration: "1 week"
    },
    {
      title: "Creative Best Practices",
      description: "Create compelling ad creative and copywriting that converts",
      duration: "1 week"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-adsgasm-accent font-semibold mb-4">FUNDAMENTALS COURSE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fundamentals of Digital Advertising
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master the core principles and strategies behind successful digital ad campaigns
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <Book className="mr-2 h-5 w-5" />
              <span>4 weeks course</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="h-2 w-2 bg-gray-600 rounded-full mx-4" />
              <span>8 hours per week</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-adsgasm-accent hover:bg-adsgasm-accent/90"
            onClick={() => setIsEnrollmentOpen(true)}
          >
            Enroll Now
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        <div className="grid gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-adsgasm-accent">Module {index + 1}</span>
                  {module.title}
                </CardTitle>
                <CardDescription className="text-base">
                  Duration: {module.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Create and structure effective digital advertising campaigns</span>
            </li>
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Understand audience targeting and segmentation</span>
            </li>
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Master campaign optimization techniques</span>
            </li>
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Analyze and interpret campaign performance metrics</span>
            </li>
          </ul>
        </div>

        <EnrollmentDialog 
          isOpen={isEnrollmentOpen}
          onClose={() => setIsEnrollmentOpen(false)}
          courseName="Fundamentals of Digital Advertising"
        />
      </div>
    </section>
  );
};

export default CourseBasics;
