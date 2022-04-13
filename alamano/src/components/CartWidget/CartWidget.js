import './CartWidget.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext, useEffect } from 'react';

const CartWidget = () => {
    const { cartLenght } = useContext(CartContext);
    const showIcon = () => {
        return (
            <>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <span>{cartLenght}</span>
            </>
        )
    }

    useEffect(() => {
    }, [cartLenght]);

    return (
        <>
            {
                !!cartLenght && showIcon()
            }
        </>
    )

}

export default CartWidget;