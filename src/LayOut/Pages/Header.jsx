import React from 'react';
import Navber from '../../Shared/Navber';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Header;