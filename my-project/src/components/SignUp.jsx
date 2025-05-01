import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col bg-gray-400 md:w-[700px]  mx-auto">
                <h2 className='text-3xl font-semibold'>Sign Up Form</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form className="card-body">
                        <div className="form-control">
                            
                            <input type="text" name='name' placeholder="your name" className="input input-bordered text-center" required />
                        </div>
                        <div className="form-control">
                          
                            <input type="text" name='photo' placeholder="your photo url" className="input input-bordered text-center" required />
                        </div>
                        <div className="form-control">
                         
                            <input type="email" name='email' placeholder="your email" className="input input-bordered text-center" required />
                        </div>
                        <div className="form-control">
                           
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-center" required />
                            
                        </div>
                        <div className="form-control">
                         
                            <input type="password" name='password' placeholder="confirm password" className="input input-bordered text-center" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <p className='text-center'>if you have an account? please <span className='text-orange-400'><Link to={'/login'}>login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;