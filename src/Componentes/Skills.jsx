import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Skill from './Skill';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = ({ data }) => {

    let SliderSetting = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <>
            <Box sx={{my: "3rem"}}>
                <Typography sx={{my: "1.5rem"}} align='center' variant="h4" component="div">
                    My Skills
                </Typography>
                <Slider {...SliderSetting}>
                    {(data && data.length) && (
                        data.map((item, i) => {
                            return (
                                <Skill key={i} title={item.titleskill} image={item.logo.url} porcent={item.experience} />
                            );
                        })
                    )}
                </Slider>
            </Box>
        </>
    );
};

export default Skills;