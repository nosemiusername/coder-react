import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import { Grid } from '@mui/material';

const ItemDetail = ({ detail }) => {
    const countSetting = { initial: 1, stock: detail.stock };
    return (

        <Grid container>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={detail.pictureUrl}
                        alt={detail.title}
                    />
                    <CardContent>
                        <Typography sx={{ color: '#353535' }} gutterBottom variant="h5" component="div">
                            {detail.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            Despacho en {detail.deliveryTime} días
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            {detail.description}
                        </Typography>
                        <Typography style={{ fontWeight: 600 }}>
                            ${detail.price}
                        </Typography>
                    </CardContent>
                    <ItemCount {...countSetting} />
                </Card>
            </Grid>
        </Grid>
    );
}

export default ItemDetail;