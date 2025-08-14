const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const Stripe = require('stripe')
dotenv.config();
 
const app=express();
app.use(cors());
app.use(express.json())
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use('/api',userRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
}) 