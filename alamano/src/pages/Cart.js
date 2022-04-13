import Box from "@mui/material/Box";
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
import Button from '@mui/material/Button';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate()
    const { cart, removeItem } = useContext(CartContext);
    const calculateTotalItem = (item) => {
        return item.price * item.quantity;
    }
    const goBack = () => {
        navigate('/');
    }

    return (

        <Container >
            {cart.length ? (
                <>
                    <h1>Carrito de compra</h1>
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
                                        <TableCell align="center">${item.price}</TableCell>
                                        <TableCell align="center">{item.quantity}</TableCell>
                                        <TableCell align="center">${calculateTotalItem(item)}</TableCell>
                                        <TableCell align="center">
                                            <Button>
                                                <DeleteIcon onClick={() => removeItem(item)}>Eliminar</DeleteIcon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
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