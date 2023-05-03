import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ChefProfile = () => {
    const id = useParams();
    const chefProfile =useLoaderData();
    return (
        <div>
            {
                
             }
        </div>
    );
};

export default ChefProfile;