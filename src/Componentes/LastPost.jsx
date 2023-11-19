import React, { useState, useEffect } from 'react';
import { FindBlog } from '../Services/ContentFull';
import { Container, Typography, Box, Grid, } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { Link as RouterLink } from 'react-router-dom';

const LastPost = () => {

    const [lastContent, setLastContent] = useState([]);

    const getLastArticles = async () => {
        try {
            const [status, data] = await FindBlog(10);
            setLastContent(data.data.tutorialsCollection.items);
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        getLastArticles();
    }, []);

    return (
        <>
            <Typography sx={{ my: "1.5rem", fontWeight: '700' }} align='center' variant="h4" component="div">
                Últimos tutoriales.
            </Typography>
            <Grid sx={{ my: "3rem" }} container rowGap={3} columnSpacing={3}>
                {(lastContent) && (lastContent.length > 0) && (lastContent.map((item) => {
                    return (
                        <Grid key={item.sys.id} item xs={12} md={3}>
                            <Card variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={item.image.url}
                                    alt={item.title}
                                    style={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography sx={{fontSize: '16px', fontWeight: '700'}} gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button component={RouterLink} to={"/blog/" + item.sys.id} color="inherit">Ver</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                }))}
            </Grid>
        </>
    );
};

export default LastPost;