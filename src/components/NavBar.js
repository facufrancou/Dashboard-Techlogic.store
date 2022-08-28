import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Techlogic.store-Dashboard</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to="/products"><Nav.Link href="#products">Productos</Nav.Link></Link>
              <Link to="/sections"><Nav.Link href="#sections">Secciones</Nav.Link></Link>
              <Link to="/collections"><Nav.Link href="#collections">Colecciones</Nav.Link></Link>
              <Link to="/brands"><Nav.Link href="#brands">Marcas</Nav.Link></Link>
              <Link to="/users"><Nav.Link href="#users">Usuarios</Nav.Link></Link>   
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;