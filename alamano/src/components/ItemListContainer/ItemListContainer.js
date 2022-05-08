import ItemList from '../ItemList/ItemList.js'
import React, { useState, useEffect } from 'react';
import { getItemsByCategory } from '../../services/products_service';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemListContainer = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const { remainingItems } = useContext(CartContext);

    const updateProductsQuantity = (products) => {
        const result = products.map((product) => {
            return {
                ...product,
                quantity: remainingItems(product.id)
            }
        });
        setProducts(result);
    }

    useEffect(() => {
        (async () => {
            const products = await getItemsByCategory(category);

            products.length ? updateProductsQuantity(products) : navigate('/');
        })()
    }, [category]);

    return (
        <ItemList products={products} />
    )

}

export default ItemListContainer;