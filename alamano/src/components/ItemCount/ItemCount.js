import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleAdd = () => {
        count < stock ? setCount(count + 1) : setCount(stock);
    }

    const handleRemove = () => {
        count > 0 ? setCount(count - 1) : setCount(0);
    }

    return (
        <>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Agregando al Carro"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Desea agregar {count} unidades de este producto al carro?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: "#F43D53" }}>Ok</Button>
                </DialogActions>
            </Dialog>

            <CardActions>
                <Button size="small" sx={{ color: "#F43D53" }} onClick={handleRemove}>
                    <ArrowDropDownIcon />
                </Button>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField focused value={count} />

                </Box>

                <Button size="small" sx={{ color: "#F43D53" }} onClick={handleAdd}>
                    <ArrowDropUpIcon />
                </Button>

            </CardActions>
            <CardActions>
                <Button size="small" sx={{ color: "#F43D53" }} onClick={handleOpen} >Agregar al carro</Button>
            </CardActions>
        </>
    );
}

export default ItemCount;