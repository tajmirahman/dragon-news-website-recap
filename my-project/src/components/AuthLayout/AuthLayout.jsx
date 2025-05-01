import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-400'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;