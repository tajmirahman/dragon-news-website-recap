import React from 'react';
import Header from '../components/Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import RightSide from '../components/component-layout/RightSide';


const NewsDetails = () => {

    const data = useLoaderData();

    const news = data.data[0];






    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <div className=' w-11/12 mx-auto grid md:grid-cols-12 gap-3'>
                <section className='col-span-9'>
                    <div className='text-center space-y-2'>
                        <img className='w-[1000px] h-full' src={news?.image_url} alt="" />
                        <h1 className='text-xl font-bold'>{news?.title}</h1>
                        <p>{news?.details}</p>
                        <Link to={'/'}><button className='btn btn-primary mt-2'>Back To Category</button></Link>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </div>

        </div>
    );
};

export default NewsDetails;