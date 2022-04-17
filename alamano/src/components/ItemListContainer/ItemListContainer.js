import ItemList from '../ItemList/ItemList.js'
import React, { useState, useEffect } from 'react';
import { getItemsByCategory } from '../../services/products_service';
import { useParams, useNavigate } from 'react-router-dom';

const ItemListContainer = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        (async () => {
            const products = await getItemsByCategory(category);
            products.length ? setProducts(products) : navigate('/');
        })()
    }, [category]);

    return (
        <ItemList products={products} />
    )

}

export default ItemListContainer;