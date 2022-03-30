import { loadDetails } from '../../services/products_service';
import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        (async () => {
            const detail = await loadDetails(1000, { id });
            setDetail(detail);
        }
        )();
    }, [id]);

    return (
        <ItemDetail key={detail.id} detail={detail} />
    )
}

export default ItemDetailContainer;