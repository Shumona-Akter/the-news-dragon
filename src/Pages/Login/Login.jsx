import React, { useContext } from 'react';
import { Button, Form  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const {loginUser,setUser, user} = useContext(authContext)

  const  handleLogIn = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then(result=>{
      const createUser = result.user
      setUser(createUser)
    })
    .catch(err => console.log(err))
  }
    return (
        <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Link to="/register" className='d-block'>register</Link>
    </Form>
    );
};

export default Login;