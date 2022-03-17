import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, } from '@mui/material';
import { FindArticle } from '../Services/ContentFull';

const Article = () => {
    const params = useParams();

    const [article, setArticle] = useState(null);

    const getArticle = async () => {
        try {
            const [status, data] = await FindArticle(params.id);
            setArticle(data.data.blog);
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
            <Container sx={{ my: "2rem" }} maxWidth="md">
                {(article) && (
                    <Box>
                        <Typography sx={{}} align='center' variant="h3" component="div">
                            {article.title}
                        </Typography>
                        <div>
                            {(article.content) && (
                                <div>
                                    {(article.content.json) && (
                                        <div>
                                            {(article.content.json.content) && (article.content.json.content.length > 0) && (
                                                <div>
                                                    {article.content.json.content.map((item, i) => {
                                                        return (
                                                            <div key={i}>
                                                                {(item) && (item.content) && (item.content.length > 0) && (item.content.map((cont, j) => {
                                                                    return (
                                                                        <div key={j}>
                                                                            {(cont.marks.length === 0) && (

                                                                                <Typography sx={{my: "1rem"}} align='left' variant="p" component="div">
                                                                                    {cont.value}
                                                                                </Typography>
                                                                            )}
                                                                            {(cont.marks.length == 1) && (cont.marks[0].type == "code") && (
                                                                                <div>
                                                                                    <div style={{margin: "auto", display: "flex", justifyContent: "center"}} dangerouslySetInnerHTML={{ __html: cont.value }}></div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                }))}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </Box>
                )}
            </Container>
        </>
    );
};

export default Article;