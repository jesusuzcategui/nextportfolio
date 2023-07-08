import React from 'react'
import { Container, Typography, Box, Grid, } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <Card variant="outlined">
            <CardMedia
                component="img"
                height="200"
                image={project.imageCollection.items[0].url}
                alt={project.title}
                style={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {project.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={RouterLink} to={`/project/${project.slug}`} color="inherit">Ver</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;