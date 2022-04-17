import Container from "@mui/material/Container";
import { InputLabel, FormHelperText, Input, Button } from "@mui/material";
import { useState } from 'react';

function ContactUs() {

    const [value, setValue] = useState({
        given: '',
        lastname: '',
        email: '',
    });

    const resetForm = (e) => {
        setValue({ given: '', lastname: '', email: '' });
    }


    const handleChange = (e) => {
        e.preventDefault();
        e.target.id === "given" ? setValue({ ...value, given: e.target.value }) : setValue({ ...value, lastname: e.target.value });

    }


    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <Container>
            <h1>Contáctanos</h1>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="given">Nombre</InputLabel>
                <Input onChange={handleChange} value={value.given} id="given" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="lastname">Apellido</InputLabel>
                <Input onChange={handleChange} value={value.lastname} id="lastname" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="email">Correo</InputLabel>
                <Input onChange={handleChange} value={value.email} id="email" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Nunca compartiremos tu correo</FormHelperText>
                <Button onClick={resetForm}>Limpiar</Button>
                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    )
}

export default ContactUs;