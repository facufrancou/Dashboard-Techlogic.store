import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function Sections() {

    let [listSections, setListSections] = useState([]);
    let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/sections')
            .then(response => response.json())
            .then(data => setListSections(data.sections))
            .catch(e => console.log(e))
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setListProducts(data.productsBySection))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-12">
            <br />
            <CardGroup>

                {listSections.map((section, i) => {

                    {if(listProducts[section.sectionName]){
                        return(
                            <Card key={i}>
                                <Card.Body>
                                <Card.Title>{section.sectionName}</Card.Title>
                                    <Card.Text>Total: {listProducts[section.sectionName]}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    } else {
                        return(
                            <Card key={i}>
                                <Card.Body>
                                <Card.Title>{section.sectionName}</Card.Title>
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

export default Sections;