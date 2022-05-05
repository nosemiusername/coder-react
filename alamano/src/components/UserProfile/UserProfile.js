import { InputLabel, FormControl, Input, Button, FormHelperText } from "@mui/material";
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState, useEffect } from 'react';
import { createOrder } from '../../services/products_service';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import Box from "@mui/material/Box";

function UserProfile(callBack,) {
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);
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
    }, [contactInfo])

    return (
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
    )

}

export default UserProfile;