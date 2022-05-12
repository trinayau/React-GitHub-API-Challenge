import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { UserHeader } from '../components';
import { Footer, NavBar } from '../components';

const Layout = () => {
    return <>
        <NavBar />
        <Outlet />
        <Footer />


    </>
}

export default Layout;
