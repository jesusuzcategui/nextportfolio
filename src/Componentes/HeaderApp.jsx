import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LogoDesktop from '../Assets/Logocompleto.png';
import LogoMovil from '../Assets/Logoicono.svg.png';

const HeaderApp = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color='secondary' position="static">
                    <Container maxWidth="lg">
                        <Toolbar>
                            <picture style={{ flexGrow: 1 }}>
                                <source media="(max-width:768px)" srcSet={LogoMovil} />
                                <img className="logoheader" src={LogoDesktop} alt="Logo" />
                            </picture>
                            <Button component={RouterLink} to="/" color="inherit">Home</Button>
                            <Button component={RouterLink} to="/courses" color="inherit">Courses</Button>
                            <Button component={RouterLink} to="/blog" color="inherit">Blog</Button>
                            <Button component={RouterLink} to="/about" color="inherit">About</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    );
};

export default HeaderApp;