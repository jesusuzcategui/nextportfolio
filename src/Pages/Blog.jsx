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
            console.log("xx", data.data.tutorialsCollection);
            setArticles(data.data.tutorialsCollection.items);
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
                        <Grid  rowGap={3} columnSpacing={3} sx={{ my: "3rem" }} container>
                            {articles.map((item) => {
                                return (
                                    <Grid key={item.sys.id} item xs={12} md={3}>
                                        <Card variant="outlined">
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={item.image.url}
                                                alt={item.title}
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button component={RouterLink} to={"/blog/"+item.slug} color="inherit">Ver</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                ) || (
                    <Box sx={{
                        padding: '100px 0',
                    }}>
                        <Typography variant="h3" align='center'>Articles no found</Typography>
                    </Box>
                )}
            </Container>
        </>
    );
};

export default Blog;