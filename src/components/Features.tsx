
import { BarChart3, Zap, Shield, LineChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-adsgasm-accent" />,
      title: "Data-Driven Strategies",
      description: "Make informed decisions with comprehensive analytics and performance metrics."
    },
    {
      icon: <Zap className="h-8 w-8 text-adsgasm-accent" />,
      title: "Quick Implementation",
      description: "Get your campaigns up and running with our streamlined process."
    },
    {
      icon: <Shield className="h-8 w-8 text-adsgasm-accent" />,
      title: "Brand Safety",
      description: "Ensure your ads appear in brand-safe environments across all platforms."
    },
    {
      icon: <LineChart className="h-8 w-8 text-adsgasm-accent" />,
      title: "Continuous Optimization",
      description: "Regular campaign adjustments to maximize your ROI and performance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-adsgasm-accent font-semibold mb-2">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features that Drive Results
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive suite of features helps you achieve and exceed your marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 bg-white p-3 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
