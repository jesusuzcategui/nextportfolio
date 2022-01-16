import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Col, Row} from 'reactstrap';

const Projects = () => {
    let projects = [
        {
            name: "Locutorios web",
            link: "https://locutorios.cl",
            icon: "/brands/locutorios.png"
        },
        {
            name: "DigitalMark",
            link: "https://digitalmark.cl",
            icon: "/brands/digitalmarkrgd.png"
        },
        {
            name: "Innova mineria Chile",
            link: "http://innovamineria.cl",
            icon: "/brands/innovamineria.png"
        },
        {
            name: "Migra Chile",
            link: "https://migrachile.cl/",
            icon: "/brands/migrachile.png"
        },
        {
            name: "Cataleya Store",
            link: "https://cataleyastore.cl/",
            icon: "/brands/cataleyastore.png"
        },
        {
            name: "KetoFood",
            link: "https://ketofood.cl/",
            icon: "/brands/ketofood.svg"
        },
        {
            name: "Aperitivo Chile",
            link: "https://www.aperitivochile.cl/",
            icon: "/brands/aperitivochile.webp"
        },
        {
            name: "A33 Chile",
            link: "https://a33.online/",
            icon: "/brands/a33-rojo.png"
        }
    ];

    let projectItem = projects.map((item, i) => {
        return (
            <Col sm={2} md={3}  key={i}>
                <Card className='skill_item'>
                    <CardImg 
                        src={item.icon}
                        className={'brand_logo'}
                    />
                    <CardBody>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <Button color='primary' onClick={() => window.open(item.link, '_blank')} block={true}>See project</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    });


    return (
        <>
            <Row>
                {projectItem}
            </Row>
        </>
    );
};

export default Projects;