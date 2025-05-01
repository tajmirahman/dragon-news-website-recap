import React, { useEffect, useState } from 'react';

const LeftSide = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])


    return (
        <div>
            <h1>All category</h1>
            <div className='flex flex-col gap-2'>
                {
                    category.map(cat => <button className='btn'>{cat.category_name}</button>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;