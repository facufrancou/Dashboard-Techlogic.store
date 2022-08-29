import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function Collections() {

    let [listCollections, setListCollections] = useState([]);
    let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/collections')
            .then(response => response.json())
            .then(data => setListCollections(data.collections))
            .catch(e => console.log(e))
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setListProducts(data.productsByCollection))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-12">
            <br />
            <CardGroup>

                {listCollections.map((collection, i) => {

                    {if(listProducts[collection.collectionName]){
                        return(
                            <Card key={i}>
                                <Card.Body>
                                <Card.Title>{collection.collectionName}</Card.Title>
                                    <Card.Text>Total: {listProducts[collection.collectionName]}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    } else {
                        return(
                            <Card key={i}>
                                <Card.Body>
                                <Card.Title>{collection.collectionName}</Card.Title>
                                    <Card.Text>Total: 0</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }}
                })}

            </CardGroup>
            <br />
        </div>
    )
}

export default Collections;