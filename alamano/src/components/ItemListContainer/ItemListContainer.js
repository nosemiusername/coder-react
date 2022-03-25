import ItemList from '../ItemList/ItemList.js'
import React, { useState, useEffect } from 'react';
import loadProduct from '../../services/products_service';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const products = await loadProduct(1000);
            setProducts(products);
            console.log(products);

        }
        fetchData();
    }, []);

    return (
        <ItemList products={products} />
    )

}

export default ItemListContainer;