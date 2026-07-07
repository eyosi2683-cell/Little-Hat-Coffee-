import { MenuItem, Review } from './types';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Specialty Coffee
  {
    id: 'c1',
    name: 'Classic Cortado',
    description: 'Espresso from A Toda Madre Roasters cut with a touch of steamed milk for a smooth, balanced sip.',
    price: 5.00,
    category: 'coffee',
    tags: ['Best Seller', 'Strong'],
  },
  {
    id: 'c2',
    name: 'Date Caramel Latte',
    description: 'Espresso and steamed milk sweetened with rich, house-made date caramel syrup.',
    price: 6.50,
    category: 'coffee',
    tags: ['Sweet', 'Fan Favorite'],
  },
  {
    id: 'c3',
    name: 'Oat Cappuccino',
    description: 'Double espresso topped with velvety steamed oat milk foam.',
    price: 6.00,
    category: 'coffee',
    tags: ['Dairy-Free', 'Classic'],
  },
  {
    id: 'c4',
    name: 'Vanilla Latte',
    description: 'Smooth espresso and steamed milk with real vanilla syrup.',
    price: 6.25,
    category: 'coffee',
    tags: ['Classic', 'Sweet'],
  },

  // Matcha & Specialty
  {
    id: 'i1',
    name: 'Yuzu Matcha Lemonade',
    description: 'Ceremonial-grade matcha shaken with tart yuzu citrus and fresh lemonade over ice.',
    price: 7.00,
    category: 'iced',
    tags: ['Refreshing', 'Customer Favorite'],
  },
  {
    id: 'i2',
    name: 'Pandan Latte',
    description: 'House-made pandan syrup with espresso and milk of your choice — a customer cult favorite.',
    price: 6.75,
    category: 'iced',
    tags: ['Unique', 'Popular'],
  },
  {
    id: 'i3',
    name: 'Hojicha Matcha Latte',
    description: 'Roasted hojicha blended with matcha and creamy milk, lightly sweetened.',
    price: 6.75,
    category: 'iced',
    tags: ['Earthy', 'Calming'],
  },
  {
    id: 'i4',
    name: 'Orange Blossom Tamarind Fizz',
    description: 'A seasonal specialty drink blending orange blossom, tamarind, and sparkling soda.',
    price: 7.00,
    category: 'iced',
    tags: ['Seasonal', 'Signature'],
  },

  // Pastries (from local vendors)
  {
    id: 'p1',
    name: 'Almond Croissant',
    description: 'Flaky, buttery croissant filled with almond frangipane, sourced fresh from a local vendor.',
    price: 5.50,
    category: 'pastry',
    tags: ['Baked Daily', 'Local Vendor'],
  },
  {
    id: 'p2',
    name: 'Ube Donut',
    description: 'Soft donut glazed with sweet purple ube, from one of our favorite local bakers.',
    price: 4.50,
    category: 'pastry',
    tags: ['Unique', 'Sweet'],
  },
  {
    id: 'p3',
    name: 'Seasonal Pastry Selection',
    description: 'Ask us what\'s fresh today — our pastry case rotates with the best from local DC bakers.',
    price: 5.00,
    category: 'pastry',
    tags: ['Rotating', 'Local Vendor'],
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Jamie R.',
    rating: 5,
    comment: 'Hands down my favorite coffee spot in Columbia Heights. The cortado is perfectly balanced and the staff always remembers my order.',
    date: 'June 2026',
    location: 'Washington, DC (Local)',
  },
  {
    id: 'r2',
    author: 'Priya S.',
    rating: 5,
    comment: 'The pandan latte is unreal — I drove across town just to get one again. Tiny space but huge flavor.',
    date: 'June 2026',
    location: 'Columbia Heights, DC',
  },
  {
    id: 'r3',
    author: 'Marcus T.',
    rating: 5,
    comment: 'Tucked in the back of Streets Market, easy to miss but worth seeking out. Great matcha, friendly baristas, and the ube donut is a must-try.',
    date: 'May 2026',
    location: 'Washington, DC',
  }
];
