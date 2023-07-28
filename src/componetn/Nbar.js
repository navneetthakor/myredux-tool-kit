// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nbar() {
  const cartProduct = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand >
        <Link to="/" as={Link}>Rdux react</Link>
      </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link >
            <Link to="/dashbord" as={Link}>
            Dashbord
            </Link>
          </Nav.Link>
          
          </Nav>

          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text >
              <Link to="/cart" as={Link}>MY bag : {cartProduct.length}</Link>    
            </Navbar.Text>
          </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
