import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CatagoryNews from './CatagoryNews';

const Catagory = () => {
    const {id} = useParams()
    const catagoryNews = useLoaderData()
    console.log(id)
    return (
        <div>
           {
            id &&  <h1>{catagoryNews.length}</h1>
           }
            {
                catagoryNews.map(news => <CatagoryNews key={news._id} news={news}></CatagoryNews>)
            }
        </div>
    );
};

export default Catagory;