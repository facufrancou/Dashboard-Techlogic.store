import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

import '../assets/styles.css'

function Products() {
    let [isLoad, setLoad] = useState(true);
    let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then((data) => {
                setListProducts(data.products)
                setLoad(false)
            })
            .catch(e => console.log(e))
    }, [])



    if (isLoad){
        return (
            <div className="container col-md-1">
                   <br/>
                   <br/>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          );
    }else{
    return (
        <div className="container col-md-12">
        <br />
        <CardGroup>
            <div className="products">
                {listProducts.map((product, i) => {
                    console.log(product.image)
                    return (
                        
                        <Card className="container col-md-4" key={i} >
                            <div id='img-product'>
                                <Card.Img variant="top" src={"/img/products/" + product.image} /> 
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center'>{product.name}</Card.Title>
                                <ListGroup className="list-group-flush">
                                  
                                    <ListGroup.Item>Marca: {product.brand[0]}</ListGroup.Item>
                                    <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
                                    <ListGroup.Item>Descuento: {product.discount} %</ListGroup.Item>
                                    <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
                                   
                                </ListGroup>
                                <Link to={{
                                    pathname: `/products/${product.id}`,
                                }}><Button variant="primary">Ver detalle</Button></Link>
                            </Card.Body>
                        </Card>
                    );
                })}
                
            </div>
        </CardGroup>
        <br/>
        <br />
        </div>
    );
}
}
export default Products;
