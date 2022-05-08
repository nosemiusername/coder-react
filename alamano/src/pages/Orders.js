import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { getOrders } from "../services/products_service";
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { currencyFormat } from '../helpers/index';

function Profile() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const orders = await getOrders();
            setOrders(orders);
            // console.log(orders);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Grid >
                <Typography variant="h4" component="h1" gutterBottom>
                    Órdenes
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Órden</TableCell>
                                <TableCell align="center">Estado</TableCell>
                                <TableCell align="center">Fecha de Pago</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {console.log(orders)} */}
                            {orders.map(order => (
                                <TableRow key={order.id}>
                                    <TableCell align="center">{order.id}</TableCell>
                                    <TableCell align="center">{order.status}</TableCell>
                                    <TableCell align="center">{order.paymentDate}</TableCell>
                                    <TableCell align="center">{order.total ? currencyFormat(order.total) : "Sin Información"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    )

}

export default Profile;