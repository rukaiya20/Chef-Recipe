import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import {GrClose } from "react-icons/gr";
import { FaUserCircle } from 'react-icons/fa';
import '../../src/index.css'
import { AuthContext } from '../Provider/AuthProvider';
import { button } from '@material-tailwind/react';


const Navber = () => {
    const { user,logOut,sign} = useContext(AuthContext);
    const [IsOpen,setIsOpen] = useState(false);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className='header'> 
        <div onClick={()=> setIsOpen(!IsOpen)} className='md:hidden'>
            <span>{IsOpen === true ?  <GrClose className="h-6 w-10 bg-gradient-to-r from-gray-300 to-orange-700 to-orange-500" /> : <FiMenu className="h-8 w-24 bg-gradient-to-r from-gray-400 to-orange-400" />}
            </span>
        </div>
             <div className={`md:flex lg:justify-between absolute duration-500 md:static ${IsOpen ? 'top-6' : '-top-48'} sm:ms-5 `}>
             <div className="logo text-yellow-500 font-extrabold text-3xl">
            <p>Spice Journey</p>
            </div> 

        <nav className="navbar mt-1">
    
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </nav>

        {/* <div className="btn mt-1">
            <Link className="login-btn" to="/login">Login</Link>
        </div> */}
        <div className='flex'>
                            {
                                user && <FaUserCircle className='mt-2.5 me-4' style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                    <button className='border px-5 py-3 border-orange-400 rounded-2xl hover:bg-orange-400' onClick={handleLogOut} variant="secondary">
                                        <Link className='text-white text-xl font-semibold'>LogOut</Link>
                                    </button> :
                                   <button className='border px-5 py-3 border-orange-400 rounded-2xl hover:bg-orange-400'>
                                    <Link className='text-white text-xl font-semibold' to="/login">
                                    Login
                                </Link>
                                   </button>
                                
                            }
                        </div>
        </div>
           
        </div>
        
    );
};

export default Navber;