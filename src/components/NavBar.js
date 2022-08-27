import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Techlogic.Dashboard</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Productos</Nav.Link>
                <Nav.Link href="#pricing">Usuarios</Nav.Link>
                <Nav.Link href="#pricing">Ventas</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;