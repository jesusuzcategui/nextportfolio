import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    let GallerySetings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...GallerySetings}>
                <div>
                    <img src="/Bannerportfolio.png" alt="Banner principal" />
                </div>
            </Slider>
        </>
    );
};

export default Gallery;