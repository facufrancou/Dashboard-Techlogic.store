import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import '../assets/styles.css'

function Brands() {

  let [listBrands, setListBrands] = useState([]);
  let [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        fetch('/api/brands')
          .then(response => response.json())
          .then(data => setListBrands(data.brands))
          .catch(e => console.log(e))
        fetch('/api/products')
          .then(response => response.json())
          .then(data => setListProducts(data.productsByBrand))
          .catch(e => console.log(e))
    }, [])

    return (
        <div className="container col-md-12">
            <br />
            <CardGroup>

              <div className='brands'>

              {listBrands.map((brand, i) => {

                {if(listProducts[brand.brandName]){
                    return(
                        <Card key={i}>
                            <Card.Body>
                            <Card.Title>{brand.brandName}</Card.Title>
                                <Card.Text>Total: {listProducts[brand.brandName]}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                } else {
                    return(
                        <Card key={i}>
                            <Card.Body>
                            <Card.Title>{brand.brandName}</Card.Title>
                                <Card.Text>Total: 0</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }}
                })}

              </div>

            </CardGroup>
            <br />
        </div>
    )
}

export default Brands;