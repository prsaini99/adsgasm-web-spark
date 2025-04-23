import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-adsgasm-dark via-adsgasm to-adsgasm-light text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS45OTk5IDI2LjAwMDFDMjUuOTk5OSAyNS40NDc4IDI2LjQ0NzcgMjUuMDAwMSAyNi45OTk5IDI1LjAwMDFDMjcuNTUyMiAyNS4wMDAxIDI3Ljk5OTkgMjUuNDQ3OCAyNy45OTk5IDI2LjAwMDFDMjcuOTk5OSAyNi41NTIzIDI3LjU1MjIgMjcuMDAwMSAyNi45OTk5IDI3LjAwMDFDMjYuNDQ3NyAyNy4wMDAxIDI1Ljk5OTkgMjYuNTUyMyAyNS45OTk5IDI2LjAwMDFaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')]" style={{
      opacity: 0.2
    }}></div>
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-block px-3 py-1 bg-adsgasm-accent/20 backdrop-blur-sm rounded-full text-sm font-semibold text-adsgasm-accent border border-adsgasm-accent/20">
              Boost Your Marketing Performance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your <span className="text-adsgasm-accent">Digital Presence</span> with AdsGasm
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              We deliver performance marketing, content development, and education that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" className="bg-adsgasm-accent hover:bg-adsgasm-accent/90 text-white">
                  Get Started
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end relative z-10">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-adsgasm-accent rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-adsgasm-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-adsgasm-light rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="rounded-lg bg-adsgasm-accent p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold">Performance Growth</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/5 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-adsgasm-accent to-adsgasm-secondary h-2 rounded-full w-[85%]"></div>
                    </div>
                    <div className="bg-white/5 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-adsgasm-accent to-adsgasm-secondary h-2 rounded-full w-[65%]"></div>
                    </div>
                    <div className="bg-white/5 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-adsgasm-accent to-adsgasm-secondary h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
