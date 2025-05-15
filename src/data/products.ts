import { Product } from '../types/Product';

// Since we're using placeholder images, we'll use Pexels for Filipino food images
const images = {
  meryenda: [
    "https://images.pexels.com/photos/5710828/pexels-photo-5710828.jpeg",
    "https://images.pexels.com/photos/7288838/pexels-photo-7288838.jpeg",
    "https://images.pexels.com/photos/5490991/pexels-photo-5490991.jpeg",
    "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg",
    "https://images.pexels.com/photos/14474202/pexels-photo-14474202.jpeg",
    "https://images.pexels.com/photos/5966430/pexels-photo-5966430.jpeg",
    "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg",
    "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg",
    "https://images.pexels.com/photos/5865071/pexels-photo-5865071.jpeg",
    "https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg"
  ],
  meals: [
    "https://images.pexels.com/photos/7441853/pexels-photo-7441853.jpeg",
    "https://images.pexels.com/photos/5710767/pexels-photo-5710767.jpeg",
    "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg",
    "https://images.pexels.com/photos/6210993/pexels-photo-6210993.jpeg",
    "https://images.pexels.com/photos/10327621/pexels-photo-10327621.jpeg",
    "https://images.pexels.com/photos/5865139/pexels-photo-5865139.jpeg",
    "https://images.pexels.com/photos/13056363/pexels-photo-13056363.jpeg",
    "https://images.pexels.com/photos/8969215/pexels-photo-8969215.jpeg",
    "https://images.pexels.com/photos/13001219/pexels-photo-13001219.jpeg",
    "https://images.pexels.com/photos/6210764/pexels-photo-6210764.jpeg",
    "https://images.pexels.com/photos/5836429/pexels-photo-5836429.jpeg",
    "https://images.pexels.com/photos/13001443/pexels-photo-13001443.jpeg",
    "https://images.pexels.com/photos/5835352/pexels-photo-5835352.jpeg",
    "https://images.pexels.com/photos/4911707/pexels-photo-4911707.jpeg"
  ],
  drinks: [
    "https://images.pexels.com/photos/5947053/pexels-photo-5947053.jpeg",
    "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg",
    "https://images.pexels.com/photos/1232152/pexels-photo-1232152.jpeg",
    "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg",
    "https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg",
    "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg",
    "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
    "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg",
    "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg",
    "https://images.pexels.com/photos/2479242/pexels-photo-2479242.jpeg",
    "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg",
    "https://images.pexels.com/photos/3604314/pexels-photo-3604314.jpeg"
  ],
  desserts: [
    "https://images.pexels.com/photos/1853003/pexels-photo-1853003.jpeg",
    "https://images.pexels.com/photos/7474206/pexels-photo-7474206.jpeg",
    "https://images.pexels.com/photos/6787609/pexels-photo-6787609.jpeg",
    "https://images.pexels.com/photos/3674243/pexels-photo-3674243.jpeg",
    "https://images.pexels.com/photos/20105/pexels-photo.jpg",
    "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg",
    "https://images.pexels.com/photos/5432034/pexels-photo-5432034.jpeg",
    "https://images.pexels.com/photos/14000209/pexels-photo-14000209.jpeg",
    "https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg",
    "https://images.pexels.com/photos/6874210/pexels-photo-6874210.jpeg",
    "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg"
  ]
};

