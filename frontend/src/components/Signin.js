import React from 'react';
import {Container, Form, Button, Alert} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Signin = () => {
    const {search} = useLocation()
    const redirectUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectUrl? redirectUrl:'/'
  return (
    <Container className='w-25 mt-5 p-3 border'>
        <Alert className='text-center' variant="primary">Sign In</Alert>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size="md">Sign In</Button>
            </div>
            <Alert className='text-center ' variant="light">Don't have an account? <Link to={`/signup?redirect=${redirect}`}>Create Account</Link> </Alert>
        </Form>
    </Container>
  )
}

export default Signin