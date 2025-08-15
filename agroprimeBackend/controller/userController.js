const User = require('../model/User');
const Order = require('../model/order');
const Product = require('../model/product');

const storeUser = async(req,res) =>{
    try {
    const { name, email,password,phoneno } = req.body;
        console.log(req.body);
        
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userData = new User({ name, email ,password, phoneno });
    await userData.save();

    res.status(200).json({ message: "Signup successful", user: userData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }

}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({email});

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords (⚠️ This assumes plain-text for now)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};

const updateUser = async (req,res) =>{
  const {email,password}=req.body;
   try{
        const updateData = await User.findOneAndUpdate({email},{password},{new:true});
        if(updateData){
            return res.status(200).json({Message:"data updated successfully",updateData});
        }
        return res.status(400).json({Message:"data not updated"});
    }
    catch(error){
        return res.status(500).json({Message:error.message});
    }
}

const createOrder = async (req, res) => {
  const { email, items,shippingInfo, totalAmount } = req.body;

  try {
    const order = new Order({ email, items,shippingInfo, totalAmount });
    await order.save();
    res.status(200).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ message: "Order failed", error: err });
  }
};

const getUserOrders = async (req, res) => {
  const email = req.params.email;

  try {
    const orders = await Order.find({ email});
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

const getUserForAdmin = async(req,res)=>{
  const user = await User.find();
  try {
    if(user){
      return res.status(200).json(user);
    }
    return res.status(400).json("Not Done");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getOrderForAdmin = async (req,res) =>{
  const order = await Order.find();
  try {
    if(order){
      return res.status(200).json(order);
      }
      return res.status(400).json("Not Done");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
const getOneUserForAdmin = async(req,res)=>{
  const email = req.params.email;
  const user = await User.findOne({email});
  try {
    if(user){
      return res.status(200).json(user);
    }
    return res.status(400).json("Not Done");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
const DeleteOneUserForAdmin = async(req,res)=>{
  const email = req.params.email;
  const user = await User.findOneAndDelete({email});
  try {
    if(user){
      return res.status(200).json("Deleted");
    }
    return res.status(400).json("Not Done");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
const deleteOrderForAdmin = async(req,res)=>{
  const id = req.params.id;
  const order = await Order.findOneAndDelete({id});
  try {
    if(order){
      return res.status(200).json(order);
    }
    return res.status(400).json("Not Done");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const makePayment = async (req,res)=>{
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
      cancel_url: "https://my-agroprime-app.onrender.com/api/ProductDetails",
      customer_email: email,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
const getAllProducts = async(req,res)=>{
  const product = await Product.find();
  try {
    if(product){
      return res.status(200).json(product);
    }
    return res.status(400).json("Not Done");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const addProduct = async(req,res)=>{
  const { } = req.body;

  try {
    const product = new Product({});
    await product.save();
    res.status(200).json({ message: "Product Added", product });
  } catch (err) {
    res.status(500).json({ message: "Product Not Added", error: err });
  } 
}
module.exports={storeUser,
  loginUser,
  createOrder,
  getUserOrders,
  updateUser,
  getUserForAdmin,
  getOrderForAdmin,
  getOneUserForAdmin,
  deleteOrderForAdmin,
  makePayment,
  DeleteOneUserForAdmin,
  getAllProducts,
  addProduct
}