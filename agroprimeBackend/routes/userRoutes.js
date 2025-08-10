const express = require('express');
const { storeUser, loginUser, createOrder, getUserOrders, updateUser } = require('../controller/userController');
const routes = express.Router();

routes.post('/signup',storeUser);
routes.post('/login',loginUser);
routes.post('/order',createOrder);
routes.get('/order/:email',getUserOrders);
routes.post('/resetpassword/:email',updateUser);

module.exports = routes; 