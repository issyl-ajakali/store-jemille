"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus, Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// Sample cart items
const INITIAL_CART_ITEMS = [
  {
    id: "m1",
    name: "Bibingka & Bumbong Combo",
    price: 228.00,
    image: "/images/products/bibingka-combo.jpg",
    quantity: 1,
    isFavorite: false
  },
  {
    id: "ml2",
    name: "Luxe Adobo",
    price: 210.00,
    image: "/images/products/adobo.jpg",
    quantity: 2,
    isFavorite: true
  },
  {
    id: "d5",
    name: "Avocado Shake",
    price: 60.00,
    image: "/images/products/avocado-shake.jpg",
    quantity: 1,
    isFavorite: false
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const toggleFavorite = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );

    const item = cartItems.find(item => item.id === id);
    if (item) {
      if (!item.isFavorite) {
        toast.success(`${item.name} added to favorites!`);
      } else {
        toast.info(`${item.name} removed from favorites!`);
      }
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 50.00;
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Your Cart</h1>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Review your items before proceeding to checkout
      </p>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-1/4 relative aspect-square sm:aspect-auto">
                      <Image
                        src={item.image || "/images/food-placeholder.jpg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info & Controls */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium mb-1">{item.name}</h3>
                          <p className="text-primary font-bold">₱{item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleFavorite(item.id)}
                          >
                            <Heart
                              className={`h-5 w-5 ${
                                item.isFavorite
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive/80"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <p className="text-muted-foreground">
                          Subtotal: ₱{(item.price * item.quantity).toFixed(2)}
                        </p>

                        <div className="flex items-center border rounded-md overflow-hidden">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>

                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping Button */}
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/menu" className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₱{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>₱{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary">₱{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-xs text-center text-muted-foreground">
                  Secure Checkout | Free Returns | 100% Authentic
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="bg-primary/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link href="/menu">
              Explore Our Menu
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
