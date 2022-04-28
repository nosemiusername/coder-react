import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { getItemById } from '../services/products_service';

const CartContext = createContext();

const CartProvider = ({ children }) => {


    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const calculateCartLength = () => { return cart.reduce((sum, item) => sum + item.quantity, 0); };
    const [cartLenght, setCartLenght] = useState(calculateCartLength());


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item) => {
        isInCart(item) ? updateItem(item) : setCart(cart => [...cart, item]);
        setCartLenght(lenght => lenght + item.quantity);
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
        setCartLenght(lenght => lenght - item.quantity);

    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (item) => {
        return !cart.length ? false : cart.some((i) => i.id === item.id);
    }

    const remainingItems = async (itemId) => {
        const cartItem = cart.filter(i => i.id === itemId);
        const availableItem = await getItemById(itemId);
        const result = (typeof cartItem[0] !== 'undefined') ? availableItem.stock - cartItem[0].quantity : availableItem.stock;
        return result
    }

    const data = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        cartLenght,
        remainingItems,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;