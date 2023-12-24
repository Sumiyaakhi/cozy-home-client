import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration')
   
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;