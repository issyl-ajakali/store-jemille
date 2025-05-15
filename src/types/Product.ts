export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'meryenda' | 'meals' | 'drinks' | 'desserts';
}