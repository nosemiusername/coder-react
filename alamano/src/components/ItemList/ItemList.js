import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
const ItemList = ({ products }) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">

            {products.map(product =>
                <Grid item xs={6} sm={4} >
                    <Item key={product.id} product={product} />
                </Grid>)}
        </Grid>
    )

}

export default ItemList