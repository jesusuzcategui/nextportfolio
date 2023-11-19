import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { FindArticle } from '../Services/ContentFull';
import { marked } from 'marked';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { Helmet } from 'react-helmet';

const Article = () => {

    hljs.registerLanguage('javascript', javascript);
    hljs.highlightAll();
    const params = useParams();
    //console.log(params);

    const [article, setArticle] = useState(null);

    const getArticle = async () => {
        try {
            const [status, data] = await FindArticle(params.slug);
            //setArticle(data.data.tutorials);
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <>
            <Container sx={{ my: "2rem" }} maxWidth="lg">
                {(article) && (
                    <>
                        <Helmet>
                            <title>Jesus Uzcategui - {article.title}</title>
                        </Helmet> 
                        <Box>
                            <Typography sx={{}} align='center' variant="h3" component="div">
                                {article.title}
                            </Typography>
                            <div>
                                <article dangerouslySetInnerHTML={{__html: marked.parse(article.contentMark)}}></article>
                            </div>
                        </Box>
                    </>
                )}
            </Container>
        </>
    );
};

export default Article;