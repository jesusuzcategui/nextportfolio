import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import Searchbar from './Searchbar';

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
                <Container maxWidth="lg">
                    <Grid sx={{alignItems: "center"}} className='presentationGrid' rowGap={3} container>
                        <Grid xs={12} md={7} item>
                            <Searchbar />
                        </Grid>
                        <Grid xs={12} md={5} item>
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
                </Container>
            </Box>
        </>
    );
};

export default Presentacion;