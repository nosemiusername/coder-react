import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';


const Item = ({ product }) => {
    const [disableCart, setDisableCart] = useState(false);
    const { addItem, remainingItems, cart } = useContext(CartContext);

    const handleClick = async (event) => {
        event.preventDefault();
        addItem({ ...product, quantity: 1 });

    }

    useEffect(async () => {

        async function 
        const result = await remainingItems(product.id);
        if (result === 0) {
            setDisableCart(true);
        }
    }, [cart])

    return (

        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/item/${product.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.pictureUrl}
                    alt={product.title}
                />
            </Link>
            <CardContent>
                <Typography sx={{ color: '#353535' }} gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography style={{ fontWeight: 600 }}>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disabled={disableCart} onClick={handleClick} size="small" sx={{ color: "#F43D53" }}> <ShoppingCartIcon></ShoppingCartIcon>Agregar al carrito</Button>
            </CardActions>
        </Card >
    );
}

export default Item;