import Item from '../Item/Item';
import React, { useState, useEffect } from 'react';
import loadProduct from '../../services/products_service';
import Grid from '@mui/material/Grid';
const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const products = await loadProduct(1000);
            setProducts(products);
        }
        fetchData();
    }, []);

    return (
        <Grid container>
            {products.map(product => <Item key={product.id} product={product} />)}
        </Grid>
    )

}

export default ItemList