import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Layout } from './layout/layout';
import { Home } from './pages/Home';
import { NoFound } from './pages/404';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
