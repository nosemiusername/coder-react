import { loadDetails } from '../../services/products_service';
import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const loadingBox = () => {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" m={4}>
                <CircularProgress />
            </Box>
        )
    }

    const detailBox = () => {
        return (
            <>
                {detail.id === 0 ?
                    <Container>
                        <h1>Producto No Encontrado</h1>
                    </Container> :
                    <ItemDetail detail={detail} />}
            </>
        )
    }

    useEffect(() => {
        (async () => {
            const detail = await loadDetails(1000, { id });
            setDetail(detail);
            setLoading(false);
        }
        )();
    }, [id]);

    return (
        <>
            {loading ? loadingBox() : detailBox()}
        </>

    )
}

export default ItemDetailContainer;