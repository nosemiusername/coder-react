import Container from "@mui/material/Container";
import { logInWithEmailAndPassword, auth } from './../services/firebase';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { InputLabel, FormControl, Input, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await logInWithEmailAndPassword(loginForm.email, loginForm.password);
    }

    useEffect(() => {
        user && navigate('/');
        console.log(user);
    }, [user, loading, error]);


    const handleCreateAccount = (e) => {
        e.preventDefault();
        navigate('/register');
    }

    const goBack = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Ingresar
            </Typography>
            <form onSubmit={handleSubmit}>
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
                        Iniciar Sesión
                    </Button>
                </Box>
            </form>
            <Box m={2}>
                <Button onClick={handleCreateAccount}>Crear Cuenta</Button>
                /
                <Button onClick={goBack}>Volver a la tienda</Button>
            </Box>
        </Container>
    )
}

export default Login;