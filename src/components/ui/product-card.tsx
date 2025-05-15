"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`, {
      description: `Quantity: ${quantity}`,
    });
    // In a real app, you would dispatch to a cart store/context here
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast.success(`${name} added to favorites!`);
    } else {
      toast.info(`${name} removed from favorites!`);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg",
        isHovered ? "scale-105" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Product Image */}
        <Image
          src={image || "/images/food-placeholder.jpg"}
          alt={name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 z-10"
          onClick={handleLike}
        >
          <Heart
            className={cn(
              "w-5 h-5 transition-colors",
              isLiked ? "fill-primary text-primary" : "text-gray-700"
            )}
          />
        </Button>

        {/* Category Label */}
        <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-1 line-clamp-2 min-h-[48px]">
          {name}
        </h3>

        <div className="flex justify-between items-center mt-2">
          <p className="text-primary font-semibold">₱{price.toFixed(2)}</p>

          <div className="flex items-center space-x-2">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-md overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={decrementQuantity}
              >
                {quantity === 1 ? (
                  <Trash2 className="h-4 w-4 text-destructive" />
                ) : (
                  <Minus className="h-4 w-4" />
                )}
              </Button>

              <span className="w-8 text-center text-sm font-medium">
                {quantity}
              </span>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 bg-primary hover:bg-primary/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
