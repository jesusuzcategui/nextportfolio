import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { Link as RouterLink } from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

const Cursos = () => {
    const [articles, setArticles] = useState([]);
    const [documents, { state, error }] = useAllPrismicDocumentsByType('tutoriales', {
      pageSize: 0,
    });
    
    useEffect(() => {
      console.log(documents);
    }, [documents, state]);

    return (
        <>
            <Container maxWidth="lg">
                <Typography sx={{}} align='center' variant="h2" component="div">
                    Courses
                </Typography>


                {(documents) && (documents.length > 0) && (
                  <Box>
                    <Grid  rowGap={3} columnSpacing={3} sx={{ my: "3rem" }} container>
                      {documents.map((item) => {
                        return (
                          <Grid key={ item.id } item xs={12} md={6}>
                              <Card variant="outlined">
                                  <CardMedia
                                      component="img"
                                      height="200"
                                      image={item.data.imagen?.url}
                                      alt={item.data?.title[0]?.text}
                                      style={{ objectFit: 'cover' }}
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      {item.data?.title[0]?.text}
                                    </Typography>
                                    <Typography gutterBottom variant="p" component="div">
                                      {item.data?.extract[0]?.text}
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                      <Button component={RouterLink} to={`/courses/${item.id}/${item.slugs[0]}`} color="inherit">Ver</Button>
                                  </CardActions>
                              </Card>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                )}
            </Container>
        </>
    );
};

export default Cursos;