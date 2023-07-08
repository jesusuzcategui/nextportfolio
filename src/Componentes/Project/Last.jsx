import React from 'react';
//import Slider from 'react-slick';
// Import Swiper styles
import 'swiper/css';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import ProjectCard from './Card';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from 'swiper/react';

const LastProjects = ({ data }) => {
    /*let SliderSetting = {
        infinite: data && data.length > 3,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        
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
    };*/

    return (
        <Box sx={{ my: "3rem" }}>
            <Typography sx={{ my: "1.5rem" }} align='center' variant="h4" component="div">
                Last projects
            </Typography>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {(data) && (data.length > 0) && (data.map(item => <SwiperSlide><ProjectCard project={item}  /></SwiperSlide>))}
            </Swiper>
        </Box>
    );
};

export default LastProjects;