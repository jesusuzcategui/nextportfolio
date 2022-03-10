import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeaderApp from './Componentes/HeaderApp';
import FooterApp from './Componentes/FooterApp';

import IndexPage from './Pages/Index';
import AboutPage from './Pages/About';

const Layout = () => {
    return (
        <>
            <div>
                <Router>

                    <HeaderApp />

                    <Routes>
                        <Route path='/' element={<IndexPage />} />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                    <FooterApp />
                </Router>
            </div>
        </>
    );
};

export default Layout;