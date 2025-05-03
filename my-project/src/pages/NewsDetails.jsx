import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import RightSide from '../components/component-layout/RightSide';
import { authContext } from '../components/AuthProvider/AuthProvider';


const NewsDetails = () => {

    const {loading}=useContext(authContext);

    const data = useLoaderData();

    const news = data.data[0];

    if(loading){
        return <h1>Loading...</h1>
    }

   

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <div className=' w-11/12 mx-auto grid md:grid-cols-12 gap-3 mt-6'>
                <section className='col-span-9'>
                    <div className='flex flex-col items-center space-y-3'>
                        <figure className='md:w-[800px] md:h-full'>
                        <img className='md:w-[800px] md:h-full ' src={news?.image_url} alt="" />
                        </figure>
                        <h1 className='text-xl font-bold'>{news?.title}</h1>
                        <p>{news?.details}</p>
                        <Link to={'/'}><button className='btn btn-primary'>Back To Category</button></Link>
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