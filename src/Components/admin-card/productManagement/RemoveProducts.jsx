import React, { useEffect, useState } from "react";
import "../../../Css/RemoveProduct.css"; // custom CSS
import logo from "../../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

const RemoveProducts = () => {
  const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://my-agroprime-app.onrender.com/api/getAllProductsWithoutCategory"
      );
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
      } else {
        console.error("Error fetching products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRemove = async (name) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(
        `https://my-agroprime-app.onrender.com/api/removeProduct/${name}`);
      if (response.ok) {
        navigate("/RemoveProduct");
      } else {
        console.error("Error deleting product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="remove-products-container">
      <nav className="admin-navbar">
              <img src={logo} alt="Logo" className="logo" />
                     <div onClick={()=>navigate("/AdminMain")} className="nav-title">Admin Dashboard</div>
            </nav>

      <div className="content">
        <h2>Product List</h2>
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>₹{product.price}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(product.name)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RemoveProducts;
