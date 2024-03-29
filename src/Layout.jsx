import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import HeaderApp from './Componentes/HeaderApp';
import FooterApp from './Componentes/FooterApp';

import IndexPage from './Pages/Index';
import AboutPage from './Pages/About';
import Blog from './Pages/Blog';
import Article from './Pages/Article';
import Search from './Pages/Search';
import Cursos from './Pages/Cursos';
import Curso from './Pages/Curso';
import Project from './Pages/Project';
import Tutorials from './Pages/Tutorials';

const Layout = () => {
    return (
        <>
            <React.StrictMode>
                <PrismicProvider client={client}>
                    <div>
                        <Router>

                            <HeaderApp />

                            <Routes>
                                <Route path='/' element={<IndexPage />} />
                                <Route path='/about' element={<AboutPage />} />
                                <Route path='/search' element={<Search />} />
                                <Route path='/courses' element={<Cursos />} />
                                <Route path='/courses/:id/:slug' element={ <Curso /> } />
                                <Route path="/project/:slug" element={<Project />} />
                                <Route path="/tutorials" element={<Tutorials />} />
                                <Route path="/tutorials/:slug" element={<Article />} />
                            </Routes>

                            <FooterApp />
                        </Router>
                    </div>
                </PrismicProvider>
            </React.StrictMode>
        </>
    );
};

export default Layout;