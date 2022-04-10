import { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartLenght, setCartLenght] = useState(0);

    const addItem = (item) => {
        isInCart(item) ? updateItem(item) : setCart(cart => [...cart, item]);
        setCartLenght(cart.reduce((acc, item) => acc + item.quantity, 0));
        console.log(cart);
    }

    const updateItem = (item) => {
        const result = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + item.quantity,
                }
            }
            return cartItem;
        });
        setCart(result);
    }

    const removeItem = (item) => {
        setCart(cart.filter((i) => i.id !== item.id));
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (item) => {
        return !cart.length ? false : cart.some((i) => i.id === item.id);
    }

    const data = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        cartLenght,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;