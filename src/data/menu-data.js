export const MENU_ITEMS = [
  // --- 1. MAINS: BURGERS & SUBS (4 Items) ---
  {
    id: 'melt-double-beef-burger',
    name: 'Melt Signature Double Beef Burger',
    category: 'mains',
    categoryLabel: 'Mains · Gourmet Burgers & Subs',
    price: 'Rs. 2,720',
    description: 'Two smashed beef patties grilled to juicy perfection with double molten cheddar cheese, caramelized onions, crisp lettuce, and signature Melt secret sauce on a toasted sesame brioche bun. Served with fries.',
    notes: 'Double smash patty, melted cheddar drip, house secret sauce.',
    dietary: ['House Signature', '100% Halal', 'Served with Fries'],
    pairing: 'Loaded Lotus Biscoff Thick Shake',
    image: '/melt-burger.jpg',
    prepTime: 'Smashed Fresh to Order'
  },
  {
    id: 'melt-crispy-chicken-burger',
    name: 'Melt Crispy Buttermilk Chicken Burger',
    category: 'mains',
    categoryLabel: 'Mains · Gourmet Burgers & Subs',
    price: 'Rs. 1,840',
    description: 'Crispy golden fried buttermilk chicken breast dunked in hot spicy glaze, topped with crunchy shredded slaw, melted cheese, and tangy pickles on a butter-toasted brioche bun. Served with fries.',
    notes: 'Ultra-crunchy buttermilk crust, house spice dunk, tangy pickles.',
    dietary: ['Bestseller', '100% Halal', 'Served with Fries'],
    pairing: 'Melt Signature Iced Spanish Latte',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Fried Crispy to Order'
  },
  {
    id: 'melt-carnival-burger',
    name: 'Melt Carnival Monster Burger',
    category: 'mains',
    categoryLabel: 'Mains · Gourmet Burgers & Subs',
    price: 'Rs. 2,720',
    description: 'The ultimate hunger crusher: stacked beef patty and crispy chicken fillet layered with overflowing melted cheese, beef bacon strips, golden onion rings, and smoky BBQ aioli. Served with fries.',
    notes: 'Stacked beef & crispy chicken combo, molten cheese volcano.',
    dietary: ['Epic Feast', 'Cheese Overload', 'Served with Fries'],
    pairing: 'Belgian Chocolate Velvet Shake',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Monster Stack Made Fresh'
  },
  {
    id: 'melt-crispy-chicken-sub',
    name: 'Signature Crispy Chicken Submarine',
    category: 'mains',
    categoryLabel: 'Mains · Gourmet Burgers & Subs',
    price: 'Rs. 2,250',
    description: 'Toasted footlong artisan sub roll stuffed generously with tender crispy chicken tenders, melted mozzarella & sharp cheddar blend, caramelized bell peppers, and garlic herb drizzle. Served with fries.',
    notes: 'Crispy chicken tenders, melted cheese crust, soft toasted roll.',
    dietary: ['Sub Favorite', '100% Halal', 'Served with Fries'],
    pairing: 'Passionfruit Mojito Cooler',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Baked & Toasted to Order'
  },

  // --- 2. SNACKS: LOADED FRIES & SIDES (3 Items) ---
  {
    id: 'melt-slutty-loaded-fries',
    name: 'Slutty Crispy Chicken Loaded Fries',
    category: 'snacks',
    categoryLabel: 'Snacks · Loaded Fries & Sides',
    price: 'Rs. 2,800',
    description: 'A monster basket of piping-hot skin-on french fries drenched in hot liquid cheddar cheese, crispy spiced chicken bites, pickled jalapeños, crispy bacon bits, and house Melt drizzle.',
    notes: 'Molten cheese waterfall, crispy chicken cubes, jalapeño heat.',
    dietary: ['Crowd Pleaser', 'Cheese Drenched', 'Shareable'],
    pairing: 'Salted Caramel Melt Latte',
    image: '/melt-loaded-fries.jpg',
    prepTime: 'Loaded to Order'
  },
  {
    id: 'melt-glazed-chicken-wings',
    name: 'Glazed Chicken Wings (Mango BBQ & Kochchi)',
    category: 'snacks',
    categoryLabel: 'Snacks · Loaded Fries & Sides',
    price: 'Rs. 1,650',
    description: 'Crispy jumbo chicken wings tossed in our sweet mango BBQ glaze or signature fiery Sri Lankan kochchi chili pepper sauce, topped with toasted sesame seeds and chopped scallions.',
    notes: 'Choice of Sweet Mango BBQ or Fiery Lankan Kochchi glaze.',
    dietary: ['Spicy Lankan Kick', '100% Halal'],
    pairing: 'Passionfruit Mojito Cooler',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Crispy Fried & Hand Tossed'
  },
  {
    id: 'melt-cajun-seasoned-fries',
    name: 'Melt Cajun Seasoned Fries & Warm Dip',
    category: 'snacks',
    categoryLabel: 'Snacks · Loaded Fries & Sides',
    price: 'Rs. 750',
    description: 'Golden crisped potato fries tossed generously in our house Cajun spice blend, served piping hot with a cup of warm creamy cheddar cheese dipping sauce.',
    notes: 'Smoky paprika & herb seasoning, velvety melted cheese dip.',
    dietary: ['Crispy Classic', 'Vegetarian Friendly'],
    pairing: 'Artisan Double Flat White',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Cooked Hot to Order'
  },

  // --- 3. COFFEE & HOT DRINKS (4 Items) ---
  {
    id: 'melt-iced-spanish-latte',
    name: 'Melt Signature Iced Spanish Latte',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Handcrafted Sips',
    price: 'Rs. 850',
    description: 'Double ristretto espresso pulled over creamy condensed milk and chilled whole milk, crowned with silky microfoam and caramel dust.',
    notes: 'Velvety sweetness, rich roasted espresso body, iced refresh.',
    dietary: ['Specialty Coffee', 'Crowd Favorite'],
    pairing: 'Melt Signature Double Beef Burger',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Barista Handcrafted'
  },
  {
    id: 'melt-salted-caramel-latte',
    name: 'Salted Caramel Melt Latte',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Handcrafted Sips',
    price: 'Rs. 890',
    description: 'Specialty double espresso poured over cold milk, buttery slow-cooked sea-salt caramel ribbons, and finished with a cold cream foam crown.',
    notes: 'Buttery salted caramel swirl, bold espresso punch, velvety foam.',
    dietary: ['Sweet & Bold', 'Indulgent'],
    pairing: 'Slutty Crispy Chicken Loaded Fries',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Handcrafted Espresso'
  },
  {
    id: 'melt-flat-white',
    name: 'Artisan Double Flat White',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Handcrafted Sips',
    price: 'Rs. 720',
    description: 'Precision double espresso pulled from rich roasted beans, harmonized 1:1 with velvety textured steamed microfoam and free-pour latte art.',
    notes: 'Roasted nutty aroma, dark chocolate undertones, silky texture.',
    dietary: ['Single Origin Beans', 'Dairy-Free Available'],
    pairing: 'Signature Crispy Chicken Submarine',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Steamed Microfoam Perfection'
  },
  {
    id: 'melt-cold-brew-tonic',
    name: 'Single-Origin Cold Brew & Citrus Tonic',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Handcrafted Sips',
    price: 'Rs. 780',
    description: '18-hour slow steeped single-origin cold brew coffee poured over crystal clear ice with sparkling citrus tonic and crushed mint leaves.',
    notes: 'Sparkling effervescence, bright citrus peel, clean coffee notes.',
    dietary: ['Sugar-Free', 'Ultra Refreshing'],
    pairing: 'Melt Crispy Buttermilk Chicken Burger',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    prepTime: '18-Hour Slow Steep'
  },

  // --- 4. BEVERAGES & SHAKES (3 Items) ---
  {
    id: 'melt-lotus-biscoff-shake',
    name: 'Loaded Lotus Biscoff Thick Shake',
    category: 'refreshers',
    categoryLabel: 'Beverages · Thick Shakes & Coolers',
    price: 'Rs. 1,250',
    description: 'Ultra-creamy hand-churned milkshake crafted with rich vanilla ice cream, Belgian Lotus Biscoff speculoos spread, crushed caramelized biscuits, and whipped cream.',
    notes: 'Belgian speculoos richness, cookie crunch topping, thick straw texture.',
    dietary: ['House Specialty', 'Must Try Shake'],
    pairing: 'Melt Signature Double Beef Burger',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Hand-Spun Fresh'
  },
  {
    id: 'melt-chocolate-velvet-shake',
    name: 'Belgian Chocolate Velvet Shake',
    category: 'refreshers',
    categoryLabel: 'Beverages · Thick Shakes & Coolers',
    price: 'Rs. 1,150',
    description: 'Dense dark chocolate shake blended with premium Dutch cocoa ice cream, molten chocolate fudge swirl, and topped with shaved chocolate curls.',
    notes: '70% dark chocolate depth, fudge swirl, dense whipped cream.',
    dietary: ['Chocoholic Dream', 'Vegetarian'],
    pairing: 'Melt Carnival Monster Burger',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Spun to Order'
  },
  {
    id: 'melt-passionfruit-mojito',
    name: 'Passionfruit Mojito Cooler',
    category: 'refreshers',
    categoryLabel: 'Beverages · Thick Shakes & Coolers',
    price: 'Rs. 750',
    description: 'Fresh passionfruit pulp muddled with garden mint leaves, freshly squeezed key lime, and sparkling soda over crushed ice.',
    notes: 'Zesty tropical passionfruit, cooling mint, sparkling carbonation.',
    dietary: ['100% Fresh', 'Vegan', 'Thirst Quencher'],
    pairing: 'Glazed Chicken Wings',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Muddled Fresh'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gallery-burgers-subs',
    title: 'Burgers That Melt in Your Mouth',
    subtitle: 'Double smashed beef patties, buttermilk chicken & loaded footlong subs',
    category: 'Burgers & Subs 🍔',
    image: '/melt-burger.jpg'
  },
  {
    id: 'gallery-loaded-fries',
    title: 'Slutty Loaded Cheesy Fries',
    subtitle: 'Golden crisp fries drowned in molten cheddar sauce & spiced chicken',
    category: 'Loaded Fries 🍟',
    image: '/melt-loaded-fries.jpg'
  },
  {
    id: 'gallery-coffee-sips',
    title: 'Specialty Espresso & Cold Brew',
    subtitle: 'Artisan Iced Spanish lattes, caramel brews & flat whites',
    category: 'Specialty Coffee ☕',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-thick-shakes',
    title: 'Hand-Spun Thick Shakes & Coolers',
    subtitle: 'Loaded Lotus Biscoff, Belgian dark chocolate & fizzy passionfruit mojitos',
    category: 'Shakes & Sips 🥤',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  }
];
