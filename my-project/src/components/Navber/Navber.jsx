import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userProfile from '../../assets/user.png'
import { authContext } from '../AuthProvider/AuthProvider';

const Navber = () => {
    const { handleLogout, user } = useContext(authContext);
    

    return (
        <div className='flex justify-between items-center mt-3 '>

            <div></div>

            <div className='space-x-2 text-xl'>
                <Link to={'/'}>Home</Link>
                <Link to={'/carrer'}>Carrer</Link>
                <Link to={'/about'}>About</Link>
                {
                    user && 
                    <Link to={'/profile'}>Profile</Link>
                    
                }
            </div>

            <div className='flex justify-center items-center gap-1'>
                <div >
                    <img className='w-15 h-15 rounded-full p-1' src={userProfile} alt="" />
                </div>
                <div>
                    {
                        user && user.email ? (
                            <button onClick={handleLogout}  className="btn">Logout</button>
                          ) : (
                            <Link to="/auth/login">
                              <button className="btn btn-neutral">Login</button>
                            </Link>
                          )
                    }
                    {/* <button onClick={handleLogout} className='btn'>Logout</button> */}
                </div>
            </div>

        </div>
    );
};

export default Navber;