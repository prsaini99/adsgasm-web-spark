
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova",
      testimonial: "Working with AdsGasm transformed our digital strategy completely. Our ROI increased by 217% in just three months, and their team was responsive and insightful throughout.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "E-commerce Manager",
      company: "Urban Styles",
      testimonial: "Their content development services helped us establish a consistent brand voice across all channels. We've seen a significant increase in engagement and conversion rates since partnering with them.",
      rating: 5
    },
    {
      id: 3,
      name: "Rebecca Taylor",
      position: "CEO",
      company: "GrowFast Agency",
      testimonial: "The ads education program gave our team the skills we needed to manage our campaigns in-house. The instructors were knowledgeable and the hands-on approach was extremely valuable.",
      rating: 4
    }
  ];

  const stats = [
    { value: "94%", label: "Client Retention" },
    { value: "217%", label: "Average ROI" },
    { value: "500+", label: "Clients Served" },
    { value: "12M+", label: "Ad Spend Managed" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-adsgasm-accent font-semibold mb-2">TESTIMONIALS & RESULTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from businesses we've helped achieve 
            outstanding marketing results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-adsgasm-light/30 flex items-center justify-center text-adsgasm font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-adsgasm text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                "
              </div>
            </div>
          ))}
        </div>

        <div className="bg-adsgasm text-white rounded-xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS45OTk5IDI2LjAwMDFDMjUuOTk5OSAyNS40NDc4IDI2LjQ0NzcgMjUuMDAwMSAyNi45OTk5IDI1LjAwMDFDMjcuNTUyMiAyNS4wMDAxIDI3Ljk5OTkgMjUuNDQ3OCAyNy45OTk5IDI2LjAwMDFDMjcuOTk5OSAyNi41NTIzIDI3LjU1MjIgMjcuMDAwMSAyNi45OTk5IDI3LjAwMDFDMjYuNDQ3NyAyNy4wMDAxIDI1Ljk5OTkgMjYuNTUyMyAyNS45OTk5IDI2LjAwMDFaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')]"
            style={{ opacity: 0.2 }}></div>
          
          <h2 className="text-3xl font-bold mb-12 relative z-10 text-center">Our Results Speak for Themselves</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-adsgasm-accent">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
