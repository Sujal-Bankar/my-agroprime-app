const mongoose = require("mongoose");
const Product = require("./model/product");
const allProducts = require("./mergedProducts");
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // Clear old products
    await Product.deleteMany({});
    console.log("🗑 Old products removed");

    // Format prices to numbers
    const formattedProducts = allProducts.map(p => ({
      ...p,
      price: parseFloat(p.price.replace(/[^0-9.]/g, "")),
    }));

    // Insert products
    await Product.insertMany(formattedProducts);
    console.log(`✅ ${formattedProducts.length} products inserted successfully`);

    process.exit();
  } catch (err) {
    console.error("❌ Error inserting products:", err);
    process.exit(1);
  }
})();
