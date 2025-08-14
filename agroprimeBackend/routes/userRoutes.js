const express = require('express');
const { storeUser, loginUser, createOrder, getUserOrders, updateUser, getUserForAdmin, getOrderForAdmin, getOneUserForAdmin, deleteProductForAdmin, makePayment } = require('../controller/userController');
const routes = express.Router();

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
routes.get('/deleteProduct/:email',deleteProductForAdmin)

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


module.exports = routes; 