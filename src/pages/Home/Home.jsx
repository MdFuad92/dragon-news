import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftsideNav from '../../Shared/LeftsideNav/LeftsideNav';
import Rightside from '../../Shared/RightsideNav/Rightside';
import BreakingNews from '../../Shared/BreakingNews/BreakingNews';
import Marquee from "react-fast-marquee";
import NewsPortal from '../../Shared/NewsPortal/NewsPortal';

const Home = () => {
 const [news,setNews] = useState([])
 const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data=> setNews(data) )
    })

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data=> setCategories(data) )
    })
    return (
        <div className='mx-auto'>
            <Header></Header>
         <div className=' '>
         <button className='btn rounded-none w-24 bg-pink-700 text-white text-xl font-medium relative top-[52px]  z-20 '>Latest</button>
           <Marquee className='border bg-gray-200 h-14 ' pauseOnHover={true} speed={80}>
           <BreakingNews></BreakingNews>
           </Marquee>
         </div>
         
            <Navbar></Navbar>
            

           <div className='grid grid-cols-1 md:grid-cols-4 gap-6 '>
           <div className='border p-6 space-y-10 '>
            <h2 className='font-bold text-2xl'>All Category </h2>
                {
                    categories.map(c => <LeftsideNav c={c} key={c.id}></LeftsideNav>)
                }
            </div >
            <div className=' border lg:col-span-2'>
                <h2>News Coming sooon.....{news.title}</h2>
                {
                    news.map(n => <NewsPortal n={n} key={n.category_id}></NewsPortal>)
                }
            </div>
            <div className=''>
                <Rightside></Rightside>
            </div>
           </div>
        </div>
    );
};

export default Home;