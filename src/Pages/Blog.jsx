import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { FindBlog } from '../Services/ContentFull';

import { Link as RouterLink } from 'react-router-dom';

const Blog = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const [status, data] = await FindBlog(30);
            console.log(data);
            setArticles(data.data.blogCollection.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <>
            <Container maxWidth="lg">
                <Typography sx={{}} align='center' variant="h2" component="div">
                    Blog
                </Typography>
                {(articles) && (articles.length > 0) && (
                    <Box>
                        <Grid  columnSpacing={3} sx={{ my: "3rem" }} container>
                            {articles.map((item) => {
                                return (
                                    <Grid key={item.sys.id} item xs={12} md={6}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={item.imagen.url}
                                                alt={item.title}
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography gutterBottom variant="p" component="div">
                                                    {item.metadescripcion}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button component={RouterLink} to={"/blog/"+item.sys.id} color="inherit">Ver</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                )}
            </Container>
        </>
    );
};

export default Blog;