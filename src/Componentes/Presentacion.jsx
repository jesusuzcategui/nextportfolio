import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Photografy from '../Assets/jesus.jpg';

const Presentacion = () => {
    return (
        <>
            <Box className={"gradientBlueDark"} sx={{
                width: "100%",
                height: "425px",
                display: "flex",
                alignItems: "center",
                padding: "0px 2rem"
            }}>
                <Grid container>
                    <Grid xs={12} md={12} item>
                        <Typography sx={{}} align='right' variant="h2" component="div">
                            Jesús Uzcátegui
                        </Typography>
                        <Typography sx={{}} align='right' variant="p" component="div">
                            FullStack web developer
                        </Typography>
                        <Typography sx={{}} align='right' variant="span" component="div">
                            Hello, I present my portfolio and blog where you will find some interesting articles and courses if you want to learn programming
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Presentacion;