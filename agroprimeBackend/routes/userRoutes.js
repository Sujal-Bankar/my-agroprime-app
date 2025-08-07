const express = require('express');
const { storeUser, loginUser, createOrder, getUserOrders } = require('../controller/userController');
const routes = express.Router();

routes.post('/signup',storeUser);
routes.post('/login',loginUser);
routes.post('/order',createOrder);
routes.get('/order/:email',getUserOrders);

module.exports = routes; 