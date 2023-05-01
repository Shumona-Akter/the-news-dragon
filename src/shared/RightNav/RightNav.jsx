import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const RightNav = () => {
    return (
        <div>
            <div>
            <h1 className='fs-3'>Log in width</h1>
             <Button variant="outline-primary w-100"><FaGoogle></FaGoogle> Log in with goole</Button>
            <Button variant="outline-secondary w-100 mt-2"><FaFacebookF> </FaFacebookF>log in width facebook</Button>
        </div>
        <div>
            <h1 className='fs-3'>Log in width</h1>
             <Button variant="outline-primary w-100"><FaGoogle></FaGoogle> Log in with goole</Button>
            <Button variant="outline-secondary w-100 mt-2"><FaFacebookF> </FaFacebookF>log in width facebook</Button>
        </div>
        </div>
    );
};

export default RightNav;