import React from 'react';
import {Container, Form, Button, Alert} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Signup = () => {
    const {search} = useLocation()
    const redirectUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectUrl? redirectUrl:'/'
  return (
    <Container className='w-25 mt-5 p-3 border'>
        <Alert className='text-center' variant="primary">Sign Up</Alert>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Conform Password</Form.Label>
                <Form.Control type="password" placeholder="Conform Password" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size="md">Sign Up</Button>
            </div>
            <Alert className='text-center ' variant="light">Already have an account? <Link to={`/signin?redirect=${redirect}`}>Sign In</Link> </Alert>
        </Form>
    </Container>
  )
}

export default Signup