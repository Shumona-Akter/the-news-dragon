import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagory, setCatagory] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/catagory")
        .then(res => res.json())
        .then(data => setCatagory(data))
        // .catch(err => console.error(err))
    },[])
    return (
        <div>
            <h1>all catagory</h1>
            {
               catagory.map(cata => <p key={cata.id}>
                <Link to={`/catagory/${cata.id}`} >{cata.name}</Link>

               </p>)
            }
        </div>
    );
};

export default LeftNav;