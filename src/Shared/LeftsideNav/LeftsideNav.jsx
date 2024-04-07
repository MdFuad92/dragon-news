import React from 'react';

const LeftsideNav = ({c}) => {
    const {name,id} = c
    return (
        <div>
          
            <ul className=' '>
                <li className='text-lg font-medium hover:bg-gray-200 hover:rounded-xl hover:h-10 w-52 hover:p-2 text-gray-400 hover:text-black '>{name}</li>
            </ul>

        </div>
    );
};

export default LeftsideNav;<h2>Leftside</h2>