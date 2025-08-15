import React, { useState } from "react";
import "../../../Css/AddProduct.css";
import logo from "../../../images/logo.jpg";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
    alert("Product added successfully!");
    setProduct({ name: "", description: "", price: "", image: "" });
  };

  return (
    <>
      <nav className="admin-navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="nav-title">Add Product</h1>
      </nav>

      <div className="add-product-container">
        <h2>Add a New Product</h2>
        <form className="add-product-form" onSubmit={handleSubmit}>
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
