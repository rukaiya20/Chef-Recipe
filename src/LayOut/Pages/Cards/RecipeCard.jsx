import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill,BsStar} from 'react-icons/bs';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const RecipeCard = () => {
    const [recipes , setRecipes] = useState([]);
    const disableOnClick = event => event.currentTarget.disabled = true;

    useEffect (() =>{
        fetch('http://localhost:5000/recipe')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error =>console.error(error))
    },[])
    

    return (
        <>
        <h2 className='text-center mt-16 border-b font-black text-4xl'>Our recipes</h2>
        <div className='md:grid md:grid-cols-3 gap-5 mx-12 mt-24 mb-10 '>
        {
           recipes.map(recipe => <div key={recipe.id}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
            <div>
                <img className="rounded-t-lg h-80 w-full" src={recipe.image} alt="" />
            </div>
        <div className="p-5">
            <p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{recipe.name}</h5>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold">ingredients: {recipe.ingredients}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold">
           Cooking Method: {recipe.instructions}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex text-lg font-semibold ">
            <Rating className='text-yellow-500'
                readonly
                placeholderRating={recipe.rating}
                emptySymbol={ <BsStar/>}
                placeholderSymbol={<BsStarFill />}
                fullSymbol={<BsStarFill/>}>
             </Rating>
                {recipe.rating}   
            </p>
            <Link  onClick={disableOnClick} to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">
            Add To Favorite
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <button disabled onClick={disableOnClick} className='bg-green-500 p-5 ' >
                favorite
            </button>
        </div>
    </div>
           </div>)
        }
       



       </div>
       </>
    );
};

export default RecipeCard;