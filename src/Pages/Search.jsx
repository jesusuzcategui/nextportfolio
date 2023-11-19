import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Grid, Typography, Container } from '@mui/material';
import Searchbar from '../Componentes/Searchbar';
import { FindByWords } from '../Services/ContentFull';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Search = () => {

    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);

    const findTerm = async () => {
        try {
            const [status, data] = await FindByWords(query);
            console.log(data);
            setResult(data.data.tutorialsCollection.items);
        } catch (error) {
            setResult(null);
            console.log({ error });
        }
    };

    useEffect(() => {
        let q = searchParams.get('q');
        let s = (!q) ? "" : q;
        setQuery(s);
        findTerm();
    }, [query]);


    return (
        <>
            { /* PANTALLA QUE SALE CUANDO ENTRA A /SEARCH SIN BUSCAR NADA */}
            {((query === "")) && (
                <div>
                    <Box className={"gradientBlueDark"} sx={{
                        width: "100%",
                        height: "calc(100vh - (64px + 88px))",
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 2rem"
                    }}>
                        <Grid container>
                            <Grid xs={12} md={12} item>
                                <Typography sx={{}} align='center' variant="h2" component="div">
                                    Search
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={12} item>
                                <Searchbar />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            )}

            { /* PANTALLA QUE SALE CUANDO ENTRA A /SEARCH SIN BUSCAR NADA */}

            {(query !== "") && (
                <div>
                    {((result === null) || (Array.isArray(result) === true && result.length === 0)) && (
                        <div>
                            <Box className={"gradientBlueDark"} sx={{
                                width: "100%",
                                height: "200px",
                                display: "flex",
                                alignItems: "center",
                                padding: "0px 2rem"
                            }}>
                                <Grid container>
                                    <Grid xs={12} md={12} item>
                                        <Typography sx={{}} align='center' variant="h2" component="div">
                                            Search
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} md={12} item>
                                        <Searchbar />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                padding: "0px 2rem"
                            }}>
                                <Typography sx={{}} align='center' variant="h4" component="div">
                                    Sorry we did not get results with this search
                                </Typography>
                            </Box>
                        </div>
                    )}
                </div>
            )}

            { /* PANTALLA QUE MUESTRA RESULTADOS DE BUSQUEDA*/}

            {(query !== "") && (
                <div>
                    {((Array.isArray(result) === true && result.length > 0)) && (
                        <div>
                            <Box className={"gradientBlueDark"} sx={{
                                width: "100%",
                                height: "200px",
                                display: "flex",
                                alignItems: "center",
                                padding: "0px 2rem"
                            }}>
                                <Grid container>
                                    <Grid xs={12} md={12} item>
                                        <Typography sx={{}} align='center' variant="h2" component="div">
                                            Search
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} md={12} item>
                                        <Searchbar />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Container sx={{my: "2rem"}} maxWidth="sm">
                                {result.map((item) => {
                                    return (
                                        <Card key={item.sys.id} sx={{ display: 'flex', mb: "1rem" }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography component={Link} to={"/tutorials/" + item.sys.id} variant="h5">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                        {item.sys.publishedAt}
                                                    </Typography>
                                                </CardContent>
                                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                </Box>
                                            </Box>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 151 }}
                                                image={item.image.url}
                                                alt={item.title}
                                            />
                                        </Card>
                                    );
                                })}
                            </Container>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Search;