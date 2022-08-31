import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';

import '../assets/styles.css'

function Products() {

    let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setListProducts(data.products))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-12">
        <br />
        <CardGroup>
            <div className="products">
                {listProducts.map((product, i) => {
                    console.log(product.image)
                    return (
                        <Card className="container col-md-4" key={i}>
                            <Card.Img variant="top" src={"/img/products/" + product.image} /> 
                            <Card.Body>
                                <Card.Title className='text-center'>{product.name}</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>ID: {product.id}</ListGroup.Item>
                                    <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
                                    <ListGroup.Item>Descuento: {product.discount} %</ListGroup.Item>
                                    <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
                                    <ListGroup.Item>Sección: {product.section[0]}</ListGroup.Item>
                                    <ListGroup.Item>Colección: {product.collection[0]}</ListGroup.Item>
                                    <ListGroup.Item>Marca: {product.brand[0]}</ListGroup.Item>
                                </ListGroup>
                                <Button variant="primary">Ver detalle</Button>
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

export default Products;
