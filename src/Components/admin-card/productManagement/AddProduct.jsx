import React, { useState } from "react";
import "../../../Css/AddProduct.css";
import logo from "../../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
const navigate = useNavigate();

  const [product, setProduct] = useState({
    category:"",
    name: "",
    description: "",
    price: "",
    unit:"",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://my-agroprime-app.onrender.com/api/addProduct',
            {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
            }
            );
        const data = await response.json();
        if(response.ok){

            alert('Product Added Successfully...');
        }
    } catch (error) {
        console.log(error);        
    }
    setProduct({ category:"",name: "", description: "", price: "",unit:"", image: "" });
  };

  return (
    <>
      <nav className="admin-navbar">
        <img src={logo} alt="Logo" className="logo" />
               <div onClick={()=>navigate("/AdminMain")} className="nav-title">Admin Dashboard</div>
      </nav>

      <div className="add-product-container">
        <h2>Add a New Product</h2>
        <form className="add-product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Product Category"
            required
          />
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="4"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Product Price"
            required
          />
          
          <input
            type="text"
            name="unit"
            value={product.unit}
            onChange={handleChange}
            placeholder="Product Unit"
            required
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
