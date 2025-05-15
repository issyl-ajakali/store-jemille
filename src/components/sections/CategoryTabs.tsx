import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types/Product';
import ProductCard from '../ui/ProductCard';

interface CategoryTabsProps {
  products: Product[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ products }) => {
  const categories = [
    { id: 'meryenda', label: 'Meryenda' },
    { id: 'meals', label: 'Meals' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' },
  ] as const;
  
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  
  const filteredProducts = products
    .filter(product => product.category === activeCategory)
    .slice(0, 4); // Only show 4 products per category
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">
          Explore Our Menu
        </h2>
        
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 m-1 rounded-full transition-colors font-medium ${
                activeCategory === category.id
                  ? 'bg-amber-900 text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/menu"
            className="inline-flex items-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium py-3 px-6 rounded-full transition-colors"
          >
            View Full Menu
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;