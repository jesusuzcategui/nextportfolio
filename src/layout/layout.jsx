import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};