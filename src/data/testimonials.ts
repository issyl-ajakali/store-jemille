export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Santos',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    rating: 5,
    text: 'The Luxe Adobo reminded me of my grandmother\'s cooking. Authentic Filipino flavors that brought me back to my childhood. Will definitely order again!',
    date: '2025-03-15'
  },
  {
    id: '2',
    name: 'Juan Reyes',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    rating: 4,
    text: 'The Halo Halo was perfect for the summer heat. Fresh ingredients and not too sweet. The Meryenda platters are excellent for sharing with friends.',
    date: '2025-02-28'
  },
  {
    id: '3',
    name: 'Sofia Cruz',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    text: 'I ordered the Truffle Longganisa Fried Rice and it was absolutely delicious! The delivery was fast and the food was still hot when it arrived.',
    date: '2025-03-02'
  },
  {
    id: '4',
    name: 'Miguel Lim',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
    text: 'The Bibingka and Puto Bumbong combo brought Christmas flavors right to my home. The quality is outstanding and the prices are reasonable.',
    date: '2025-01-10'
  },
  {
    id: '5',
    name: 'Isabella Gomez',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 4,
    text: 'MIILEBITES has become our go-to for Filipino food. The Wagyu Beef Kare Kare is absolutely worth trying! Their customer service is also excellent.',
    date: '2025-02-15'
  },
  {
    id: '6',
    name: 'Antonio Reyes',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    rating: 5,
    text: 'Finally found a place that makes Sinigang just like my mom\'s! The sourness is perfect and the meat is tender. Will be ordering regularly!',
    date: '2025-03-10'
  }
];