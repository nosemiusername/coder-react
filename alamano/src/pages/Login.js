import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from './../services/firebase';


function Login() {
    const handleClick = async (e) => {
        await signInWithGoogle();
    }

    return (
        <Container>
            <h1>Login</h1>
            <Button onClick={handleClick}><GoogleIcon />Login con Google</Button>
        </Container>
    )
}

export default Login;