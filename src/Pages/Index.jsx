import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { FindSkills } from '../Services/ContentFull';
import Presentacion from '../Componentes/Presentacion';
import Skills from '../Componentes/Skills';

const IndexPage = () => {


    const [skill, setSkills] = useState(null);

    const fetchData = async () => {
        const [status, data] = await FindSkills();
        setSkills(data.data.skillCollection.items);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Presentacion />
            <Container maxWidth="md">
                {(skill) && (
                    <div>
                        <Skills data={skill} />
                    </div>
                )}
            </Container>
        </>
    );
};

export default IndexPage;