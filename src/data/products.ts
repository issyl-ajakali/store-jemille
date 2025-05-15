export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const CATEGORIES = ["MERYENDA", "MEALS", "DRINKS", "DESSERTS"];

export const PRODUCTS: Product[] = [
  // MERYENDA Category
  {
    id: "m1",
    name: "Bibingka & Bumbong Combo",
    price: 228.00,
    image: "/images/products/bibingka-combo.jpg",
    category: "MERYENDA",
    description: "Traditional Filipino rice cakes served with coconut and brown sugar"
  },
  {
    id: "m2",
    name: "Luxe Empanada",
    price: 57.00,
    image: "/images/products/empanada.jpg",
    category: "MERYENDA",
    description: "Savory pastry filled with ground beef, potatoes, and vegetables"
  },
  {
    id: "m3",
    name: "Luxe Ensaymada 2pcs.",
    price: 144.00,
    image: "/images/products/ensaymada.jpg",
    category: "MERYENDA",
    description: "Soft, buttery pastry topped with cheese and sugar"
  },
  {
    id: "m4",
    name: "Luxe Kakanin Combo",
    price: 114.00,
    image: "/images/products/kakanin.jpg",
    category: "MERYENDA",
    description: "Assortment of traditional Filipino sweet rice cakes"
  },
  {
    id: "m5",
    name: "Lupmiang Gulay 6pcs.",
    price: 100.00,
    image: "/images/products/lumpia.jpg",
    category: "MERYENDA",
    description: "Vegetable spring rolls served with sweet chili sauce"
  },
  {
    id: "m6",
    name: "Luxe Shanghai 10.pcs.",
    price: 180.00,
    image: "/images/products/shanghai.jpg",
    category: "MERYENDA",
    description: "Miniature meat-filled spring rolls with dipping sauce"
  },
  {
    id: "m7",
    name: "Luxe Sapin-Sapin",
    price: 57.00,
    image: "/images/products/sapin-sapin.jpg",
    category: "MERYENDA",
    description: "Colorful layered glutinous rice cake with coconut milk"
  },
  {
    id: "m8",
    name: "Luxe Ube Halaya",
    price: 57.00,
    image: "/images/products/ube-halaya.jpg",
    category: "MERYENDA",
    description: "Sweet purple yam dessert with creamy texture"
  },
  {
    id: "m9",
    name: "Creme Brulle Tart",
    price: 85.00,
    image: "/images/products/creme-tart.jpg",
    category: "MERYENDA",
    description: "Creamy custard in a crisp tart shell with caramelized top"
  },
  {
    id: "m10",
    name: "Luxe Kamote Turon",
    price: 228.00,
    image: "/images/products/turon.jpg",
    category: "MERYENDA",
    description: "Sweet potato wrapped in spring roll wrapper, fried and glazed"
  },

  // MEALS Category
  {
    id: "ml1",
    name: "Wagyu Beef Kare Kare (with rice)",
    price: 149.00,
    image: "/images/products/kare-kare.jpg",
    category: "MEALS",
    description: "Premium beef in rich peanut sauce with vegetables and shrimp paste"
  },
  {
    id: "ml2",
    name: "Luxe Adobo",
    price: 210.00,
    image: "/images/products/adobo.jpg",
    category: "MEALS",
    description: "Classic Filipino dish of meat marinated in vinegar, soy sauce and spices"
  },
  {
    id: "ml3",
    name: "Miso-glazed Bangus (with rice)",
    price: 175.00,
    image: "/images/products/bangus.jpg",
    category: "MEALS",
    description: "Milkfish with miso glaze, served with steamed rice"
  },
  {
    id: "ml4",
    name: "Sous-Vide Lechon Kawali",
    price: 124.00,
    image: "/images/products/lechon-kawali.jpg",
    category: "MEALS",
    description: "Crispy pork belly cooked to perfection with liver sauce"
  },
  {
    id: "ml5",
    name: "Truffle Pancit Malabon",
    price: 129.00,
    image: "/images/products/pancit.jpg",
    category: "MEALS",
    description: "Thick rice noodles with seafood, eggs and savory sauce"
  },
  {
    id: "ml6",
    name: "Truffle Longganisa Fried Rice",
    price: 54.00,
    image: "/images/products/fried-rice.jpg",
    category: "MEALS",
    description: "Garlic fried rice with sweet Filipino sausage and truffle oil"
  },
  {
    id: "ml7",
    name: "Duck Adobo (with rice)",
    price: 106.00,
    image: "/images/products/duck-adobo.jpg",
    category: "MEALS",
    description: "Duck cooked adobo-style with premium ingredients"
  },
  {
    id: "ml8",
    name: "Luxe Igado (with rice)",
    price: 144.00,
    image: "/images/products/igado.jpg",
    category: "MEALS",
    description: "Ilocano dish with pork tenderloin and liver in rich sauce"
  },
  {
    id: "ml9",
    name: "Luxe Pork Sinigang (with rice)",
    price: 144.00,
    image: "/images/products/sinigang.jpg",
    category: "MEALS",
    description: "Sour soup with pork, vegetables and tamarind"
  },
  {
    id: "ml10",
    name: "Grilled Premium Fish (with rice)",
    price: 175.00,
    image: "/images/products/grilled-fish.jpg",
    category: "MEALS",
    description: "Fresh fish grilled to perfection with native spices"
  },
  {
    id: "ml11",
    name: "Luxe Beef Tapa",
    price: 124.00,
    image: "/images/products/tapa.jpg",
    category: "MEALS",
    description: "Cured beef slices fried and served with garlic rice and egg"
  },
  {
    id: "ml12",
    name: "Luxe Tocino, Fried Eggs & Garlic Rice",
    price: 109.00,
    image: "/images/products/tocino.jpg",
    category: "MEALS",
    description: "Sweet cured pork with fried eggs and fragrant garlic rice"
  },
  {
    id: "ml13",
    name: "Special Pinakbet",
    price: 95.00,
    image: "/images/products/pinakbet.jpg",
    category: "MEALS",
    description: "Mixed vegetables cooked with shrimp paste"
  },
  {
    id: "ml14",
    name: "KangKong Salad with Shrimp",
    price: 228.00,
    image: "/images/products/kangkong.jpg",
    category: "MEALS",
    description: "Water spinach salad with fresh shrimp and special dressing"
  },

  // DRINKS Category
  {
    id: "d1",
    name: "Luxe Buko Pandan",
    price: 54.00,
    image: "/images/products/buko-pandan-drink.jpg",
    category: "DRINKS",
    description: "Coconut and pandan-flavored refreshing drink"
  },
  {
    id: "d2",
    name: "Coconut Water with Lime & Honey",
    price: 49.00,
    image: "/images/products/coconut-lime.jpg",
    category: "DRINKS",
    description: "Fresh coconut water enhanced with lime and honey"
  },
  {
    id: "d3",
    name: "Calamansi & Mango Iced Tea",
    price: 54.00,
    image: "/images/products/calamansi-mango.jpg",
    category: "DRINKS",
    description: "Philippine citrus and mango infused iced tea"
  },
  {
    id: "d4",
    name: "Calamansi Lemonade",
    price: 49.00,
    image: "/images/products/calamansi.jpg",
    category: "DRINKS",
    description: "Refreshing lemonade made with Philippine calamansi"
  },
  {
    id: "d5",
    name: "Avocado Shake",
    price: 60.00,
    image: "/images/products/avocado-shake.jpg",
    category: "DRINKS",
    description: "Creamy avocado blended with milk and ice"
  },
  {
    id: "d6",
    name: "Sago't Gulaman Drink",
    price: 45.00,
    image: "/images/products/sago-gulaman.jpg",
    category: "DRINKS",
    description: "Traditional Filipino cooler with tapioca pearls and jelly"
  },
  {
    id: "d7",
    name: "Watermelon Lemonade",
    price: 45.00,
    image: "/images/products/watermelon.jpg",
    category: "DRINKS",
    description: "Refreshing blend of watermelon juice and lemonade"
  },
  {
    id: "d8",
    name: "Mango Ube Smoothie",
    price: 65.00,
    image: "/images/products/mango-ube.jpg",
    category: "DRINKS",
    description: "Tropical mango blended with purple yam and milk"
  },
  {
    id: "d9",
    name: "Lychee Lemonade",
    price: 54.00,
    image: "/images/products/lychee.jpg",
    category: "DRINKS",
    description: "Sweet lychee fruit combined with tangy lemonade"
  },
  {
    id: "d10",
    name: "Dragon Fruit Lemonade",
    price: 49.00,
    image: "/images/products/dragonfruit.jpg",
    category: "DRINKS",
    description: "Exotic dragon fruit mixed with refreshing lemonade"
  },
  {
    id: "d11",
    name: "Pineapple Lemonade",
    price: 49.00,
    image: "/images/products/pineapple.jpg",
    category: "DRINKS",
    description: "Tropical pineapple juice with tangy lemonade"
  },
  {
    id: "d12",
    name: "Cucumber & Calamansi Lemonade",
    price: 49.00,
    image: "/images/products/cucumber.jpg",
    category: "DRINKS",
    description: "Cooling cucumber with Philippine calamansi citrus"
  },

  // DESSERTS Category
  {
    id: "ds1",
    name: "Leche Cheescake",
    price: 54.00,
    image: "/images/products/leche-cheesecake.jpg",
    category: "DESSERTS",
    description: "Creamy cheesecake with leche flan topping"
  },
  {
    id: "ds2",
    name: "Tart",
    price: 57.00,
    image: "/images/products/tart.jpg",
    category: "DESSERTS",
    description: "Buttery pastry shell with sweet filling"
  },
  {
    id: "ds3",
    name: "Halo Halo",
    price: 80.00,
    image: "/images/products/halo-halo.jpg",
    category: "DESSERTS",
    description: "Mixed dessert with shaved ice, sweet beans, fruits and ice cream"
  },
  {
    id: "ds4",
    name: "Buko Pandan",
    price: 65.00,
    image: "/images/products/buko-pandan.jpg",
    category: "DESSERTS",
    description: "Coconut and pandan jelly dessert with cream"
  },
  {
    id: "ds5",
    name: "Churros",
    price: 65.00,
    image: "/images/products/churros.jpg",
    category: "DESSERTS",
    description: "Fried dough pastry with cinnamon sugar and dipping sauce"
  },
  {
    id: "ds6",
    name: "Leche Flan with Macapuno",
    price: 89.00,
    image: "/images/products/leche-flan.jpg",
    category: "DESSERTS",
    description: "Caramel custard with sweet coconut sport strings"
  },
  {
    id: "ds7",
    name: "Ube Pancake",
    price: 65.00,
    image: "/images/products/ube-pancake.jpg",
    category: "DESSERTS",
    description: "Purple yam flavored pancakes with sweet sauce"
  },
  {
    id: "ds8",
    name: "Menringue 10 pcs.",
    price: 34.00,
    image: "/images/products/meringue.jpg",
    category: "DESSERTS",
    description: "Light and crispy baked egg white treats"
  },
  {
    id: "ds9",
    name: "Cassava Cake",
    price: 80.00,
    image: "/images/products/cassava.jpg",
    category: "DESSERTS",
    description: "Traditional cake made from grated cassava"
  },
  {
    id: "ds10",
    name: "Maja Blanca",
    price: 45.00,
    image: "/images/products/maja-blanca.jpg",
    category: "DESSERTS",
    description: "Coconut pudding topped with toasted coconut"
  },
  {
    id: "ds11",
    name: "Sweet Macaroons",
    price: 54.00,
    image: "/images/products/macaroons.jpg",
    category: "DESSERTS",
    description: "Filipino-style coconut macaroons, sweet and chewy"
  }
];
