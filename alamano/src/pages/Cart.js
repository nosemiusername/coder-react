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
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { currencyFormat } from '../helpers/index';
import Typography from "@mui/material/Typography";
import UserProfile from '../components/UserProfile/UserProfile';

function Cart() {
    const navigate = useNavigate()
    const { cart, removeItem } = useContext(CartContext);

    const calculateTotalItem = (item) => {
        return item.price * item.quantity;
    }

    const goBack = () => {
        navigate('/');
    }


    const calculateTotalCart = () => {
        return cart.reduce((acc, item) => acc + calculateTotalItem(item), 0)
    }


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
                            <UserProfile requestedComponent="cart" />
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