
import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Routing project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/reducer">Use Reducer</Nav.Link>
            <Nav.Link as={Link} to="/ref">Use Ref</Nav.Link>
            {/* <Nav.Link as={Link} to ="/service">Service</Nav.Link>
        <Nav.Link as={Link} to ='/all-posts'>All Posts</Nav.Link>  */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header