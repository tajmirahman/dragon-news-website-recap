import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';

const LeftSide = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])


    return (
        <div>
            <div className='flex flex-col gap-2'>
                {
                    category.map(cat => <NavLink to={`/category/${cat.category_id}`} className='btn'>{cat.category_name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;