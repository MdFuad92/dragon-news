
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)

    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to = '/login' ></Navigate>
};

export default PrivateRoute;