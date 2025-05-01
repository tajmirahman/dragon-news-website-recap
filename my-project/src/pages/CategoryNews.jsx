import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data: news}= useLoaderData();
    console.log(news)



    return (
        <div>
            <h1>category news page</h1>

            <div>
                {
                  news.map(data => <NewsCard data={data}></NewsCard>)  
                }
            </div>
        </div>
    );
};

export default CategoryNews;