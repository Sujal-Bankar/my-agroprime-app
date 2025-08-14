const express = require('express');
const { storeUser, loginUser, createOrder, getUserOrders, updateUser, getUserForAdmin, getOrderForAdmin, getOneUserForAdmin, deleteProductForAdmin } = require('../controller/userController');
const routes = express.Router();

routes.post('/signup',storeUser);
routes.post('/login',loginUser);
routes.post('/order',createOrder);
routes.get('/order/:email',getUserOrders);
routes.post('/resetpassword/:email',updateUser);
routes.get('/getAllUsers',getUserForAdmin)
routes.get('/getAllOrders',getOrderForAdmin)
routes.get('/getOneUser/:email',getOneUserForAdmin)
routes.get('/deleteProduct/:email',deleteProductForAdmin)


app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items, email } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map(item => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.name },
          unit_amount: item.amount,
        },
        quantity: item.quantity,
      })),
      success_url: "https://my-agroprime-app.onrender.com/ViewOrders",
      cancel_url: "https://my-agroprime-app.onrender.com/cart",
      customer_email: email,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = routes; 