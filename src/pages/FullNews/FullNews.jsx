import React from 'react';
import Rightside from '../../Shared/RightsideNav/Rightside';
import Header from '../../Shared/Header/Header';
import {  useParams } from 'react-router-dom';

const FullNews = () => {
    const {id} = useParams()
    return (
        <div>
         <div className='mb-10'> 
         <Header ></Header>
         </div>

              <div className='grid md:grid-cols-4'>
          
           <div className='col-span-3'>
           <h2 className='font-bold text-xl'>Dragon News</h2>
           <p>{id}</p>
             
           </div>
             <Rightside></Rightside>
        </div>
        </div>
    );
      
      
};

export default FullNews;