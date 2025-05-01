import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col bg-gray-400 md:w-[700px] md:h-[400px] mx-auto ">
                <h2 className='text-3xl font-semibold'>Login Form</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2x">

                    <form className="card-body">
                        
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