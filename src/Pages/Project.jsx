import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardMedia, Button } from '@mui/material';
import { FindProject } from '../Services/ContentFull';
import { Link as RouterLink } from 'react-router-dom';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';

const Project = () => {
    const params = useParams();

    const [article, setArticle] = useState(null);

    // store thumbs swiper instance
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const getArticle = async () => {
        try {
            const [status, data] = await FindProject(params.slug);

            setArticle(data.data.projectsCollection.items[0]);
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        getArticle();
        console.log(article);
    }, []);

    return (
        <>
            <Container sx={{}} maxWidth="lg">
                <Box>
                    <Grid container columnSpacing={3}>
                        <Grid item xs={12} md={7}>
                            {(article) && (article.imageCollection) && (article.imageCollection.items) && (article.imageCollection.items.length > 0) && (
                                <>
                                    <Swiper slidesPerView={1} modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                                        {article.imageCollection.items.map(item => (
                                            <SwiperSlide>
                                                <Box sx={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    paddingBottom: '100%',
                                                }}>
                                                    <img style={{
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top'
                                                    }} src={item.url} alt={item.title} loading="eager" />
                                                </Box>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <Box sx={{
                                        border: 'solid 1px #000',
                                        marginTop: '30px',
                                        padding: '3px',
                                        borderRadius: '2px'
                                    }}>
                                        <Swiper
                                            modules={[Thumbs]}
                                            watchSlidesProgress
                                            onSwiper={setThumbsSwiper}
                                            slidesPerView={4}
                                            spaceBetween={20}
                                        >
                                            {article.imageCollection.items.map(item => (
                                                <SwiperSlide>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        paddingBottom: '100%',
                                                    }}>
                                                        <img style={{
                                                            position: 'absolute',
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }} src={item.url} alt={item.title} loading="eager" />
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </Box>
                                </>
                            )}
                        </Grid>

                        <Grid item xs={12} md={5}>

                            <Box sx={{ padding: '30px 30px', boxShadow: 2, minHeight: '100vh' }}>

                                {(article) && (<Typography sx={{ marginBottom: '30px' }} align='left' variant="h3" component="div">{article.title}</Typography>)}

                                {(article) && (<Typography sx={{ marginBottom: '30px' }} align='left' variant='p' component="div">{article.content}</Typography>)}

                                {(article) && (<Typography sx={{ marginBottom: '30px' }} align='left' variant='p' component="div"><Button href={article.link} target='_blank' color="inherit">Visitar</Button></Typography>)}

                                {(article) && (article.skillsCollection) && (article.skillsCollection.items) && (article.skillsCollection.items.length > 0) && (
                                    <Box>
                                        <Typography sx={{ marginBottom: '30px' }} align='left' variant="h4" component="div">Skill's used</Typography>
                                        <Grid container columnSpacing={2}>
                                            {article.skillsCollection.items.map(item => (
                                                <Grid item xs={3}>
                                                    <Card className={"cardWithoutShadow"}>
                                                        <CardMedia
                                                            component="img"
                                                            height="80"
                                                            image={item.logo.url}
                                                            alt={item.titleskill}
                                                            style={{ objectFit: 'scale-down', width: '90%' }}
                                                        />
                                                    </Card>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                )}

                            </Box>

                        </Grid>
                    </Grid>
                </Box >
            </Container >
        </>
    );
}

export default Project;