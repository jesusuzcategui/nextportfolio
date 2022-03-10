import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

const FooterApp = ( ) => {
    const [currentYear] = useState( new Date().getFullYear() );
    const Theme = useTheme();
    return (
        <>
            <footer>
                <Paper square={true} style={{background: Theme.palette.secondary.main, padding: '2rem 0'}} elevation={2}>
                    <Typography color='white' align='center' variant='small' component='p'>Portfolio | &copy; {currentYear} - All Right Reserved</Typography>
                </Paper>
            </footer>
        </>
    );
};

export default FooterApp;