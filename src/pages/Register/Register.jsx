import React, { useContext } from 'react';
import Navigate from '../../Shared/Navigate/Navigate';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

   const {createUser} = useContext(AuthContext)

 

    const handleRegister = (e) =>  {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const photo = form.get('photo')
        const name = form.get('name')
        const password = form.get('password')
        console.log(email,photo,name,password)
        createUser(email,password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.error(error)
        })

    }
    return (
        <div>
        <Navigate></Navigate>
       <div className="hero min-h-screen bg-base-200">
     
      
      <div className="hero-content flex-col ">
      
        <div className="card py-24 w-[600px] h-[800px] shadow-2xl bg-base-100">
        <div className="text-center lg:text-left mb-7">
          <h1 className="text-4xl font-semibold text-center">Register Your Account</h1>
          
        </div>
    
        <hr className=" w-[400px] mb-5 ml-24  "  />
          <form onSubmit={handleRegister} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-xl">Your Name</span>
              </label>
              <input type="name" name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-xl">Photo Url</span>
              </label>
              <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-xl">Email Address</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  font-medium text-xl">Password</span>
              </label>
              <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral  w-full">Register</button>
            </div>
          </form>
          <p className="text-center">Already have and account <Link className="font-bold text-blue-700" to='/login' >Login</Link> now</p>
        </div>
      </div>
    </div>
   </div>
    );
};

export default Register;