import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-14 w-14 mb-4" />
            <p className="text-amber-100 text-sm mt-2">
              Authentic Filipino cuisine delivered to your doorstep. Experience the rich flavors of the Philippines.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-amber-100 hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-amber-100 hover:text-yellow-300 transition-colors">Menu</Link></li>
              <li><Link to="/feedback" className="text-amber-100 hover:text-yellow-300 transition-colors">Feedbacks</Link></li>
              <li><Link to="/contact" className="text-amber-100 hover:text-yellow-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Info</h3>
            <ul className="space-y-2 text-amber-100">
              <li>123 Filipino Street, Manila</li>
              <li>Phone: +63 12 345 6789</li>
              <li>Email: info@miilebites.com</li>
              <li>Hours: Mon-Sun 8AM - 10PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-amber-100 hover:text-yellow-300 transition-colors">
                <Twitter />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-yellow-300">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-amber-800 text-white placeholder:text-amber-300 border-amber-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-yellow-400 w-full"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold py-2 px-4 rounded-r-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200 text-sm">
          <p>&copy; 2025 MIILEBITES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;