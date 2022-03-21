import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import photoMia from '../Assets/jesus.jpg';

const AboutPage = () => {
    return (
        <>
            <Container sx={{my: "2rem"}} maxWidth="lg">
                <Grid columnSpacing={5} rowSpacing={5} container>
                    <Grid item xs={12} md={3}>
                        <img style={{width: "100%"}} src={photoMia} alt="Imagen de foto" />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography variant="h1" component="div">About me</Typography>
                        <Typography variant="p" component="div">
                            Hi, I'm Jesus Uzcategui. Venezuelan, computer engineer. I have worked as a Full Stack web developer. I have worked as a freelancer developer, carrying out developments based on PHP and Javascript, among these we can highlight modifications of plugins and themes for joomla and wordpress. I have also been the leader of large projects including one for the Spanish Football League.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AboutPage;