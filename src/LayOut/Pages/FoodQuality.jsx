import React from 'react';
import backgroundContent from '../../assets/backgroundContent.png'

const FoodQuality = () => {
    return (
        <div>
            <h1 className='text-center mt-16  font-black text-4xl pb-4'>OUR FOOD QUALITY</h1>
             <div className="quality">
        <div className="main-quality">
            
            <div className="main-inner-quality flex">
               <div className='my-auto border rounded border-black-800 p-4 border-4'>
                <h1 className='text-4xl font-black'>Our Food Quality</h1>
                 <p className='text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus unde iste alias corporis mollitia sequi laudantium natus dolor! Reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 </p>
               </div>
               <div>
                 <img className='foodQuality' src={backgroundContent} alt="" />
               </div>
            
            </div>
        </div>
    </div>
        </div>
    );
};

export default FoodQuality;