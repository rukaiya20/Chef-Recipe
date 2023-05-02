import React from 'react';
import Navber from '../../Shared/Navber';
import Footer from '../../Shared/Footer';
import Banner from './Banner';

const Header = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Header;