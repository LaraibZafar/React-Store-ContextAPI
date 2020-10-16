import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, getCartItemCount, removeItemFromCart, clearCartItems } from './cart.utils';

export const CartContext = createContext({
    isHidden: true,
    cartItems: [],
    cartItemsCount: 0,
    toggleHidden: () => { },
    addItem: () => { },
    removeItem: () => { },
    clearItem: () => { }
});

const CartProvider = ({ children }) => {
    const [isHidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => { setCartItemsCount(getCartItemCount(cartItems)) }, [cartItems]);

    const toggleHidden = () => setHidden(!isHidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = item => setCartItems(clearCartItems(cartItems, item));
    return <CartContext.Provider value={{
        isHidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItem,
        cartItemsCount
    }}>{children}</CartContext.Provider>
}

export default CartProvider;