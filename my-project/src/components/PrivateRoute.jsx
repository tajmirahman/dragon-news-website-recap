import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user}=useContext(authContext)
    const location=useLocation();
  

    if(user && user?.email){
        return children
    }

    return (
        <div>
            <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;