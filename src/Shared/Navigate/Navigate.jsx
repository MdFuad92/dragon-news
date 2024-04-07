import {  NavLink } from 'react-router-dom';
import profile from '../../../src/assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navigate = () => {
 const {user} = useContext(AuthContext)
 const {logOut} = useContext(AuthContext)

 const handlelogOut = () =>  {
  logOut()
  .then()
  .catch()
 }
    const Link = <>
    <li> <NavLink to="/" >Home</NavLink> </li>
    <li> <NavLink to="/about" >About</NavLink></li>
    <li> <NavLink to="/career" >Career</NavLink></li>
    <li> <NavLink to="/login" >Login</NavLink></li>
    <li> <NavLink to="/register" >Register</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {Link}
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  
      
      {Link}
    </ul>
  </div>
 

  <div className="navbar-end">
  <div className="w-10 mr-5 rounded-full">
          <img  alt="Tailwind CSS Navbar component" src={profile} />
        </div>
   {
    user ?
    <button onClick={handlelogOut} className='btn'>SignOut</button>:
    <NavLink  to='/login'><button className='btn '>Login</button></NavLink>
   }
  </div>
</div>
    );
};

export default Navigate;