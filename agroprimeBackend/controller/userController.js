const User = require('../model/User');
const Order = require('../model/order');

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

module.exports={storeUser,loginUser,createOrder,getUserOrders,updateUser,getUserForAdmin,getOrderForAdmin}