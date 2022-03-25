import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
const ItemList = ({ products }) => {

    return (
        <Grid container>
            {products.map(product => <Item key={product.id} product={product} />)}
        </Grid>
    )

}

export default ItemList