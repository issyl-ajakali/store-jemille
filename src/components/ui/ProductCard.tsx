import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}>
          <p className="text-white text-sm mb-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold py-1 px-2 rounded-full text-xs transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              <ShoppingCart size={14} className="inline mr-1" />
              Add to Cart
            </button>
            <button 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1 rounded-full transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-amber-900 mb-1 truncate">{product.name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-amber-700 font-bold">
            ₱{formatCurrency(product.price)}
          </p>
          <div className="flex items-center space-x-2">
            <button 
              className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-1 rounded-full transition-colors"
              onClick={decrementQuantity}
            >
              <Minus size={14} />
            </button>
            <span className="text-amber-800 text-sm w-6 text-center">{quantity}</span>
            <button 
              className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-1 rounded-full transition-colors"
              onClick={incrementQuantity}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;