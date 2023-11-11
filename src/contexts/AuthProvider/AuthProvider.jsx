import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut = () =>{
        return signOut(auth);

    }
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
setUser(currentUser);
    })
    return () => unsubscribe();
},[])


    const authInfo = {user,loading,createUser,signIn,LogOut};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
