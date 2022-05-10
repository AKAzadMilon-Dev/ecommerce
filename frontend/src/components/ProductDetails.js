import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
    let params = useParams();
  return (
    <div>
        {/* <h1>{params.slug}</h1> */}
        <Container>
            <Row>
                <Col lg={6}>
                    <h3>Image</h3>
                </Col>
                <Col lg={3}>
                    <h3>details</h3>
                </Col>
                <Col lg={3}>
                    <h3>total price</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetails