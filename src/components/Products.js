import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
                    return (
                        <Card className="container col-md-4" key={i}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    <p>ID: {product.id}</p>
                                    <p>Precio: $ {product.price}</p>
                                    <p>Descuento: {product.discount} %</p>
                                    <p>Descripción: {product.description}</p>
                                    <p>Sección: {product.section[0]}</p>
                                    <p>Colección: {product.collection[0]}</p>
                                    <p>Marca: {product.brand[0]}</p>
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </CardGroup>
        <br />
        </div>
    );
}

export default Products;
