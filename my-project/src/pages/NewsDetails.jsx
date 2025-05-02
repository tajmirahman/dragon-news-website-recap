import React from 'react';
import Header from '../components/Header/Header';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data = useLoaderData();

    if (!data || data.status === false) {
        return <div>No news found for this ID.</div>;
      }

      const news = data?.data?.[0];

if (!news) {
  return <div>News item not found or API error.</div>;
}


    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <h2>{news.title}</h2>
            <p>{news.details}</p>
        </div>
    );
};

export default NewsDetails;