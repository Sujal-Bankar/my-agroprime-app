const express = require('express');
const { storeUser, loginUser, createOrder, getUserOrders, updateUser, getUserForAdmin, getOrderForAdmin, getOneUserForAdmin, deleteProductForAdmin, makePayment } = require('../controller/userController');
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
routes.post('/create-checkout-session',makePayment)

module.exports = routes; 