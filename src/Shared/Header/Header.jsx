import React from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <h5 className='font-nomral text-gray-400'>Journalism Without Fear or Favour</h5>
            <p>{moment().format( "ddd,MMM D,YYYY")}</p>
        </div>
    );
};

export default Header;