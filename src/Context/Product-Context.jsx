import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../assets/Products';

export const ProductContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ProductContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
    };

    const updateCartAmount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }));
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartAmount}


    

return (
<ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>
);
};
