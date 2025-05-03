import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';

const Login = () => {

    const {handleLogin,setUser }=useContext(authContext);
    const [error, setError]=useState('');
    const location= useLocation();
    const navigate=useNavigate();

    // console.log(location)
 

    const handleForm=(e)=>{
       
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;

        handleLogin(email,password)
        .then((res)=>{
            setUser(res.user);
           navigate(location?.state ? location?.state : '/')
        })
        .catch(err=>setError(err.message))
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col bg-gray-400 ">
                <h2 className='text-3xl font-semibold'>Login Form</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2x mb-10">

                    <form onSubmit={handleForm} className="card-body ">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {
                                error && <p className='text-red-500'>{error.split('/')[1].slice(0,18)}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <p className='text-center'>if you are not registered? please <span className='text-orange-400'><Link to={'/auth/register'}>register</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;