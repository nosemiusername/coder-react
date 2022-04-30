import './Cart.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartContext from '../context/CartContext';
import { useContext, useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { currencyFormat } from '../helpers/index';
import { InputLabel, FormControl, Input, Button, FormHelperText } from "@mui/material";
import MuiPhoneNumber from 'material-ui-phone-number';
import { createOrder } from '../services/products_service';
import Typography from "@mui/material/Typography";

function Cart() {
    const navigate = useNavigate()
    const { cart, removeItem } = useContext(CartContext);
    const [contactInfo, setContactInfo] = useState({
        given: '',
        lastname: '',
        email: '',
        vemail: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postal: '',
    });
    const [disableButton, setDisablebutton] = useState(false);
    const [showVerifyEmailError, setShowVerifyEmailError] = useState(false);
    const calculateTotalItem = (item) => {
        return item.price * item.quantity;
    }

    const goBack = () => {
        navigate('/');
    }

    const goToCheckout = async (e) => {
        e.preventDefault();
        const order = await createOrder(cart, contactInfo);
        navigate(`/checkout/${order}`);
    }

    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value
        })
    }

    const handlePhoneChange = (value) => {
        setContactInfo({
            ...contactInfo,
            phone: value
        })
    }

    const calculateTotalCart = () => {
        return cart.reduce((acc, item) => acc + calculateTotalItem(item), 0)
    }

    useEffect(() => {
        if (Object.values(contactInfo).every(item => item !== '')) {
            setDisablebutton(false);
            if (contactInfo.email === contactInfo.vemail) {
                setDisablebutton(false);
                setShowVerifyEmailError(false);

            } else {
                setDisablebutton(true);
                setShowVerifyEmailError(true);
            }
        } else {
            setDisablebutton(true)
        }
        console.log(contactInfo)
    }, [contactInfo])

    return (

        <Container >
            {cart.length ? (
                <Container>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Checkout
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Producto</TableCell>
                                            <TableCell align="center">Precio</TableCell>
                                            <TableCell align="center">Cantidad</TableCell>
                                            <TableCell align="center">Total</TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell component="th" scope="row">{item.title}</TableCell>
                                                <TableCell align="center">{currencyFormat(item.price)}</TableCell>
                                                <TableCell align="center">{item.quantity}</TableCell>
                                                <TableCell align="center">{currencyFormat(calculateTotalItem(item))}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton aria-label="delete" onClick={() => removeItem(item)}>
                                                        <DeleteIcon >Eliminar</DeleteIcon>
                                                    </IconButton>

                                                </TableCell>
                                            </TableRow>))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                Subtotal: {currencyFormat(calculateTotalCart())}
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Resumen
                                </Typography>
                                <Typography variant="body1" component="p" gutterBottom>
                                    Por favor indicanos tus datos para continuar con el proceso de pago.</Typography>
                            </Box>
                            <form onSubmit={goToCheckout}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="given">Nombre</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="given" type="text" />
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="lastname">Apellido</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="lastname" type="text" />
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="address">Dirección</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="address" type="text" />
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="city">Ciudad</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="city" type="text" />
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="state">Provincia</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="state" type="text" />
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="postal">Código Postal</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="postal" type="tel" />
                                </FormControl>
                                <MuiPhoneNumber regions={'south-america'} defaultCountry={'cl'} name="phone" id="component-simple" onChange={handlePhoneChange} />
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <Input id="component-simple" onChange={handleChange} name="email" type="email" aria-describedby="component-error-text" />
                                </FormControl>
                                {!showVerifyEmailError ?
                                    (
                                        <FormControl variant="standard">
                                            <InputLabel htmlFor="vemail">Repetir Email</InputLabel>
                                            <Input id="component-simple" onBlur={handleChange} name="vemail" type="email" />
                                        </FormControl>)
                                    : (
                                        <FormControl error variant="standard">
                                            <InputLabel htmlFor="vemail">Repetir Email</InputLabel>
                                            <Input id="component-error" onBlur={handleChange} name="vemail" type="email"
                                                aria-describedby="component-error-text" />
                                            <FormHelperText id="component-error-text">Los emails no coinciden</FormHelperText>
                                        </FormControl>
                                    )}
                                <Box sx={{ mt: 2 }}>
                                    <Button type="submit" variant="contained" color="primary" disabled={disableButton}>
                                        Comprar
                                    </Button>
                                </Box>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            ) :
                (
                    <>
                        <Box display="flex" justifyContent="center">
                            <img className="image" src="./images/empty-cart.jpg" alt="Empty cart" />
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <p>Carrito esta vacío, pincha para
                                <Button onClick={goBack}>Atrás</Button>
                            </p>
                        </Box>
                    </>
                )
            }
        </Container >
    )
}

export default Cart;