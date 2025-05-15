import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5865127/pexels-photo-5865127.jpeg')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-yellow-300">
            Authentic Filipino Cuisine
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Experience the rich and vibrant flavors of the Philippines delivered right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/menu" 
              className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Order Now
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;