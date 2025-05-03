import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import swimming from '../../assets/swimming.png';
import playGround from '../../assets/playground.png';
import claSs from '../../assets/class.png';


const RightSide = () => {
    return (
        <>
            <div>
                <div >
                    <h2 className='font-semibold'>Login With</h2>
                    <div className='flex flex-col gap-2  mt-2'>
                        <button className='btn'><FaGoogle />Login With Google</button>
                        <button className='btn'><FaGithub />Login With Github</button>
                    </div>
                </div>

                <div className='mt-2'>
                    <h2 className='font-semibold'>Find Us On</h2>
                    <div>
                        <div className="join join-vertical w-full *:bg-base-100 gap-1 mt-2">
                            <button className="btn join-item justify-start"><FaFacebook /> facebook </button>

                            <button className="btn join-item justify-start"><BsInstagram /> instagram</button>

                            <button className="btn join-item justify-start"><BsTwitter /> twitter</button>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200 p-2 mt-2'>
                    <h2 className='font-semibold'>Q-Zone</h2>
                    <div className='flex flex-col justify-center items-center mt-2'>
                        <img src={swimming} alt="" />
                        <img src={playGround} alt="" />
                        <img src={claSs} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSide;