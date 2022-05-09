import React, { useEffect, useState, useReducer } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs';

function reducer(state, action) {
    switch (action.type) {
      case 'FECTH_REQUEST':
        return {...state,loading:true};
      case 'FETCH_SUCCESS':
        return {...state,loading:false,product:action.payload};
      case 'FETCH_FAIL':
        return {...state,loading:false,error:action.payload};
      default:
        return state
    }
}

const ProductPage = () => {
    const [{loading, product, error}, dispatch] = useReducer(reducer,{
        loading:false,
        product:[],
        error:""
    });

    useEffect( ()=>{
        const getData = async()=>{
            dispatch({type:'FECTH_REQUEST'})
            try{
                const product = await axios.get("http://localhost:8000/products")
                dispatch({type:'FETCH_SUCCESS', payload:product.data})
            }catch{
                dispatch({type:'FETCH_FAIL',payload:error.message})
            }
        }
        getData()
    },[])

  return (
    <div>
        <Container style={{marginTop:"30px"}}>
            <Row>
                {
                    loading?
                    <div className='loading'>
                        <Spinner animation="grow" variant="warning" />
                    </div>
                    :
                    product.map(item=>(
                        <Col lg={3} style={{marginBottom:"20px"}}>
                            <Card >
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/products/${item.slug}`}>{item.name}</Link>
                                    </Card.Title>
                                    <div className='ratingIcon'>
                                        {item.rating >= 1 ? <BsStarFill className='staricon'/>:item.rating >= .5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                                        {item.rating >= 2 ? <BsStarFill className='staricon'/>:item.rating >= 1.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                                        {item.rating >= 3 ? <BsStarFill className='staricon'/>:item.rating >= 2.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                                        {item.rating >= 4 ? <BsStarFill className='staricon'/>:item.rating >= 3.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                                        {item.rating >= 5 ? <BsStarFill className='staricon'/>:item.rating >= 4.5 ? <BsStarHalf className='staricon'/>:<BsStar className='staricon'/>}
                                    </div>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Card.Text>$ {item.price}</Card.Text>
                                    <Button variant="primary">Add To Card</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}

export default ProductPage