export const products: Product[] = [
  // MERYENDA
  {
    id: 'mery-1',
    name: 'Bibingka & Bumbong Combo',
    price: 228.00,
    image: images.meryenda[0],
    description: 'Traditional Filipino rice cakes made with glutinous rice and coconut, perfect combo for the holidays.',
    category: 'meryenda'
  },
  {
    id: 'mery-2',
    name: 'Luxe Empanada',
    price: 57.00,
    image: images.meryenda[1],
    description: 'Buttery pastry filled with savory ground beef, potatoes, carrots, and peas.',
    category: 'meryenda'
  },
  {
    id: 'mery-3',
    name: 'Luxe Ensaymada 2pcs.',
    price: 144.00,
    image: images.meryenda[2],
    description: 'Soft and fluffy Filipino brioche covered with butter, sugar, and grated cheese.',
    category: 'meryenda'
  },
  {
    id: 'mery-4',
    name: 'Luxe Kakanin Combo',
    price: 114.00,
    image: images.meryenda[3],
    description: 'Assortment of Filipino rice desserts including Puto, Kutsinta, and Palitaw.',
    category: 'meryenda'
  },
  {
    id: 'mery-5',
    name: 'Lupmiang Gulay 6pcs.',
    price: 100.00,
    image: images.meryenda[4],
    description: 'Fresh vegetable spring rolls with peanut sauce, a healthy and light Filipino snack.',
    category: 'meryenda'
  },
  {
    id: 'mery-6',
    name: 'Luxe Shanghai 10.pcs.',
    price: 180.00,
    image: images.meryenda[5],
    description: 'Filipino-style pork spring rolls, fried to crispy perfection.',
    category: 'meryenda'
  },
  {
    id: 'mery-7',
    name: 'Luxe Sapin-Sapin',
    price: 57.00,
    image: images.meryenda[6],
    description: 'Colorful layered Filipino dessert made from glutinous rice flour and coconut milk.',
    category: 'meryenda'
  },
  {
    id: 'mery-8',
    name: 'Luxe Ube Halaya',
    price: 57.00,
    image: images.meryenda[7],
    description: 'Purple yam jam, a popular Filipino dessert with a rich, creamy texture.',
    category: 'meryenda'
  },
  {
    id: 'mery-9',
    name: 'Creme Brulle Tart',
    price: 85.00,
    image: images.meryenda[8],
    description: 'Buttery tart shell filled with creamy custard and topped with caramelized sugar.',
    category: 'meryenda'
  },
  {
    id: 'mery-10',
    name: 'Luxe Kamote Turon',
    price: 228.00,
    image: images.meryenda[9],
    description: 'Sweet potato wrapped in spring roll wrappers, fried and glazed with caramelized sugar.',
    category: 'meryenda'
  },

  // MEALS
  {
    id: 'meal-1',
    name: 'Wagyu Beef Kare Kare (with rice)',
    price: 149.00,
    image: images.meals[0],
    description: 'Premium Wagyu beef stewed in rich peanut sauce, served with vegetables and rice.',
    category: 'meals'
  },
  {
    id: 'meal-2',
    name: 'Luxe Adobo',
    price: 210.00,
    image: images.meals[1],
    description: 'The national dish of the Philippines, pork and chicken braised in soy sauce, vinegar, and spices.',
    category: 'meals'
  },
  {
    id: 'meal-3',
    name: 'Miso-glazed Bangus (with rice)',
    price: 175.00,
    image: images.meals[2],
    description: 'Milkfish marinated in miso, grilled to perfection and served with garlic rice.',
    category: 'meals'
  },
  {
    id: 'meal-4',
    name: 'Sous-Vide Lechon Kawali',
    price: 124.00,
    image: images.meals[3],
    description: 'Pork belly cooked sous-vide then fried crispy, served with liver sauce.',
    category: 'meals'
  },
  {
    id: 'meal-5',
    name: 'Truffle Pancit Malabon',
    price: 129.00,
    image: images.meals[4],
    description: 'Thick rice noodles with seafood toppings and truffle-infused sauce.',
    category: 'meals'
  },
  {
    id: 'meal-6',
    name: 'Truffle Longganisa Fried Rice',
    price: 54.00,
    image: images.meals[5],
    description: 'Filipino sweet sausage fried rice with truffle oil and fried garlic bits.',
    category: 'meals'
  },
  {
    id: 'meal-7',
    name: 'Duck Adobo (with rice)',
    price: 106.00,
    image: images.meals[6],
    description: 'Duck braised in soy sauce, vinegar, and spices, served with steamed rice.',
    category: 'meals'
  },
  {
    id: 'meal-8',
    name: 'Luxe Igado (with rice)',
    price: 144.00,
    image: images.meals[7],
    description: 'Pork tenderloin and liver stir-fried with vegetables in soy-vinegar sauce.',
    category: 'meals'
  },
  {
    id: 'meal-9',
    name: 'Luxe Pork Sinigang (with rice)',
    price: 144.00,
    image: images.meals[8],
    description: 'Pork in sour tamarind broth with vegetables, a Filipino comfort food.',
    category: 'meals'
  },
  {
    id: 'meal-10',
    name: 'Grilled Premium Fish (with rice)',
    price: 175.00,
    image: images.meals[9],
    description: 'Fresh catch of the day, grilled with traditional Filipino spices.',
    category: 'meals'
  },
  {
    id: 'meal-11',
    name: 'Luxe Beef Tapa',
    price: 124.00,
    image: images.meals[10],
    description: 'Sweet-savory cured beef served with garlic rice and fried egg.',
    category: 'meals'
  },
  {
    id: 'meal-12',
    name: 'Luxe Tocino, Fried Eggs & Garlic Rice',
    price: 109.00,
    image: images.meals[11],
    description: 'Sweet cured pork with garlic fried rice and eggs, a Filipino breakfast classic.',
    category: 'meals'
  },
  {
    id: 'meal-13',
    name: 'Special Pinakbet',
    price: 95.00,
    image: images.meals[12],
    description: 'Mixed vegetables stewed in shrimp paste with crispy pork belly.',
    category: 'meals'
  },
  {
    id: 'meal-14',
    name: 'KangKong Salad with Shrimp',
    price: 228.00,
    image: images.meals[13],
    description: 'Water spinach salad with grilled shrimp, tomatoes, and bagoong vinaigrette.',
    category: 'meals'
  },

  // DRINKS
  {
    id: 'drink-1',
    name: 'Luxe Buko Pandan',
    price: 54.00,
    image: images.drinks[0],
    description: 'Refreshing coconut water with pandan essence and young coconut strips.',
    category: 'drinks'
  },
  {
    id: 'drink-2',
    name: 'Coconut Water with Lime & Honey',
    price: 49.00,
    image: images.drinks[1],
    description: 'Fresh coconut water infused with lime and sweetened with honey.',
    category: 'drinks'
  },
  {
    id: 'drink-3',
    name: 'Calamansi & Mango Iced Tea',
    price: 54.00,
    image: images.drinks[2],
    description: 'Iced tea with calamansi (Filipino lime) and sweet mango puree.',
    category: 'drinks'
  },
  {
    id: 'drink-4',
    name: 'Calamansi Lemonade',
    price: 49.00,
    image: images.drinks[3],
    description: 'Refreshing Filipino citrus lemonade, slightly tart and sweet.',
    category: 'drinks'
  },
  {
    id: 'drink-5',
    name: 'Avocado Shake',
    price: 60.00,
    image: images.drinks[4],
    description: 'Creamy avocado blended with milk and sweetened with condensed milk.',
    category: 'drinks'
  },
  {
    id: 'drink-6',
    name: 'Sago\'t Gulaman Drink',
    price: 45.00,
    image: images.drinks[5],
    description: 'Traditional Filipino drink with tapioca pearls and gelatin in brown sugar syrup.',
    category: 'drinks'
  },
  {
    id: 'drink-7',
    name: 'Watermelon Lemonade',
    price: 45.00,
    image: images.drinks[6],
    description: 'Fresh watermelon juice mixed with lemonade for a refreshing taste.',
    category: 'drinks'
  },
  {
    id: 'drink-8',
    name: 'Mango Ube Smoothie',
    price: 65.00,
    image: images.drinks[7],
    description: 'Rich blend of sweet mangoes and purple yam (ube) with milk.',
    category: 'drinks'
  },
  {
    id: 'drink-9',
    name: 'Lychee Lemonade',
    price: 54.00,
    image: images.drinks[8],
    description: 'Sweet lychee fruit blended with fresh lemonade.',
    category: 'drinks'
  },
  {
    id: 'drink-10',
    name: 'Dragon Fruit Lemonade',
    price: 49.00,
    image: images.drinks[9],
    description: 'Vibrant pink dragon fruit blended with zesty lemonade.',
    category: 'drinks'
  },
  {
    id: 'drink-11',
    name: 'Pineapple Lemonade',
    price: 49.00,
    image: images.drinks[10],
    description: 'Tropical pineapple juice mixed with tangy lemonade.',
    category: 'drinks'
  },
  {
    id: 'drink-12',
    name: 'Cucumber & Calamansi Lemonade',
    price: 49.00,
    image: images.drinks[11],
    description: 'Cooling cucumber with Filipino citrus for a refreshing drink.',
    category: 'drinks'
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Leche Cheescake',
    price: 54.00,
    image: images.desserts[0],
    description: 'Creamy cheesecake with a caramelized leche flan topping.',
    category: 'desserts'
  },
  {
    id: 'dessert-2',
    name: 'Tart',
    price: 57.00,
    image: images.desserts[1],
    description: 'Buttery tart filled with sweet custard and fresh fruits.',
    category: 'desserts'
  },
  {
    id: 'dessert-3',
    name: 'Halo Halo',
    price: 80.00,
    image: images.desserts[2],
    description: 'Classic Filipino shaved ice dessert with mixed sweet beans, fruits, and ice cream.',
    category: 'desserts'
  },
  {
    id: 'dessert-4',
    name: 'Buko Pandan',
    price: 65.00,
    image: images.desserts[3],
    description: 'Coconut strips with pandan-flavored gelatin in sweet cream.',
    category: 'desserts'
  },
  {
    id: 'dessert-5',
    name: 'Churros',
    price: 65.00,
    image: images.desserts[4],
    description: 'Crispy fried dough pastry dusted with cinnamon sugar, served with chocolate dip.',
    category: 'desserts'
  },
  {
    id: 'dessert-6',
    name: 'Leche Flan with Macapuno',
    price: 89.00,
    image: images.desserts[5],
    description: 'Silky caramel custard topped with sweet coconut sport strings.',
    category: 'desserts'
  },
  {
    id: 'dessert-7',
    name: 'Ube Pancake',
    price: 65.00,
    image: images.desserts[6],
    description: 'Fluffy pancakes with vibrant purple yam flavor, served with coconut syrup.',
    category: 'desserts'
  },
  {
    id: 'dessert-8',
    name: 'Meringue 10 pcs.',
    price: 34.00,
    image: images.desserts[7],
    description: 'Light and airy meringue cookies with a crisp exterior and soft center.',
    category: 'desserts'
  },
  {
    id: 'dessert-9',
    name: 'Cassava Cake',
    price: 80.00,
    image: images.desserts[8],
    description: 'Grated cassava baked with coconut milk and topped with a creamy custard.',
    category: 'desserts'
  },
  {
    id: 'dessert-10',
    name: 'Maja Blanca',
    price: 45.00,
    image: images.desserts[9],
    description: 'Filipino coconut pudding made with coconut milk, corn, and topped with latik.',
    category: 'desserts'
  },
  {
    id: 'dessert-11',
    name: 'Sweet Macaroons',
    price: 54.00,
    image: images.desserts[10],
    description: 'Filipino-style coconut macaroons, sweet and chewy coconut cookies.',
    category: 'desserts'
  }
];

export const getFeaturedProducts = (): Product[] => {
  // Get a random selection of products from different categories
  const featuredProducts: Product[] = [];
  const categories = ['meryenda', 'meals', 'drinks', 'desserts'] as const;
  
  categories.forEach(category => {
    const categoryProducts = products.filter(p => p.category === category);
    const randomIndex = Math.floor(Math.random() * categoryProducts.length);
    featuredProducts.push(categoryProducts[randomIndex]);
  });
  
  return featuredProducts;
};