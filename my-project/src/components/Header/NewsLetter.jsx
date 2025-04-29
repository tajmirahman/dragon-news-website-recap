import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <h1>Latest</h1>
            <Marquee>
            <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam quibusdam perspiciatis impedit alias nostrum ullam obcaecati et excepturi sapiente.</Link>
            </Marquee>
        </div>
    );
};

export default NewsLetter;