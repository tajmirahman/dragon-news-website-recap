import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className=' bg-gray-400'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;