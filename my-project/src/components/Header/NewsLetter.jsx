import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
    return (
        <div className='flex justify-center items-center gap-2 bg-gray-300 p-2 mt-6'>
            <h1 className='bg-red-500 text-white p-1'>Latest</h1>
            <Marquee pauseOnHover speed={50}>
            <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
            <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
            <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
            </Marquee>
        </div>
    );
};

export default NewsLetter;