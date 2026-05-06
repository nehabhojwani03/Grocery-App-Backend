const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('./models/Product');
const Category = require('./models/Category');

const categories = [
    { name: 'Vegetables & Fruits',   description: 'Fresh vegetables and fruits', sortOrder: 1 },
    { name: 'Dairy, Eggs & Bread',   description: 'Fresh dairy products',        sortOrder: 2 },
    { name: 'Munchies',              description: 'Snacks and munchies',          sortOrder: 3 },
    { name: 'Cold Drinks & Juices',  description: 'Refreshing drinks',            sortOrder: 4 },
    { name: 'Noodles & Instant Food',description: 'Quick and easy meals',         sortOrder: 5 },
    { name: 'Bakery & Biscuits',     description: 'Baked goods and biscuits',     sortOrder: 6 },
    { name: 'Sweet Tooth',           description: 'Chocolates and sweets',        sortOrder: 7 },
    { name: 'Atta, Rice & Dal',      description: 'Kitchen staples',              sortOrder: 8 },
    { name: 'Sauces & Spreads',      description: 'Sauces and condiments',        sortOrder: 9 },
    { name: 'Baby Care',             description: 'Baby care products',           sortOrder: 10 },
];

const getProducts = (categoryMap) => [
    // ── Vegetables ──────────────────────────────────────────────────────────
    { productKey: 'v1',  name: 'Tomato',       price: 30,  unit: '500g',   stock: 100, badge: 'Fresh',    category: categoryMap['Vegetables & Fruits'], description: 'Sun-ripened tomatoes sourced from local farms. Rich in lycopene and vitamin C, perfect for curries, salads, and chutneys.' },
    { productKey: 'v2',  name: 'Brinjal',      price: 35,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Fresh, tender brinjals (eggplant) with a smooth texture. Great for bhartha, sabzi, or grilling.' },
    { productKey: 'v3',  name: 'Cabbage',      price: 28,  unit: '1 pc',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Crisp, leafy cabbage packed with fibre and vitamin K. Ideal for stir-fries, salads, and coleslaw.' },
    { productKey: 'v4',  name: 'Cauliflower',  price: 40,  unit: '1 pc',   stock: 100, badge: 'Popular',  category: categoryMap['Vegetables & Fruits'], description: 'Snow-white cauliflower florets, freshly harvested. Perfect for aloo gobi, soups, or roasting.' },
    { productKey: 'v5',  name: 'Broccoli',     price: 55,  unit: '250g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Vibrant green broccoli heads rich in iron and antioxidants. Best stir-fried, steamed, or added to pasta.' },
    { productKey: 'v6',  name: 'Onion',        price: 25,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Premium quality onions with a sharp, pungent flavour. The backbone of every Indian kitchen.' },
    { productKey: 'v7',  name: 'Potato',       price: 22,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Farm-fresh potatoes ideal for sabzi, fries, or mashing. High in potassium and B vitamins.' },
    { productKey: 'v8',  name: 'Garlic',       price: 18,  unit: '100g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Aromatic whole garlic bulbs bursting with flavour. A natural immunity booster used in countless dishes.' },
    { productKey: 'v9',  name: 'Lemon',        price: 10,  unit: '3 pcs',  stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Juicy, tangy lemons packed with vitamin C. Squeeze over dals, salads, or use in refreshing drinks.' },
    { productKey: 'v10', name: 'Beetroot',     price: 30,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Deep red beetroots with natural sweetness. Rich in iron and folate, great for salads and halwa.' },
    { productKey: 'v11', name: 'Carrots',      price: 28,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Fresh, crunchy carrots loaded with beta-carotene. Perfect for gajar ka halwa, soups, or raw snacking.' },
    { productKey: 'v12', name: 'Pumpkin',      price: 32,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Fresh pumpkin with a mildly sweet flavour. Ideal for curries, soups, and kheer.' },
    { productKey: 'v13', name: 'Sweet Potato', price: 35,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Naturally sweet and nutritious sweet potatoes. A healthy alternative packed with dietary fibre.' },
    { productKey: 'v14', name: 'Ginger',       price: 15,  unit: '100g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Fragrant fresh ginger root with a spicy, warming kick. Essential for chai, marinades, and cooking.' },
    { productKey: 'v15', name: 'Mushrooms',    price: 60,  unit: '200g',   stock: 100, badge: 'Premium',  category: categoryMap['Vegetables & Fruits'], description: 'Premium button mushrooms with an earthy, umami flavour. Great for pasta, pizza, or sautéed on toast.' },

    // ── Fruits ───────────────────────────────────────────────────────────────
    { productKey: 'f1',  name: 'Banana',      price: 45,  unit: '6 pcs',  stock: 100, badge: 'Popular',  category: categoryMap['Vegetables & Fruits'], description: 'Sweet, ripe bananas that are naturally energy-packed. A perfect on-the-go snack for all ages.' },
    { productKey: 'f2',  name: 'Watermelon',  price: 80,  unit: '1 pc',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Refreshing watermelon bursting with hydration and sweetness. Best enjoyed chilled on hot days.' },
    { productKey: 'f3',  name: 'Apple',       price: 90,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Crisp, juicy apples with a perfect sweet-tart balance. Rich in fibre and great for snacking.' },
    { productKey: 'f4',  name: 'Orange',      price: 60,  unit: '4 pcs',  stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Fresh, vibrant oranges full of vitamin C and natural citrus flavour. Peel and enjoy or juice them.' },
    { productKey: 'f5',  name: 'Kiwi',        price: 75,  unit: '2 pcs',  stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Tropical kiwis with a tangy-sweet flavour and vivid green flesh. A vitamin C powerhouse.' },
    { productKey: 'f6',  name: 'Strawberry',  price: 99,  unit: '250g',   stock: 100, badge: 'Premium',  category: categoryMap['Vegetables & Fruits'], description: 'Premium plump strawberries with intense sweetness. Perfect for desserts, smoothies, or straight up.' },
    { productKey: 'f7',  name: 'Mango',       price: 85,  unit: '2 pcs',  stock: 100, badge: 'Seasonal', category: categoryMap['Vegetables & Fruits'], description: 'Seasonal Alphonso-variety mangoes with a rich, fragrant sweetness. The king of fruits.' },
    { productKey: 'f8',  name: 'Pineapple',   price: 65,  unit: '1 pc',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Tangy, tropical pineapple with fibrous, juicy flesh. Great for fruit bowls, juices, or grilling.' },
    { productKey: 'f9',  name: 'Papaya',      price: 55,  unit: '1 pc',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Soft, sweet papaya with digestive enzymes (papain). Ideal for breakfast or smoothies.' },
    { productKey: 'f10', name: 'Grapes',      price: 70,  unit: '500g',   stock: 100,                    category: categoryMap['Vegetables & Fruits'], description: 'Sweet, seedless grapes with a burst of natural flavour. Great for snacking or wine pairings.' },

    // ── Dairy, Eggs & Bread ──────────────────────────────────────────────────
    { productKey: 'd1',  name: 'Amul Gold Milk',     price: 31,  unit: '500ml', stock: 100, badge: 'Popular', category: categoryMap['Dairy, Eggs & Bread'], description: 'Amul Gold full-cream milk with a rich, creamy taste. Homogenised and pasteurised for freshness.' },
    { productKey: 'd2',  name: 'Almond Milk',        price: 149, unit: '1L',    stock: 100, badge: 'Premium', category: categoryMap['Dairy, Eggs & Bread'], description: 'Creamy almond milk — dairy-free, low-calorie, and perfect for lattes, smoothies, or cereals.' },
    { productKey: 'd3',  name: 'Amul Fresh Cream',   price: 45,  unit: '200ml', stock: 100,                   category: categoryMap['Dairy, Eggs & Bread'], description: 'Amul fresh cream with a smooth, velvety texture. Perfect for gravies, desserts, and baking.' },
    { productKey: 'd4',  name: 'Dahi',               price: 42,  unit: '400g',  stock: 100, badge: 'Fresh',   category: categoryMap['Dairy, Eggs & Bread'], description: 'Fresh dahi set daily with live probiotic cultures. Creamy, thick, and great with every meal.' },
    { productKey: 'd5',  name: 'Masti Dahi',         price: 55,  unit: '400g',  stock: 100, badge: 'Popular', category: categoryMap['Dairy, Eggs & Bread'], description: 'Masti Dahi — a rich, tangy yoghurt loved for its thick consistency and probiotic benefits.' },
    { productKey: 'd6',  name: 'Amul Lassi',         price: 30,  unit: '200ml', stock: 100,                   category: categoryMap['Dairy, Eggs & Bread'], description: 'Amul chilled lassi, sweet and refreshing. A classic Indian drink best served ice cold.' },
    { productKey: 'd7',  name: 'White Eggs',         price: 89,  unit: '12 pcs',stock: 100,                   category: categoryMap['Dairy, Eggs & Bread'], description: 'Farm-fresh white eggs with a rich yolk. Versatile for every meal, from breakfast to baking.' },
    { productKey: 'd9',  name: 'Bread',              price: 35,  unit: '400g',  stock: 100,                   category: categoryMap['Dairy, Eggs & Bread'], description: 'Soft, fluffy white bread baked fresh daily. Great for sandwiches, toast, or paired with chai.' },
    { productKey: 'd10', name: 'Whole Wheat Bread',  price: 45,  unit: '400g',  stock: 100, badge: 'Healthy', category: categoryMap['Dairy, Eggs & Bread'], description: 'Wholesome whole wheat bread packed with fibre. A healthier, nutty-flavoured alternative.' },

    // ── Munchies ──────────────────────────────────────────────────────────────
    { productKey: 'm1',  name: "Lay's Sweet Spicy",       price: 20,  unit: '26g',  stock: 100, badge: 'Popular', category: categoryMap['Munchies'], description: "Lay's Sweet & Spicy chilli-flavoured crisps — the perfect sweet-heat combo for every snack break." },
    { productKey: 'm2',  name: "Lay's Indian Magic Masala",price: 20,  unit: '26g',  stock: 100,                   category: categoryMap['Munchies'], description: "Lay's Indian Magic Masala — bold, tangy, and packed with desi spice. An all-time Indian favourite." },
    { productKey: 'm3',  name: "Lay's Hot & Sweet Chilli", price: 20,  unit: '26g',  stock: 100,                   category: categoryMap['Munchies'], description: "Lay's Hot & Sweet Chilli — fiery heat meets sweet undertones for an addictive snack experience." },
    { productKey: 'm4',  name: "Lay's Salted",             price: 20,  unit: '26g',  stock: 100,                   category: categoryMap['Munchies'], description: "Classic Lay's Salted — light, crispy, and perfectly seasoned. Simplicity at its snackable best." },
    { productKey: 'm5',  name: 'Pringles Original',        price: 199, unit: '107g', stock: 100, badge: 'Premium', category: categoryMap['Munchies'], description: 'Pringles Original — iconic saddle-shaped crisps with a clean, balanced crunch. Once you pop...' },
    { productKey: 'm6',  name: 'Doritos Nacho Cheese',     price: 50,  unit: '40g',  stock: 100, badge: 'Popular', category: categoryMap['Munchies'], description: 'Doritos Nacho Cheese — bold, cheesy tortilla chips with an intense flavour punch.' },
    { productKey: 'm7',  name: 'Pringles Cream & Onion',   price: 199, unit: '107g', stock: 100,                   category: categoryMap['Munchies'], description: 'Pringles Cream & Onion — smooth, tangy flavour layered on the signature Pringles crunch.' },
    { productKey: 'm8',  name: 'Doritos Spicy Sweet Chilli',price: 50,  unit: '40g',  stock: 100,                   category: categoryMap['Munchies'], description: 'Doritos Spicy Sweet Chilli — the ultimate balance of heat and sweetness in every bite.' },
    { productKey: 'm9',  name: 'Cheetos Cheddar Jalapeño', price: 50,  unit: '40g',  stock: 100, badge: 'Spicy',   category: categoryMap['Munchies'], description: 'Cheetos Cheddar Jalapeño — fiery jalapeño meets sharp cheddar for a bold snacking hit.' },
    { productKey: 'm10', name: 'Takis',                    price: 150, unit: '56g',  stock: 100, badge: 'Spicy',   category: categoryMap['Munchies'], description: 'Takis Fuego — intensely spicy rolled tortilla chips. Not for the faint-hearted.' },
    { productKey: 'm11', name: 'Pringles BBQ',             price: 199, unit: '107g', stock: 100, badge: 'Premium', category: categoryMap['Munchies'], description: 'Pringles BBQ — smoky barbecue flavour packed into every satisfying crisp.' },

    // ── Cold Drinks & Juices ─────────────────────────────────────────────────
    { productKey: 'c1',  name: 'Coca Cola',        price: 45, unit: '750ml', stock: 100, badge: 'Popular', category: categoryMap['Cold Drinks & Juices'], description: "Coca-Cola — the world's most iconic cola. Crisp, refreshing, and perfectly carbonated." },
    { productKey: 'c2',  name: 'Pepsi',            price: 45, unit: '750ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: "Pepsi — bold, smooth cola flavour that's always refreshing. The choice of a new generation." },
    { productKey: 'c3',  name: 'Sprite',           price: 45, unit: '750ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Sprite — crisp, clean lemon-lime soda. Refreshing and caffeine-free.' },
    { productKey: 'c4',  name: 'Fanta Orange',     price: 45, unit: '750ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Fanta Orange — bright, bubbly, and packed with fun orange flavour.' },
    { productKey: 'c5',  name: 'Fanta Berry',      price: 40, unit: '330ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Fanta Berry — a sparkling berry blast with a vivid, fruity taste.' },
    { productKey: 'c6',  name: 'Fanta Fruit Punch',price: 40, unit: '330ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Fanta Fruit Punch — a tropical fusion of fruits in every bubbly sip.' },
    { productKey: 'c7',  name: 'Fanta Grape',      price: 40, unit: '330ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Fanta Grape — sweet, deep grape flavour in a refreshing sparkling drink.' },
    { productKey: 'c8',  name: 'Fanta Green Apple',price: 40, unit: '330ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Fanta Green Apple — tart, tangy green apple fizziness in every can.' },
    { productKey: 'c9',  name: 'Mango Juice',      price: 30, unit: '200ml', stock: 100, badge: 'Popular', category: categoryMap['Cold Drinks & Juices'], description: 'Real Mango Juice — thick, pulpy mango goodness made from Alphonso mangoes.' },
    { productKey: 'c10', name: 'Moggu Moggu',      price: 60, unit: '320ml', stock: 100, badge: 'New',     category: categoryMap['Cold Drinks & Juices'], description: 'Mogu Mogu — a unique chilled drink with real nata de coco jelly pieces inside. Fun to drink!' },
    { productKey: 'c11', name: 'Orange Juice',     price: 35, unit: '200ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Fresh Orange Juice — naturally squeezed, vitamin-packed, and full of citrus goodness.' },
    { productKey: 'c12', name: 'Minute Maid Pulpy',price: 25, unit: '400ml', stock: 100, badge: 'Popular', category: categoryMap['Cold Drinks & Juices'], description: 'Minute Maid Pulpy Orange — juicy with real orange pulp for an authentic fruit experience.' },
    { productKey: 'c13', name: 'Tropicana',        price: 99, unit: '1L',    stock: 100, badge: 'Premium', category: categoryMap['Cold Drinks & Juices'], description: 'Tropicana 100% — pure squeezed orange juice with no added sugar or preservatives.' },
    { productKey: 'c14', name: 'Cherry Juice',     price: 80, unit: '500ml', stock: 100,                   category: categoryMap['Cold Drinks & Juices'], description: 'Cherry Juice — deep, rich cherry flavour packed with antioxidants.' },
    { productKey: 'c15', name: 'Blueberry Drink',  price: 80, unit: '330ml', stock: 100, badge: 'New',     category: categoryMap['Cold Drinks & Juices'], description: 'Blueberry Drink — a vibrant, antioxidant-rich blueberry beverage.' },

    // ── Noodles & Instant Food ───────────────────────────────────────────────
    { productKey: 'n1', name: 'Buldak Black',      price: 180, unit: '1 pc', stock: 100, badge: 'Spicy',   category: categoryMap['Noodles & Instant Food'], description: 'Buldak Black — Korean carbonara fire noodles with an insanely rich and spicy sauce. Challenge accepted?' },
    { productKey: 'n2', name: 'Buldak Pink',       price: 180, unit: '1 pc', stock: 100, badge: 'Popular', category: categoryMap['Noodles & Instant Food'], description: 'Buldak Pink — mildly spicy rose flavour ramen from Korea. Creamy, tangy, and addictive.' },
    { productKey: 'n3', name: 'Buldak Yellow',     price: 180, unit: '1 pc', stock: 100,                   category: categoryMap['Noodles & Instant Food'], description: 'Buldak Yellow — curry-flavoured Korean fire noodles with a warming, aromatic kick.' },
    { productKey: 'n4', name: 'Maggi Masala Cup',  price: 30,  unit: '70g',  stock: 100, badge: 'Popular', category: categoryMap['Noodles & Instant Food'], description: 'Maggi Masala Cup — the beloved 2-minute noodle cup. Just add hot water and slurp away.' },
    { productKey: 'n5', name: 'Maggi Curry Flavour',price: 14, unit: '70g',  stock: 100,                   category: categoryMap['Noodles & Instant Food'], description: 'Maggi Curry Flavour — classic Maggi noodles with a fragrant curry twist.' },
    { productKey: 'n6', name: 'MTR Poha',          price: 45,  unit: '80g',  stock: 100,                   category: categoryMap['Noodles & Instant Food'], description: 'MTR Poha — ready-made poha mix for a quick, authentic South Indian breakfast in minutes.' },
    { productKey: 'n7', name: 'MTR Upma',          price: 45,  unit: '80g',  stock: 100,                   category: categoryMap['Noodles & Instant Food'], description: 'MTR Upma — traditional South Indian upma mix. Fluffy, savoury, and ready in 5 minutes.' },
    { productKey: 'n8', name: 'Yippee Noodles',    price: 14,  unit: '70g',  stock: 100, badge: 'Popular', category: categoryMap['Noodles & Instant Food'], description: "Yippee Noodles — Sun Feast's popular wavy noodles in a tangy, spicy masala broth." },

    // ── Bakery & Biscuits ────────────────────────────────────────────────────
    { productKey: 'b1',  name: 'Chocolate Cookie',  price: 30, unit: '75g',  stock: 100, badge: 'Popular', category: categoryMap['Bakery & Biscuits'], description: 'Chocolate Chip Cookie — crispy, golden cookies loaded with milk chocolate chips.' },
    { productKey: 'b2',  name: 'Desire Butter',     price: 20, unit: '100g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: 'Desire Butter Cookies — light, melt-in-your-mouth butter biscuits with a delicate sweetness.' },
    { productKey: 'b3',  name: 'Moms Magic',        price: 25, unit: '100g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: "Mom's Magic — crisp and lightly sweetened biscuits perfect for dunking in chai." },
    { productKey: 'b4',  name: 'Fifty Fifty',       price: 20, unit: '66g',  stock: 100, badge: 'Popular', category: categoryMap['Bakery & Biscuits'], description: "Fifty Fifty — Britannia's beloved sweet and salted biscuit combo. Addictively balanced." },
    { productKey: 'b5',  name: 'Marie Gold',        price: 25, unit: '250g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: 'Marie Gold — classic thin biscuits with a subtle sweetness. A timeless chai companion.' },
    { productKey: 'b6',  name: 'Jim Jam',           price: 20, unit: '100g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: 'Jim Jam — cream-filled biscuits with a fruity, jammy centre. A childhood favourite.' },
    { productKey: 'b7',  name: 'Little Hearts',     price: 20, unit: '75g',  stock: 100, badge: 'Popular', category: categoryMap['Bakery & Biscuits'], description: 'Little Hearts — heart-shaped puff pastry biscuits with a delicate, buttery crunch.' },
    { productKey: 'b8',  name: 'Milk Bikis',        price: 10, unit: '56g',  stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: 'Milk Bikis — nutritious milk biscuits enriched with calcium. A kids snack staple.' },
    { productKey: 'b9',  name: 'Nutri Choice',      price: 30, unit: '100g', stock: 100, badge: 'Healthy', category: categoryMap['Bakery & Biscuits'], description: 'NutriChoice — digestive biscuits baked with whole grains and zero trans-fat. Guilt-free snacking.' },
    { productKey: 'b10', name: 'Bourbon',           price: 20, unit: '100g', stock: 100, badge: 'Popular', category: categoryMap['Bakery & Biscuits'], description: 'Bourbon — two dark cocoa biscuits sandwiching a rich chocolate cream. A classic treat.' },
    { productKey: 'b11', name: 'Happy Happy Oreo',  price: 20, unit: '120g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: 'Happy Happy Oreo — double-stuffed cream cookies in a fun pack. More cream, more fun.' },
    { productKey: 'b12', name: 'Hide & Seek',       price: 30, unit: '100g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: 'Hide & Seek — chocolate chip cookies with a satisfying crunch from Parle.' },
    { productKey: 'b13', name: 'Unibic Chocolate',  price: 40, unit: '75g',  stock: 100, badge: 'Premium', category: categoryMap['Bakery & Biscuits'], description: 'Unibic Chocolate Chip — premium choco-chip cookies baked with real chocolate.' },
    { productKey: 'b14', name: 'Unibic Fruit & Nut',price: 40, unit: '75g',  stock: 100, badge: 'Premium', category: categoryMap['Bakery & Biscuits'], description: 'Unibic Fruit & Nut — premium cookies loaded with dry fruits, nuts, and rich flavour.' },
    { productKey: 'b15', name: 'Oreo Original',     price: 20, unit: '120g', stock: 100, badge: 'Popular', category: categoryMap['Bakery & Biscuits'], description: 'Oreo Original — the iconic chocolate sandwich cookie with sweet cream filling. Twist, lick, dunk.' },
    { productKey: 'b16', name: 'Oreo Strawberry',   price: 20, unit: '120g', stock: 100,                   category: categoryMap['Bakery & Biscuits'], description: "Oreo Strawberry — Oreo's classic format with a sweet strawberry cream twist." },

    // ── Sweet Tooth ──────────────────────────────────────────────────────────
    { productKey: 's1',  name: 'Cornetto Choco',      price: 50,  unit: '1 pc',   stock: 100, badge: 'Popular', category: categoryMap['Sweet Tooth'], description: 'Cornetto Choco — classic waffle cone filled with creamy chocolate ice cream and a chocolate tip.' },
    { productKey: 's2',  name: 'Cornetto Blue',       price: 50,  unit: '1 pc',   stock: 100,                   category: categoryMap['Sweet Tooth'], description: 'Cornetto Blue — a blueberry-flavoured cone ice cream with a fruity, creamy swirl.' },
    { productKey: 's3',  name: 'Magnum',              price: 90,  unit: '1 pc',   stock: 100, badge: 'Premium', category: categoryMap['Sweet Tooth'], description: 'Magnum — premium chocolate-coated vanilla ice cream bar. Pure indulgence on a stick.' },
    { productKey: 's4',  name: 'Ferrero Rocher',      price: 199, unit: '16 pcs', stock: 100, badge: 'Premium', category: categoryMap['Sweet Tooth'], description: 'Ferrero Rocher — luxurious hazelnut chocolates in a golden wrapper. The gift of elegance.' },
    { productKey: 's5',  name: 'KitKat Biscoff',      price: 60,  unit: '1 pc',   stock: 100,                   category: categoryMap['Sweet Tooth'], description: 'KitKat Biscoff — KitKat with a Lotus Biscoff caramel wafer twist. Break. Enjoy.' },
    { productKey: 's6',  name: 'KitKat Cookie Crumble',price: 60, unit: '1 pc',   stock: 100,                   category: categoryMap['Sweet Tooth'], description: 'KitKat Cookie Crumble — chocolate-coated wafer bar with a cookie crumble crunch.' },
    { productKey: 's7',  name: 'Oreo Bites',          price: 50,  unit: '75g',    stock: 100, badge: 'New',     category: categoryMap['Sweet Tooth'], description: 'Oreo Bites — bite-sized Oreo crunch balls coated in creamy chocolate.' },
    { productKey: 's8',  name: 'Snickers Minis',      price: 99,  unit: '162g',   stock: 100, badge: 'Popular', category: categoryMap['Sweet Tooth'], description: 'Snickers Minis — miniature peanut, caramel, and nougat chocolate bars. Share the joy.' },
    { productKey: 's9',  name: 'Toblerone',           price: 180, unit: '100g',   stock: 100, badge: 'Premium', category: categoryMap['Sweet Tooth'], description: 'Toblerone — the iconic Swiss milk chocolate bar with honey-almond nougat in every triangular peak.' },
    { productKey: 's10', name: 'Twix',                price: 60,  unit: '50g',    stock: 100,                   category: categoryMap['Sweet Tooth'], description: 'Twix — caramel and biscuit dipped in milk chocolate. Perfect for sharing (if you want to).' },
    { productKey: 's11', name: 'Kinder Joy',          price: 40,  unit: '1 pc',   stock: 100, badge: 'Popular', category: categoryMap['Sweet Tooth'], description: 'Kinder Joy — a surprise toy inside a creamy chocolate egg. Kids absolutely love it.' },
    { productKey: 's12', name: 'Mars Minis',          price: 99,  unit: '162g',   stock: 100,                   category: categoryMap['Sweet Tooth'], description: 'Mars Minis — miniature chocolate bars with caramel and nougat. Irresistible in small doses.' },
    { productKey: 's13', name: 'Bounty',              price: 60,  unit: '57g',    stock: 100,                   category: categoryMap['Sweet Tooth'], description: 'Bounty — tender coconut and milk chocolate combo. A tropical treat in every bite.' },
    { productKey: 's14', name: 'Rafaello',            price: 299, unit: '150g',   stock: 100, badge: 'Premium', category: categoryMap['Sweet Tooth'], description: 'Raffaello — delicate coconut and almond pralines wrapped in white chocolate. Pure luxury.' },

    // ── Atta, Rice & Dal ─────────────────────────────────────────────────────
    { productKey: 'ar1', name: 'Aashirvaad Atta',    price: 280, unit: '5kg',  stock: 100, badge: 'Popular', category: categoryMap['Atta, Rice & Dal'], description: 'Aashirvaad Atta — freshly milled whole wheat flour for soft, nutritious rotis every day.' },
    { productKey: 'ar2', name: 'Bhog Atta',          price: 240, unit: '5kg',  stock: 100,                   category: categoryMap['Atta, Rice & Dal'], description: 'Bhog Atta — finely milled chakki atta with no added preservatives. Classic rotis, every time.' },
    { productKey: 'ar3', name: 'Daawat Brown Rice',  price: 180, unit: '1kg',  stock: 100, badge: 'Healthy', category: categoryMap['Atta, Rice & Dal'], description: 'Daawat Brown Rice — nutty, fibre-rich brown rice with a low glycaemic index for healthier meals.' },
    { productKey: 'ar4', name: 'India Gate Basmati', price: 320, unit: '1kg',  stock: 100, badge: 'Premium', category: categoryMap['Atta, Rice & Dal'], description: 'India Gate Basmati — extra-long grain premium basmati rice with a fragrant, aromatic quality.' },
    { productKey: 'ar5', name: 'Masoor Dal',         price: 120, unit: '500g', stock: 100,                   category: categoryMap['Atta, Rice & Dal'], description: 'Masoor Dal — red lentils that cook quickly and are rich in protein and iron.' },
    { productKey: 'ar6', name: 'Moong Dal',          price: 130, unit: '500g', stock: 100, badge: 'Popular', category: categoryMap['Atta, Rice & Dal'], description: "Moong Dal — split green gram that's light on the stomach and high in nutrients." },
    { productKey: 'ar7', name: 'Toor Dal',           price: 110, unit: '500g', stock: 100,                   category: categoryMap['Atta, Rice & Dal'], description: 'Toor Dal — yellow pigeon peas, the base of classic dal tadka. A pantry essential.' },
    { productKey: 'ar8', name: 'Urad Dal',           price: 115, unit: '500g', stock: 100,                   category: categoryMap['Atta, Rice & Dal'], description: 'Urad Dal — black gram dal used in dal makhani and idli/dosa batter. Protein-packed.' },
    { productKey: 'ar9', name: 'Saffola Masala Oats',price: 75,  unit: '39g',  stock: 100, badge: 'Healthy', category: categoryMap['Atta, Rice & Dal'], description: 'Saffola Masala Oats — a savoury, flavourful oats mix ready in 3 minutes. Healthy never tasted this good.' },

    // ── Sauces & Spreads ─────────────────────────────────────────────────────
    { productKey: 'sc1',  name: 'Heinz BBQ Sauce',      price: 299, unit: '875ml', stock: 100, badge: 'Popular', category: categoryMap['Sauces & Spreads'], description: 'Heinz BBQ Sauce — bold, smoky barbecue sauce perfect for grilling, dipping, and marinades.' },
    { productKey: 'sc2',  name: 'Hershey Strawberry',   price: 120, unit: '200ml', stock: 100,                   category: categoryMap['Sauces & Spreads'], description: "Hershey's Strawberry Syrup — sweet strawberry sauce for ice cream, pancakes, or milkshakes." },
    { productKey: 'sc3',  name: 'Hershey Caramel',      price: 120, unit: '200ml', stock: 100,                   category: categoryMap['Sauces & Spreads'], description: "Hershey's Caramel Syrup — rich, golden caramel drizzle for desserts and beverages." },
    { productKey: 'sc4',  name: 'Hershey Chocolate',    price: 120, unit: '200ml', stock: 100, badge: 'Popular', category: categoryMap['Sauces & Spreads'], description: "Hershey's Chocolate Syrup — the classic chocolate drizzle for sundaes, brownies, and hot cocoa." },
    { productKey: 'sc5',  name: 'Heinz Hot Chilli Sauce',price: 199, unit: '300ml', stock: 100, badge: 'Spicy',   category: categoryMap['Sauces & Spreads'], description: 'Heinz Hot Chilli Sauce — fiery, tangy chilli sauce to spice up any dish or dip.' },
    { productKey: 'sc6',  name: 'Heinz Mayonnaise',     price: 179, unit: '400ml', stock: 100,                   category: categoryMap['Sauces & Spreads'], description: 'Heinz Mayonnaise — creamy, thick mayo made with real eggs. Perfect for sandwiches and dips.' },
    { productKey: 'sc7',  name: "Rao's Pasta Sauce",    price: 599, unit: '680g',  stock: 100, badge: 'Premium', category: categoryMap['Sauces & Spreads'], description: "Rao's Arrabbiata — authentic Italian pasta sauce with a spicy tomato base. Restaurant quality at home." },
    { productKey: 'sc8',  name: 'Heinz Tandoori Mayo',  price: 179, unit: '400ml', stock: 100,                   category: categoryMap['Sauces & Spreads'], description: 'Heinz Tandoori Mayo — a spiced, smoky tandoori-flavoured mayo for wraps and sandwiches.' },
    { productKey: 'sc9',  name: "Rao's Tomato Basil",   price: 599, unit: '680g',  stock: 100, badge: 'Premium', category: categoryMap['Sauces & Spreads'], description: "Rao's Tomato Basil — slow-simmered marinara with fresh basil and premium Italian tomatoes." },
    { productKey: 'sc10', name: 'Heinz Tomato Ketchup', price: 149, unit: '450ml', stock: 100, badge: 'Popular', category: categoryMap['Sauces & Spreads'], description: "Heinz Tomato Ketchup — the world-famous ketchup. Perfect for everything from fries to momos." },
    { productKey: 'sc11', name: 'Heinz Yellow Mustard', price: 199, unit: '395ml', stock: 100,                   category: categoryMap['Sauces & Spreads'], description: 'Heinz Yellow Mustard — classic American-style yellow mustard. Sharp, tangy, and bold.' },

    // ── Baby Care ────────────────────────────────────────────────────────────
    { productKey: 'bc1', name: 'Baby Rub',            price: 199, unit: '50g',   stock: 100, badge: 'Popular', category: categoryMap['Baby Care'], description: 'Baby Rub — gentle vapour rub specially formulated for babies to relieve congestion and cold symptoms.' },
    { productKey: 'bc2', name: 'Johnson Aloe Powder', price: 149, unit: '200g',  stock: 100,                   category: categoryMap['Baby Care'], description: "Johnson's Aloe Powder — soft talc-free powder with aloe vera for baby's delicate skin." },
    { productKey: 'bc3', name: 'Johnson Baby Cream',  price: 129, unit: '200g',  stock: 100, badge: 'Popular', category: categoryMap['Baby Care'], description: "Johnson's Baby Cream — mild, hypoallergenic moisturising cream that keeps baby skin soft and healthy." },
    { productKey: 'bc4', name: 'Johnson Baby Oil',    price: 179, unit: '200ml', stock: 100,                   category: categoryMap['Baby Care'], description: "Johnson's Baby Oil — pure, gentle mineral oil for baby massage. Nourishes and softens skin." },
    { productKey: 'bc5', name: 'Johnson Baby Powder', price: 149, unit: '200g',  stock: 100,                   category: categoryMap['Baby Care'], description: "Johnson's Baby Powder — classic, clinically proven gentle powder for everyday freshness." },
    { productKey: 'bc6', name: 'Johnson Baby Wipes',  price: 199, unit: '80 pcs',stock: 100, badge: 'Popular', category: categoryMap['Baby Care'], description: "Johnson's Baby Wipes — soft, alcohol-free wipes with aloe vera for gentle everyday cleaning." },
    { productKey: 'bc7', name: 'Pampers Diapers',     price: 699, unit: '40 pcs',stock: 100, badge: 'Premium', category: categoryMap['Baby Care'], description: 'Pampers Diapers — ultra-soft, highly absorbent diapers with a snug fit for leak-free comfort.' },
    { productKey: 'bc8', name: 'Pampers Baby Wipes',  price: 249, unit: '72 pcs',stock: 100,                   category: categoryMap['Baby Care'], description: 'Pampers Baby Wipes — triple clean formula wipes that are gentle on skin and tough on mess.' },
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');

        await Product.deleteMany({});
        await Category.deleteMany({});
        console.log('Cleared existing data');

        const insertedCategories = await Category.insertMany(categories);
        console.log(`Seeded ${insertedCategories.length} categories`);

        const categoryMap = {};
        insertedCategories.forEach((cat) => { categoryMap[cat.name] = cat._id; });

        const products = getProducts(categoryMap);
        const insertedProducts = await Product.insertMany(products);
        console.log(`Seeded ${insertedProducts.length} products`);

        // Print the PRODUCT_ID_MAP for frontend
        console.log('\n=== PRODUCT_ID_MAP (copy into your frontend) ===');
        console.log('const PRODUCT_ID_MAP = {');
        insertedProducts.forEach((p) => {
            console.log(`    '${p.productKey}': '${p._id}',`);
        });
        console.log('};');

        await mongoose.disconnect();
        console.log('\nDone!');
    } catch (err) {
        console.error('Seed error:', err.message);
        process.exit(1);
    }
};

seedDB();