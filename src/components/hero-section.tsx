"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/filipino-food-bg.jpg')",
          filter: "brightness(0.5)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div
          className={cn(
            "transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Brand Logo and Name */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full p-2 mb-4 flex items-center justify-center">
              {/* Replace with actual logo */}
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-3xl">M</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">MIILEBITES</h1>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Authentic Filipino Cuisine
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Experience the rich and vibrant flavors of the Philippines delivered right to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
              <Link href="/menu">
                Order Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
