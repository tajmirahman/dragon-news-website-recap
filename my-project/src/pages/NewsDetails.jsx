import React from 'react';
import Header from '../components/Header/Header';
import { Link, useLoaderData } from 'react-router-dom';


const NewsDetails = () => {

    const data=useLoaderData();

    const news=data.data[0];




  

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <div>
                <img src={news.image_url} alt="" />
                <h1>{news.title}</h1>
                <p>{news.details}</p>
                <Link to={'/'}><button className='btn'>Back To Category</button></Link>
            </div>

        </div>
    );
};

export default NewsDetails;