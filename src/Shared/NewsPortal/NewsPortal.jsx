import React from 'react';
import share from '../../../src/assets/Frame.png'
import save from '../../../src/assets/Frame (1).png'
import { Link } from 'react-router-dom';

const NewsPortal = ({n}) => {
    const {title,total_view,thumbnail_url,image_url,details,category_id,rating,author} = n
    return (
        <div className=' border  space-y-6'>
        <div className=' flex justify-between items-center bg-gray-100'>
       <div className='flex gap-4'>
       <img className='w-14 rounded-full  ' src={author.img} alt="" />
       <div>
       <h3 className='font-semibold'>{author.name}</h3>
       <h5 className='text-gray-400'>{author.published_date}</h5>
       </div>
        
       </div>
   <div className='flex mr-6 gap-3'>
   <img className='w-7 h-7 ' src={share} alt="" />
       <img className='w-7 h-7 ' src={save} alt="" />
   </div>

        </div>
          <h2 className='text-xl font-bold'>{title}</h2>
          <img src={image_url} alt="" />
          {
          details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/fullnews/${category_id}`}><button className='btn'>Read More</button></Link> </p> :
          <p>{details}</p> 
         
          }
        </div>
    );
};

export default NewsPortal;