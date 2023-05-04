import React from 'react';
import AboutP from '../../assets/About.png';
import backgroundContent from '../../assets/backgroundContent.png'
import FoodQuality from './FoodQuality';


const About = () => {
    return (
        <div>
            <h2 className='text-center mt-16 border-b border-blue-400 font-black text-4xl pb-4'>About Us</h2>
            <div className="home ">

<div className="main-home md:flex">
    <div className="home-inner-content">
        <div className="home-image">
        <img src={AboutP} alt=""/>
        </div>
    </div>

    <div className="home-inner-content mt-5">
        <div className="home-text-content">
        <h1 className='text-orange-500 text-3xl font-semibold  mb-3'>ABOUT US</h1>
        <p className='text-white text-xl font-semibold mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, voluptatem officiis quas illum pariatur, sint amet dignissimos asperiores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto. Ullam amet nobis recusandae quam harum quaerat dolor, quibusdam mollitia?</p>
        <a href="#">Leran more</a>
        </div>
    </div>
    
</div> 
</div>  <FoodQuality></FoodQuality>
        </div>
    );
};

export default About;