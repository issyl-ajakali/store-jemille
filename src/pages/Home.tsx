import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProducts from '../components/sections/FeaturedProducts'; 
import CategoryTabs from '../components/sections/CategoryTabs';
import FeaturedTestimonials from '../components/sections/FeaturedTestimonials';
import { products, getFeaturedProducts } from '../data/products';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <CategoryTabs products={products} />
      <FeaturedTestimonials testimonials={testimonials} />
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
            Ready to Experience Authentic Filipino Flavors?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Order now and enjoy the rich, delicious tastes of the Philippines delivered right to your doorstep.
          </p>
          <a 
            href="/menu" 
            className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;