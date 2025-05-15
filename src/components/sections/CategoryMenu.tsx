import React, { useState, useEffect } from 'react';
import { Search, Grid3X3, List } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types/Product';

interface CategoryMenuProps {
  title: string;
  products: Product[];
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ title, products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
        {title}
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={18} />
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-amber-700">View:</span>
          <button 
            onClick={() => setViewMode('grid')} 
            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-amber-200 text-amber-900' : 'bg-amber-100 text-amber-700'}`}
          >
            <Grid3X3 size={16} />
          </button>
          <button 
            onClick={() => setViewMode('list')} 
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-amber-200 text-amber-900' : 'bg-amber-100 text-amber-700'}`}
          >
            <List size={16} />
          </button>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-amber-700">No products found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;