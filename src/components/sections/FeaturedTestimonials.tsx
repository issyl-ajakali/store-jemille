import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import { Testimonial } from '../../data/testimonials';

interface FeaturedTestimonialsProps {
  testimonials: Testimonial[];
}

const FeaturedTestimonials: React.FC<FeaturedTestimonialsProps> = ({ testimonials }) => {
  // Show only a subset of testimonials on the home page
  const displayedTestimonials = testimonials.slice(0, 3);
  
  return (
    <section className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900">
            What Our Customers Say
          </h2>
          <Link 
            to="/feedback" 
            className="flex items-center text-amber-700 hover:text-amber-900 transition-colors font-medium"
          >
            View All Testimonials
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;