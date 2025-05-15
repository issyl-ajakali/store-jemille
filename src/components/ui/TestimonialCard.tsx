import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, image, rating, text, date } = testimonial;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-102 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-300"
          />
          <div>
            <h3 className="font-semibold text-amber-900">{name}</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-2">{formattedDate}</span>
            </div>
          </div>
        </div>
        <p className="text-amber-800 italic text-sm">"{text}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;