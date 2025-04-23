import { useState } from "react";
import { Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EnrollmentDialog from "./EnrollmentDialog";

const CourseAdvanced = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const modules = [
    {
      title: "Advanced Campaign Strategy",
      description: "Deep dive into complex campaign structures and advanced targeting",
      duration: "1 week"
    },
    {
      title: "Performance Optimization",
      description: "Master advanced optimization techniques and automation",
      duration: "2 weeks"
    },
    {
      title: "Analytics & Attribution",
      description: "Advanced analytics, attribution modeling, and ROI calculation",
      duration: "2 weeks"
    },
    {
      title: "Scale & Management",
      description: "Strategies for scaling campaigns while maintaining performance",
      duration: "1 week"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-adsgasm-accent text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            Most Popular
          </div>
          <p className="text-adsgasm-accent font-semibold mb-4">ADVANCED COURSE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Performance Marketing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master advanced techniques to optimize campaigns and maximize ROI
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <Book className="mr-2 h-5 w-5" />
              <span>6 weeks course</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="h-2 w-2 bg-gray-600 rounded-full mx-4" />
              <span>10 hours per week</span>
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
              <span>Implement advanced campaign optimization strategies</span>
            </li>
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Master complex attribution modeling</span>
            </li>
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Scale campaigns while maintaining performance</span>
            </li>
            <li className="flex gap-3">
              <svg className="h-6 w-6 text-adsgasm-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automate and optimize campaign management</span>
            </li>
          </ul>
        </div>

        <EnrollmentDialog 
          isOpen={isEnrollmentOpen}
          onClose={() => setIsEnrollmentOpen(false)}
          courseName="Advanced Performance Marketing"
        />
      </div>
    </section>
  );
};

export default CourseAdvanced;
