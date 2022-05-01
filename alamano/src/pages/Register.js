import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { InputLabel, FormControl, Input, Button } from "@mui/material";
import { registerWithEmailAndPassword, auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';

function Register() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        given: '',
        family: '',
    });
    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerWithEmailAndPassword(`${registerForm.given} ${registerForm.family}`,
            registerForm.email, registerForm.password);

    }

    useEffect(() => {
        user && navigate('/');
        console.log(user);
    }, [user, loading, error]);


    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Crear Cuenta
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box m={2}>
                    <FormControl>
                        <InputLabel htmlFor="given">Nombre</InputLabel>
                        <Input id="given" type="text" name="given" onChange={handleChange} />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <FormControl>
                        <InputLabel htmlFor="family">Apellido</InputLabel>
                        <Input id="family" type="text" name="family" onChange={handleChange} />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" name="email" onChange={handleChange} />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" name="password" onChange={handleChange} />
                    </FormControl>
                </Box>
                <Box m={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Crear
                    </Button>
                </Box>
            </form>
        </Container>
    )

}

export default Register;