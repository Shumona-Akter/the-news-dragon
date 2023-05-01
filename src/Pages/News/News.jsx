import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const News = () => {
    // const newsCatagory = useLoaderData()
    const {id} = useParams()
    const news =useLoaderData()
    const {_id,category_id,
        img,image_url,details,title,author,thumbnail_url,total_view,rating
    } =  news
    return (
        <div>
             <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
            <Card.Body>
          <Card.Text>
           {details}
          </Card.Text>
          <Link to={`/catagory/${category_id
}`}><Button variant="primary">All news in this category</Button></Link>
        </Card.Body>
        </div>
         
    );
};

export default News;