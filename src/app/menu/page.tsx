"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Our Menu</h1>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Explore our authentic Filipino dishes prepared with the finest ingredients and traditional recipes.
      </p>

      <Tabs
        defaultValue="all"
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <TabsList className="flex justify-center flex-wrap mb-8">
          <TabsTrigger value="all" className="text-base py-2 px-4">
            All Items
          </TabsTrigger>
          {CATEGORIES.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-base py-2 px-4"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <ProductGrid products={PRODUCTS} categories={CATEGORIES} />
        </TabsContent>

        {CATEGORIES.map((category) => (
          <TabsContent key={category} value={category} className="mt-4">
            <ProductGrid
              products={PRODUCTS.filter(product => product.category === category)}
              categories={[]}
              title={`${category} Items`}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
