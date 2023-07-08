import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { FindProjects, FindSkills } from '../Services/ContentFull';
import Presentacion from '../Componentes/Presentacion';
import Skills from '../Componentes/Skills';
import LastPost from '../Componentes/LastPost';
import LastProjects from '../Componentes/Project/Last';

const IndexPage = () => {


    const [skill, setSkills] = useState(null);
    const [projects, setProjects] = useState(null);

    const fetchData = async () => {
        const [status, data] = await FindSkills();
        setSkills(data.data.skillCollection.items);
    };

    const fetchProjects = async () => {
        const [status, data] = await FindProjects();
        setProjects(data.data.projectsCollection.items);
        console.log(data);

    };

    useEffect(() => {
        fetchData();
        fetchProjects();
    }, []);


    return (
        <>
            <Presentacion />
            <Container maxWidth="lg">
                
                {(skill) && (
                    <div>
                        <Skills data={skill} />
                    </div>
                )}

                <LastProjects data={projects} />

                <LastPost />
            </Container>
        </>
    );
};

export default IndexPage;