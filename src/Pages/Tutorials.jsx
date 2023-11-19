import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { FindBlog } from "../Services/ContentFull";
import { Helmet } from "react-helmet";
import { Link as RouterLink } from 'react-router-dom';

const Tutorials = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const [status, data] = await FindBlog(30);
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
      <Helmet>
        <title>Tutoriales - Jesus Uzcategui</title>
      </Helmet>
      <Container maxWidth="lg">
        <Typography sx={{}} align="center" variant="h2" component="div">
          Tutoriales
        </Typography>
        <Grid sx={{ my: "3rem" }} container rowGap={3} columnSpacing={3}>
          {(articles) && (articles.length > 0) && (articles.map((item) => {
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
                              <Button component={RouterLink} to={"/tutorials/" + item.slug} color="inherit">Ver</Button>
                          </CardActions>
                      </Card>
                  </Grid>
              );
          }))}
        </Grid>
      </Container>
    </>
  );
};

export default Tutorials;
