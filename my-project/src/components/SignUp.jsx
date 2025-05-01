import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';

const SignUp = () => {


    const name=useContext(authContext);
    console.log(name)

    return (
        <div className="hero bg-gray-400 ">
            <div className="hero-content flex-col">
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
                        <p className='text-center'>if you have an account? please <span className='text-orange-400'><Link to={'/auth/login'}>login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;