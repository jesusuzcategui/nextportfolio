import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));


const Skill = ({ title, image, porcent }) => {
    return (
        <>
            <Card className={"cardWithoutShadow"}>
                <CardMedia
                    component="img"
                    height="80"
                    image={image}
                    alt={title}
                    style={{objectFit: 'scale-down', width: '90%'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="span" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Skill;