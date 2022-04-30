import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { InputLabel, FormControl, Input, Button } from "@mui/material";
import { payOrder } from "../services/products_service";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CartContext from "../context/CartContext";

const Checkout = () => {
    const { clear } = useContext(CartContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { order } = useParams();
    const goToPayment = async (e) => {
        e.preventDefault();
        const result = await payOrder(order);
        console.log(result);
        if (result) {
            localStorage.removeItem("cart");
            clear();
            setOpen(true);
        }
    }
    const handleClose = () => {
        navigate('/');
    }

    useEffect(() => {

    }, [open]);

    return (
        <Container >
            <Typography variant="h4" component="h1" gutterBottom>
                Checkout
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                Order {order}
            </Typography>
            <form onSubmit={goToPayment}>
                <Box m={2}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="card">Card Number</InputLabel>
                        <Input id="card" />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="expiry">Expiry</InputLabel>
                        <Input id="expiry" />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="cvc">CVC</InputLabel>
                        <Input id="cvc" />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <Button type="submit" variant="contained" color="primary"> Pagar </Button>
                </Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Pago Exitoso"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Su pago ha sido realizado con éxito.
                            En breve le notificaremos por Correo Electrónico.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} sx={{ color: "#F43D53" }}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Container>
    );
};


export default Checkout;