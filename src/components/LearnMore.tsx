
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LearnMore = () => {
  const features = [
    {
      title: "Data-Driven Approach",
      description: "We use advanced analytics and tracking to optimize campaign performance.",
    },
    {
      title: "Expert Team",
      description: "Our specialists have years of experience in digital marketing.",
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies designed specifically for your business needs.",
    },
    {
      title: "Continuous Optimization",
      description: "Regular monitoring and adjustments to maximize results.",
    }
  ];

  const benefits = [
    "Increased ROI on marketing spend",
    "Higher conversion rates",
    "Better audience targeting",
    "Improved brand awareness",
    "Scalable growth strategies",
    "Regular performance reports"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover How We Drive Results
          </h1>
          <p className="text-xl text-gray-600">
            Learn about our proven methodology and how we can help your business succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Approach</h2>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-adsgasm-accent/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-adsgasm-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Benefits</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-adsgasm-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/get-started">
            <Button size="lg" className="bg-adsgasm-accent hover:bg-adsgasm-accent/90">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
