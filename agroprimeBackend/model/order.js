const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true  
  },
  items: [
    {
      name: String,
      image: String,
      price: String,
      quantity: Number,
    } 
  ],
  shippingInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    payment: { type: String, required: true }
  },
  totalAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
