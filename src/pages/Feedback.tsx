import React from 'react';
import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Feedback: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Customer Feedback</h1>
          <p className="text-amber-700 max-w-2xl mx-auto">
            See what our customers are saying about their MIILEBITES experience. We pride ourselves on
            delivering authentic Filipino cuisine and excellent service.
          </p>
        </div>
        
        {/* Summary Rating */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-amber-900">Customer Satisfaction</h2>
              <p className="text-amber-700">Based on all customer reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-amber-900 mb-2">4.8</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < 4 || i === 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-amber-700 mt-1">Out of 5 stars</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Leave Feedback Section */}
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Share Your Experience</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className="bg-amber-100 hover:bg-amber-200 text-amber-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-amber-700 mb-1">Your Feedback</label>
              <textarea
                id="feedback"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Share your experience with us..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-amber-900 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-md transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;