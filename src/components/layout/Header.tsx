import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'FEEDBACKS', path: '/feedback' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="block lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-white hover:text-yellow-300 transition-colors relative group ${
                location.pathname === link.path ? 'text-yellow-300' : ''
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <Link to="/" className="flex flex-col items-center">
          <Logo className="h-16 w-16" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-white hover:text-yellow-300 transition-colors relative group ${
                location.pathname === link.path ? 'text-yellow-300' : ''
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link 
            to="/cart" 
            className="relative p-2 text-white hover:text-yellow-300 transition-colors"
          >
            <ShoppingCart className="transform hover:scale-110 transition-transform" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link 
            to="/login" 
            className="p-2 text-white hover:text-yellow-300 transition-colors"
          >
            <User className="transform hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-amber-900/95 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-white hover:text-yellow-300 transition-colors py-2 ${
                location.pathname === link.path ? 'text-yellow-300' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;