
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-adsgasm">
                Ads<span className="text-adsgasm-accent">Gasm</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/#services" className="text-gray-700 hover:text-adsgasm-accent transition duration-300">Services</Link>
            <Link to="/#about" className="text-gray-700 hover:text-adsgasm-accent transition duration-300">About</Link>
            <Link to="/#school" className="text-gray-700 hover:text-adsgasm-accent transition duration-300">School</Link>
            <Link to="/#testimonials" className="text-gray-700 hover:text-adsgasm-accent transition duration-300">Results</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-adsgasm-accent transition duration-300">Contact</Link>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-adsgasm-accent text-white hover:bg-adsgasm-accent/90">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/#services" 
                className="text-gray-700 hover:text-adsgasm-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/#about" 
                className="text-gray-700 hover:text-adsgasm-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#school" 
                className="text-gray-700 hover:text-adsgasm-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                School
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-gray-700 hover:text-adsgasm-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </Link>
              <Link 
                to="/#contact" 
                className="text-gray-700 hover:text-adsgasm-accent transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-adsgasm-accent text-white hover:bg-adsgasm-accent/90 w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
