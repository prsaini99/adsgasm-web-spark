
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-adsgasm to-adsgasm-accent rounded-2xl overflow-hidden">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">AdsGasm Team</h3>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-3/4 aspect-video bg-adsgasm-secondary rounded-xl shadow-xl">
                <div className="flex items-center justify-center h-full p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">5+</div>
                    <div className="text-white text-sm">Years of Experience</div>
                  </div>
                  <div className="h-16 w-px bg-white/30 mx-6"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">200+</div>
                    <div className="text-white text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-6">
            <p className="text-adsgasm-accent font-semibold mb-2">ABOUT ADSGASM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Drive Growth Through Digital Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              AdsGasm is a premier marketing agency specializing in performance marketing, content 
              development, and educational services. We're passionate about helping businesses maximize 
              their digital potential and achieve remarkable results.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts combines data-driven insights with creative excellence to deliver 
              marketing solutions that not only reach your target audience but convert them into 
              loyal customers. Whether you're looking to boost your ad performance, develop compelling 
              content, or learn the art of running successful campaigns, we have the expertise to 
              help you succeed.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-adsgasm-light/20 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-adsgasm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Data-Driven Approach</h4>
                  <p className="text-gray-600">We leverage analytics to guide strategy and maximize ROI</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-adsgasm-light/20 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-adsgasm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Industry Experts</h4>
                  <p className="text-gray-600">Specialists with proven success in digital marketing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-adsgasm-light/20 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-adsgasm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Customized Solutions</h4>
                  <p className="text-gray-600">Tailored strategies to meet your specific goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-adsgasm-light/20 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-adsgasm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Transparent Reporting</h4>
                  <p className="text-gray-600">Clear performance metrics and regular updates</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-adsgasm hover:bg-adsgasm-light text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
