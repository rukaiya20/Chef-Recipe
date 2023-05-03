import React from 'react';

const ProfileCard = ({profile}) => {
    const {id,name,picture_url,years_of_experience,number_of_recipes,likes,description} = profile;
    return (
        <div>
             <div className="home ">

<div className="main-home md:flex">
    <div className="home-inner-content">
        <div className="home-image">
        <img src={backgroundContent} alt=""/>
        </div>
    </div>

    <div className="home-inner-content">
        <div className="home-text-content">
        <h1 className='text-orange-500 text-3xl font-semibold  mb-3'>Visit Our Website for your favorite recipes</h1>
        <p className='text-white text-xl font-semibold mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, voluptatem officiis quas illum pariatur, sint amet dignissimos asperiores</p>
        <a href="#">contact us</a>
        </div>
    </div>
    
</div> 
</div>
        </div>
    );
};

export default ProfileCard;