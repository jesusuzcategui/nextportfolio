import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const HeaderApp = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color='secondary' position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Jesús Uzcátegui
                        </Typography>
                        <Button component={RouterLink} to="/" color="inherit">Home</Button>
                        <Button component={RouterLink} to="/about" color="inherit">About</Button>
                        <Button component={RouterLink} to="/contact" color="inherit">Contact</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default HeaderApp;