const express = require('express');
const { storeUser, loginUser, createOrder, getUserOrders, updateUser, getUserForAdmin, getOrderForAdmin, getOneUserForAdmin, deleteProductForAdmin, makePayment, DeleteOneUserForAdmin, deleteOrderForAdmin, getAllProducts, addProduct, removeProduct, getAllProductsWihtoutCategory } = require('../controller/userController');
const routes = express.Router();
const Product = require('../model/product');
const User = require('../model/User');
const Order = require('../model/order');

const { Parser } = require("json2csv");
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

routes.post('/signup',storeUser);
routes.post('/login',loginUser);
routes.post('/order',createOrder);
routes.get('/order/:email',getUserOrders);
routes.post('/resetpassword/:email',updateUser);
routes.get('/getAllUsers',getUserForAdmin)
routes.get('/getAllOrders',getOrderForAdmin)
routes.get('/getOneUser/:email',getOneUserForAdmin)
routes.get('/deleteOrder/:email',deleteOrderForAdmin)
routes.get('/deleteUser/:email',DeleteOneUserForAdmin)
routes.get('/getAllProducts/:category',getAllProducts)
routes.get('/getAllProductsWithoutCategory',getAllProductsWihtoutCategory);
routes.post('/addProduct',addProduct)
routes.get('/removeProduct/:name',removeProduct)

routes.post('/create-checkout-session', async (req, res) => {
  try {
    const { items, email, shipping } = req.body;
    const shippingFee={
          price_data: {
        currency: 'inr',
        product_data: { name: 'Shipping Fee' },
        unit_amount: 120000, 
      },
      quantity: 1,
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      shipping_address_collection: { allowed_countries: ['IN'] },
      line_items:[ 
        ...items.map(item => ({
        price_data: {
          currency: 'inr',
          product_data: { name: item.name },
          unit_amount: item.amount, 
        },
        quantity: item.quantity,
      })),
      shippingFee
    ],
      success_url: "https://my-agroprime-app.vercel.app/OrderDone",
      cancel_url: "https://my-agroprime-app.vercel.app/ProductDetails",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

routes.get("/export-csv-product", async (req, res) => {
  try {
    
    const products = await Product.find().lean();

    
    const fields = ["category","name", "desc", "price","unit"];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(products);

    res.header("Content-Type", "text/csv");
    res.attachment("products.csv");
    return res.send(csv);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error exporting CSV");
  }
});

routes.get("/export-csv-user", async (req, res) => {
  try {
    
    const users = await User.find().lean();

    
    const fields = ["name","email", "password", "phno"];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(users);

    res.header("Content-Type", "text/csv");
    res.attachment("users.csv");
    return res.send(csv);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error exporting CSV");
  }
});
routes.get("/export-csv-order", async (req, res) => {
  try {
    
    const orders = await Order.find().lean();

     const flatorders = orders.map(order => ({
      OrderID: order._id,
      Email: order.email,
      CreatedAt: order.createdAt.toISOString(),
      Items: order.items.map(i => `${i.name} x${i.quantity}`).join("; "),
      TotalAmount: order.grandTotal || order.totalAmount,
      PaymentMethod: order.paymentInfo?.method || "",
      PaymentStatus: order.paymentInfo?.status || "",
      Status: order.status,
      ShippingAddress: `${order.shippingInfo.street}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.zip}, ${order.shippingInfo.country || ""}`,
      Phone: order.shippingInfo.phone
    }));
    const fields = [
      "OrderID",
      "Email",
      "CreatedAt",
      "Items",
      "TotalAmount",
      "PaymentMethod",
      "PaymentStatus",
      "Status",
      "ShippingAddress",
      "Phone"
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(flatorders);

    res.header("Content-Type", "text/csv");
    res.attachment("orders.csv");
    return res.send(csv);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error exporting CSV");
  }
});
module.exports = routes; 