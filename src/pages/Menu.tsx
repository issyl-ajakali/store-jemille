import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import CategoryMenu from '../components/sections/CategoryMenu';
import { products } from '../data/products';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('meryenda');
  
  const categories = [
    { id: 'meryenda', label: 'Meryenda', description: 'Traditional Filipino snacks and small bites' },
    { id: 'meals', label: 'Meals', description: 'Hearty Filipino main dishes for lunch and dinner' },
    { id: 'drinks', label: 'Drinks', description: 'Refreshing Filipino beverages and tropical drinks' },
    { id: 'desserts', label: 'Desserts', description: 'Sweet Filipino treats to satisfy your cravings' },
  ];
  
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveCategory(categoryId);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Menu</h1>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Explore our authentic Filipino cuisine, from traditional favorites to modern interpretations.
            Each dish is carefully prepared with fresh ingredients and traditional recipes.
          </p>
        </div>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 sticky top-20 bg-amber-50 py-4 z-40 rounded-lg shadow-sm">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
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
        
        {/* Scroll Indicator */}
        <div className="text-center mb-8 text-amber-700 animate-bounce hidden md:block">
          <p className="text-sm">Scroll to explore our menu</p>
          <ArrowDown className="mx-auto mt-2" size={20} />
        </div>
        
        {/* Category Sections */}
        {categories.map(category => (
          <div key={category.id} id={category.id} className="scroll-mt-32">
            <CategoryMenu 
              title={`${category.label} - ${category.description}`} 
              products={products.filter(product => product.category === category.id)}
            />
            <div className="border-b border-amber-200 my-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;