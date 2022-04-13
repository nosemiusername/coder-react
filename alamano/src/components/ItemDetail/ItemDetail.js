import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import { Grid } from '@mui/material';
import './ItemDetail.css';
import { useState, useEffect, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ detail }) => {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [showItemCount, setShowItemCount] = useState(true);
    const [count, setCount] = useState(1);

    const handleOpen = (e, count) => {
        e.stopPropagation();
        setOpen(true);
        setCount(count);
    }

    const handleClose = () => {
        addItem({ ...detail, quantity: count });
        setOpen(false);
        setShowItemCount(false);

    }

    const goToCart = () => {
        navigate('/cart');
    }

    const showItemCountSnippet = () => {
        return (
            (showItemCount) ? (
                <ItemCount stock={detail.stock} handleOpen={handleOpen} />
            ) : (
                <CardActions>
                    <Button size="small" sx={{ color: "#F43D53" }} onClick={() => goToCart()}>Terminar Compra</Button>
                </CardActions>
            )
        )
    }

    useEffect(() => {

    }, [setOpen])

    return (

        <Grid
            container
            justifyContent="space-around"
            spacing={6}
        >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Agregando al Carro"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Desea agregar {count} unidades de este producto al carro?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: "#F43D53" }}>Ok</Button>
                </DialogActions>
            </Dialog>
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
                    {showItemCountSnippet()}
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