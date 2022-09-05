import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

function Product() {

    let { id } = useParams();

    let [ product, setProduct ] = useState(0);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.product))
            .catch(e => console.log(e))
    }, [])

    return (
<div className="container col-md-12">
        <br />
        <CardGroup>
            <div className="products">
                
                        
                        <Card className="container col-md-4" >
                            <div id='img-product'>
                                <Card.Img variant="top" src={"/img/products/" + product.image} /> 
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center'>{product.name}</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>ID: {product.id}</ListGroup.Item>
                                    <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
                                    <ListGroup.Item>Descuento: {product.discount} %</ListGroup.Item>
                                    <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
                                    <ListGroup.Item>Sección: {product.section}</ListGroup.Item>
                                    <ListGroup.Item>Colección: {product.collection}</ListGroup.Item>
                                    <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
                                </ListGroup>
                                <Link to={{
                                    pathname:`/products/edit/${product.id}`,
                                }}><Button variant="primary">Editar producto</Button></Link>
                            </Card.Body>
                        </Card>
                           
            </div>
        </CardGroup>
        <br/>
        <br />
        </div>
    )
}
export default Product