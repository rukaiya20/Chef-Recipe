import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MdWorkHistory } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import RecipeCard from './RecipeCard';

const ChefProfile = () => {
    const chef = useLoaderData();
   const{name,picture_url,years_of_experience,number_of_recipes,likes,description}= chef;
    return (
        <>
        <div>
            <div className="home ">

        <div className="main-home md:flex mb-16">
            <div className="home-inner-content">
                <div className="home-image">
                <img className='w-28 h-80' src={picture_url} alt=""/>
                </div>
            </div>

    <div className="home-inner-content">
        <div className="home-text-content">
        <h1 className='text-orange-500 text-3xl font-semibold  mb-3'>{name}</h1>
        <p className='text-white text-xl font-semibold mb-4'>{description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold">
            <MdWorkHistory className='text-orange-400 mt-1 me-2' /> Years of experience - {chef.years_of_experience}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold">
            <GiCook className='text-yellow-400 mt-1 me-2' /> Numbers of Recipes -{chef.number_of_recipes}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold ">
            <AiFillLike className='text-blue-600 mt-1 me-2'/>Likes - {chef.likes}
            </p>
        <a href="#">contact us</a>
        </div>
        </div>
        
    </div> 
    </div>  
            </div>
        <div>
            <RecipeCard></RecipeCard>
        </div>
        </>
    );
};


export default ChefProfile;