export const MENU_ITEMS = [
  // --- 1. MAINS: LUNCH, DINNER & ALL-DAY BRUNCH (4 Items) ---
  {
    id: 'kk-diner-waffle',
    name: 'KK Diner Waffle',
    category: 'mains',
    categoryLabel: 'Mains · Brunch & Signatures',
    price: 'Rs. 2,850',
    description: 'Crispy rice and cassava waffle served with hot whipped chili honey, Nashville-dipped fried chicken breast, roasted garlic aioli, and house-pickled burger cucumbers.',
    notes: 'Rice & cassava waffle crunch, fiery Nashville fried chicken, hot whipped honey.',
    dietary: ['House Signature', 'Crispy & Spicy', 'Brunch Favorite'],
    pairing: 'Iced Tin Kiri Kōpi',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Waffle Pressed Fresh'
  },
  {
    id: 'kk-smashed-beef-burger',
    name: 'Smashed Beef Burger',
    category: 'mains',
    categoryLabel: 'Mains · Brunch & Signatures',
    price: 'Rs. 2,900',
    description: 'Homemade smashed prime beef patty seared on the flat-top with sweet caramelized onions, melted cheddar, crisp gherkins, and secret burger sauce in a house milk bun. Served with fries.',
    notes: 'Double smash patty, melted cheese drip, sweet onion jam, toasted milk bun.',
    dietary: ['Chef’s Bestseller', '100% Beef', 'Served with Fries'],
    pairing: 'Orange Cold Brew',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Smashed Hot to Order'
  },
  {
    id: 'kk-chilli-eggs',
    name: 'KK Chilli Eggs',
    category: 'mains',
    categoryLabel: 'Mains · Brunch & Signatures',
    price: 'Rs. 2,650',
    description: 'Two poached farm eggs served over rich homemade chili oil, cooling herbed tzatziki yogurt, and spiced beef merguez sausages on wood-fired crusty ciabatta.',
    notes: 'Silky poached eggs, aromatic house chilli oil, savory beef merguez.',
    dietary: ['All-Day Breakfast', 'Spicy & Creamy', 'Wood-Fired Ciabatta'],
    pairing: 'KK Cold Foam - Sicilian Pistachio',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Poached to Order'
  },
  {
    id: 'kk-jaggery-beef-croissant',
    name: 'Jaggery Beef Croissant',
    category: 'mains',
    categoryLabel: 'Mains · Brunch & Signatures',
    price: 'Rs. 2,950',
    description: 'Slow-cooked pulled jaggery-glazed beef, caramelized onion jam, and crunchy red cabbage salad folded inside a warm French butter croissant, served with homemade raita.',
    notes: 'Slow-cooked jaggery pulled beef, butter croissant, cooling cucumber raita.',
    dietary: ['Bakery Specialty', 'Sri Lankan Fusion', 'Flaky Pastry'],
    pairing: 'Tiramisu Latte',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Freshly Baked & Filled'
  },

  // --- 2. SNACKS & SANDOS: ARTISAN PLATES (3 Items) ---
  {
    id: 'kk-grilled-cheese',
    name: 'Grilled Cheese in Shokupan [V]',
    category: 'snacks',
    categoryLabel: 'Snacks & Sandos · Light Plates',
    price: 'Rs. 2,250',
    description: 'Whipped hot chili honey, smoked cheese, local aged gouda, and gooey mozzarella griddled golden in thick Japanese shokupan milk bread.',
    notes: 'Four-cheese molten pull, whipped spicy honey drizzle, pillowy milk bread.',
    dietary: ['Vegetarian', 'Gourmet Cheese Pull', 'Shokupan Bread'],
    pairing: 'Iced Tin Kiri Kōpi',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Griddled Golden Brown'
  },
  {
    id: 'kk-smoked-salmon-sando',
    name: 'Smoked Salmon Sando',
    category: 'snacks',
    categoryLabel: 'Snacks & Sandos · Light Plates',
    price: 'Rs. 2,750',
    description: 'Artisan house focaccia layered with delicate Norwegian smoked salmon, whipped caper cream cheese, shaved red onion, and fresh garden dill.',
    notes: 'Freshly baked herb focaccia, premium cold-smoked salmon, zesty capers.',
    dietary: ['Pescatarian', 'House Focaccia', 'Fresh & Delicate'],
    pairing: 'Frozen Naarang Lemonade',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Assembled Fresh'
  },
  {
    id: 'kk-breakfast-tacos',
    name: 'Breakfast Tacos [VO]',
    category: 'snacks',
    categoryLabel: 'Snacks & Sandos · Light Plates',
    price: 'Rs. 2,350',
    description: 'Soft corn tortillas loaded with creamy scrambled eggs, crumbled Greek feta, fresh guacamole, zesty pico de gallo, fresh coriander, and house sour yogurt drizzle.',
    notes: 'Fluffy scrambled eggs, fresh guacamole, tangy tomato salsa.',
    dietary: ['Vegetarian Option', 'Fresh & Vibrant', 'Light Bite'],
    pairing: 'Kyoto Strawberry Matcha Latté',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Warmed Tortillas & Fresh Salsa'
  },

  // --- 3. SPECIALTY COFFEE & COLD ESPRESSO (4 Items) ---
  {
    id: 'kk-iced-tin-kopi',
    name: 'Iced Tin Kiri Kōpi',
    category: 'sips',
    categoryLabel: 'Specialty Coffee · Handcrafted Brews',
    price: 'Rs. 1,180',
    description: 'The defining Kiri Kōpi signature: double specialty espresso pulled over sweet condensed milk and chilled whole milk, served over crystal ice in our vintage tin cup.',
    notes: 'Sri Lankan milk coffee reimagined with specialty beans and nostalgic charm.',
    dietary: ['Iconic Signature', 'Nostalgic Favorite', 'Specialty Beans'],
    pairing: 'KK Diner Waffle',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Pulled & Shaken Fresh'
  },
  {
    id: 'kk-tiramisu-latte',
    name: 'Tiramisu Latte (Hot or Cold)',
    category: 'sips',
    categoryLabel: 'Specialty Coffee · Handcrafted Brews',
    price: 'Rs. 1,280',
    description: 'Bold espresso poured over chilled whole milk, topped with a velvety crown of mascarpone sweet cream foam, dark Dutch cocoa dusting, and ladyfinger biscuit aroma.',
    notes: 'Mascarpone whipped foam, rich double espresso, Dutch cocoa finish.',
    dietary: ['Dessert Coffee', 'Velvety Foam Crown', 'Sweet & Intense'],
    pairing: 'Jaggery Beef Croissant',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Artisan Layered'
  },
  {
    id: 'kk-cold-foam-pistachio',
    name: 'KK Cold Foam - Sicilian Pistachio',
    category: 'sips',
    categoryLabel: 'Specialty Coffee · Handcrafted Brews',
    price: 'Rs. 1,450',
    description: 'Double shot of rich espresso on iced milk, topped with an airy cold foam whipped with pure Sicilian pistachio paste and crushed toasted nut crumbles.',
    notes: 'Nutty Mediterranean pistachio aroma, dense sweet cold foam, bold roast.',
    dietary: ['House Innovation', 'Cold Foam Special', 'Nutty Perfection'],
    pairing: 'KK Chilli Eggs',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Whipped Cold Foam Layer'
  },
  {
    id: 'kk-orange-cold-brew',
    name: 'Orange Cold Brew',
    category: 'sips',
    categoryLabel: 'Specialty Coffee · Handcrafted Brews',
    price: 'Rs. 1,180',
    description: '18-hour single origin cold brew coffee steeped low and slow, poured over crystalline ice with freshly pressed Valencia orange juice and fragrant citrus oils.',
    notes: 'Clean slow-steeped chocolate notes, bright sweet orange zest, effervescent.',
    dietary: ['18-Hour Steep', 'Citrus Infused', 'Sugar-Free Available'],
    pairing: 'Smashed Beef Burger',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    prepTime: '18-Hour Cold Extraction'
  },

  // --- 4. BAKERY, MATCHA & BEVERAGES (3 Items) ---
  {
    id: 'kk-french-toast',
    name: 'KK French Toast',
    category: 'refreshers',
    categoryLabel: 'Bakery, Matcha & Refreshers',
    price: 'Rs. 2,650',
    description: 'House-baked golden brioche soaked in cinnamon vanilla egg custard, topped with whipped cream cheese, wild blueberry compote, and warm maple berry drizzle.',
    notes: 'Bakery brioche pillow, whipped mascarpone cream cheese, tart berry compote.',
    dietary: ['Bakery Signature', 'Sweet Indulgence', 'All-Day Breakfast'],
    pairing: 'Iced Tin Kiri Kōpi',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Griddled Fresh from Bakery'
  },
  {
    id: 'kk-strawberry-matcha',
    name: 'Kyoto Strawberry Matcha Latté',
    category: 'refreshers',
    categoryLabel: 'Bakery, Matcha & Refreshers',
    price: 'Rs. 1,480',
    description: 'Ceremonial Grade green tea from Kyoto, Japan, hand-whisked to order and gently layered over sweet homemade strawberry compote and silky chilled milk.',
    notes: 'Kyoto ceremonial green tea, layered strawberry compote, vivid two-tone.',
    dietary: ['Ceremonial Grade Kyoto', 'Antioxidant Rich', 'Japanese Matcha'],
    pairing: 'Breakfast Tacos',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Bamboo Whisked Fresh'
  },
  {
    id: 'kk-frozen-naarang-lemonade',
    name: 'Frozen Naarang Lemonade',
    category: 'refreshers',
    categoryLabel: 'Bakery, Matcha & Refreshers',
    price: 'Rs. 980',
    description: 'Indigenous Sri Lankan naarang citrus cold-pressed and blended into a glacial slush with garden mint leaves, key lime zest, and raw cane sugar.',
    notes: 'Lankan naarang citrus, refreshing icy slush, fragrant mint oil.',
    dietary: ['100% Island Fruit', 'Vegan Slush', 'Cooling Refreshment'],
    pairing: 'Smoked Salmon Sando',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Crushed Glacial Slush'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gallery-coffee',
    title: 'Specialty Coffee & Iced Tin Kiri Kōpi',
    subtitle: 'From Kyoto ceremonial matcha to our iconic Iced Tin Kiri Kōpi in Colombo 07',
    category: 'Specialty Coffee ☕',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-brunch',
    title: 'All-Day Brunch & KK Diner Waffle',
    subtitle: 'Rice & cassava waffles, poached chilli eggs, and brioche french toasts',
    category: 'Brunch & Waffles 🥐',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-bakery',
    title: 'Artisan Bakery & Flaky Croissants',
    subtitle: 'Freshly baked morning croissants, jaggery beef bakes and shokupan sandos',
    category: 'Bakery & Sandos 🥪',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-matcha-sips',
    title: 'Ceremonial Matcha & Island Coolers',
    subtitle: 'Kyoto strawberry matcha, homemade sodas & frozen naarang lemonades',
    category: 'Matcha & Sips 🍵',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
  }
];
