import React from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';

import { Card, CardBody, CardImg, CardTitle, Progress } from 'reactstrap';

const Skills = () => {
    let SliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    let SkillBox = [
        {
            name: "Angular",
            porcent: 85,
            icon: '/icons/angular-icon.svg'
        },
        {
            name: "Bootstrap",
            porcent: 80,
            icon: '/icons/bootstrap.svg'
        },
        {
            name: "Codeigniter",
            porcent: 85,
            icon: '/icons/codeigniter.svg'
        },
        {
            name: "CSS3",
            porcent: 80,
            icon: '/icons/css-3.svg'
        },
        {
            name: "Drupal",
            porcent: 85,
            icon: '/icons/drupal-icon.svg'
        },
        {
            name: "Electron",
            porcent: 50,
            icon: '/icons/electron.svg'
        },
        {
            name: "Ecma Script 6",
            porcent: 65,
            icon: '/icons/es6.svg'
        },
        {
            name: "Express JS",
            porcent: 65,
            icon: '/icons/express.svg'
        },
        {
            name: "Flask",
            porcent: 85,
            icon: '/icons/flask.svg'
        },
        {
            name: "Git",
            porcent: 70,
            icon: '/icons/git-icon.svg'
        },
        {
            name: "Ionic",
            porcent: 80,
            icon: '/icons/ionic-icon.svg'
        },
        {
            name: "Javascript",
            porcent: 85,
            icon: '/icons/javascript.svg'
        },
        {
            name: "Joomla",
            porcent: 65,
            icon: '/icons/joomla.svg'
        },
        {
            name: "jQuery",
            porcent: 85,
            icon: '/icons/jquery.svg'
        },
        {
            name: "Laravel",
            porcent: 75,
            icon: '/icons/laravel.svg'
        },
        {
            name: "Mongo DB",
            porcent: 85,
            icon: '/icons/mongodb.svg'
        },
        {
            name: "MySQL",
            porcent: 85,
            icon: '/icons/mysql.svg'
        },
        {
            name: "NestJS",
            porcent: 85,
            icon: '/icons/nestjs.svg'
        },
        {
            name: "NextJS",
            porcent: 85,
            icon: '/icons/nextjs.svg'
        },
        {
            name: "NodeJS",
            porcent: 85,
            icon: '/icons/nodejs-icon.svg'
        },
        {
            name: "NuxtJS",
            porcent: 85,
            icon: '/icons/nuxt-icon.svg'
        },
        {
            name: "PostgreSQL",
            porcent: 85,
            icon: '/icons/postgresql.svg'
        },
        {
            name: "Python",
            porcent: 85,
            icon: '/icons/python.svg'
        },
        {
            name: "React",
            porcent: 45,
            icon: '/icons/react.svg'
        },
        {
            name: "Sass",
            porcent: 85,
            icon: '/icons/sass.svg'
        },
        {
            name: "Vue",
            porcent: 85,
            icon: '/icons/vue.svg'
        },
        {
            name: "UIkit",
            porcent: 85,
            icon: '/icons/uikit.svg'
        },
        {
            name: "Woocommerce",
            porcent: 85,
            icon: '/icons/woocommerce-icon.svg'
        },
        {
            name: "Wordpress",
            porcent: 90,
            icon: '/icons/wordpress-icon.svg'
        },
        {
            name: "Yii Framework",
            porcent: 55,
            icon: '/icons/yii.svg'
        }
    ];

    let SkillIcons = SkillBox.map( (item, i) => {
        return (
            <div key={i}>
                <Card className='skill_item'>
                    <CardImg 
                        src={item.icon}
                        className={'skill_logo'}
                    />
                    <CardBody>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <Progress animated value={item.porcent} />
                    </CardBody>
                </Card>
            </div>
        );
    } );

    return (
        <>
            <Slider {...SliderSetting}>
                {SkillIcons}
            </Slider>
        </>
    );
};

export default Skills;