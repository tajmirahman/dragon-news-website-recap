import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import NewsLetter from './Header/NewsLetter';
import Navber from './Navber/Navber';


const MainLayOut = () => {
    return (
        <div className='w-11/12 mx-auto py-3'>
            {/* Header section Start  */}
            <Header></Header>
            {/* Header section end  */}
            
            {/* News letter section start */}
            <NewsLetter></NewsLetter>
            {/* News letter section end */}

            {/* Navber section start  */}
            <Navber></Navber>
            {/* Navber section end  */}

            <main className='grid md:grid-cols-12 '>
                <aside className='col-span-3'>left side</aside>
                <section className='col-span-6'>main content</section>
                <aside className='col-span-3'>right side</aside>
            </main>

        </div>
    );
};

export default MainLayOut;