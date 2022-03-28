import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import truncate from '../../helpers/index';

const Item = ({ product }) => {

    const countSetting = { initial: 1, stock: product.stock };
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.pictureUrl}
                alt={product.title}
            />
            <CardContent>
                <Typography sx={{ color: '#353535' }} gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="text.secondary">
                    {truncate(product.description, 85)}
                </Typography>
                <Typography style={{ fontWeight: 600 }}>
                    ${product.price}
                </Typography>
            </CardContent>
            <ItemCount {...countSetting} />
        </Card>
    );
}

export default Item;