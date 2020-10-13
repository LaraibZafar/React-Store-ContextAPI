import { createContext } from 'react';

const CartContext = createContext({
    isHidden: true,
    toggleHidden: () => { }
});

export default CartContext;