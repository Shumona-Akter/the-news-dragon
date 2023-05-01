import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../src/assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaLinux } from "react-icons/fa";
import { authContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
  const {user} = useContext(authContext)
          return (
            <Container>
              <div className='text-center'>
                  <img src={logo} alt="" />
                  <h1 className='fs-6'>Journalism Without Fear or Favour</h1>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn-danger fs-6'>Lates</Button>
                    <Marquee speed={100}>
                    <h1 className='fs-6 text-danger'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1>
                    </Marquee>
                  </div>
                  <p>{moment().format("dddd, MMMM D YYYY")}</p>
              </div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">
                      <Link to={`/`}>Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action2">Career</Nav.Link>
                  </Nav>
                  <div className="d-flex align-items-center">
                    <h6><FaLinux/></h6>
                    {
                      user?<Button variant="outline-success ms-5">Log out</Button>:<Link to='/login'><Button variant="outline-success ms-5">Log in</Button></Link>
                    }
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </Container> 
          );
}

export default Header;