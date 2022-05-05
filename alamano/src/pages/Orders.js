import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
function Profile() {
    return (
        <Container>
            <Grid item xs={4}>

                <Typography variant="h4" component="h1" gutterBottom>
                    Perfil
                </Typography>
            </Grid>
        </Container>
    )

}

export default Profile;