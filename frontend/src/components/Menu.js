import React from 'react';
import { Link } from "react-router-dom";
import {Container, Navbar, Nav} from 'react-bootstrap';

const Menu = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand>Team Project</Navbar.Brand>
            <Nav className="ms-auto menu">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Menu