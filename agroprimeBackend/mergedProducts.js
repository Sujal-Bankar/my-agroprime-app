const cashCrops = require("./productData/cashcropsProducts");
const agroProducts = require("./productData/agroProducts");
const allProductsList = require("./productData/allProducts");
const fertilizerProducts = require("./productData/fertilizerProducts");
const seedProducts = require("./productData/seedProducts");

module.exports = [
  ...cashCrops,
  ...agroProducts,
  ...allProductsList,
  ...fertilizerProducts,
  ...seedProducts
];
