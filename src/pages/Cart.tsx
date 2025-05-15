import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, toggleFavorite, clearCart } = useCart();
  const [orderNote, setOrderNote] = useState('');
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;
  
  if (cartItems.length === 0) {
    return (
      <div className="pt-24 pb-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-16 max-w-2xl mx-auto">
            <ShoppingBag className="h-24 w-24 text-amber-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-amber-900 mb-4">Your cart is empty</h1>
            <p className="text-amber-700 mb-8">
              Looks like you haven't added any items to your cart yet. Explore our menu to discover delicious Filipino cuisine.
            </p>
            <Link 
              to="/menu" 
              className="bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-md transition-colors inline-flex items-center"
            >
              Browse Our Menu
              <ArrowLeft className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-amber-100">
                <h2 className="font-semibold text-amber-900">Cart Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h2>
              </div>
              
              <div className="divide-y divide-amber-100">
                {cartItems.map(item => (
                  <div key={item.id} className="flex py-6 px-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium text-amber-900">{item.name}</h3>
                          <p className="mt-1 text-sm text-amber-700 line-clamp-1">{item.description}</p>
                        </div>
                        <p className="text-base font-medium text-amber-900">₱{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                      
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-amber-900 hover:text-amber-700 transition-colors"
                          >
                            <span className="bg-amber-200 hover:bg-amber-300 w-6 h-6 flex items-center justify-center rounded-full">
                              -
                            </span>
                          </button>
                          <span className="text-amber-900 w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-amber-900 hover:text-amber-700 transition-colors"
                          >
                            <span className="bg-amber-200 hover:bg-amber-300 w-6 h-6 flex items-center justify-center rounded-full">
                              +
                            </span>
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => toggleFavorite(item.id)}
                            className={`p-1 rounded-full mr-2 ${
                              item.isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            } transition-colors`}
                          >
                            <Heart className={`h-5 w-5 ${item.isFavorite ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-amber-900 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-amber-100">
                <label htmlFor="note" className="block text-sm font-medium text-amber-700 mb-2">Add a note to your order</label>
                <textarea
                  id="note"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Special instructions for your order..."
                  rows={2}
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => clearCart()}
                className="text-amber-900 hover:text-amber-700 font-medium flex items-center"
              >
                <Trash2 className="mr-1 h-4 w-4" />
                Clear Cart
              </button>
              
              <Link
                to="/menu"
                className="text-amber-900 hover:text-amber-700 font-medium flex items-center"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b border-amber-100">
                <h2 className="font-semibold text-amber-900">Order Summary</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-amber-700">
                  <span>Subtotal</span>
                  <span>₱{formatCurrency(subtotal)}</span>
                </div>
                
                <div className="flex justify-between text-amber-700">
                  <span>Delivery Fee</span>
                  <span>₱{formatCurrency(deliveryFee)}</span>
                </div>
                
                <div className="border-t border-amber-100 pt-4 flex justify-between font-bold text-amber-900">
                  <span>Total</span>
                  <span>₱{formatCurrency(total)}</span>
                </div>
                
                <button
                  className="w-full bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center mt-6"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </button>
                
                <p className="text-xs text-center text-amber-700 mt-4">
                  By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;