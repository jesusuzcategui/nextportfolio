import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { usePrismicDocumentByID, usePrismicDocumentByUID } from '@prismicio/react';
import styled from 'styled-components';
import { Image16_9 } from '../Componentes/ImageResponsive';

const Curso = () => {
  const params = useParams();
  const [article, setArticle] = useState(null);

  const [document, {state}] = usePrismicDocumentByID(params.id);

  useEffect(() => {
    console.log(document);
  }, [document, state]);

  const ContainerVideo = styled.div`
    iframe {
      width: 100%;
      height: 400px;
    }
 `;

  return (
    <Container sx={{ my: "2rem" }} maxWidth="md">
      <Box>
        {(state === 'loading') && (
          <CircularProgress />
        )}

        {(state === 'loaded') && (
          <div>
            <Typography sx={{}} align='center' variant="h3" component="div">
              {document.data?.title[0]?.text}
            </Typography>

            <Image16_9>
              <img src={document.data.imagen?.url} />
            </Image16_9>

            <div style={{margin: '30px'}}>
              {document.data?.body.map((item, index) => {
                return (
                  <div key={`paragraph__${index}`}>
                    {(item.type === 'paragraph') && (
                      <Typography gutterBottom variant="p" component="div">
                        { item.text }
                      </Typography>
                    )}
                  </div>
                )
              })}
            </div>
            
            <div style={{margin: '30px'}}>
              <Typography sx={{}} marginBottom="30px" align='center' variant="h3" component="div">
                Capitulos
              </Typography>
              
              {document.data?.capitulos.map((item, index) => {
                return (
                  <Accordion key={`capitulo__${index}`}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          <Typography>{ item.titulo_capitulo[0]?.text }</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ContainerVideo dangerouslySetInnerHTML={{ __html: item.video_capitulo.html }}>
                      </ContainerVideo>
                    </AccordionDetails>        
                  </Accordion>
                )
              })}
            </div>

          </div>
        )}
      </Box>
    </Container>
  );
};

export default Curso;