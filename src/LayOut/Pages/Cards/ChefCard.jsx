import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdWorkHistory } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { GiCook } from "react-icons/gi";


const ChefCard = () => {
    const [chefs , setChefs] = useState([]);

    useEffect (() =>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error =>console.error(error))
    },[])
    

    return (
        <>
        <h2 className='text-center mt-16 border-b font-black text-4xl'>Our Chefs</h2>
        <div className='md:grid md:grid-cols-3 gap-5 mx-12 mt-24 mb-10'>
        {
           chefs.map(chef => <div key={chef.id} chef={chef}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
            <div>
                <img className="rounded-t-lg h-80 w-full" src={chef.picture_url} alt="" />
            </div>
        <div className="p-5">
            <p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{chef.name}</h5>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold">
            <MdWorkHistory className='text-orange-400 mt-1 me-2' /> Years of experience - {chef.years_of_experience}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold">
            <GiCook className='text-yellow-400 mt-1 me-2' /> Numbers of Recipes -{chef.number_of_recipes}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold ">
            <AiFillLike className='text-blue-600 mt-1 me-2'/>Likes - {chef.likes}
            </p>
            <Link to={`/chef/${chef?.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">
            View Recipes 
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
           </div>)
        }
       



       </div>
       </>
    );
};

export default ChefCard;