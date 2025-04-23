
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "Schedule a free consultation to discuss your goals and challenges.",
      action: "Schedule Call",
      link: "/contact"
    },
    {
      title: "Strategy Development",
      description: "We'll create a customized marketing strategy tailored to your business.",
      action: "Learn More",
      link: "/learn-more"
    },
    {
      title: "Implementation",
      description: "Our team will execute the strategy and start driving results.",
      action: "View Services",
      link: "/services"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Journey to Better Marketing
          </h1>
          <p className="text-xl text-gray-600">
            Follow these simple steps to transform your digital presence and achieve your marketing goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-8 h-8 rounded-full bg-adsgasm-accent text-white flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={step.link}>
                  <Button className="w-full bg-adsgasm hover:bg-adsgasm-light group">
                    {step.action}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to take your business to the next level?
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-adsgasm-accent hover:bg-adsgasm-accent/90">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
