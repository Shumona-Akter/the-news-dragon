import React, { useContext, useState } from 'react';
import { Button, Form  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(authContext)
  const [errPasss,setErrPss] = useState('')
  const handleResister = event =>{
    event.preventDefault()

    const form = event.target
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    const confiramPassword = form.confiramPassword.value;

    createUser(email,password)
    .then(result=>{
      const createUser = result.user
    })
    .catch(err => console.log(err))
  }
    return (
        <div>
                <Form onSubmit={handleResister}>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" name='name' placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>img</Form.Label>
        <Form.Control type='text' name='img' placeholder="img" />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confiram Password</Form.Label>
        <Form.Control type="password" name='confiramPassword' placeholder="Confiram Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acept terms and condition" />
      </Form.Group>
      <Button variant="primary" type="submit">
        resister
      </Button>
      <Link to="/login" className='d-block'>login</Link>
    </Form>
        </div>
    );
};

export default Register;