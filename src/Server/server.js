import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";




dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://my-agroprime-app.onrender.com/api" }));

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
      success_url: "https://my-agroprime-app.onrender.com/api/ViewOrders",
      cancel_url: "https://my-agroprime-app.onrender.com/api/cart",
      customer_email: email,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));


