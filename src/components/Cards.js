import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


function BasicExample() {
  return (
    <div className="container col-md-12">
        <br />
      <CardGroup>
        <Card >
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>Productos</Card.Title>
           
            <Button variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
        <br/>
        <br/>
        <br/>

        <Card >
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Categorias</Card.Title>
           
            <Button variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
        <br/>
        <br/>
        <br/>
        <Card>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Usuarios</Card.Title>
            
            <Button variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
        
      </CardGroup>
      <br/>
    </div>
  );
}

export default BasicExample;
