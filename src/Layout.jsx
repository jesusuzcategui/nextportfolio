import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeaderApp from './Componentes/HeaderApp';
import FooterApp from './Componentes/FooterApp';

import IndexPage from './Pages/Index';
import AboutPage from './Pages/About';
import Blog from './Pages/Blog';
import Article from './Pages/Article';
import Search from './Pages/Search';

const Layout = () => {
    return (
        <>
            <div>
                <Router>

                    <HeaderApp />

                    <Routes>
                        <Route path='/' element={<IndexPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/blog/:id' element={<Article />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>

                    <FooterApp />
                </Router>
            </div>
        </>
    );
};

export default Layout;