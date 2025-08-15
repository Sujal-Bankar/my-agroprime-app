const mongoose = require("mongoose");

const product = new mongoose.Schema({
  category: {
    type: String,
    required: true
  }
  ,name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String, 
    default: "General"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

product.pre("save", function(next) {
  if (typeof this.price === "string") {
    this.price = parseFloat(this.price.replace(/[^0-9.]/g, ""));
  }
  next();
});

module.exports = mongoose.model("Product", product);
