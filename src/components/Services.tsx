
import { Calendar, BarChart3, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-adsgasm-accent" />,
      title: "Performance Marketing",
      description: "Data-driven marketing strategies that deliver measurable results and drive ROI across digital channels.",
      features: [
        "Paid Search & Social Advertising",
        "Conversion Rate Optimization",
        "Performance Analytics",
        "Campaign Management"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-adsgasm-accent" />,
      title: "Content Development",
      description: "Engaging, high-quality content creation that resonates with your audience and drives business growth.",
      features: [
        "Copywriting & Messaging",
        "Video Production",
        "Social Media Content",
        "Content Strategy"
      ]
    },
    {
      icon: <Calendar className="h-12 w-12 text-adsgasm-accent" />,
      title: "Ads Education",
      description: "Comprehensive training programs that empower your team to run successful advertising campaigns.",
      features: [
        "Specialized Ads Workshops",
        "One-on-One Coaching",
        "Platform-Specific Training",
        "Advanced Ad Techniques"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-adsgasm-accent font-semibold mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Solutions for Marketing Success
          </h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive marketing services to help businesses grow their digital presence
            and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg className="h-5 w-5 text-adsgasm-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="bg-adsgasm hover:bg-adsgasm-light text-white w-full"
                variant="default"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
