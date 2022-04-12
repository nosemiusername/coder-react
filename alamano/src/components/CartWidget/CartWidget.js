import './CartWidget.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';

const CartWidget = () => {
    const { cartLenght } = useContext(CartContext);

    useEffect(() => {
    }, [cartLenght]);

    return (
        <>
            <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <span>{cartLenght}</span>
        </>
    )

}

export default CartWidget;