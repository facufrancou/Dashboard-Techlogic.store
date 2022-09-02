import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image1 from "../assets/logoTL.svg";
import { useEffect, useState } from "react";

function BasicExample() {


  
  return (
    <div className='container col-md-2 form-login'>
      <div className='img-login'>
        <img src={image1} alt="Logo Techlogic.store"/>
      </div>
      <Form>

        <br/>
        <br/>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  >Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Ingresá tu email" />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control name='password' type="password" placeholder="Ingresá tu contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="No cerrar sesión" />
        </Form.Group>
        <Button href='/home' variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;