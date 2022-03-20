import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams, createSearchParams, useNavigate } from 'react-router-dom';

const Searchbar = () => {

    const [word, setWord] = useState("");
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect( () => {
        let q = searchParams.get("q");
        let s = (q === null) ? "" : q;
        setWord(s);
    }, [] );

    const handleChange = (e) => {
        setWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*navigate({
            pathname: "/search",
            search: createSearchParams({
                q: word
            }).toString(),
            replace: true
        });*/
        window.location.href = "/search?q=" + word;
    };

    return (
        <>
            <Paper
                onSubmit={handleSubmit}
                component="form"
                sx={{ p: '5px 10px', display: 'flex', alignItems: 'center', width: "100%" }}
            >
                <InputBase
                    name="q"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search articles"
                    inputProps={{ 'aria-label': 'search articles' }}
                    value={word}
                    onChange={handleChange}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    );
};

export default Searchbar;