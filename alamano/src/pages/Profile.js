import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UserProfile from '../components/UserProfile/UserProfile';
import Grid from "@mui/material/Grid";
function Profile() {
    return (
        <Container>
            <Grid item xs={4}>

                <Typography variant="h4" component="h1" gutterBottom>
                    Perfil
                </Typography>
                <UserProfile />
            </Grid>
        </Container>
    )

}

export default Profile;