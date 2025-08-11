import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemWithQty = { ...item, quantity: 1 };
        setCartItems(prev => [...prev, itemWithQty]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};
