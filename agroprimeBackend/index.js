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
const stripe = new Stripe(sk_test_51RvdUQKFwmFPDNtxrap0ObRhKLSjFsnyJmW6TRJRHZ3H8iMxY2nLNYdZ6P1LxENdWrdQrTMEvi9ooB9CBaFRSI3L00lVRb9CPQ);

app.use('/api',userRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
}) 