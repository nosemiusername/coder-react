import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import { Grid } from '@mui/material';
import './ItemDetail.css';
const ItemDetail = ({ detail }) => {
    const countSetting = { initial: 1, stock: detail.stock };
    return (


        <Grid
            container
            justifyContent="space-around"
            spacing={6}
        >
            <Grid item xs={6}>
                <img className="grid-img" src={detail.pictureUrl} alt={detail.name} />
            </Grid>
            <Grid item xs={6}>
                <Card sx={{ maxWidth: 345 }}>
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
                        <Typography style={{ fontWeight: 800, color: '#F43D53' }}>
                            ${detail.price}
                        </Typography>
                    </CardContent>
                    <ItemCount {...countSetting} />
                    <CardContent>
                        <Typography sx={{ color: '#353535' }} gutterBottom variant="h6" component="div">
                            Detalles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            DIMENSIONES: {detail.size}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            COLOR: {detail.color}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            MATERIAL: {detail.material}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            DISEÑADO POR: {detail.author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="div">
                            CODIGO: {detail.code}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ItemDetail;