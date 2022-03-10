import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

import { FindSkills } from '../Services/ContentFull';

const IndexPage = () => {


    const [skill, setSkills] = useState(null);

    const fetchData = async () => {
        const [status, data] = await FindSkills();
        setSkills(data.data);
    };

    useEffect( () => {
        fetchData();
    }, [skill] );


    return (
        <>
            <Container maxWidth="md">
                <pre>
                    {JSON.stringify(skill, '', 1)}
                </pre>
            </Container>
        </>
    );
};

export default IndexPage;