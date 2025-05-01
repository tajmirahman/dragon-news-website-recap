import React from 'react';
import { Link } from 'react-router-dom';
import userProfile from '../../assets/user.png'

const Navber = () => {
    return (
        <div className='flex justify-between items-center mt-3'>

            <div></div>

            <div className='space-x-2 text-xl'>
                <Link to={'/'}>Home</Link>
                <Link to={'/carrer'}>Carrer</Link>
                <Link to={'/about'}>About</Link>
            </div>

            <div className='flex justify-center items-center gap-1'>
                <div>
                    <img src={userProfile} alt="" />
                </div>
                <div>
                    <Link to={'/login'}><button className='btn btn-neutral'>Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navber;