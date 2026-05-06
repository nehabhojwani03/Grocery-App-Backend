const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('./models/Product');
const Category = require('./models/Category');

const categories = [
  { name: 'Vegetables & Fruits', description: 'Fresh vegetables and fruits', sortOrder: 1 },
  { name: 'Dairy, Eggs & Bread', description: 'Fresh dairy products', sortOrder: 2 },
  { name: 'Munchies', description: 'Snacks and munchies', sortOrder: 3 },
  { name: 'Cold Drinks & Juices', description: 'Refreshing drinks', sortOrder: 4 },
  { name: 'Noodles & Instant Food', description: 'Quick and easy meals', sortOrder: 5 },
  { name: 'Bakery & Biscuits', description: 'Baked goods and biscuits', sortOrder: 6 },
  { name: 'Sweet Tooth', description: 'Chocolates and sweets', sortOrder: 7 },
  { name: 'Atta, Rice & Dal', description: 'Kitchen staples', sortOrder: 8 },
  { name: 'Sauces & Spreads', description: 'Sauces and condiments', sortOrder: 9 },
  { name: 'Baby Care', description: 'Baby care products', sortOrder: 10 },
];

const getProducts = (categoryMap) => [
  // ── Vegetables & Fruits ──────────────────────────────────────────────────
  { name: 'Tomato', price: 30, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'], badge: 'Fresh' },
  { name: 'Brinjal', price: 35, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Cabbage', price: 28, unit: '1 pc', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Cauliflower', price: 40, unit: '1 pc', stock: 100, category: categoryMap['Vegetables & Fruits'], badge: 'Popular' },
  { name: 'Broccoli', price: 55, unit: '250g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Onion', price: 25, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Potato', price: 22, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Garlic', price: 18, unit: '100g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Lemon', price: 10, unit: '3 pcs', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Beetroot', price: 30, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Carrots', price: 28, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Pumpkin', price: 32, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Sweet Potato', price: 35, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Ginger', price: 15, unit: '100g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Mushrooms', price: 60, unit: '200g', stock: 100, category: categoryMap['Vegetables & Fruits'], badge: 'Premium' },
  { name: 'Banana', price: 45, unit: '6 pcs', stock: 100, category: categoryMap['Vegetables & Fruits'], badge: 'Popular' },
  { name: 'Watermelon', price: 80, unit: '1 pc', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Apple', price: 90, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Orange', price: 60, unit: '4 pcs', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Kiwi', price: 75, unit: '2 pcs', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Strawberry', price: 99, unit: '250g', stock: 100, category: categoryMap['Vegetables & Fruits'], badge: 'Premium' },
  { name: 'Mango', price: 85, unit: '2 pcs', stock: 100, category: categoryMap['Vegetables & Fruits'], badge: 'Seasonal' },
  { name: 'Pineapple', price: 65, unit: '1 pc', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Papaya', price: 55, unit: '1 pc', stock: 100, category: categoryMap['Vegetables & Fruits'] },
  { name: 'Grapes', price: 70, unit: '500g', stock: 100, category: categoryMap['Vegetables & Fruits'] },

  // ── Dairy, Eggs & Bread ──────────────────────────────────────────────────
  { name: 'Amul Gold Milk', price: 31, unit: '500ml', stock: 100, category: categoryMap['Dairy, Eggs & Bread'], badge: 'Popular' },
  { name: 'Almond Milk', price: 149, unit: '1L', stock: 100, category: categoryMap['Dairy, Eggs & Bread'], badge: 'Premium' },
  { name: 'Amul Fresh Cream', price: 45, unit: '200ml', stock: 100, category: categoryMap['Dairy, Eggs & Bread'] },
  { name: 'Dahi', price: 42, unit: '400g', stock: 100, category: categoryMap['Dairy, Eggs & Bread'], badge: 'Fresh' },
  { name: 'Masti Dahi', price: 55, unit: '400g', stock: 100, category: categoryMap['Dairy, Eggs & Bread'], badge: 'Popular' },
  { name: 'Amul Lassi', price: 30, unit: '200ml', stock: 100, category: categoryMap['Dairy, Eggs & Bread'] },
  { name: 'White Eggs', price: 89, unit: '12 pcs', stock: 100, category: categoryMap['Dairy, Eggs & Bread'] },
  { name: 'Bread', price: 35, unit: '400g', stock: 100, category: categoryMap['Dairy, Eggs & Bread'] },
  { name: 'Whole Wheat Bread', price: 45, unit: '400g', stock: 100, category: categoryMap['Dairy, Eggs & Bread'], badge: 'Healthy' },

  // ── Munchies ─────────────────────────────────────────────────────────────
  { name: "Lay's Sweet Spicy", price: 20, unit: '26g', stock: 100, category: categoryMap['Munchies'], badge: 'Popular' },
  { name: "Lay's Indian Magic Masala", price: 20, unit: '26g', stock: 100, category: categoryMap['Munchies'] },
  { name: "Lay's Hot & Sweet Chilli", price: 20, unit: '26g', stock: 100, category: categoryMap['Munchies'] },
  { name: "Lay's Salted", price: 20, unit: '26g', stock: 100, category: categoryMap['Munchies'] },
  { name: 'Pringles Original', price: 199, unit: '107g', stock: 100, category: categoryMap['Munchies'], badge: 'Premium' },
  { name: 'Doritos Nacho Cheese', price: 50, unit: '40g', stock: 100, category: categoryMap['Munchies'], badge: 'Popular' },
  { name: 'Pringles Cream & Onion', price: 199, unit: '107g', stock: 100, category: categoryMap['Munchies'] },
  { name: 'Doritos Spicy Sweet Chilli', price: 50, unit: '40g', stock: 100, category: categoryMap['Munchies'] },
  { name: 'Cheetos Cheddar Jalapeño', price: 50, unit: '40g', stock: 100, category: categoryMap['Munchies'], badge: 'Spicy' },
  { name: 'Takis', price: 150, unit: '56g', stock: 100, category: categoryMap['Munchies'], badge: 'Spicy' },
  { name: 'Pringles BBQ', price: 199, unit: '107g', stock: 100, category: categoryMap['Munchies'], badge: 'Premium' },

  // ── Cold Drinks & Juices ─────────────────────────────────────────────────
  { name: 'Coca Cola', price: 45, unit: '750ml', stock: 100, category: categoryMap['Cold Drinks & Juices'], badge: 'Popular' },
  { name: 'Pepsi', price: 45, unit: '750ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Sprite', price: 45, unit: '750ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Fanta Orange', price: 45, unit: '750ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Fanta Berry', price: 40, unit: '330ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Fanta Fruit Punch', price: 40, unit: '330ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Fanta Grape', price: 40, unit: '330ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Fanta Green Apple', price: 40, unit: '330ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Mango Juice', price: 30, unit: '200ml', stock: 100, category: categoryMap['Cold Drinks & Juices'], badge: 'Popular' },
  { name: 'Moggu Moggu', price: 60, unit: '320ml', stock: 100, category: categoryMap['Cold Drinks & Juices'], badge: 'New' },
  { name: 'Orange Juice', price: 35, unit: '200ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Minute Maid Pulpy', price: 25, unit: '400ml', stock: 100, category: categoryMap['Cold Drinks & Juices'], badge: 'Popular' },
  { name: 'Tropicana', price: 99, unit: '1L', stock: 100, category: categoryMap['Cold Drinks & Juices'], badge: 'Premium' },
  { name: 'Cherry Juice', price: 80, unit: '500ml', stock: 100, category: categoryMap['Cold Drinks & Juices'] },
  { name: 'Blueberry Drink', price: 80, unit: '330ml', stock: 100, category: categoryMap['Cold Drinks & Juices'], badge: 'New' },

  // ── Noodles & Instant Food ───────────────────────────────────────────────
  { name: 'Buldak Black', price: 180, unit: '1 pc', stock: 100, category: categoryMap['Noodles & Instant Food'], badge: 'Spicy' },
  { name: 'Buldak Pink', price: 180, unit: '1 pc', stock: 100, category: categoryMap['Noodles & Instant Food'], badge: 'Popular' },
  { name: 'Buldak Yellow', price: 180, unit: '1 pc', stock: 100, category: categoryMap['Noodles & Instant Food'] },
  { name: 'Maggi Masala Cup', price: 30, unit: '70g', stock: 100, category: categoryMap['Noodles & Instant Food'], badge: 'Popular' },
  { name: 'Maggi Curry Flavour', price: 14, unit: '70g', stock: 100, category: categoryMap['Noodles & Instant Food'] },
  { name: 'MTR Poha', price: 45, unit: '80g', stock: 100, category: categoryMap['Noodles & Instant Food'] },
  { name: 'MTR Upma', price: 45, unit: '80g', stock: 100, category: categoryMap['Noodles & Instant Food'] },
  { name: 'Yippee Noodles', price: 14, unit: '70g', stock: 100, category: categoryMap['Noodles & Instant Food'], badge: 'Popular' },

  // ── Bakery & Biscuits ────────────────────────────────────────────────────
  { name: 'Chocolate Cookie', price: 30, unit: '75g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Popular' },
  { name: 'Desire Butter', price: 20, unit: '100g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Moms Magic', price: 25, unit: '100g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Fifty Fifty', price: 20, unit: '66g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Popular' },
  { name: 'Marie Gold', price: 25, unit: '250g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Jim Jam', price: 20, unit: '100g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Little Hearts', price: 20, unit: '75g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Popular' },
  { name: 'Milk Bikis', price: 10, unit: '56g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Nutri Choice', price: 30, unit: '100g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Healthy' },
  { name: 'Bourbon', price: 20, unit: '100g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Popular' },
  { name: 'Happy Happy Oreo', price: 20, unit: '120g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Hide & Seek', price: 30, unit: '100g', stock: 100, category: categoryMap['Bakery & Biscuits'] },
  { name: 'Unibic Chocolate', price: 40, unit: '75g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Premium' },
  { name: 'Unibic Fruit & Nut', price: 40, unit: '75g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Premium' },
  { name: 'Oreo Original', price: 20, unit: '120g', stock: 100, category: categoryMap['Bakery & Biscuits'], badge: 'Popular' },
  { name: 'Oreo Strawberry', price: 20, unit: '120g', stock: 100, category: categoryMap['Bakery & Biscuits'] },

  // ── Sweet Tooth ──────────────────────────────────────────────────────────
  { name: 'Cornetto Choco', price: 50, unit: '1 pc', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Popular' },
  { name: 'Cornetto Blue', price: 50, unit: '1 pc', stock: 100, category: categoryMap['Sweet Tooth'] },
  { name: 'Magnum', price: 90, unit: '1 pc', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Premium' },
  { name: 'Ferrero Rocher', price: 199, unit: '16 pcs', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Premium' },
  { name: 'KitKat Biscoff', price: 60, unit: '1 pc', stock: 100, category: categoryMap['Sweet Tooth'] },
  { name: 'KitKat Cookie Crumble', price: 60, unit: '1 pc', stock: 100, category: categoryMap['Sweet Tooth'] },
  { name: 'Oreo Bites', price: 50, unit: '75g', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'New' },
  { name: 'Snickers Minis', price: 99, unit: '162g', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Popular' },
  { name: 'Toblerone', price: 180, unit: '100g', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Premium' },
  { name: 'Twix', price: 60, unit: '50g', stock: 100, category: categoryMap['Sweet Tooth'] },
  { name: 'Kinder Joy', price: 40, unit: '1 pc', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Popular' },
  { name: 'Mars Minis', price: 99, unit: '162g', stock: 100, category: categoryMap['Sweet Tooth'] },
  { name: 'Bounty', price: 60, unit: '57g', stock: 100, category: categoryMap['Sweet Tooth'] },
  { name: 'Rafaello', price: 299, unit: '150g', stock: 100, category: categoryMap['Sweet Tooth'], badge: 'Premium' },

  // ── Atta, Rice & Dal ─────────────────────────────────────────────────────
  { name: 'Aashirvaad Atta', price: 280, unit: '5kg', stock: 100, category: categoryMap['Atta, Rice & Dal'], badge: 'Popular' },
  { name: 'Bhog Atta', price: 240, unit: '5kg', stock: 100, category: categoryMap['Atta, Rice & Dal'] },
  { name: 'Daawat Brown Rice', price: 180, unit: '1kg', stock: 100, category: categoryMap['Atta, Rice & Dal'], badge: 'Healthy' },
  { name: 'India Gate Basmati', price: 320, unit: '1kg', stock: 100, category: categoryMap['Atta, Rice & Dal'], badge: 'Premium' },
  { name: 'Masoor Dal', price: 120, unit: '500g', stock: 100, category: categoryMap['Atta, Rice & Dal'] },
  { name: 'Moong Dal', price: 130, unit: '500g', stock: 100, category: categoryMap['Atta, Rice & Dal'], badge: 'Popular' },
  { name: 'Toor Dal', price: 110, unit: '500g', stock: 100, category: categoryMap['Atta, Rice & Dal'] },
  { name: 'Urad Dal', price: 115, unit: '500g', stock: 100, category: categoryMap['Atta, Rice & Dal'] },
  { name: 'Saffola Masala Oats', price: 75, unit: '39g', stock: 100, category: categoryMap['Atta, Rice & Dal'], badge: 'Healthy' },

  // ── Sauces & Spreads ─────────────────────────────────────────────────────
  { name: 'Heinz BBQ Sauce', price: 299, unit: '875ml', stock: 100, category: categoryMap['Sauces & Spreads'], badge: 'Popular' },
  { name: 'Hershey Strawberry', price: 120, unit: '200ml', stock: 100, category: categoryMap['Sauces & Spreads'] },
  { name: 'Hershey Caramel', price: 120, unit: '200ml', stock: 100, category: categoryMap['Sauces & Spreads'] },
  { name: 'Hershey Chocolate', price: 120, unit: '200ml', stock: 100, category: categoryMap['Sauces & Spreads'], badge: 'Popular' },
  { name: 'Heinz Hot Chilli Sauce', price: 199, unit: '300ml', stock: 100, category: categoryMap['Sauces & Spreads'], badge: 'Spicy' },
  { name: 'Heinz Mayonnaise', price: 179, unit: '400ml', stock: 100, category: categoryMap['Sauces & Spreads'] },
  { name: "Rao's Pasta Sauce", price: 599, unit: '680g', stock: 100, category: categoryMap['Sauces & Spreads'], badge: 'Premium' },
  { name: 'Heinz Tandoori Mayo', price: 179, unit: '400ml', stock: 100, category: categoryMap['Sauces & Spreads'] },
  { name: "Rao's Tomato Basil", price: 599, unit: '680g', stock: 100, category: categoryMap['Sauces & Spreads'], badge: 'Premium' },
  { name: 'Heinz Tomato Ketchup', price: 149, unit: '450ml', stock: 100, category: categoryMap['Sauces & Spreads'], badge: 'Popular' },
  { name: 'Heinz Yellow Mustard', price: 199, unit: '395ml', stock: 100, category: categoryMap['Sauces & Spreads'] },

  // ── Baby Care ────────────────────────────────────────────────────────────
  { name: 'Baby Rub', price: 199, unit: '50g', stock: 100, category: categoryMap['Baby Care'], badge: 'Popular' },
  { name: 'Johnson Aloe Powder', price: 149, unit: '200g', stock: 100, category: categoryMap['Baby Care'] },
  { name: 'Johnson Baby Cream', price: 129, unit: '200g', stock: 100, category: categoryMap['Baby Care'], badge: 'Popular' },
  { name: 'Johnson Baby Oil', price: 179, unit: '200ml', stock: 100, category: categoryMap['Baby Care'] },
  { name: 'Johnson Baby Powder', price: 149, unit: '200g', stock: 100, category: categoryMap['Baby Care'] },
  { name: 'Johnson Baby Wipes', price: 199, unit: '80 pcs', stock: 100, category: categoryMap['Baby Care'], badge: 'Popular' },
  { name: 'Pampers Diapers', price: 699, unit: '40 pcs', stock: 100, category: categoryMap['Baby Care'], badge: 'Premium' },
  { name: 'Pampers Baby Wipes', price: 249, unit: '72 pcs', stock: 100, category: categoryMap['Baby Care'] },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await Product.deleteMany({});
    await Category.deleteMany({});
    console.log('Cleared existing products and categories');

    // Seed categories first
    const insertedCategories = await Category.insertMany(categories);
    console.log(`Seeded ${insertedCategories.length} categories\n`);

    // Build a name → _id map
    const categoryMap = {};
    insertedCategories.forEach((cat) => {
      categoryMap[cat.name] = cat._id;
    });

    // Seed products using real category _ids
    const products = getProducts(categoryMap);
    const insertedProducts = await Product.insertMany(products);
    console.log(`Seeded ${insertedProducts.length} products\n`);

    // Print mapping for CATEGORY_DATA update
    console.log('=== PRODUCT ID MAPPING ===');
    insertedProducts.forEach((p) => {
      console.log(`${p.name}|||${p._id}`);
    });

    await mongoose.disconnect();
    console.log('\nDone! Copy the mapping above into your CATEGORY_DATA.');
  } catch (err) {
    console.error('Seed error:', err.message);
    process.exit(1);
  }
};

seedDB();