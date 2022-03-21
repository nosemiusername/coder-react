import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ItemListContainer = (greeting) => {


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
            <CardActions>
                <Button size="small" sx={{ color: "#F43D53" }} >Comprar</Button>
                <Button size="small" sx={{ color: "#F43D53" }}>Ver más</Button>
            </CardActions>
        </Card>
    );

}

export default ItemListContainer;