import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark,FaEye,FaRegStar,FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';

const CatagoryNews = ({news}) => {
    const {_id, img,image_url,details,title,author,thumbnail_url,total_view,rating
    } = news
    return (
        <div>
             <Card className="mb-3">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div>
          <div className='d-flex'>
            <h6>{author?.name}</h6>
            <Image style={{height:'30px', marginLeft:'10px'}} src={author?.img} roundedCircle />
          </div>
          <p>{moment(author?.published_date).format("YYYY-MM-DD")}</p>
        </div>
        <div className='flex-grow'>
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
        {details.length >= 250 ? <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} variant="primary">read more</Link></>
        : <>{details}</>}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>
          <Rating
          readonly
           placeholderRating={rating?.number}
           emptySymbol={<FaRegStar></FaRegStar>}
           placeholderSymbol={<FaStar></FaStar>}
           fullSymbol={<FaStar></FaStar>}
          />{rating?.number}
        </div>
        <div>
          <p><FaEye></FaEye>{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default CatagoryNews;