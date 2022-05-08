import { InputLabel, FormControl, Input, Button, FormHelperText } from "@mui/material";
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState, useEffect } from 'react';
import { createOrder } from '../../services/products_service';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import Box from "@mui/material/Box";
import { getUserProfile, updateUserProfile } from '../../services/user_service';

function UserProfile(requestedComponent) {
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
    const callToAction = async (e) => {
        e.preventDefault();
        if (requestedComponent) {
            updateUserProfile(contactInfo);
            navigate('/')
        } else {
            const order = await createOrder(cart, contactInfo);
            navigate(`/checkout/${order}`);

        }
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
        const callGetUserProfile = async () => {
            const userProfile = await getUserProfile();
            setContactInfo({
                ...contactInfo,
                given: userProfile.given,
                lastname: userProfile.lastname,
                email: userProfile.email,
                vemail: userProfile.email,
                phone: userProfile.phone,
                address: userProfile.address,
                city: userProfile.city,
                state: userProfile.state,
                postal: userProfile.postal,
            })
        };
        callGetUserProfile();
    }, [])

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
        <form onSubmit={callToAction}>
            <FormControl variant="standard">
                <InputLabel htmlFor="given" disableAnimation={contactInfo.given ? true : false}>Nombre</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="given" type="text" value={contactInfo.given} />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="lastname" disableAnimation={contactInfo.lastname ? true : false}>Apellido</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="lastname" type="text" value={contactInfo.lastname} />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="address" disableAnimation={contactInfo.address ? true : false}>Dirección</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="address" type="text" value={contactInfo.address} />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="city" disableAnimation={contactInfo.city ? true : false}>Ciudad</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="city" type="text" value={contactInfo.city} />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="state" disableAnimation={contactInfo.state ? true : false}>Provincia</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="state" type="text" value={contactInfo.state} />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="postal" disableAnimation={contactInfo.postal ? true : false}>Código Postal</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="postal" type="tel" value={contactInfo.postal} />
            </FormControl>
            <MuiPhoneNumber regions={'south-america'} defaultCountry={'cl'} name="phone" id="component-simple" onChange={handlePhoneChange} value={contactInfo.phone} />
            <FormControl variant="standard">
                <InputLabel htmlFor="email" disableAnimation={contactInfo.email ? true : false}>Email</InputLabel>
                <Input id="component-simple" onChange={handleChange} name="email" type="email" value={contactInfo.email} aria-describedby="component-error-text" />
            </FormControl>
            {!showVerifyEmailError ?
                (
                    <FormControl variant="standard">
                        <InputLabel htmlFor="vemail" disableAnimation={contactInfo.email ? true : false}>Repetir Email</InputLabel>
                        <Input id="component-simple" onBlur={handleChange} name="vemail" type="email" value={contactInfo.email} />
                    </FormControl>)
                : (
                    <FormControl error variant="standard">
                        <InputLabel htmlFor="vemail" disableAnimation={contactInfo.email ? true : false}>Repetir Email</InputLabel>
                        <Input id="component-error" onBlur={handleChange} name="vemail" type="email"
                            aria-describedby="component-error-text" />
                        <FormHelperText id="component-error-text">Los emails no coinciden</FormHelperText>
                    </FormControl>
                )}
            <Box sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" color="primary" disabled={disableButton}>
                    {requestedComponent ? 'Actualizar' : 'Comprar'}
                </Button>
            </Box>
        </form>
    )

}

export default UserProfile;