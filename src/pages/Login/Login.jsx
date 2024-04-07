import {  Link } from "react-router-dom";
import Navigate from "../../Shared/Navigate/Navigate";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {logIn} = useContext(AuthContext)

    const {user} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) =>  {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        logIn(email,password)
        .then((result)=>{
         console.log(result.user)

         {
              navigate(location?.state? location.state : '/' )
         }
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
           
             <div className="card py-24 w-[600px] h-[600px] shadow-2xl bg-base-100">
             <div className="text-center lg:text-left mb-7">
               <h1 className="text-4xl font-semibold text-center">Login Your Account</h1>
               
             </div>
         
             <hr className=" w-[400px] mb-5 ml-24  "  />
               <form onSubmit={handleLogin} className="card-body">
                 
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
                   <button className="btn btn-neutral  w-full">Login</button>
                 </div>
               </form>
             
               <p className="text-center">Do not have an account <Link className="font-bold text-blue-700" to='/register' >Register</Link> now</p>
             </div>
           </div>
         </div>
        </div>
        
    );
};

export default Login;