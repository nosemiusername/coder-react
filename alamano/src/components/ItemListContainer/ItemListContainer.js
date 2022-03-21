import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (greeting) => {

    const countSetting = { initial: 1, stock: 10 };
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={greeting.src}
                alt="Cuadro"
            />
            <CardContent>
                <Typography sx={{ color: '#353535' }} gutterBottom variant="h5" component="div">
                    {greeting.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="text.secondary">
                    {greeting.description}
                </Typography>
            </CardContent>
            <ItemCount {...countSetting} />
        </Card>
    );

}

export default ItemListContainer;