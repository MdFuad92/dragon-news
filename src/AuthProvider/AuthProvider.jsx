import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";

export const AuthContext = createContext(null)

const auth = getAuth(app);





const AuthProvider = ({children}) => {

    const createUser = (email,password) =>{
        return  createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
   
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const logOut = () => {
        return signOut(auth)
        setLoading(true)

    }
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser => {
      console.log('hello',currentUser)
       setUser(currentUser)
       setLoading(false)
     });
     return () => {
        unSubscribe()
     }
        },[])

    const authInfo = 
    {user,
    createUser,
    logIn,
    logOut,
    loading

        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;