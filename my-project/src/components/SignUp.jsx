import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';

const SignUp = () => {
    const { handleSignup, userUpdateProfile, user, setUser } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        if (name.length < 4) {
            setError('Name length at least 4 character!')
        }

        if (password != conPassword) {
            setError('Password does not match!')
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

        if (!regex.test(password)) {
            setError('Password should be contained upercase,lowercase and speciall character and at least 6 character!')
        }

        handleSignup(email, password)
            .then((result) => {
      
                const user = result.user;
                setUser(user)
                userUpdateProfile({ displayName: name, photoURL: image, })

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (user) {

            navigate("/")

        }
    }, [navigate, user])



    return (
        <div className="hero bg-gray-400 ">
            <div className="hero-content flex-col">
                <h2 className='text-3xl font-semibold'>Sign Up Form</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleForm} className="card-body">
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

                            <input type="password" name='conPassword' placeholder="confirm password" className="input input-bordered text-center" required />

                        </div>
                        <div>
                            {
                                error && <p className='text-red-400'>{error}</p>
                            }
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