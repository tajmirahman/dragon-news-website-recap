
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleProvider=new GoogleAuthProvider();

    const handleSignup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const handleLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const handleGoogelLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const userUpdateProfile=(updateData)=>{
        return updateProfile(auth.currentUser, updateData);
    }

    const handleLogout=()=>{
        return signOut(auth)
    }


    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
         
        setUser(currentUser)

            setLoading(false)
        })

        return ()=>{
            unsubscribe();
        }
    },[user])

    console.log(user);

    const info={
        handleSignup,
        handleLogin,
        handleLogout,
        handleGoogelLogin,
        user,
        setUser,
        userUpdateProfile,
        loading
    }

    return (
        <div>
            <authContext.Provider value={info}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;