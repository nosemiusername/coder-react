import Item from '../Item/Item';
import Grid from '@mui/material/Grid';
const ItemList = ({ products }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={6}>

            {products.map(product =>
                <Grid item key={product.id} xs={6} sm={4} >
                    <Item key={product.id} product={product} />
                </Grid>)}
        </Grid>
    )

}

export default ItemList